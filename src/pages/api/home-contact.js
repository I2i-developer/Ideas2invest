import nodemailer from "nodemailer";
import leadProtectionModule from "@/utils/leadProtection";

const {
  buildLeadEmailHtml,
  buildThankYouEmailHtml,
  getLeadSubject,
  logLeadDecision,
  processLeadSubmission,
  verifyTurnstile,
} = leadProtectionModule;

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

async function notifySpamIfConfigured(transporter, result, timestamp) {
  if (!process.env.SPAM_LEADS_EMAIL) return;

  await transporter.sendMail({
    from: `"Ideas2Invest Leads" <${process.env.EMAIL_USER}>`,
    to: process.env.SPAM_LEADS_EMAIL,
    subject: getLeadSubject(result.lead, result.analysis),
    html: buildLeadEmailHtml({
      lead: result.lead,
      analysis: result.analysis,
      timestamp,
      ip: result.ipHash,
      userAgent: result.userAgent,
    }),
  });
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const result = processLeadSubmission({
      input: req.body,
      req,
      source: "site-contact-section",
    });

    if (result.validationErrors.length) {
      logLeadDecision(result);
      return res.status(400).json({
        error: "We could not submit this request. Please check your details and try again.",
      });
    }

    const turnstile = await verifyTurnstile(result.lead.turnstileToken, result.ip);
    if (!turnstile.ok) {
      result.analysis.category = "spam";
      result.analysis.spamSignals.push(turnstile.reason);
    }

    const istTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    if (result.analysis.category === "spam") {
      try {
        if (process.env.SPAM_LEADS_EMAIL) {
          const transporter = createTransporter();
          await notifySpamIfConfigured(transporter, result, istTime);
        }
        logLeadDecision(result, { captcha: turnstile.reason });
      } catch (error) {
        console.error("Spam lead notification failed:", error);
      }

      return res.status(200).json({
        success: "Thanks, your enquiry has been received.",
      });
    }

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScS2R7SmGpPXp0u8x3Zl2Qu6Y5NN_FtqlH9tcHM_O6wnWLUaA/formResponse";

    const formData = new URLSearchParams();
    formData.append("entry.340352112", result.lead.name);
    formData.append("entry.1440604067", result.lead.phone);
    formData.append("entry.2121349494", result.lead.email);
    formData.append("entry.1806514779", result.lead.message);

    await fetch(formUrl, {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"Ideas2Invest" <${process.env.EMAIL_USER}>`,
      to: result.lead.email,
      subject: "We have received your message - Ideas2Invest",
      html: buildThankYouEmailHtml(result.lead.name),
    });

    await transporter.sendMail({
      from: `"Ideas2Invest Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: getLeadSubject(result.lead, result.analysis),
      html: buildLeadEmailHtml({
        lead: result.lead,
        analysis: result.analysis,
        timestamp: istTime,
        ip: result.ip,
        userAgent: result.userAgent,
      }),
    });

    logLeadDecision(result, { captcha: turnstile.reason });

    return res.status(200).json({
      success: "Thanks, your enquiry has been received.",
    });
  } catch (error) {
    console.error("Contact form request failed:", error);
    return res.status(500).json({
      error: "We could not submit this request. Please try again.",
    });
  }
}

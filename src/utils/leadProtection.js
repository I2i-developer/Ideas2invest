const crypto = require("crypto");

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_DAY_MS = 24 * 60 * 60 * 1000;
const MIN_SUBMIT_TIME_MS = 3000;

const ipSubmissionTimes = new Map();
const identitySubmissionTimes = new Map();

const SERVICE_INTERESTS = [
  "Mutual Funds",
  "SIP / SWP Planning",
  "PMS / AIF",
  "GIFT City / Dollar Investment",
  "Insurance",
  "KYC / Onboarding",
  "Tax / Investment Planning",
  "NRI Services",
  "General Enquiry",
];

const FINANCE_TERMS = [
  "mutual fund",
  "mutual funds",
  "sip",
  "swp",
  "elss",
  "pms",
  "aif",
  "gift city",
  "insurance",
  "term insurance",
  "health insurance",
  "portfolio",
  "investment",
  "invest",
  "wealth",
  "financial planning",
  "tax planning",
  "nri",
  "kyc",
  "onboarding",
  "pan",
  "retirement",
  "goal",
  "fd",
  "corporate fd",
];

const DEFAULT_SPAM_KEYWORDS = [
  "casino",
  "betting",
  "gambling",
  "poker",
  "adult",
  "xxx",
  "porn",
  "escort",
  "viagra",
  "cialis",
  "payday loan",
  "loan offer",
  "crypto scam",
  "forex signals",
  "binary options",
  "guest post",
  "backlink",
  "link insertion",
  "domain authority",
  "seo services",
  "rank your website",
  "web design services",
  "app development services",
  "bulk email",
  "whatsapp marketing",
  "telegram channel",
  "cheap traffic",
];

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "yopmail.com",
  "throwawaymail.com",
  "getnada.com",
  "sharklasers.com",
]);

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeText(value = "", maxLength = 1000) {
  return String(value || "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function normalizeEmail(value) {
  return normalizeText(value, 254).toLowerCase();
}

function normalizePhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits.slice(0, 15);
}

function sanitizeSubjectPart(value, fallback = "General Enquiry") {
  const safe = normalizeText(value, 80).replace(/[\r\n]/g, " ");
  return safe || fallback;
}

function getSpamKeywords() {
  const configured = process.env.LEAD_SPAM_KEYWORDS;
  if (!configured) return DEFAULT_SPAM_KEYWORDS;
  return configured
    .split(",")
    .map((term) => normalizeText(term, 80).toLowerCase())
    .filter(Boolean);
}

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  const ip =
    (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor)
      ?.split(",")[0]
      ?.trim() ||
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.socket?.remoteAddress ||
    "unknown";
  return Array.isArray(ip) ? ip[0] : ip;
}

function hashValue(value) {
  return crypto
    .createHash("sha256")
    .update(`${process.env.LEAD_LOG_SALT || "ideas2invest-lead-log"}:${value || ""}`)
    .digest("hex")
    .slice(0, 16);
}

function pruneMap(map, now, maxAge) {
  for (const [key, timestamps] of map.entries()) {
    const recent = timestamps.filter((time) => now - time < maxAge);
    if (recent.length) map.set(key, recent);
    else map.delete(key);
  }
}

function checkRateLimit({ ip, email, phone, now = Date.now() }) {
  pruneMap(ipSubmissionTimes, now, RATE_LIMIT_WINDOW_MS);
  pruneMap(identitySubmissionTimes, now, RATE_LIMIT_DAY_MS);

  const ipKey = hashValue(ip);
  const identityKey = hashValue(`${email || ""}:${phone || ""}`);
  const ipEvents = ipSubmissionTimes.get(ipKey) || [];
  const identityEvents = identitySubmissionTimes.get(identityKey) || [];
  const reasons = [];

  if (ipEvents.length >= 3) reasons.push("Rate limit exceeded for this network.");
  if ((email || phone) && identityEvents.length >= 5) {
    reasons.push("Daily rate limit exceeded for this contact detail.");
  }

  ipSubmissionTimes.set(ipKey, [...ipEvents, now]);
  if (email || phone) identitySubmissionTimes.set(identityKey, [...identityEvents, now]);

  return {
    limited: reasons.length > 0,
    reasons,
  };
}

function resetLeadProtectionState() {
  ipSubmissionTimes.clear();
  identitySubmissionTimes.clear();
}

function countLinks(text) {
  return (text.match(/https?:\/\/|www\.|[a-z0-9-]+\.(?:com|net|org|info|xyz|top|ru|cn)\b/gi) || [])
    .length;
}

function hasHtmlOrScript(text) {
  return /<\s*\/?\s*(script|iframe|img|a|html|body|style|svg|meta|link)\b/i.test(text);
}

function isProbablyGibberish(text) {
  const compact = text.replace(/[^a-z]/gi, "");
  if (compact.length < 12) return false;
  const vowelCount = (compact.match(/[aeiou]/gi) || []).length;
  const vowelRatio = vowelCount / compact.length;
  const repeatedPair = /([a-z]{2})\1{3,}/i.test(compact);
  return vowelRatio < 0.18 || repeatedPair;
}

function validateLead(lead) {
  const errors = [];
  const emailDomain = lead.email.split("@")[1] || "";

  if (!lead.name || lead.name.length < 2) errors.push("Name is required.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(lead.email)) {
    errors.push("Valid email is required.");
  }
  if (DISPOSABLE_DOMAINS.has(emailDomain)) {
    errors.push("Disposable email addresses are not accepted.");
  }
  if (!/^[6-9]\d{9}$/.test(lead.phone)) {
    errors.push("Valid Indian phone number is required.");
  }
  if (!lead.serviceInterest || !SERVICE_INTERESTS.includes(lead.serviceInterest)) {
    errors.push("Valid service interest is required.");
  }
  if (!lead.message || lead.message.length < 8) {
    errors.push("Please add a short message about your enquiry.");
  }
  if (lead.message.length > 2000) {
    errors.push("Message is too long.");
  }

  return errors;
}

function analyzeLead(lead, context = {}) {
  const reasons = [];
  const spamSignals = [];
  const lowerText = `${lead.name} ${lead.email} ${lead.serviceInterest} ${lead.message}`.toLowerCase();
  const linkCount = countLinks(lowerText);
  const matchedSpamTerms = getSpamKeywords().filter((term) => lowerText.includes(term));
  const matchedFinanceTerms = FINANCE_TERMS.filter((term) => lowerText.includes(term));
  const hasGenericGreeting = /\b(hello dear|dear sir|dear madam|dear webmaster)\b/i.test(
    lead.message
  );
  const urlOnly = linkCount > 0 && lowerText.replace(/https?:\/\/\S+|www\.\S+/gi, "").trim().length < 12;

  let score = 0;
  if (SERVICE_INTERESTS.includes(lead.serviceInterest) && lead.serviceInterest !== "General Enquiry") {
    score += 25;
    reasons.push(`Selected relevant service: ${lead.serviceInterest}.`);
  }
  if (/^[6-9]\d{9}$/.test(lead.phone)) {
    score += 15;
    reasons.push("Valid Indian mobile number.");
  }
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(lead.email)) {
    score += 10;
    reasons.push("Valid email format.");
  }
  if (lead.name.split(" ").filter(Boolean).length >= 2) {
    score += 5;
    reasons.push("Name appears complete.");
  }
  if (lead.message.length >= 20 && lead.message.length <= 700) {
    score += 10;
    reasons.push("Message has useful length.");
  }
  if (matchedFinanceTerms.length) {
    const termScore = Math.min(32, matchedFinanceTerms.length * 8);
    score += termScore;
    reasons.push(`Finance relevance terms found: ${matchedFinanceTerms.slice(0, 5).join(", ")}.`);
  }

  if (context.honeypotFilled) spamSignals.push("Hidden bot field was filled.");
  if (context.tooFast) spamSignals.push("Submitted faster than a normal human interaction.");
  if (context.rateLimited) spamSignals.push("Rate limit exceeded.");
  if (matchedSpamTerms.length) spamSignals.push(`Spam terms found: ${matchedSpamTerms.slice(0, 5).join(", ")}.`);
  if (linkCount > 1) spamSignals.push("Message contains excessive links.");
  if (urlOnly) spamSignals.push("Message is mostly URLs.");
  if (hasHtmlOrScript(lead.message)) spamSignals.push("Message contains HTML or script tags.");
  if (/(.)\1{7,}/.test(lead.message)) spamSignals.push("Message contains repeated characters.");
  if (isProbablyGibberish(lead.message)) spamSignals.push("Message appears gibberish.");
  if (hasGenericGreeting && matchedFinanceTerms.length === 0) {
    spamSignals.push("Generic greeting without investment context.");
  }

  score -= spamSignals.length * 25;

  const criticalSpam =
    context.honeypotFilled ||
    context.tooFast ||
    context.rateLimited ||
    matchedSpamTerms.length > 0 ||
    linkCount > 2 ||
    urlOnly ||
    hasHtmlOrScript(lead.message);

  let category = "spam";
  if (criticalSpam) category = "spam";
  else if (score >= 45) category = "relevant";
  else if (score >= 20) category = "review";

  return {
    category,
    score,
    reasons,
    spamSignals,
    linkCount,
  };
}

function normalizeLead(input = {}, source = "contact-page") {
  const firstName = normalizeText(input.firstName, 80);
  const lastName = normalizeText(input.lastName, 80);
  const providedName = normalizeText(input.name, 120);
  const name = normalizeText(providedName || `${firstName} ${lastName}`, 120);
  const email = normalizeEmail(input.email);
  const phone = normalizePhone(input.phone);
  const serviceInterest = normalizeText(input.serviceInterest, 80) || "General Enquiry";
  const message = normalizeText(input.message, 2000);
  const submittedPage = normalizeText(input.submittedPage, 500);
  const userAgent = normalizeText(input.userAgent, 500);
  const companyWebsite = normalizeText(input.companyWebsite, 500);
  const renderedAt = Number(input.renderedAt || 0);
  const submittedAt = Date.now();

  return {
    source,
    firstName,
    lastName,
    name,
    email,
    phone,
    serviceInterest,
    message,
    submittedPage,
    userAgent,
    companyWebsite,
    renderedAt,
    submittedAt,
    turnstileToken: normalizeText(input.cfTurnstileToken, 3000),
  };
}

function processLeadSubmission({ input, req, source }) {
  const lead = normalizeLead(input, source);
  const ip = getClientIp(req);
  const validationErrors = validateLead(lead);
  const tooFast = !lead.renderedAt || lead.submittedAt - lead.renderedAt < MIN_SUBMIT_TIME_MS;
  const honeypotFilled = Boolean(lead.companyWebsite);
  const rateLimit = checkRateLimit({ ip, email: lead.email, phone: lead.phone, now: lead.submittedAt });
  const analysis = analyzeLead(lead, {
    tooFast,
    honeypotFilled,
    rateLimited: rateLimit.limited,
  });

  if (validationErrors.length) {
    analysis.category = "invalid";
    analysis.spamSignals.push(...validationErrors);
  }
  if (rateLimit.reasons.length) analysis.spamSignals.push(...rateLimit.reasons);

  return {
    lead,
    ip,
    ipHash: hashValue(ip),
    userAgent: normalizeText(req.headers["user-agent"], 500),
    validationErrors,
    analysis,
  };
}

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!secret && !siteKey) {
    return { enabled: false, ok: true, reason: "Turnstile is not configured." };
  }
  if (!secret || !siteKey) {
    return {
      enabled: false,
      ok: true,
      reason: "Turnstile is partially configured; CAPTCHA check was skipped.",
    };
  }
  if (!token) {
    return { enabled: true, ok: false, reason: "CAPTCHA token is missing." };
  }

  try {
    const body = new URLSearchParams();
    body.append("secret", secret);
    body.append("response", token);
    if (ip && ip !== "unknown") body.append("remoteip", ip);

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    });
    const data = await response.json();
    return {
      enabled: true,
      ok: Boolean(data.success),
      reason: data.success ? "Turnstile verified." : "CAPTCHA verification failed.",
    };
  } catch (error) {
    return { enabled: true, ok: false, reason: "CAPTCHA verification could not be completed." };
  }
}

function getLeadSubject(lead, analysis) {
  const service = sanitizeSubjectPart(lead.serviceInterest);
  const name = sanitizeSubjectPart(lead.name, "Website Visitor");

  if (analysis.category === "relevant") {
    return `New Relevant Lead: ${service} - ${name}`;
  }
  if (analysis.category === "review") {
    return `[REVIEW] Website Lead: ${service} - ${name}`;
  }
  return "[SPAM BLOCKED] Website Contact Submission";
}

function buildLeadEmailHtml({ lead, analysis, timestamp, ip, userAgent }) {
  const allReasons = [...analysis.reasons, ...analysis.spamSignals];
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #1f2937;">
      <h2>Website Lead Received</h2>
      <p><strong>Quick Action:</strong> ${escapeHtml(analysis.category.toUpperCase())}</p>
      <p><strong>Lead Score:</strong> ${escapeHtml(String(analysis.score))}</p>
      <p><strong>Reason:</strong> ${escapeHtml(allReasons.join(" ") || "No special flags.")}</p>
      <hr />
      <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
      <p><strong>Interested Service:</strong> ${escapeHtml(lead.serviceInterest)}</p>
      <p><strong>Message:</strong><br />${escapeHtml(lead.message).replace(/\n/g, "<br />")}</p>
      <hr />
      <p><strong>Submitted Page:</strong> ${escapeHtml(lead.submittedPage || "Not provided")}</p>
      <p><strong>Submitted At (IST):</strong> ${escapeHtml(timestamp)}</p>
      <p><strong>IP:</strong> ${escapeHtml(ip || "unknown")}</p>
      <p><strong>User Agent:</strong> ${escapeHtml(userAgent || "unknown")}</p>
    </div>
  `;
}

function buildThankYouEmailHtml(name) {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px; text-align: center;">
      <img src="https://www.ideas2invest.com/assets/images/logo/logo.png" alt="Ideas2Invest" style="max-width: 180px; margin-bottom: 20px;" />
      <h2 style="color: #003366;">Thank you for contacting us, ${escapeHtml(name)}!</h2>
      <p style="color: #333; font-size: 16px; margin: 20px 0;">
        We have received your message and our team will get back to you shortly.
      </p>
      <a href="https://www.ideas2invest.com" style="display:inline-block; background-color:#003366; color:white; padding:12px 20px; text-decoration:none; border-radius:4px; font-weight:bold;">
        Visit Our Website
      </a>
      <p style="color: #888; font-size: 14px; margin-top: 30px;">
        &copy; ${new Date().getFullYear()} Ideas2Invest. All rights reserved.
      </p>
    </div>
  `;
}

function logLeadDecision(result, extra = {}) {
  const { lead, ipHash, analysis } = result;
  const payload = {
    status: analysis.category,
    score: analysis.score,
    reasons: [...analysis.reasons, ...analysis.spamSignals],
    source: lead.source,
    serviceInterest: lead.serviceInterest,
    emailHash: hashValue(lead.email),
    phoneHash: hashValue(lead.phone),
    ipHash,
    submittedPage: lead.submittedPage,
    createdAt: new Date(lead.submittedAt).toISOString(),
    ...extra,
  };

  if (analysis.category === "spam" || analysis.category === "invalid") {
    console.warn("Lead submission blocked:", payload);
  } else {
    console.info("Lead submission accepted:", payload);
  }
}

module.exports = {
  SERVICE_INTERESTS,
  MIN_SUBMIT_TIME_MS,
  analyzeLead,
  buildLeadEmailHtml,
  buildThankYouEmailHtml,
  checkRateLimit,
  escapeHtml,
  getLeadSubject,
  hashValue,
  logLeadDecision,
  normalizeLead,
  normalizePhone,
  processLeadSubmission,
  resetLeadProtectionState,
  verifyTurnstile,
};

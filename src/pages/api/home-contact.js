import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, message } = req.body;

  // Validation
  const phoneRegex = /^[6-9]\d{9}$/; // Indian 10-digit phone numbers
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !phone || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (!phoneRegex.test(phone)) {
    return res
      .status(400)
      .json({ error: "Please enter a valid Indian phone number" });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address" });
  }

  try {
    // 📌 IST timestamp
    const istTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // ✅ Submit lead to Google Form
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScS2R7SmGpPXp0u8x3Zl2Qu6Y5NN_FtqlH9tcHM_O6wnWLUaA/formResponse";

    const formData = new URLSearchParams();
    formData.append("entry.340352112", name);
    formData.append("entry.1440604067", phone);
    formData.append("entry.2121349494", email);
    formData.append("entry.1806514779", message || "");

    await fetch(formUrl, {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    // 📧 Nodemailer setup
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Thank You email to user
    await transporter.sendMail({
      from: `"Ideas2Invest" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We have received your message – Ideas2Invest",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px; text-align: center;">
          <img src="https://www.ideas2invest.com/assets/images/logo/logo.png" alt="Ideas2Invest" style="max-width: 180px; margin-bottom: 20px;" />
          <h2 style="color: #003366;">Thank you for contacting us, ${name}!</h2>
          <p style="color: #333; font-size: 16px; margin: 20px 0;">
            We have received your message and our team will get back to you shortly.
          </p>
          <a href="https://ideas2invest.com" style="display:inline-block; background-color:#003366; color:white; padding:12px 20px; text-decoration:none; border-radius:4px; font-weight:bold;">
            Visit Our Website
          </a>
          <p style="color: #888; font-size: 14px; margin-top: 30px;">
            &copy; ${new Date().getFullYear()} Ideas2Invest. All rights reserved.
          </p>
        </div>
      `,
    });

    // 2️⃣ New lead email to admin
    await transporter.sendMail({
      from: `"Ideas2Invest Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Lead Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Submitted At (IST):</strong> ${istTime}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return res.status(500).json({ error: "Failed to send message!" });
  }
}



// import nodemailer from "nodemailer";
// import fs from "fs";
// import path from "path";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { name, phone, email, message } = req.body;

//   // Validation
//   const phoneRegex = /^[6-9]\d{9}$/; // Indian 10-digit phone numbers
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!name || !phone || !email ) {
//     return res.status(400).json({ error: "All fields are required" });
//   }
//   if (!phoneRegex.test(phone)) {
//     return res.status(400).json({ error: "Please enter a valid Indian phone number" });
//   }
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ error: "Please enter a valid email address" });
//   }

//   try {
//     // IST timestamp
//     const istTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

//     // Path to local leads file
//     const leadsFilePath = path.join(process.cwd(), "src", "data", "homeContactLeads.json");

//     let leads = [];
//     if (fs.existsSync(leadsFilePath)) {
//       const fileData = fs.readFileSync(leadsFilePath, "utf-8");
//       leads = JSON.parse(fileData || "[]");
//     }

//     // Add new lead
//     leads.push({
//       name,
//       phone,
//       email,
//       message,
//       timestamp: istTime,
//     });

//     // Save locally
//     fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf-8");

//     // Nodemailer setup
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // 1️⃣ Thank You email to user
//     await transporter.sendMail({
//       from: `"Ideas2Invest" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "We have received your message – Ideas2Invest",
//       html: `
//         <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px; text-align: center;">
//           <img src="https://www.ideas2invest.com/assets/images/logo/logo.png" alt="Ideas2Invest" style="max-width: 180px; margin-bottom: 20px;" />
//           <h2 style="color: #003366;">Thank you for contacting us, ${name}!</h2>
//           <p style="color: #333; font-size: 16px; margin: 20px 0;">
//             We have received your message and our team will get back to you shortly.
//           </p>
//           <a href="https://ideas2invest.com" style="display:inline-block; background-color:#003366; color:white; padding:12px 20px; text-decoration:none; border-radius:4px; font-weight:bold;">
//             Visit Our Website
//           </a>
//           <p style="color: #888; font-size: 14px; margin-top: 30px;">
//             &copy; ${new Date().getFullYear()} Ideas2Invest. All rights reserved.
//           </p>
//         </div>
//       `,
//     });

//     // 2️⃣ New lead email to admin
//     await transporter.sendMail({
//       from: `"Ideas2Invest Leads" <${process.env.EMAIL_USER}>`,
//       to: process.env.ADMIN_EMAIL,
//       subject: "📩 New Contact Form Submission",
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px;">
//           <h2>New Lead Received</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong> ${message}</p>
//           <p><strong>Submitted At (IST):</strong> ${istTime}</p>
//         </div>
//       `,
//     });

//     return res.status(200).json({ success: "Message sent successfully!" });
//   } catch (error) {
//     console.error("Contact form submission failed:", error);
//     return res.status(500).json({ error: "Failed to send message!" });
//   }
// }

// import nodemailer from "nodemailer";
// import fs from "fs";
// import path from "path";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { email } = req.body;

//   if (!email || !/\S+@\S+\.\S+/.test(email)) {
//     return res.status(400).json({ error: "Please enter a valid email address" });
//   }

//   try {
//     // 1️⃣ Store email in leads.json
//     const istTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
//     const leadsFilePath = path.join(process.cwd(), "src", "data", "subscribelead.json");

//     let leads = [];
//     if (fs.existsSync(leadsFilePath)) {
//       const fileData = fs.readFileSync(leadsFilePath, "utf-8");
//       leads = JSON.parse(fileData || "[]");
//     }

//     leads.push({
//       email,
//       timestamp: istTime,
//     });

//     fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf-8");

//     // 2️⃣ Send email confirmation to subscriber
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Ideas2Invest" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Subscription Confirmed – Ideas2Invest",
//       html: `
//         <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px; text-align: center;">
//           <img src="https://ideas2invest.com/images/logo.png" alt="Ideas2Invest" style="max-width: 180px; margin-bottom: 20px;" />
//           <h2 style="color: #003366; margin-bottom: 10px;">Thank you for subscribing!</h2>
//           <p style="color: #333; font-size: 16px; margin-bottom: 25px;">
//             You will now receive our latest investment tips, news, and updates directly to your inbox.
//           </p>
//           <a href="https://ideas2invest.com" style="display:inline-block; background-color:#003366; color:white; padding:12px 20px; text-decoration:none; border-radius:4px; font-size:14px; font-weight:bold;">
//             Visit Our Website
//           </a>
//           <p style="color: #888; font-size: 15px; margin-top: 30px;">
//             &copy; ${new Date().getFullYear()} Ideas2Invest. All rights reserved.
//           </p>
//         </div>
//       `,
//     });

//     return res.status(200).json({ success: "Subscription successful!" });
//   } catch (error) {
//     console.error("Subscription failed:", error);
//     return res.status(500).json({ error: "Failed to subscribe!" });
//   }
// }


import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address" });
  }

  try {
    // 1️⃣ Store email in leads.json
    const istTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const leadsFilePath = path.join(process.cwd(), "src", "data", "subscribelead.json");

    let leads = [];
    if (fs.existsSync(leadsFilePath)) {
      const fileData = fs.readFileSync(leadsFilePath, "utf-8");
      leads = JSON.parse(fileData || "[]");
    }

    leads.push({
      email,
      timestamp: istTime,
    });

    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf-8");

    // 2️⃣ Setup Nodemailer
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App password
      },
    });

    // 3️⃣ Send confirmation to subscriber
    await transporter.sendMail({
      from: `"Ideas2Invest" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Subscription Confirmed – Ideas2Invest",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px; text-align: center;">
          <img src="https://ideas2invest.com/images/logo.png" alt="Ideas2Invest" style="max-width: 180px; margin-bottom: 20px;" />
          <h2 style="color: #003366; margin-bottom: 10px;">Thank you for subscribing!</h2>
          <p style="color: #333; font-size: 16px; margin-bottom: 25px;">
            You will now receive our latest investment tips, news, and updates directly to your inbox.
          </p>
          <a href="https://ideas2invest.com" style="display:inline-block; background-color:#003366; color:white; padding:12px 20px; text-decoration:none; border-radius:4px; font-weight:bold;">
            Visit Our Website
          </a>
          <p style="color: #888; font-size: 15px; margin-top: 30px;">
            &copy; ${new Date().getFullYear()} Ideas2Invest. All rights reserved.
          </p>
        </div>
      `,
    });

    // 4️⃣ Send notification to admin
    await transporter.sendMail({
      from: `"Ideas2Invest Subscriptions" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL, // Set this in .env
      subject: "📩 New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Subscriber</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subscribed At (IST):</strong> ${istTime}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: "Subscription successful!" });
  } catch (error) {
    console.error("Subscription failed:", error);
    return res.status(500).json({ error: "Failed to subscribe!" });
  }
}

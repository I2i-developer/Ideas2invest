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
    const istTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // if (process.env.NODE_ENV === "development") {
    //   const leadsFilePath = path.join(process.cwd(), "src", "data", "leads.json");
    //   let leads = [];

    //   if (fs.existsSync(leadsFilePath)) {
    //     const fileData = fs.readFileSync(leadsFilePath, "utf-8");
    //     leads = JSON.parse(fileData || "[]");
    //   }

    //   leads.push({ email, timestamp: istTime });

    //   fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf-8");
    // }
    if (process.env.NODE_ENV === "development") {
      // Local JSON storage
      const leadsFilePath = path.join(process.cwd(), "src", "data", "leads.json");
      let leads = [];
      if (fs.existsSync(leadsFilePath)) {
        const fileData = fs.readFileSync(leadsFilePath, "utf-8");
        leads = JSON.parse(fileData || "[]");
      }
      leads.push({ email, timestamp: istTime });
      fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf-8");
    } else {
      // ✅ Production: Submit to Google Form → auto logs in Sheet
      const formUrl = "https://docs.google.com/forms/d/e/1Lef7Q5r2pA3JLtzuHiDrMsAfO_HY1Mlejcqx7xpNpCk/formResponse";

      const formData = new URLSearchParams();
      formData.append("entry.374700443", email);

      await fetch(formUrl, {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

    }

    // 2️⃣ Send email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    await transporter.sendMail({
      from: `"Ideas2Invest" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your App Download Links – Ideas2Invest",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px; text-align: center;">
          <img src="https://www.ideas2invest.com/assets/images/logo/logo.png" alt="Ideas2Invest" style="max-width: 180px; margin-bottom: 20px;" />
          <h2 style="color: #003366; margin-bottom: 10px;">Download Our Mobile Application</h2>
          <p style="color: #333; font-size: 16px; margin-bottom: 25px;">
            Manage your investments on the go, track your portfolio, and stay up to date — all from your phone.
          </p>
          <table align="center" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td style="padding: 0 10px;">
                <a href="https://play.google.com/store/apps/details?id=mobi.mywealth" target="_blank">
                  <img src="https://w3assets.angelone.in/wp-content/uploads/2022/12/button-play-2x.png" 
                       alt="Google Play" style="height: 60px; display: block;" />
                </a>
              </td>
              <td style="padding: 0 10px;">
                <a href="https://apps.apple.com/us/app/my-wealth/id1116107323" target="_blank">
                  <img src="https://w3assets.angelone.in/wp-content/uploads/2022/12/button-app-2x.png" 
                       alt="Apple App Store" style="height: 60px; display: block;" />
                </a>
              </td>
            </tr>
          </table>
          <p style="color: #888; font-size: 15px; margin-top: 30px;">
            &copy; ${new Date().getFullYear()} Ideas2Invest. All rights reserved.  
            <br />
            <a href="https://ideas2invest.com" style="color: #003366; text-decoration: none; font-weight=500;">Visit our website</a>
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: "App link sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ error: "Failed to send app link!" });
  }
}

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
//     const leadsFilePath = path.join(process.cwd(), "src", "data", "leads.json");

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

//     // 2️⃣ Send email
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS, // App password
//       },
//     });

//     await transporter.sendMail({
//       from: `"Ideas2Invest" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Your App Download Links – Ideas2Invest",
//       html: `
//     <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px; text-align: center;">
//     <!-- Logo -->
//     <img src="https://www.ideas2invest.com/assets/images/logo/logo.png" alt="Ideas2Invest" style="max-width: 180px; margin-bottom: 20px;" />

//     <!-- Heading -->
//     <h2 style="color: #003366; margin-bottom: 10px;">Download Our Mobile Application</h2>
//     <p style="color: #333; font-size: 16px; margin-bottom: 25px;">
//       Manage your investments on the go, track your portfolio, and stay up to date — all from your phone.
//     </p>

//     <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0">
//       <tr>
//         <td style="padding: 0 10px;">
//           <a href="https://play.google.com/store/apps/details?id=mobi.mywealth" target="_blank">
//             <img src="https://w3assets.angelone.in/wp-content/uploads/2022/12/button-play-2x.png"
//                  alt="Google Play" style="height: 60px; display: block;" />
//           </a>
//         </td>
//         <td style="padding: 0 10px;">
//           <a href="https://apps.apple.com/us/app/my-wealth/id1116107323" target="_blank">
//             <img src="https://w3assets.angelone.in/wp-content/uploads/2022/12/button-app-2x.png"
//                  alt="Apple App Store" style="height: 60px; display: block;" />
//           </a>
//         </td>
//       </tr>
//     </table>

//     <!-- Footer -->
//     <p style="color: #888; font-size: 15px; margin-top: 30px;">
//       &copy; ${new Date().getFullYear()} Ideas2Invest. All rights reserved.
//       <br />
//       <a href="https://ideas2invest.com" style="color: #003366; text-decoration: none; font-weight=500;">Visit our website</a>
//     </p>
//   </div>
// `,
//     });

//     return res.status(200).json({ success: "App link sent successfully!" });
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     return res.status(500).json({ error: "Failed to send app link!" });
//   }
// }


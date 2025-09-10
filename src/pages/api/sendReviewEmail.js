import nodemailer from "nodemailer";
import path from "path";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { clientName, clientEmail } = req.body;

    try {
        // Configure transporter (use your SMTP / mail service here)
        const transporter = nodemailer.createTransport({
            service: "Gmail", // or use custom SMTP
            auth: {
                user: process.env.EMAIL_USER_NEW,
                pass: process.env.EMAIL_PASS_NEW,
            },
        });

        // Your Google Review link
        const reviewLink = "https://g.page/r/CRw2KBVOLbjLEBM/review";

        // Email HTML template
        const mailOptions = {
            from: `"Ideas2Invest" <${process.env.EMAIL_USER_NEW}>`,
            to: clientEmail,
            subject: "We’d love your feedback – Leave us a review ✨",
            html: `
      <div style="background:#f7f9fc; padding:30px; font-family:Arial, sans-serif; color:#333;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
          <tr>
            <td align="center" style="padding:20px 20px 0;">
              <img src="https://www.ideas2invest.com/assets/images/logo/logo.png" alt="Ideas2Invest Logo" width="150" style="margin-bottom:10px;" />
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:10px 30px;">
              <h2 style="color:#003366; margin:0; font-size:22px;">Hello ${clientName},</h2>
              <p style="font-size:17px; line-height:1.6; margin-top:10px; color:#555;">
                Thank you for trusting <strong><span style="color: rgba(1, 70, 139, 1)">Ideas</span><span style="color: #28a745">2Invest</span></strong> with your financial journey.  
                Your feedback means a lot to us, and helps others discover our services with confidence.
              </p>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:10px;">
              <a href="${reviewLink}" target="_blank"
                style="background:#28a745; color:#fff; text-decoration:none; padding:14px 28px; font-size:16px; border-radius:8px; display:inline-block; font-weight:600;">
                 Leave us a Google Review
              </a>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:10px;">
            <p style="font-size:16px; color:#555; margin-bottom:10px;">
                Or simply scan this QR code with your phone:
            </p>
            <!-- Reference the embedded QR image using cid -->
            <img src="cid:qrimage" alt="Review QR Code" width="160" height="160" style="border:4px solid #eee; border-radius:12px;" />
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:0 20px 20px; font-family:Arial, sans-serif;">
              <p style="font-size:15px; line-height:1.5; color:#666;">
                It only takes a minute and helps us grow stronger.  
                We truly appreciate your support!
              </p>
            </td>
          </tr>

          <tr>
            <td align="center" style="background:#f7f9fc; padding:20px; border-top:1px solid #eee; border-radius:0 0 12px 12px; font-family: Arial, Helvetica, sans-serif">
              <p style="margin:0; font-size:14px; color:#777;">
                © ${new Date().getFullYear()} Ideas2Invest | 
                <a href="https://www.ideas2invest.com" target="_blank" style="color:#28a745; text-decoration:none;">www.ideas2invest.com</a>
              </p>
            </td>
          </tr>
        </table>
      </div>
      `,
        attachments: [
        {
          filename: "qr-review.png",
          path: path.resolve("./public/assets/images/qr/qr-review.png"),
          cid: "qrimage", // Must match the cid used in the <img> tag
        },
      ],
    };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Review email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email" });
    }
}

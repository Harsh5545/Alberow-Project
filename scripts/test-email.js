// Test script to verify email configuration
import nodemailer from "nodemailer"

async function testEmailConfiguration() {
  console.log("🧪 Testing Hostinger email configuration...")

  const transporter = nodemailer.createTransporter({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "hello@alberow.com",
      pass: "Harsh@152197",
    },
  })

  try {
    // Verify connection
    await transporter.verify()
    console.log("✅ SMTP connection verified successfully!")

    // Send test email
    const info = await transporter.sendMail({
      from: '"Alberow Test" <hello@alberow.com>',
      to: "hello@alberow.com",
      subject: "🧪 Email Configuration Test",
      html: `
        <h2>✅ Email Configuration Test Successful!</h2>
        <p>Your Hostinger email is properly configured and working.</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>SMTP Host:</strong> smtp.hostinger.com</p>
        <p><strong>Port:</strong> 465 (SSL)</p>
      `,
    })

    console.log("✅ Test email sent successfully!")
    console.log("📧 Message ID:", info.messageId)
  } catch (error) {
    console.error("❌ Email configuration error:", error)
  }
}

testEmailConfiguration()

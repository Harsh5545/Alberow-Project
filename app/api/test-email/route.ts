import { NextResponse } from "next/server"

// Import nodemailer properly
const nodemailer = require('nodemailer')

export async function GET() {
  try {
    console.log("🧪 Testing email configuration...")

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "hello@alberow.com",
        pass: process.env.SMTP_PASS || "Harsh@152197",
      },
      debug: false,
      logger: false,
    })

    // Test connection
    console.log("🔍 Verifying SMTP connection...")
    await transporter.verify()
    console.log("✅ SMTP connection verified!")

    // Send test email
    console.log("📤 Sending test email...")
    const testEmailResult = await transporter.sendMail({
      from: '"Alberow Test" <hello@alberow.com>',
      to: "hello@alberow.com",
      subject: "🧪 Email Configuration Test - " + new Date().toLocaleString(),
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
          <div style="background: white; padding: 30px; border-radius: 10px; max-width: 500px; margin: 0 auto;">
            <h2 style="color: #9333ea;">✅ Email Test Successful!</h2>
            <p>Your Hostinger email configuration is working correctly.</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>SMTP Host:</strong> smtp.hostinger.com</p>
            <p><strong>Port:</strong> 465 (SSL)</p>
            <p><strong>Email:</strong> hello@alberow.com</p>
          </div>
        </div>
      `,
    })

    console.log("✅ Test email sent successfully!")

    return NextResponse.json({
      success: true,
      message: "Email configuration test successful!",
      messageId: testEmailResult.messageId,
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error("❌ Email test failed:", error)

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

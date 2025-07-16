import { type NextRequest, NextResponse } from "next/server"
import { getAdminEmailTemplate, getCustomerEmailTemplate } from "@/lib/email-templates"

// Import nodemailer properly
const nodemailer = require('nodemailer')

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

// Create transporter for sending emails with better error handling
const createTransporter = () => {
  const config = {
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "hello@alberow.com",
      pass: process.env.SMTP_PASS || "Harsh@152197",
    },
    debug: false, // Disable debug for cleaner logs
    logger: false,
  }

  console.log("Creating transporter with config:", {
    host: config.host,
    port: config.port,
    secure: config.secure,
    user: config.auth.user,
  })

  return nodemailer.createTransporter(config)
}

export async function POST(request: NextRequest) {
  try {
    console.log("📧 Contact form API called")

    const data: ContactFormData = await request.json()
    console.log("📝 Form data received:", {
      name: data.name,
      email: data.email.substring(0, 3) + "***",
      phone: data.phone,
      service: data.service,
      messageLength: data.message.length,
    })

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
      console.log("❌ Validation failed: Missing required fields")
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      console.log("❌ Validation failed: Invalid email format")
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/
    if (!phoneRegex.test(data.phone.replace(/\D/g, ""))) {
      console.log("❌ Validation failed: Invalid phone number")
      return NextResponse.json({ error: "Phone number must be exactly 10 digits" }, { status: 400 })
    }

    console.log("✅ Validation passed, creating transporter...")
    const transporter = createTransporter()

    // Test the connection first
    try {
      await transporter.verify()
      console.log("✅ SMTP connection verified")
    } catch (verifyError: any) {
      console.error("❌ SMTP verification failed:", verifyError.message)
      return NextResponse.json(
        {
          error: "Email service temporarily unavailable. Please try again later.",
          details: verifyError.message,
        },
        { status: 500 },
      )
    }

    console.log("📤 Sending admin notification email...")
    // Send email to admin
    let adminEmailResult
    try {
      adminEmailResult = await transporter.sendMail({
        from: `"Alberow Contact Form" <hello@alberow.com>`,
        to: "hello@alberow.com",
        subject: `🚀 New Contact Form Submission from ${data.name} - ${data.service}`,
        html: getAdminEmailTemplate(data),
      })
      console.log("✅ Admin email sent:", adminEmailResult.messageId)
    } catch (adminEmailError: any) {
      console.error("❌ Failed to send admin email:", adminEmailError.message)
      throw adminEmailError
    }

    console.log("📤 Sending customer thank you email...")
    // Send thank you email to customer
    let customerEmailResult
    try {
      customerEmailResult = await transporter.sendMail({
        from: `"Alberow Team" <hello@alberow.com>`,
        to: data.email,
        subject: "🎉 Thank you for contacting Alberow - We'll be in touch soon!",
        html: getCustomerEmailTemplate(data.name),
      })
      console.log("✅ Customer email sent:", customerEmailResult.messageId)
    } catch (customerEmailError: any) {
      console.error("❌ Failed to send customer email:", customerEmailError.message)
      // Don't throw here - admin email is more important
    }

    console.log("🎉 All emails sent successfully!")
    return NextResponse.json(
      {
        message: "Message sent successfully",
        adminEmailId: adminEmailResult.messageId,
        customerEmailId: customerEmailResult?.messageId,
      },
      { status: 200 },
    )
  } catch (error: any) {
    console.error("💥 Contact form error:", error)

    // More specific error messages
    if (error.message.includes("Invalid login") || error.message.includes("authentication")) {
      return NextResponse.json(
        {
          error: "Email authentication failed. Please contact us directly at hello@alberow.com",
        },
        { status: 500 },
      )
    }
    if (error.message.includes("ECONNREFUSED") || error.message.includes("connect")) {
      return NextResponse.json(
        {
          error: "Cannot connect to email server. Please try again later or contact us directly.",
        },
        { status: 500 },
      )
    }
    if (error.message.includes("timeout")) {
      return NextResponse.json(
        {
          error: "Email service timeout. Please try again.",
        },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        error: "Failed to send message. Please contact us directly at hello@alberow.com or +91 9137747708",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    )
  }
}

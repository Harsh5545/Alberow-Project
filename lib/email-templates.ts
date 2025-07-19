interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

// Enhanced admin email template with better responsive design
export const getAdminEmailTemplate = (data: ContactFormData) => {
  const serviceNames: Record<string, string> = {
    "web-development": "Web Development",
    seo: "SEO Optimization",
    "app-development": "Application Development",
    "social-media": "Social Media Marketing",
    "social-media-management": "Social Media Management",
    "one-page-websites": "One-Page Websites",
    "multi-page-websites": "Multi-Page Websites",
    "portfolio-development": "Portfolio Development",
    other: "Other Services",
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - Alberow</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6; 
          color: #333; 
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .container { 
          max-width: 600px; 
          margin: 10px auto; 
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); 
          color: white; 
          padding: 20px 15px; 
          text-align: center;
        }
        .logo {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }
        .header h1 { 
          font-size: 20px; 
          margin-bottom: 6px;
          font-weight: 600;
        }
        .header p { 
          opacity: 0.9; 
          font-size: 14px;
        }
        .content { 
          padding: 20px 15px; 
        }
        .field { 
          margin-bottom: 15px; 
          border-bottom: 1px solid #eee;
          padding-bottom: 12px;
        }
        .field:last-child { 
          border-bottom: none; 
          margin-bottom: 0;
        }
        .label { 
          font-weight: 600; 
          color: #555; 
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
          display: block;
        }
        .value { 
          font-size: 14px;
          color: #333;
          background: #f8f9fa;
          padding: 10px 12px;
          border-radius: 6px;
          border-left: 3px solid #9333ea;
          word-break: break-word;
        }
        .priority { 
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 6px;
          padding: 12px;
          margin: 15px 0;
        }
        .priority-title {
          color: #856404;
          font-weight: 600;
          margin-bottom: 4px;
          font-size: 14px;
        }
        .footer { 
          background: #f8f9fa;
          padding: 15px; 
          text-align: center; 
          color: #666; 
          font-size: 12px;
          border-top: 1px solid #eee;
        }
        .timestamp {
          background: #e3f2fd;
          padding: 8px;
          border-radius: 4px;
          font-size: 12px;
          color: #1565c0;
          text-align: center;
          margin: 12px 0;
        }
        .action-buttons {
          text-align: center;
          margin: 20px 0;
        }
        .btn {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(135deg, #9333ea, #ec4899);
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          margin: 5px;
          font-size: 14px;
        }
        
        /* Mobile Styles */
        @media screen and (max-width: 600px) {
          .container { 
            margin: 5px; 
            border-radius: 8px;
          }
          .content { 
            padding: 15px 12px; 
          }
          .header {
            padding: 15px 12px;
          }
          .logo {
            font-size: 18px;
          }
          .header h1 {
            font-size: 18px;
          }
          .header p {
            font-size: 13px;
          }
          .value {
            font-size: 13px;
            padding: 8px 10px;
          }
          .btn {
            display: block;
            margin: 8px 0;
            padding: 12px 20px;
          }
          .priority {
            padding: 10px;
          }
          .footer {
            padding: 12px;
            font-size: 11px;
          }
        }
        
        /* Tablet Styles */
        @media screen and (min-width: 601px) and (max-width: 768px) {
          .container {
            margin: 15px;
          }
          .content {
            padding: 25px 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🚀 ALBEROW</div>
          <h1>New Lead Alert!</h1>
          <p>Someone is interested in your services</p>
        </div>
        
        <div class="content">
          <div class="priority">
            <div class="priority-title">⚡ Action Required</div>
            <p>A potential client has submitted a contact form. Respond within 1 hour for best conversion rates!</p>
          </div>

          <div class="timestamp">
            📅 Received: ${new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
              dateStyle: "full",
              timeStyle: "short",
            })}
          </div>
          
          <div class="field">
            <span class="label">👤 Client Name</span>
            <div class="value">${data.name}</div>
          </div>
          
          <div class="field">
            <span class="label">📧 Email Address</span>
            <div class="value">
              <a href="mailto:${data.email}" style="color: #9333ea; text-decoration: none;">${data.email}</a>
            </div>
          </div>
          
          <div class="field">
            <span class="label">📱 Phone Number</span>
            <div class="value">
              <a href="tel:+91${data.phone}" style="color: #9333ea; text-decoration: none;">+91 ${data.phone}</a>
            </div>
          </div>
          
          <div class="field">
            <span class="label">🛠️ Service Interest</span>
            <div class="value">${serviceNames[data.service] || data.service}</div>
          </div>
          
          <div class="field">
            <span class="label">💬 Project Details</span>
            <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
          </div>

          <div class="action-buttons">
            <a href="mailto:${data.email}" class="btn">📧 Reply via Email</a>
            <a href="tel:+91${data.phone}" class="btn">📞 Call Now</a>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>Alberow Contact Management System</strong></p>
          <p>This email was automatically generated from your website contact form.</p>
          <p>📍 Om Darsh Heights, Kalyan-421306 | 📞 +91 9137747708</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Enhanced customer thank you email template with better responsive design
export const getCustomerEmailTemplate = (name: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - Alberow</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6; 
          color: #333; 
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .container { 
          max-width: 600px; 
          margin: 10px auto; 
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); 
          color: white; 
          padding: 25px 15px; 
          text-align: center;
        }
        .logo { 
          font-size: 22px; 
          font-weight: 800; 
          margin-bottom: 8px;
          letter-spacing: 1px;
        }
        .header h1 { 
          font-size: 20px; 
          margin-bottom: 8px;
          font-weight: 600;
        }
        .header p { 
          opacity: 0.9; 
          font-size: 14px;
        }
        .content { 
          padding: 25px 15px; 
        }
        .highlight { 
          background: linear-gradient(135deg, #9333ea, #ec4899); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
          font-weight: 700;
        }
        .contact-info { 
          background: linear-gradient(135deg, #f8f9ff, #fdf2f8);
          padding: 18px; 
          border-radius: 8px; 
          margin: 20px 0;
          border: 1px solid #e5e7eb;
        }
        .contact-item { 
          display: flex; 
          align-items: center; 
          margin-bottom: 10px;
          font-size: 14px;
          flex-wrap: wrap;
        }
        .contact-item:last-child { margin-bottom: 0; }
        .contact-item strong { 
          min-width: 80px; 
          color: #9333ea;
          margin-right: 8px;
        }
        .contact-item a {
          color: #9333ea;
          text-decoration: none;
          word-break: break-all;
        }
        .features {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 6px;
          margin: 18px 0;
        }
        .features ul {
          list-style: none;
          padding: 0;
        }
        .features li {
          padding: 6px 0;
          font-size: 14px;
        }
        .cta-button { 
          display: inline-block; 
          background: linear-gradient(135deg, #9333ea, #ec4899); 
          color: white; 
          padding: 12px 24px; 
          text-decoration: none; 
          border-radius: 6px; 
          margin: 20px 0;
          font-weight: 600;
          font-size: 14px;
          text-align: center;
          width: 100%;
          max-width: 200px;
        }
        .footer { 
          background: #f8f9fa;
          padding: 18px; 
          text-align: center; 
          color: #666; 
          font-size: 12px;
          border-top: 1px solid #eee;
        }
        .social-links {
          margin: 15px 0;
        }
        .social-links a {
          display: inline-block;
          margin: 0 8px;
          color: #9333ea;
          text-decoration: none;
          font-size: 12px;
        }
        
        /* Mobile Styles */
        @media screen and (max-width: 600px) {
          .container { 
            margin: 5px; 
            border-radius: 8px;
          }
          .content { 
            padding: 20px 12px; 
          }
          .header {
            padding: 20px 12px;
          }
          .logo {
            font-size: 20px;
          }
          .header h1 {
            font-size: 18px;
          }
          .header p {
            font-size: 13px;
          }
          .contact-info { 
            padding: 15px; 
          }
          .contact-item {
            font-size: 13px;
            flex-direction: column;
            align-items: flex-start;
          }
          .contact-item strong {
            min-width: auto;
            margin-bottom: 2px;
          }
          .features {
            padding: 12px;
          }
          .features li {
            font-size: 13px;
          }
          .cta-button {
            padding: 14px 20px;
            font-size: 15px;
            width: 100%;
            max-width: none;
          }
          .social-links a {
            display: block;
            margin: 5px 0;
          }
          .footer {
            padding: 15px;
            font-size: 11px;
          }
        }
        
        /* Tablet Styles */
        @media screen and (min-width: 601px) and (max-width: 768px) {
          .container {
            margin: 15px;
          }
          .content {
            padding: 30px 20px;
          }
          .contact-info {
            padding: 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🚀 ALBEROW</div>
          <h1>Thank You, ${name}!</h1>
          <p>We've received your message and we're excited to work with you.</p>
        </div>
        
        <div class="content">
          <h2 style="color: #333; margin-bottom: 15px; font-size: 18px;">What happens next?</h2>
          <p style="font-size: 14px; margin-bottom: 18px;">
            Our expert team will carefully review your project requirements and get back to you within 
            <span class="highlight">24 hours</span>. We're committed to providing you with innovative 
            solutions that exceed your expectations.
          </p>
          
          <div class="contact-info">
            <h3 style="color: #9333ea; margin-bottom: 12px; font-size: 16px;">📞 Need Immediate Assistance?</h3>
            <div class="contact-item">
              <strong>📧 Email:</strong> 
              <a href="mailto:hello@alberow.com">hello@alberow.com</a>
            </div>
            <div class="contact-item">
              <strong>📱 Phone:</strong> 
              <a href="tel:+919137747708">+91 9137747708</a>
            </div>
            <div class="contact-item">
              <strong>💬 WhatsApp:</strong> 
              <a href="https://wa.me/919137747708">+91 9137747708</a>
            </div>
            <div class="contact-item">
              <strong>📍 Office:</strong> 
              Om Darsh Heights, Kalyan-421306
            </div>
          </div>

          <div class="features">
            <h3 style="color: #333; margin-bottom: 12px; font-size: 16px;">🌟 Why Choose Alberow?</h3>
            <ul>
              <li>✅ <strong>Expert Team:</strong> Skilled developers with proven track record</li>
              <li>✅ <strong>Custom Solutions:</strong> Tailored to your specific business needs</li>
              <li>✅ <strong>24/7 Support:</strong> Ongoing maintenance and technical support</li>
              <li>✅ <strong>Transparent Process:</strong> Clear communication and competitive pricing</li>
              <li>✅ <strong>Modern Technology:</strong> Latest tools and best practices</li>
              <li>✅ <strong>Fast Delivery:</strong> Quick turnaround without compromising quality</li>
            </ul>
          </div>

          <p style="font-size: 14px; margin: 18px 0;">
            In the meantime, feel free to explore our portfolio and services, or reach out to us 
            directly if you have any urgent questions.
          </p>
          
          <div style="text-align: center;">
            <a href="https://alberow.com" class="cta-button">🌐 Visit Our Website</a>
          </div>

          <div class="social-links" style="text-align: center;">
            <p style="margin-bottom: 8px; color: #666; font-size: 13px;">Follow us on social media:</p>
            <a href="#">📘 Facebook</a>
            <a href="#">📸 Instagram</a>
            <a href="#">💼 LinkedIn</a>
            <a href="#">🐦 Twitter</a>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>🚀 ALBEROW - Digital Innovation Partner</strong></p>
          <p style="margin: 8px 0;">This is an automated response. Please do not reply to this email.</p>
          <p>For immediate assistance, contact us at <a href="mailto:hello@alberow.com" style="color: #9333ea;">hello@alberow.com</a></p>
          <p style="margin-top: 12px;">© 2024 Alberow. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

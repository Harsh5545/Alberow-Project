interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

// Enhanced admin email template with better styling
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
        }
        .container { 
          max-width: 600px; 
          margin: 20px auto; 
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); 
          color: white; 
          padding: 30px 20px; 
          text-align: center;
        }
        .header h1 { 
          font-size: 24px; 
          margin-bottom: 8px;
          font-weight: 700;
        }
        .header p { 
          opacity: 0.9; 
          font-size: 16px;
        }
        .content { 
          padding: 30px 20px; 
        }
        .field { 
          margin-bottom: 20px; 
          border-bottom: 1px solid #eee;
          padding-bottom: 15px;
        }
        .field:last-child { 
          border-bottom: none; 
          margin-bottom: 0;
        }
        .label { 
          font-weight: 600; 
          color: #555; 
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          display: block;
        }
        .value { 
          font-size: 16px;
          color: #333;
          background: #f8f9fa;
          padding: 12px 16px;
          border-radius: 8px;
          border-left: 4px solid #9333ea;
        }
        .priority { 
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 8px;
          padding: 15px;
          margin: 20px 0;
        }
        .priority-title {
          color: #856404;
          font-weight: 600;
          margin-bottom: 5px;
        }
        .footer { 
          background: #f8f9fa;
          padding: 20px; 
          text-align: center; 
          color: #666; 
          font-size: 14px;
          border-top: 1px solid #eee;
        }
        .timestamp {
          background: #e3f2fd;
          padding: 10px;
          border-radius: 6px;
          font-size: 14px;
          color: #1565c0;
          text-align: center;
          margin: 15px 0;
        }
        .action-buttons {
          text-align: center;
          margin: 25px 0;
        }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          background: linear-gradient(135deg, #9333ea, #ec4899);
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          margin: 0 10px;
        }
        @media (max-width: 600px) {
          .container { margin: 10px; }
          .content { padding: 20px 15px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 New Lead Alert!</h1>
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

// Enhanced customer thank you email template
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
        }
        .container { 
          max-width: 600px; 
          margin: 20px auto; 
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); 
          color: white; 
          padding: 40px 20px; 
          text-align: center;
        }
        .logo { 
          font-size: 28px; 
          font-weight: 800; 
          margin-bottom: 10px;
          letter-spacing: 2px;
        }
        .header h1 { 
          font-size: 24px; 
          margin-bottom: 10px;
          font-weight: 600;
        }
        .header p { 
          opacity: 0.9; 
          font-size: 16px;
        }
        .content { 
          padding: 40px 30px; 
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
          padding: 25px; 
          border-radius: 12px; 
          margin: 25px 0;
          border: 1px solid #e5e7eb;
        }
        .contact-item { 
          display: flex; 
          align-items: center; 
          margin-bottom: 12px;
          font-size: 15px;
        }
        .contact-item:last-child { margin-bottom: 0; }
        .contact-item strong { 
          min-width: 100px; 
          color: #9333ea;
        }
        .contact-item a {
          color: #9333ea;
          text-decoration: none;
        }
        .features {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .features ul {
          list-style: none;
          padding: 0;
        }
        .features li {
          padding: 8px 0;
          font-size: 15px;
        }
        .cta-button { 
          display: inline-block; 
          background: linear-gradient(135deg, #9333ea, #ec4899); 
          color: white; 
          padding: 15px 30px; 
          text-decoration: none; 
          border-radius: 8px; 
          margin: 25px 0;
          font-weight: 600;
          font-size: 16px;
        }
        .footer { 
          background: #f8f9fa;
          padding: 25px; 
          text-align: center; 
          color: #666; 
          font-size: 14px;
          border-top: 1px solid #eee;
        }
        .social-links {
          margin: 20px 0;
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          color: #9333ea;
          text-decoration: none;
        }
        @media (max-width: 600px) {
          .container { margin: 10px; }
          .content { padding: 30px 20px; }
          .contact-info { padding: 20px; }
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
          <h2 style="color: #333; margin-bottom: 20px;">What happens next?</h2>
          <p style="font-size: 16px; margin-bottom: 20px;">
            Our expert team will carefully review your project requirements and get back to you within 
            <span class="highlight">24 hours</span>. We're committed to providing you with innovative 
            solutions that exceed your expectations.
          </p>
          
          <div class="contact-info">
            <h3 style="color: #9333ea; margin-bottom: 15px;">📞 Need Immediate Assistance?</h3>
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
            <h3 style="color: #333; margin-bottom: 15px;">🌟 Why Choose Alberow?</h3>
            <ul>
              <li>✅ <strong>Expert Team:</strong> Skilled developers with proven track record</li>
              <li>✅ <strong>Custom Solutions:</strong> Tailored to your specific business needs</li>
              <li>✅ <strong>24/7 Support:</strong> Ongoing maintenance and technical support</li>
              <li>✅ <strong>Transparent Process:</strong> Clear communication and competitive pricing</li>
              <li>✅ <strong>Modern Technology:</strong> Latest tools and best practices</li>
              <li>✅ <strong>Fast Delivery:</strong> Quick turnaround without compromising quality</li>
            </ul>
          </div>

          <p style="font-size: 16px; margin: 20px 0;">
            In the meantime, feel free to explore our portfolio and services, or reach out to us 
            directly if you have any urgent questions.
          </p>
          
          <div style="text-align: center;">
            <a href="https://alberow.com" class="cta-button">🌐 Visit Our Website</a>
          </div>

          <div class="social-links" style="text-align: center;">
            <p style="margin-bottom: 10px; color: #666;">Follow us on social media:</p>
            <a href="#">📘 Facebook</a>
            <a href="#">📸 Instagram</a>
            <a href="#">💼 LinkedIn</a>
            <a href="#">🐦 Twitter</a>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>🚀 ALBEROW - Digital Innovation Partner</strong></p>
          <p style="margin: 10px 0;">This is an automated response. Please do not reply to this email.</p>
          <p>For immediate assistance, contact us at <a href="mailto:hello@alberow.com" style="color: #9333ea;">hello@alberow.com</a></p>
          <p style="margin-top: 15px;">© 2024 Alberow. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

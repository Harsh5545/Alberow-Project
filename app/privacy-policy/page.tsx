import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Alberow",
  description: "Learn about how Alberow collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Last Updated: May 5, 2023</p>

              <h2>Introduction</h2>
              <p>
                Alberow ("we," "our," or "us") respects your privacy and is committed to protecting your personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access the site or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>

              <h3>Personal Data</h3>
              <p>
                When you visit our website or use our services, we may collect personally identifiable information, such
                as your name, email address, postal address, phone number, and other information that you voluntarily
                provide to us when you contact us, fill out forms, or engage with our services.
              </p>

              <h3>Usage Data</h3>
              <p>
                We may automatically collect certain information about how you interact with our website, including your
                IP address, browser type, operating system, referring URLs, access times, pages viewed, links clicked,
                and other browsing information.
              </p>

              <h3>Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. Cookies are files with small amounts of data that may include an anonymous unique
                identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>

              <h2>How We Use Your Information</h2>
              <p>We may use the information we collect about you for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize and improve your experience on our website</li>
              </ul>

              <h2>Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be
                disclosed as follows:
              </p>

              <h3>By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to
                investigate or remedy potential violations of our policies, or to protect the rights, property, and
                safety of others, we may share your information as permitted or required by any applicable law, rule, or
                regulation.
              </p>

              <h3>Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf,
                including payment processing, data analysis, email delivery, hosting services, customer service, and
                marketing assistance.
              </p>

              <h3>Marketing Communications</h3>
              <p>
                With your consent, or with an opportunity for you to withdraw consent, we may share your information
                with third parties for marketing purposes.
              </p>

              <h3>Business Transfers</h3>
              <p>
                If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your personal
                information may be transferred.
              </p>

              <h2>Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal
                information from children under 16. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
                Policy periodically for any changes.
              </p>

              <h2>Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <p>
                Alberow
                <br />
                123 Tech Street
                <br />
                Digital City, 10001
                <br />
                Email: info@alberow.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

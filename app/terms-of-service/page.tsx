import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Terms of Service | Alberow",
  description: "Read the terms and conditions governing the use of Alberow's website and services.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Last Updated: May 5, 2023</p>
              
              <h2>1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Alberow ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
              <p>
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
              
              <h2>2. Services</h2>
              <p>
                Alberow provides web development, SEO optimization, application development, portfolio development, social media marketing, and social media management services. The specific services to be provided will be detailed in a separate agreement or statement of work between Alberow and the client.
              </p>
              
              <h2>3. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
              <p>
                The Content and Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
              
              <h2>4. User Representations</h2>
              <p>By using the Site, you represent and warrant that:</p>
              <ol>
                <li>All registration information you submit will be true, accurate, current, and complete;</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service;</li>
                <li>You are not a minor in the jurisdiction in which you reside;</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise;</li>
                <li>You will not use the Site for any illegal or unauthorized purpose;</li>
                <li>Your use of the Site will not violate any applicable law or regulation.</li>
              </ol>
              
              <h2>5. Prohibited Activities</h2>
              <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
              <p>As a user of the Site, you agree not to:</p>
              <ol>
                <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
                <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>\

"use client"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: "Email",
      details: "info@alberow.com",
      action: "mailto:info@alberow.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-pink-600 dark:text-pink-400" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: "Address",
      details: "123 Tech Street, Digital City, 10001",
      action: "https://maps.google.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-pink-600 dark:text-pink-400" />,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 6PM",
      action: "",
    },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.action}
              className={`block p-6 rounded-lg border border-border/50 bg-background hover:shadow-md transition-shadow ${
                !item.action && "pointer-events-none"
              }`}
              target={item.action.startsWith("http") ? "_blank" : undefined}
              rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.details}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

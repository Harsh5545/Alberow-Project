"\"use client"

import { motion } from "framer-motion"

export function ContactMap() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-lg h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.210697743606!2d-73.9857082845831!3d40.74844044039796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b311d3dd%3A0x294039c494598586!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1687359024949!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alberow Location"
          />
        </motion.div>
      </div>
    </section>
  )
}
\
"

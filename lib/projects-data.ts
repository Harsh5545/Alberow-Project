export interface Project {
  id: string
  title: string
  category: string
  image: string
  description: string
  client: string
  year: string
  technologies: string[]
  challenge: string
  solution: string
  results: string
  images: string[]
  liveUrl: string
  githubUrl?: string
  socialLinks?: {
    twitter?: string
    instagram?: string
    linkedin?: string
    facebook?: string
  }
  type: "one-page" | "multi-page" | "application" | "portfolio"
  features: string[]
  stats?: {
    icon: string
    value: string
    label: string
  }[]
}

export const projects: Project[] = [
  {
    id: "harikrushna-multimedia",
    title: "hariKrushna Multimedia",
    category: "Web Development",
    image: "/assets/HKM.png",
    description:
      "A comprehensive multimedia services website showcasing creative solutions and digital marketing services.",
    client: "hariKrushna Multimedia",
    year: "2024",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    challenge:
      "Create a modern, engaging website that showcases multimedia services while maintaining fast performance and professional aesthetics.",
    solution:
      "Developed a responsive website with smooth animations, service showcases, and optimized performance using Next.js and modern web technologies.",
    results: "Improved online presence with enhanced user engagement and professional brand representation.",
    images: [
      "/assets/Hkm1.png",
      "/assets/Hkm2.png",
      "/assets/Hkm3.png",
    ],
    liveUrl: "https://harikrushnamultimedia.com",
    type: "multi-page",
    features: ["Service Showcase", "Portfolio Gallery", "Contact Forms", "Responsive Design", "SEO Optimized"],
    socialLinks: {
      instagram: "https://instagram.com/harikrushnamultimedia",
      facebook: "https://facebook.com/harikrushnamultimedia",
    },
  },
  {
    id: "modern-mannerism",
    title: "Modern Mannerism",
    category: "Web Development",
    image: "/assets/modern.png",
    description:
      "A sophisticated lifestyle and fashion website with modern design aesthetics and user-friendly navigation.",
    client: "Modern Mannerism",
    year: "2024",
    technologies: ["React", "Next.js", "Styled Components", "Framer Motion"],
    challenge:
      "Design a contemporary website that reflects modern lifestyle trends while ensuring excellent user experience across all devices.",
    solution:
      "Created a visually striking website with smooth animations, intuitive navigation, and responsive design that captures the essence of modern lifestyle.",
    results: "Enhanced brand visibility with improved user engagement and modern digital presence.",
    images: [
      "/assets/modern1.png",
      "/assets/modern2.png",
      "/assets/modern3.png",
    ],
    liveUrl: "https://www.modernmannerism.com",
    type: "multi-page",
    features: ["Modern Design", "Lifestyle Content", "Responsive Layout", "Social Integration", "Content Management"],
    socialLinks: {
      instagram: "https://instagram.com/modernmannerism",
      twitter: "https://twitter.com/modernmannerism",
    },
  },
  {
    id: "shreeji-ecommerce",
    title: "Shreeji E-commerce Platform",
    category: "E-commerce",
    image: "/assets/shreeji.png",
    description:
      "A comprehensive e-commerce platform for business operations with modern interface, product catalog, and secure payment processing.",
    client: "Shreeji Business",
    year: "2024",
    technologies: ["React", "Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    challenge:
      "Develop a robust e-commerce platform that handles product management, secure payments, and provides an intuitive shopping experience.",
    solution:
      "Built a full-stack e-commerce solution with product catalog, shopping cart, secure checkout, and admin dashboard for business management.",
    results: "Streamlined online sales operations with improved customer experience and increased revenue.",
    images: [
      "/assets/shree1.png",
      "/assets/shree2.png",
      "/assets/shree3.png",
    ],
    liveUrl: "https://shreeji-appp.vercel.app",
    type: "multi-page",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Secure Payments",
      "User Accounts",
      "Order Management",
      "Admin Dashboard",
    ],
    stats: [
      { icon: "shopping-cart", value: "500+", label: "Products" },
      { icon: "users", value: "200+", label: "Customers" },
      { icon: "trending-up", value: "45%", label: "Sales Increase" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  },
  {
    id: "sunita-kajale-portfolio",
    title: "Sunita Kajale - Post Office Agent",
    category: "Portfolio",
    image: "/assets/sunita.png",
    description:
      "A professional one-page portfolio website for a post office agent showcasing services and contact information.",
    client: "Sunita Kajale",
    year: "2024",
    technologies: ["Next.js", "Tailwind CSS", "React", "Vercel"],
    challenge:
      "Create a professional online presence for postal services with clear service information and easy contact methods in a single-page format.",
    solution:
      "Developed a clean, professional one-page website with service listings, contact forms, and location information optimized for local search.",
    results: "Established strong online presence with improved customer reach and service accessibility.",
    images: [
      "/assets/sunita1.png",
      "/assets/sunita2.png",
      "/assets/sunita3.png",
    ],
    liveUrl: "https://v0-sunita-kajale-website.vercel.app",
    type: "one-page",
    features: ["Service Information", "Contact Forms", "Location Details", "Professional Design", "Mobile Optimized"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/sunita-kajale",
    },
  },
  {
    id: "nasik-bhel-bhandar",
    title: "Nasik Bhel Bhandar",
    category: "E-commerce",
    image: "/assets/bhandar.png",
    description:
      "A vibrant one-page e-commerce website for traditional Indian street food with online ordering capabilities and menu showcase.",
    client: "Nasik Bhel Bhandar",
    year: "2024",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe Integration"],
    challenge:
      "Create an appetizing one-page e-commerce site for a traditional food business that captures street food culture while enabling online orders.",
    solution:
      "Designed a colorful, engaging one-page website with mouth-watering food imagery, menu displays, and integrated ordering system.",
    results: "Increased online orders by 60% and expanded customer base beyond local area.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    liveUrl: "https://v0-bhel-bhaata-website.vercel.app",
    type: "one-page",
    features: [
      "Menu Display",
      "Online Ordering",
      "Food Gallery",
      "Location Info",
      "Customer Reviews",
      "Payment Integration",
    ],
    stats: [
      { icon: "shopping-cart", value: "60%", label: "Order Increase" },
      { icon: "star", value: "4.9", label: "Customer Rating" },
      { icon: "users", value: "1000+", label: "Happy Customers" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  },
    {
    id: "firesafe",
    title: "FireSafe",
    category: "Web Development",
    image: "/assets/ai/fire.png",
    description:
      "A modern, informative website for FireSafe, a fire safety and protection company, showcasing their services, certifications, and client portfolio.",
    client: "FireSafe",
    year: "2024",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    challenge:
      "Build a professional online presence to highlight fire safety solutions, certifications, and trusted client partnerships.",
    solution:
      "Developed a responsive, visually engaging website with service overviews, certification displays, and a portfolio of completed projects.",
    results: "Enhanced credibility, improved lead generation, and established FireSafe as a trusted fire protection partner.",
    images: [
      "/assets/ai/fire1.png",
      "/assets/ai/fire2.png",
      "/assets/ai/fire3.png",
    ],
    liveUrl: "https://fireextensionsafty.vercel.app/",
    type: "multi-page",
    features: [
      "Service Overview",
      "Certifications Display",
      "Client Portfolio",
      "Contact Forms",
      "Responsive Design",
      "SEO Optimized"
    ],
    stats: [
      { icon: "shield", value: "100+", label: "Sites Protected" },
      { icon: "award", value: "10+", label: "Certifications" },
      { icon: "users", value: "50+", label: "Corporate Clients" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  },
  {
    id: "diamond-beauty-parlour",
    title: "Diamond Beauty Parlour",
    category: "One-page",
    image: "/assets/diamond.png",
    description:
      "An elegant beauty parlour website showcasing services, treatments, and booking system with luxurious design.",
    client: "Diamond Beauty Parlour",
    year: "2024",
    technologies: ["Next.js", "React", "Tailwind CSS", "Booking System"],
    challenge:
      "Design a luxurious and elegant website that reflects the premium nature of beauty services while providing easy booking functionality.",
    solution:
      "Created a sophisticated website with elegant design, service galleries, treatment information, and integrated booking system.",
    results: "Increased appointment bookings by 45% and enhanced brand perception as a premium beauty destination.",
    images: [
      "/assets/diamond1.png",
      "/assets/diamond2.png",
      "/assets/diamond3.png",
    ],
    liveUrl: "https://dimond.vercel.app",
    type: "multi-page",
    features: ["Service Gallery", "Online Booking", "Treatment Info", "Elegant Design", "Customer Testimonials"],
    stats: [
      { icon: "calendar", value: "45%", label: "Booking Increase" },
      { icon: "star", value: "4.7", label: "Service Rating" },
      { icon: "users", value: "300+", label: "Regular Clients" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/diamondbeautyparlour",
      facebook: "https://facebook.com/diamondbeautyparlour",
    },
  },
]

export const categories = ["All", "Web Development", "E-commerce", "Portfolio","One-page", "Social Media"]

export const getProjectsByCategory = (category: string) => {
  if (category === "All") return projects
  return projects.filter((project) => project.category === category)
}

export const getProjectsByType = (type: string) => {
  return projects.filter((project) => project.type === type)
}

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id)
}

// Helper functions for specific project types
export const getEcommerceProjects = () => {
  return projects.filter((project) => project.category === "E-commerce")
}

export const getOnePageProjects = () => {
  return projects.filter((project) => project.type === "one-page")
}

export const getPortfolioProjects = () => {
  return projects.filter((project) => project.category === "Portfolio")
}

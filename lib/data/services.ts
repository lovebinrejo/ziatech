export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  brands?: string[];
}

export const services: Service[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Website Development",
    shortDescription:
      "Build a secure, mobile-friendly online store with product management, checkout, and payment integration.",
    fullDescription:
      "We design and launch e-commerce websites that convert visitors into customers. From product setup to payment integration, every detail is built for growth.",
    icon: "Download",
    features: [
      "Responsive storefront design",
      "Payment gateway integration",
      "Product and inventory setup",
      "SEO-friendly structure",
      "Analytics and tracking",
    ],
    brands: ["WooCommerce", "Shopify", "Magento", "Squarespace"],
  },
  {
    id: "consultancy",
    title: "IT Consultancy & Strategy",
    shortDescription:
      "Assess your technology needs and create a clear roadmap for website, hardware, and office IT improvements.",
    fullDescription:
      "We help business owners choose the right software, hardware, and infrastructure for long-term success. Our consultancy aligns technology with your goals.",
    icon: "BookOpen",
    features: [
      "Technology strategy planning",
      "System architecture review",
      "Process optimisation",
      "Scalability recommendations",
      "Budget planning",
    ],
    brands: ["Microsoft 365", "Google Workspace", "Cisco", "Adobe"],
  },
  {
    id: "hardware",
    title: "Hardware Procurement & Installation",
    shortDescription:
      "Source and install computers, printers, routers, and peripherals for reliable business operations.",
    fullDescription:
      "We procure, configure, and deploy business hardware that fits your workflow and budget, from PCs and laptops to printers and network equipment.",
    icon: "HardDrive",
    features: [
      "Desktop & laptop setup",
      "Printer and scanner installation",
      "Hardware sourcing",
      "Device configuration",
      "Warranty guidance",
    ],
    brands: ["HP", "Dell", "Lenovo", "Apple"],
  },
  {
    id: "network",
    title: "Network & WiFi Setup",
    shortDescription:
      "Install secure wired and wireless networks so your team can collaborate without interruptions.",
    fullDescription:
      "We design and implement office networks and WiFi systems with speed, security, and coverage in mind, ensuring smooth day-to-day operations.",
    icon: "Wifi",
    features: [
      "WiFi planning and installation",
      "Router and switch configuration",
      "Network security setup",
      "Guest network deployment",
      "Connectivity testing",
    ],
    brands: ["Cisco", "TP-Link", "Netgear", "Ubiquiti"],
  },
  {
    id: "email",
    title: "Email & Productivity Setup",
    shortDescription:
      "Set up email, collaboration tools, and secure access for teams using Microsoft or Google platforms.",
    fullDescription:
      "We configure business email solutions, productivity suites, and user access so your team can communicate and collaborate efficiently.",
    icon: "Mail",
    features: [
      "Microsoft 365 setup",
      "Google Workspace migration",
      "Calendar and contact sync",
      "Mailbox security",
      "Team collaboration tools",
    ],
    brands: ["Microsoft", "Google", "Slack", "Dropbox"],
  },
  {
    id: "backup",
    title: "Data Backup & Recovery",
    shortDescription:
      "Protect your business data with automated backups and fast recovery plans.",
    fullDescription:
      "We implement backup systems and recovery workflows to keep your data safe from hardware failure, accidental deletion, or cyber incidents.",
    icon: "DatabaseBackup",
    features: [
      "Cloud and local backup",
      "Disaster recovery planning",
      "Scheduled automation",
      "Version history",
      "Restore testing",
    ],
    brands: ["Microsoft Azure", "Google Cloud", "AWS", "Backblaze"],
  },
];

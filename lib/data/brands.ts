export interface Brand {
  name: string;
  slug: string;
  category: "technology-partner";
  description: string;
  color: string;
}

export const brands: Brand[] = [
  {
    name: "Microsoft",
    slug: "microsoft",
    category: "technology-partner",
    description: "Microsoft 365, Azure and business productivity solutions.",
    color: "#00A4EF",
  },
  {
    name: "Apple",
    slug: "apple",
    category: "technology-partner",
    description: "Mac hardware and software support for modern offices.",
    color: "#A3AAAE",
  },
  {
    name: "HP",
    slug: "hp",
    category: "technology-partner",
    description: "Reliable computers, printers, and workstation deployments.",
    color: "#0096D6",
  },
  {
    name: "Dell",
    slug: "dell",
    category: "technology-partner",
    description: "Enterprise desktops, laptops, and network solutions.",
    color: "#0076D6",
  },
  {
    name: "Lenovo",
    slug: "lenovo",
    category: "technology-partner",
    description: "Business-grade laptops, servers, and maintenance services.",
    color: "#E2231A",
  },
  {
    name: "Cisco",
    slug: "cisco",
    category: "technology-partner",
    description: "Secure networks, routing, switching, and connectivity.",
    color: "#1BA0D8",
  },
  {
    name: "Samsung",
    slug: "samsung",
    category: "technology-partner",
    description: "Displays, mobile devices, and storage solutions.",
    color: "#1428A0",
  },
  {
    name: "Canon",
    slug: "canon",
    category: "technology-partner",
    description: "Office printers, scanners, and imaging hardware.",
    color: "#E60012",
  },
  {
    name: "Intel",
    slug: "intel",
    category: "technology-partner",
    description: "High-performance processors for desktops and servers.",
    color: "#0F6ECD",
  },
  {
    name: "Google",
    slug: "google",
    category: "technology-partner",
    description: "Business tools, cloud services, and productivity platforms.",
    color: "#4285F4",
  },
  {
    name: "Adobe",
    slug: "adobe",
    category: "technology-partner",
    description: "Creative and marketing software for digital businesses.",
    color: "#FF0000",
  },
  {
    name: "Seagate",
    slug: "seagate",
    category: "technology-partner",
    description: "Storage solutions, backup drives, and data protection.",
    color: "#0072C6",
  },
];

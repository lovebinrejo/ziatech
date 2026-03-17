export interface Brand {
  name: string;
  slug: string;
  category: "parts-catalogue";
  description: string;
  color: string;
}

export const brands: Brand[] = [
  {
    name: "Mercedes-Benz",
    slug: "mercedes-benz",
    category: "parts-catalogue",
    description: "Mercedes-Benz EPC spare parts catalogue",
    color: "#00ADEF",
  },
  {
    name: "MAN",
    slug: "man",
    category: "parts-catalogue",
    description: "MAN spare parts catalogue installation",
    color: "#E3001B",
  },
  {
    name: "Volvo",
    slug: "volvo",
    category: "parts-catalogue",
    description: "Volvo spare parts catalogue setup",
    color: "#003057",
  },
  {
    name: "Renault",
    slug: "renault",
    category: "parts-catalogue",
    description: "Renault Trucks spare parts catalogue",
    color: "#EFDF00",
  },
  {
    name: "Scania",
    slug: "scania",
    category: "parts-catalogue",
    description: "Scania spare parts catalogue setup",
    color: "#041E42",
  },
  {
    name: "Mantis",
    slug: "mantis",
    category: "parts-catalogue",
    description: "Mantis spare parts catalogue installation",
    color: "#2D7D46",
  },
  {
    name: "JCB",
    slug: "jcb",
    category: "parts-catalogue",
    description: "JCB spare parts catalogue setup",
    color: "#F5A800",
  },
  {
    name: "Hino",
    slug: "hino",
    category: "parts-catalogue",
    description: "Hino spare parts catalogue installation",
    color: "#CC0000",
  },
  {
    name: "Hyundai",
    slug: "hyundai",
    category: "parts-catalogue",
    description: "Hyundai spare parts catalogue setup",
    color: "#002C5F",
  },
  {
    name: "Caterpillar",
    slug: "caterpillar",
    category: "parts-catalogue",
    description: "Caterpillar SIS parts catalogue setup",
    color: "#FFCD11",
  },
  {
    name: "Komatsu",
    slug: "komatsu",
    category: "parts-catalogue",
    description: "Komatsu spare parts catalogue installation",
    color: "#FFD700",
  },
  {
    name: "Truck Heavy",
    slug: "truck-heavy",
    category: "parts-catalogue",
    description: "Heavy truck spare parts catalogue setup",
    color: "#4B5563",
  },
];

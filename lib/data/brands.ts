export interface Brand {
  name: string;
  slug: string;
  category: "os" | "office" | "billing" | "catalogue" | "hardware" | "backup";
  description: string;
  color: string;
}

export const brands: Brand[] = [
  {
    name: "Windows 10/11",
    slug: "windows",
    category: "os",
    description: "Clean OS installation, upgrades & driver setup",
    color: "#0078D4",
  },
  {
    name: "Microsoft 365",
    slug: "microsoft-365",
    category: "office",
    description: "Outlook, Word, Excel & Teams setup",
    color: "#D83B01",
  },
  {
    name: "TecDoc",
    slug: "tecdoc",
    category: "catalogue",
    description: "Auto parts catalogue installation & licensing",
    color: "#005BAA",
  },
  {
    name: "HaynesPro",
    slug: "haynespro",
    category: "catalogue",
    description: "Repair & parts catalogue platform setup",
    color: "#E31E24",
  },
  {
    name: "Tally ERP",
    slug: "tally",
    category: "billing",
    description: "Accounting & billing software configuration",
    color: "#0057A8",
  },
  {
    name: "QuickBooks",
    slug: "quickbooks",
    category: "billing",
    description: "Invoicing & inventory management setup",
    color: "#2CA01C",
  },
  {
    name: "HP",
    slug: "hp",
    category: "hardware",
    description: "Printer, scanner & laptop setup & repair",
    color: "#0096D6",
  },
  {
    name: "Epson",
    slug: "epson",
    category: "hardware",
    description: "Printer driver installation & network config",
    color: "#003087",
  },
  {
    name: "Canon",
    slug: "canon",
    category: "hardware",
    description: "Printer & scanner driver & network setup",
    color: "#CC0000",
  },
  {
    name: "Dell",
    slug: "dell",
    category: "hardware",
    description: "Desktop & laptop supply, setup & repair",
    color: "#007DB8",
  },
  {
    name: "Lenovo",
    slug: "lenovo",
    category: "hardware",
    description: "Laptop & desktop setup, upgrade & support",
    color: "#E2231A",
  },
  {
    name: "Acronis",
    slug: "acronis",
    category: "backup",
    description: "Data backup & recovery solution setup",
    color: "#EF4444",
  },
];

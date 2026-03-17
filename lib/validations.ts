import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number too long")
    .regex(/^[+\d\s\-()]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  brand: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const SERVICE_OPTIONS = [
  { value: "software-installation",  label: "Software Installation" },
  { value: "os-upgrade",             label: "OS Upgrade / Configuration" },
  { value: "diagnostics",            label: "Brand Diagnostics" },
  { value: "tecdoc",                 label: "TecDoc Setup" },
  { value: "iveco-easy",             label: "Iveco EASY Software" },
  { value: "printer-software",       label: "Printer Software Support" },
  { value: "outlook-setup",          label: "Outlook / Email Configuration" },
  { value: "other",                  label: "Other / General Enquiry" },
] as const;

export const BRAND_OPTIONS = [
  { value: "mercedes-benz", label: "Mercedes-Benz" },
  { value: "volvo",         label: "Volvo" },
  { value: "scania",        label: "Scania" },
  { value: "renault",       label: "Renault" },
  { value: "man",           label: "MAN" },
  { value: "hino",          label: "Hino" },
  { value: "hyundai",       label: "Hyundai" },
  { value: "jcb",           label: "JCB" },
  { value: "caterpillar",   label: "Caterpillar" },
  { value: "iveco",         label: "Iveco" },
  { value: "tecdoc",        label: "TecDoc" },
  { value: "other",         label: "Other" },
] as const;

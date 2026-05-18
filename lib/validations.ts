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
  { value: "ecommerce-websites",      label: "E-Commerce Websites" },
  { value: "it-consultancy",          label: "IT Consultancy" },
  { value: "technical-installation",  label: "Technical Installation" },
  { value: "hardware-supply",         label: "Computer Equipment Supply" },
  { value: "email-productivity",      label: "Email & Productivity Setup" },
  { value: "backup-recovery",         label: "Backup & Recovery" },
  { value: "other",                   label: "Other / General Enquiry" },
] as const;

export const BRAND_OPTIONS = [
  { value: "microsoft-365", label: "Microsoft 365" },
  { value: "google-workspace", label: "Google Workspace" },
  { value: "apple", label: "Apple" },
  { value: "hp", label: "HP" },
  { value: "dell", label: "Dell" },
  { value: "cisco", label: "Cisco" },
  { value: "ubiquiti", label: "Ubiquiti" },
  { value: "lenovo", label: "Lenovo" },
  { value: "other", label: "Other" },
] as const;

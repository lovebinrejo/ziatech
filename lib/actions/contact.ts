"use server";

import { Resend } from "resend";
import { contactSchema, type ContactFormData } from "@/lib/validations";

const resendApiKey = process.env.RESEND_API_KEY ?? "";
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const contactEmail = process.env.CONTACT_EMAIL ?? "info@ziatechsolutions.ae";
const companyName  = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "ZIA Tech Solutions";

export type ContactActionResult =
  | { success: true; message: string }
  | { success: false; errors: Partial<Record<keyof ContactFormData | "root", string>> };

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactActionResult> {
  // Validate
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    const errors: Partial<Record<keyof ContactFormData | "root", string>> = {};
    parsed.error.issues.forEach((issue) => {
      const key = issue.path[0] as keyof ContactFormData;
      errors[key] = issue.message;
    });
    return { success: false, errors };
  }

  const { name, email, phone, service, brand, message } = parsed.data;

  if (!resend) {
    return {
      success: false,
      errors: {
        root:
          "Email service is currently unavailable. Please contact us directly via WhatsApp or email.",
      },
    };
  }

  try {
    // Send notification to company
    await resend.emails.send({
      from:    `Website Enquiry <enquiry@${new URL(`https://${contactEmail.split("@")[1]}`).hostname}>`,
      to:      [contactEmail],
      replyTo: email,
      subject: `New Enquiry: ${service} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1E3A8A;padding:24px;border-radius:8px 8px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">${companyName} — New Enquiry</h1>
          </div>
          <div style="background:#f9fafb;padding:24px;border:1px solid #e5e7eb;border-top:0;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-weight:bold;width:120px">Name</td><td>${name}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:bold">Phone</td><td>${phone}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold">Service</td><td>${service}</td></tr>
              ${brand ? `<tr><td style="padding:8px 0;font-weight:bold">Brand</td><td>${brand}</td></tr>` : ""}
              <tr><td style="padding:8px 0;font-weight:bold;vertical-align:top">Message</td><td>${message.replace(/\n/g, "<br>")}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    // Send auto-reply to customer
    await resend.emails.send({
      from:    `${companyName} <noreply@${new URL(`https://${contactEmail.split("@")[1]}`).hostname}>`,
      to:      [email],
      subject: `We received your enquiry — ${companyName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1E3A8A;padding:24px;border-radius:8px 8px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">${companyName}</h1>
          </div>
          <div style="background:#fff;padding:24px;border:1px solid #e5e7eb;border-top:0;border-radius:0 0 8px 8px">
            <p>Dear ${name},</p>
            <p>Thank you for contacting ${companyName}. We have received your enquiry and will get back to you within <strong>one business day</strong>.</p>
            <p>For urgent support, you can also reach us on WhatsApp — the button on our website will connect you instantly.</p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>
            <p style="font-size:13px;color:#6b7280">This is an automated acknowledgement. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    });

    return { success: true, message: "Thank you! We will get back to you within one business day." };
  } catch (err) {
    console.error("Email send error:", err);
    return {
      success: false,
      errors: { root: "Failed to send your message. Please try WhatsApp or call us directly." },
    };
  }
}

"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

// Simple inline hook form alternative using React state
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSchema, type ContactFormData, SERVICE_OPTIONS, BRAND_OPTIONS } from "@/lib/validations";
import { submitContactForm } from "@/lib/actions/contact";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message?: string } | null>(null);
  const [serverErrors, setServerErrors] = useState<Partial<Record<string, string>>>({});

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setServerErrors({});
    startTransition(async () => {
      const res = await submitContactForm(data);
      if (res.success) {
        setResult({ success: true, message: res.message });
        reset();
      } else {
        setServerErrors(res.errors ?? {});
        setResult({ success: false });
      }
    });
  };

  if (result?.success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle className="w-16 h-16 text-teal-600" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          {result.message ?? "We will get back to you within one business day."}
        </p>
        <Button variant="outline" onClick={() => setResult(null)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Server-level error */}
      {serverErrors.root && (
        <div className="flex items-center gap-2 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {serverErrors.root}
        </div>
      )}

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone / WhatsApp *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+91 98765 43210"
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Service + Brand */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="service">Service Needed *</Label>
          <Select onValueChange={(v) => setValue("service", v, { shouldValidate: true })}>
            <SelectTrigger id="service" aria-invalid={!!errors.service}>
              <SelectValue placeholder="Select a service…" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-xs text-red-500">{errors.service.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="brand">Vehicle / Software Brand</Label>
          <Select onValueChange={(v) => setValue("brand", v)}>
            <SelectTrigger id="brand">
              <SelectValue placeholder="Select a brand…" />
            </SelectTrigger>
            <SelectContent>
              {BRAND_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Describe what you need — software name, version, issue details…"
          rows={5}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Enquiry"
        )}
      </Button>

      <p className="text-xs text-center text-gray-400">
        We typically respond within one business day. For urgent help, use the WhatsApp button.
      </p>
    </form>
  );
}

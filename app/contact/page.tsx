"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const serviceOptions = [
  "Bookkeeping",
  "Personal Tax Return",
  "Corporate Tax Return",
  "Tax Planning",
  "Business Management",
  "Bookkeeping Training",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    try {
      const data = new FormData(e.currentTarget);
      const body = new URLSearchParams(
        Array.from(data.entries(), ([key, value]) => [key, String(value)])
      );
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-brand-dark text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors";

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-accent" />
            Let&apos;s Talk
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mt-2">
            Get In Touch
          </h1>
          <p className="mt-5 text-white/60 text-xl max-w-xl leading-relaxed">
            Book a free consultation or reach out with any questions. We
            typically respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">
                  Contact Details
                </h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-dark flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark text-sm mb-0.5">
                        Location
                      </div>
                      <div className="text-slate-500 text-sm">
                        Sechelt, BC, Canada
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-dark flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark text-sm mb-0.5">
                        Phone
                      </div>
                      <a
                        href="tel:+16040000000"
                        className="text-slate-500 text-sm hover:text-accent transition-colors"
                      >
                        (604) 000-0000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-dark flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark text-sm mb-0.5">
                        Email
                      </div>
                      <a
                        href="mailto:info@razoraccounting.com"
                        className="text-slate-500 text-sm hover:text-accent transition-colors"
                      >
                        info@razoraccounting.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-dark flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark text-sm mb-0.5">
                        Hours
                      </div>
                      <div className="text-slate-500 text-sm space-y-0.5">
                        <div>Monday – Friday: 9:00 AM – 5:00 PM</div>
                        <div>Saturday – Sunday: Closed</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-brand-dark p-6 text-white">
                <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                  Free Consultation
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Not sure if Razor Accounting is the right fit? Book a free
                  15-minute call — no obligation, no pressure.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 border border-slate-100 text-center shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <Send size={24} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-dark mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    Thanks for reaching out. Aimee will get back to you within
                    one business day.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="company"
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out: <input name="company" />
                    </label>
                  </p>

                  {error && (
                    <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
                      Something went wrong sending your message. Please email
                      us directly at{" "}
                      <a
                        href="mailto:info@razoraccounting.com"
                        className="underline"
                      >
                        info@razoraccounting.com
                      </a>
                      .
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@business.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(604) 000-0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a service…</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us a bit about your business and what you're looking for…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-white font-bold hover:bg-accent-light transition-all duration-200 shadow-sm hover:shadow-accent/30 hover:-translate-y-0.5"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

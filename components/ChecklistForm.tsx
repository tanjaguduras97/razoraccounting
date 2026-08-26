"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ChecklistForm() {
  const [submitted, setSubmitted] = useState(false);
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

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-6 text-center">
        <h3 className="text-lg font-bold text-brand-dark mb-2">
          You&apos;re on the list!
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Thanks for signing up — Aimee will send your checklist to your
          inbox shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      name="checklist"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="checklist" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="company" />
        </label>
      </p>

      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
          Something went wrong. Please email us directly at{" "}
          <a href="mailto:info@razoraccounting.com" className="underline">
            info@razoraccounting.com
          </a>
          .
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Name*"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-brand-dark text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email*"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-brand-dark text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-white font-bold hover:bg-accent-light transition-all duration-200 shadow-sm hover:shadow-accent/30 hover:-translate-y-0.5"
      >
        Get Your Copy Now
        <ArrowRight size={16} />
      </button>
    </form>
  );
}

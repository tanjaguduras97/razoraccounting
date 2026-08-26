import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Building2,
  TrendingUp,
  BarChart3,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bookkeeping, personal and corporate tax returns, tax planning, business management, and bookkeeping training — accounting services for small businesses in Sechelt, BC.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping",
    pricing: "Custom monthly packages",
    description:
      "Stay on top of your finances with clean, organized books updated regularly. We handle transaction categorization, reconciliation, and financial reporting so you always have an accurate picture of your business.",
    features: [
      "Monthly transaction categorization",
      "Bank & credit card reconciliation",
      "Monthly financial reports",
      "Payroll support available",
    ],
  },
  {
    icon: FileText,
    title: "Personal Tax Returns",
    pricing: "Starting from $135",
    description:
      "Your personal tax return prepared accurately and filed on time. We dig into every deduction and credit available to minimize what you owe and maximize your refund.",
    features: [
      "T1 personal return preparation",
      "Employment & self-employment income",
      "Investment & rental income",
      "RRSP & TFSA optimization",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Tax Returns",
    pricing: "Custom quote",
    description:
      "Your T2 corporate return handled with precision. Pricing is customized based on your business complexity — we'll provide a clear quote upfront with no surprises.",
    features: [
      "T2 corporate return preparation",
      "Capital cost allowance (CCA) schedules",
      "GST/HST filing",
      "Year-end financial statements",
    ],
  },
  {
    icon: TrendingUp,
    title: "Tax Planning",
    pricing: "Custom packages",
    description:
      "Don't just file taxes — plan for them. We work with you year-round to identify strategies that reduce your tax liability and support your business goals.",
    features: [
      "Year-round tax strategy sessions",
      "Business structure optimization",
      "Income splitting strategies",
      "Small business deductions review",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Management",
    pricing: "Custom packages",
    description:
      "Financial oversight for growing businesses. We help you understand your numbers, set budgets, and make data-driven decisions that move your business forward.",
    features: [
      "Cash flow management",
      "Budget creation & monitoring",
      "Financial reporting & analysis",
      "Business planning support",
    ],
  },
  {
    icon: GraduationCap,
    title: "Bookkeeping Training",
    pricing: "Per-session pricing",
    description:
      "Want to manage your own books? Aimee offers one-on-one training sessions tailored to your software and business type, plus online resources to help you stay on track.",
    features: [
      "One-on-one personalized sessions",
      "QuickBooks & accounting software",
      "DIY bookkeeping best practices",
      "Ongoing Q&A support",
    ],
  },
];

export default function ServicesPage() {
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
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            What We Offer
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mt-2">
            Our Services
          </h1>
          <p className="mt-5 text-white/60 text-xl max-w-xl leading-relaxed">
            Comprehensive accounting services built for small businesses and
            entrepreneurs in Sechelt, BC and beyond.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, pricing, description, features }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shrink-0 shadow-md shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <h3 className="text-xl font-bold text-brand-dark">
                        {title}
                      </h3>
                      <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {pricing}
                      </span>
                    </div>
                    <p className="mt-3 text-slate-500 leading-relaxed text-sm">
                      {description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 text-slate-600 text-sm"
                        >
                          <CheckCircle2 size={15} className="shrink-0 text-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-white/60 text-lg max-w-lg mx-auto mb-8">
            Book a free consultation and we&apos;ll figure out exactly what your
            business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-white font-bold hover:bg-accent-light transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Book a Free Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import ChecklistForm from "@/components/ChecklistForm";
import {
  BookOpen,
  FileText,
  Building2,
  TrendingUp,
  Target,
  Users,
  Clock,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  ClipboardCheck,
} from "lucide-react";

const checklistPoints = [
  "7 essential tasks to hand off to your bookkeeper before they cost you extra money on your accounting bill",
  "What to do with unusual or out of the ordinary items you send to your bookkeeper",
  "Simple strategy for staying organized with the pile of receipts that end up in a box or drawer",
  "The correct way to handle your Retained Earnings",
  "10 General Ledger Accounts and what to do with them",
];

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description:
      "Clean, current books so you always know exactly where your business stands financially.",
  },
  {
    icon: FileText,
    title: "Personal Tax Returns",
    description:
      "Accurate, on-time filing starting from $135. No surprises, no missed deductions.",
  },
  {
    icon: Building2,
    title: "Corporate Tax Returns",
    description:
      "Custom-quoted for your business. We identify every deduction and credit you qualify for.",
  },
  {
    icon: TrendingUp,
    title: "Tax Planning",
    description:
      "Year-round strategies to minimize your tax bill and keep more money in your business.",
  },
];

const reasons = [
  {
    icon: Target,
    title: "Precision",
    description: "We don't miss deadlines or details. Ever.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "You work directly with Aimee — no handoffs, no junior staff, no surprises.",
  },
  {
    icon: Clock,
    title: "Proactive Planning",
    description:
      "We plan ahead so you're never caught off guard at tax time.",
  },
  {
    icon: Briefcase,
    title: "Small Business DNA",
    description:
      "Purpose-built for entrepreneurs, freelancers, and growing companies.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "100+", label: "Businesses Served" },
  { value: "100%", label: "On-Time Filing" },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/30 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-6 block">
                Sechelt, BC · Small Business Specialists
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                Sharp accounting.
                <br />
                <span className="text-accent">Clear results.</span>
              </h1>

              <p className="text-white/65 text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
                Razor Accounting helps small businesses and entrepreneurs in
                Sechelt, BC stay organized, minimize taxes, and grow with
                confidence.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-light transition-all duration-200 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  View Services
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                >
                  Book a Consultation
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-black text-white">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-sm mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative visual */}
            <div className="hidden lg:block relative h-[480px]">
              <div className="absolute top-6 right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light/30 rounded-full blur-3xl" />

              <div className="absolute top-2 right-2 w-56 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl rotate-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <TrendingUp size={18} className="text-accent" />
                  </div>
                  <div className="text-white text-sm font-semibold">
                    Monthly Growth
                  </div>
                </div>
                <div className="text-3xl font-black text-white">+24%</div>
                <div className="text-white/50 text-xs mt-1">
                  vs. last quarter
                </div>
              </div>

              <div className="absolute top-56 left-0 w-52 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl -rotate-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-accent" />
                  </div>
                  <div className="text-white text-sm font-semibold">
                    Tax Filed
                  </div>
                </div>
                <div className="text-white/50 text-xs">
                  On time, every time
                </div>
              </div>

              <div className="absolute bottom-6 right-10 w-56 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl rotate-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <DollarSign size={18} className="text-accent" />
                  </div>
                  <div className="text-white text-sm font-semibold whitespace-nowrap">
                    Savings Found
                  </div>
                </div>
                <div className="text-3xl font-black text-white">$12K</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── Services ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="mt-3 text-4xl font-black text-brand-dark tracking-tight">
              Everything your business needs,{" "}
              <span className="text-brand">nothing it doesn&apos;t.</span>
            </h2>
            <p className="mt-4 text-slate-500 text-lg leading-relaxed">
              From day-to-day bookkeeping to strategic tax planning — we handle
              the numbers so you can focus on your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mb-5 shadow-md shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-accent transition-colors group"
            >
              See all services
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Free Checklist Opt-in ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Decorative panel */}
            <div className="relative hidden lg:block">
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-brand-dark to-brand p-14 overflow-hidden flex flex-col items-center justify-center">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="absolute top-8 right-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-8 left-8 w-40 h-40 bg-brand-light/20 rounded-full blur-3xl" />
                <div className="relative w-24 h-24 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto">
                  <ClipboardCheck size={44} className="text-accent" />
                </div>
                <div className="relative mt-8 text-center text-white/70 text-sm max-w-xs">
                  A quick, practical checklist — straight from Aimee&apos;s
                  own process.
                </div>
              </div>
            </div>

            {/* Copy + form */}
            <div className="rounded-2xl bg-surface p-8 sm:p-10">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest block mb-3">
                Get Your Free Checklist!
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mb-5">
                7 Steps to Slashing Your Corporate Accounting Fees
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                A simple report that shows you the 7 things you need to do to
                save money, keep the Tax Man away, and optimize the way you
                manage the money flow in your business.
              </p>

              <ul className="space-y-3 mb-8">
                {checklistPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-slate-600 text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 mt-0.5 text-accent"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <ChecklistForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── About Preview ────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo + quote card */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/aimee.jpg"
                  alt="Aimee, Founder of Razor Accounting"
                  fill
                  sizes="(min-width: 1024px) 448px, 90vw"
                  className="object-cover object-top"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-4xl font-black text-accent/40 leading-none mb-2">
                    &ldquo;
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed font-light italic mb-4">
                    I believe every small business owner deserves a sharp,
                    proactive accountant who treats their finances like their
                    own.
                  </p>
                  <div className="font-semibold text-white">Aimee</div>
                  <div className="text-white/60 text-sm">
                    Founder, Razor Accounting
                  </div>
                </div>
              </div>
              {/* Decorative accent bar */}
              <div className="absolute -bottom-3 left-10 right-10 h-1 bg-accent rounded-full opacity-60 max-w-md" />
            </div>

            {/* Text */}
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                About
              </span>
              <h2 className="mt-3 text-4xl font-black text-brand-dark tracking-tight">
                Meet Aimee
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                With over 15 years of experience across tax, bookkeeping,
                business management, and business planning, Aimee brings sharp
                expertise and genuine care to every client relationship.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Based in Sechelt, BC, she specializes in working with small
                businesses and entrepreneurs who want a trusted accounting
                partner — not just a service provider.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "15+ years across tax, bookkeeping & business management",
                  "Specializes in small businesses & entrepreneurs",
                  "Direct, personal service — no intermediaries",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-brand font-semibold hover:text-accent transition-colors group"
              >
                Learn more about us
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Razor ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Why Razor
            </span>
            <h2 className="mt-3 text-4xl font-black text-brand-dark tracking-tight">
              Why business owners choose us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mx-auto mb-5 shadow-md shadow-accent/20">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Ready to get your finances{" "}
            <span className="text-accent">razor sharp?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Book a free consultation and find out how Razor Accounting can
            simplify your finances and help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-white font-bold hover:bg-accent-light transition-all duration-200 shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5 text-lg"
          >
            Book a Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

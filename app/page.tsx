import Link from "next/link";
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
} from "lucide-react";

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-6">
              <span className="w-6 h-px bg-accent" />
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
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                  <Icon size={22} className="text-brand group-hover:text-accent transition-colors" />
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

      {/* ─── About Preview ────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Quote card */}
            <div className="relative">
              <div className="rounded-2xl bg-brand-dark p-10 text-white">
                <div className="text-5xl font-black text-accent/30 leading-none mb-4">
                  &ldquo;
                </div>
                <p className="text-white/80 text-xl leading-relaxed font-light italic">
                  I believe every small business owner deserves a sharp,
                  proactive accountant who treats their finances like their own.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Aimee</div>
                    <div className="text-white/50 text-sm">
                      Founder, Razor Accounting
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative accent bar */}
              <div className="absolute -bottom-3 left-10 right-10 h-1 bg-accent rounded-full opacity-60" />
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
                <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <Icon size={24} className="text-brand" />
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

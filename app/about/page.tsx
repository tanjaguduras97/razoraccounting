import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Heart, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Precision",
    description:
      "Every return, every reconciliation, every deadline — handled with the accuracy your business depends on. We treat your numbers the way you treat your business: seriously.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "You're not a file number. Aimee takes the time to understand your goals and builds a genuine, ongoing relationship. Your wins are our wins.",
  },
  {
    icon: Lightbulb,
    title: "Proactivity",
    description:
      "We don't wait for tax season to think about your taxes. Year-round planning and regular check-ins mean you're always ahead of the curve, not scrambling at the last minute.",
  },
];

const experience = [
  "Tax preparation (personal & corporate)",
  "Bookkeeping & reconciliation",
  "Business management & planning",
  "Small business advisory",
  "Payroll & remittances",
  "GST/HST filing",
];

export default function AboutPage() {
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
            The People Behind Razor
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mt-2">
            About Us
          </h1>
          <p className="mt-5 text-white/60 text-xl max-w-xl leading-relaxed">
            A boutique accounting firm built on precision, personal service, and
            a genuine passion for helping small businesses thrive.
          </p>
        </div>
      </section>

      {/* Meet Aimee */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white max-w-md shadow-lg">
                <Image
                  src="/aimee.jpg"
                  alt="Aimee, Founder of Razor Accounting"
                  fill
                  sizes="(min-width: 1024px) 448px, 90vw"
                  className="object-cover object-top"
                  priority
                  unoptimized
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -right-4 bottom-12 bg-white rounded-xl shadow-xl p-5 border border-slate-100">
                <div className="text-3xl font-black text-brand-dark">15+</div>
                <div className="text-slate-500 text-sm mt-0.5">Years Experience</div>
              </div>
              <div className="absolute -left-4 top-12 bg-accent rounded-xl shadow-xl p-5">
                <div className="text-3xl font-black text-white">100+</div>
                <div className="text-white/80 text-sm mt-0.5">Clients Served</div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                Founder
              </span>
              <h2 className="mt-3 text-4xl font-black text-brand-dark tracking-tight">
                Meet Aimee
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Aimee founded Razor Accounting with a clear mission: give small
                business owners in Sechelt, BC access to the kind of sharp,
                attentive accounting that was once only available to large
                corporations.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                With over 15 years of hands-on experience across tax,
                bookkeeping, business management, and planning, she brings a
                rare depth of knowledge to every client engagement. Whether
                you&apos;re a sole proprietor filing your first return or a
                growing company navigating complex tax strategy, Aimee has seen
                it before — and knows exactly how to handle it.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Aimee also runs a bookkeeping training program via YouTube and
                one-on-one coaching sessions, helping aspiring bookkeepers and
                business owners learn to manage their own finances with
                confidence.
              </p>

              <div className="mt-8">
                <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-4">
                  Areas of Expertise
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {experience.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-slate-600 text-sm"
                    >
                      <CheckCircle2 size={14} className="shrink-0 text-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="mt-3 text-4xl font-black text-brand-dark tracking-tight">
              Our values
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              Three principles that shape every client relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mb-6 shadow-md shadow-accent/20">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Ready to work with Aimee?
          </h2>
          <p className="text-white/60 text-lg max-w-lg mx-auto mb-8">
            Book a free consultation to discuss your business and how we can
            help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-white font-bold hover:bg-accent-light transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

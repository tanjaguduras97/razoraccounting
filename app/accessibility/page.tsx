import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Razor Accounting's commitment to making our website accessible to everyone, including people with disabilities.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-brand-dark pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Accessibility Statement
          </h1>
          <p className="mt-5 text-white/60 text-lg leading-relaxed">
            Last updated: August 2026
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Our Commitment
              </h2>
              <p>
                Razor Accounting is committed to ensuring digital
                accessibility for all visitors to our website, including
                people with disabilities. We continually work to improve the
                accessibility and usability of this site for everyone.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Standards
              </h2>
              <p>
                We aim to align this website with the Web Content
                Accessibility Guidelines (WCAG) 2.1, Level AA, where
                practicable. These guidelines explain how to make web
                content more accessible for people with a wide range of
                disabilities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Feedback
              </h2>
              <p>
                If you experience any difficulty accessing any part of this
                website, or have suggestions on how we can improve
                accessibility, please contact us at{" "}
                <a
                  href="mailto:info@razoraccounting.com"
                  className="text-accent hover:underline"
                >
                  info@razoraccounting.com
                </a>
                . We take accessibility feedback seriously and will do our
                best to address any issues.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Ongoing Efforts
              </h2>
              <p>
                Accessibility is an ongoing effort. We periodically review
                this website and make improvements as we become aware of
                issues or as standards evolve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

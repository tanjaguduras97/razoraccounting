import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms and conditions governing your use of the Razor Accounting website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
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
            Terms of Use
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
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you agree to be bound
                by these Terms of Use. If you do not agree with any part of
                these terms, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Informational Purposes Only
              </h2>
              <p>
                The content on this website is provided for general
                informational purposes only and does not constitute
                professional accounting, tax, legal, or financial advice.
                You should not act, or refrain from acting, based on any
                information on this site without seeking independent
                professional advice specific to your situation. No
                client-accountant relationship is formed simply by browsing
                this website or submitting a form — such a relationship
                begins only once we have mutually agreed to engage in
                writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos,
                and images, is the property of Razor Accounting unless
                otherwise noted, and is protected by applicable copyright and
                trademark laws. You may not reproduce, distribute, or use
                this content without our prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Third-Party Links
              </h2>
              <p>
                This website may contain links to third-party websites. We
                are not responsible for the content, accuracy, or practices
                of any linked external sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Razor Accounting will
                not be liable for any direct, indirect, incidental, or
                consequential damages arising from your use of, or inability
                to use, this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Governing Law
              </h2>
              <p>
                These Terms of Use are governed by the laws of the Province
                of British Columbia and the federal laws of Canada
                applicable therein, without regard to conflict of law
                principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Changes to These Terms
              </h2>
              <p>
                We may update these Terms of Use from time to time. The
                &ldquo;last updated&rdquo; date at the top of this page
                indicates when it was last revised.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Contact Us
              </h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:info@razoraccounting.com"
                  className="text-accent hover:underline"
                >
                  info@razoraccounting.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

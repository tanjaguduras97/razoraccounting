import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Razor Accounting collects, uses, and protects your personal information, in accordance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
                Overview
              </h2>
              <p>
                Razor Accounting (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) is committed to protecting your privacy in
                accordance with the Personal Information Protection and
                Electronic Documents Act (PIPEDA) and applicable British
                Columbia privacy legislation. This policy explains what
                personal information we collect through this website, how we
                use it, and your rights regarding that information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Information We Collect
              </h2>
              <p>
                When you fill out a form on this website — such as the
                contact form or the free checklist sign-up — we collect the
                information you provide, which may include your name, email
                address, phone number, the service you&apos;re interested
                in, and any message you send us. We do not collect this
                information through any other means, and we do not use
                tracking or advertising cookies on this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                How We Use Your Information
              </h2>
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-3">
                <li>Respond to your inquiries and requests</li>
                <li>Schedule and provide consultations or services</li>
                <li>Send you materials you&apos;ve specifically requested (such as the free checklist)</li>
                <li>Maintain records related to our client relationships</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to
                third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Third-Party Service Providers
              </h2>
              <p>
                This website is hosted on Netlify, and form submissions are
                processed through Netlify Forms. These providers may process
                your information on our behalf as part of delivering their
                services to us, and are bound by their own privacy and
                security practices. We only work with service providers we
                believe handle information responsibly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                How We Protect Your Information
              </h2>
              <p>
                We take reasonable administrative and technical measures to
                protect your personal information against loss, theft, and
                unauthorized access, use, or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Your Rights
              </h2>
              <p>
                Under PIPEDA, you have the right to access the personal
                information we hold about you, request corrections to
                inaccurate information, and withdraw your consent to our use
                of your information at any time, subject to legal or
                contractual restrictions. To exercise any of these rights,
                contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time to
                reflect changes in our practices or for legal reasons. The
                &ldquo;last updated&rdquo; date at the top of this page
                indicates when it was last revised.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about this privacy policy or how your
                information is handled, please contact us at{" "}
                <a
                  href="mailto:info@razoraccounting.com"
                  className="text-accent hover:underline"
                >
                  info@razoraccounting.com
                </a>{" "}
                or through our{" "}
                <a href="/contact" className="text-accent hover:underline">
                  contact page
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

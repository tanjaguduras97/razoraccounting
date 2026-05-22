import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-xl font-black text-accent">Razor</span>
              <span className="text-xl font-light text-white">Accounting</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Sharp accounting services for small businesses and entrepreneurs
              in Sechelt, BC and surrounding areas.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/razoradvisory/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/RazorAccounting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="shrink-0 mt-0.5 text-accent" />
                <span>Sechelt, BC, Canada</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Phone size={16} className="shrink-0 mt-0.5 text-accent" />
                <a
                  href="tel:+1-604-000-0000"
                  className="hover:text-white transition-colors"
                >
                  (604) 000-0000
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Mail size={16} className="shrink-0 mt-0.5 text-accent" />
                <a
                  href="mailto:info@razoraccounting.com"
                  className="hover:text-white transition-colors"
                >
                  info@razoraccounting.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Razor Accounting. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">Built for small businesses.</p>
        </div>
      </div>
    </footer>
  );
}

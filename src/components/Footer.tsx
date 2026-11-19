import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { NAV_LINKS, CLUB } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">Ready to Create Lasting Impact?</h3>
            <p className="mt-2 text-navy-200">Join a global movement of young leaders driving change.</p>
          </div>
          <Link to="/join" className="btn-gold">
            Become a Member <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-700 ring-1 ring-gold-500/30">
              <svg viewBox="0 0 64 64" className="h-7 w-7">
                <circle cx="32" cy="32" r="18" fill="none" stroke="#D9A52D" strokeWidth="3" />
                <path d="M32 18 L36 30 L48 30 L38 38 L42 50 L32 42 L22 50 L26 38 L16 30 L28 30 Z" fill="#D9A52D" />
              </svg>
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-white">Rotaract Club</p>
              <p className="text-xs text-navy-300">Mawlana Bhashani Tangail</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-navy-200">
            A youth service organization dedicated to leadership, fellowship and sustainable community impact in Tangail, Bangladesh.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialLink href={CLUB.social.facebook} label="Facebook"><Facebook className="h-4 w-4" /></SocialLink>
            <SocialLink href={CLUB.social.instagram} label="Instagram"><Instagram className="h-4 w-4" /></SocialLink>
            <SocialLink href={CLUB.social.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialLink>
            <SocialLink href={CLUB.social.youtube} label="YouTube"><Youtube className="h-4 w-4" /></SocialLink>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-400">Explore</h4>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {NAV_LINKS.slice(0, 8).map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-navy-200 transition-colors hover:text-white">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More links */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-400">Get Involved</h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {NAV_LINKS.slice(8).map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-navy-200 transition-colors hover:text-white">{link.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/admin" className="text-navy-300 transition-colors hover:text-white">Admin Dashboard</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-400">Contact</h4>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span className="text-navy-200">{CLUB.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${CLUB.email}`} className="text-navy-200 transition-colors hover:text-white">{CLUB.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span className="text-navy-200">{CLUB.phone}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-300 sm:flex-row">
          <p>© {new Date().getFullYear()} {CLUB.name}. All rights reserved.</p>
          <p>Rotary Year {CLUB.rotaryYear} · Annual Theme: "{CLUB.theme}"</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-navy-200 transition-all hover:bg-gold-500 hover:text-navy-900 hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

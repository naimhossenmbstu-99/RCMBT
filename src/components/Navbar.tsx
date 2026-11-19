import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_LINKS, CLUB } from '@/data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (to: string) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-card backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div
        className={`hidden border-b border-white/10 transition-all duration-300 lg:block ${
          scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container-page flex h-10 items-center justify-between text-xs text-navy-100">
          <span className="flex items-center gap-2">
            <Globe className="h-3.5 w-3.5 text-gold-400" />
            {CLUB.location} · Rotary Year {CLUB.rotaryYear}
          </span>
          <div className="flex items-center gap-4">
            <a href={CLUB.parentOrgUrl} target="_blank" rel="noreferrer" className="hover:text-gold-300">
              Rotary International
            </a>
            <span className="text-white/20">|</span>
            <a href={`mailto:${CLUB.email}`} className="hover:text-gold-300">{CLUB.email}</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`container-page flex items-center justify-between transition-all ${scrolled ? 'h-16' : 'h-20'}`}>
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <Logo scrolled={scrolled} />
          <div className="hidden flex-col sm:flex">
            <span className={`font-heading text-sm font-bold leading-tight ${scrolled ? 'text-navy-800' : 'text-white'}`}>
              Rotaract Club
            </span>
            <span className={`text-[11px] leading-tight ${scrolled ? 'text-charcoal/60' : 'text-navy-100'}`}>
              Mawlana Bhashani Tangail
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? scrolled ? 'text-gold-600' : 'text-gold-300'
                  : scrolled ? 'text-charcoal hover:text-navy-700' : 'text-navy-50 hover:text-white'
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-500" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/join" className="hidden btn-gold lg:inline-flex">
            Become a Member
          </Link>
          <button
            onClick={() => setOpen(true)}
            className={`rounded-lg p-2 transition-colors xl:hidden ${scrolled ? 'text-navy-800 hover:bg-navy-50' : 'text-white hover:bg-white/10'}`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm animate-fade-in" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
              <span className="font-heading text-sm font-bold text-navy-800">Menu</span>
              <button onClick={() => setOpen(false)} className="rounded-lg p-2 text-navy-700 hover:bg-navy-50" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-1 overflow-y-auto px-3 py-4" style={{ maxHeight: 'calc(100vh - 140px)' }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.to) ? 'bg-navy-50 text-gold-600' : 'text-charcoal hover:bg-mist'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/join" className="btn-gold mt-4 w-full">
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-700 shadow-md ring-1 ring-gold-500/30">
      <svg viewBox="0 0 64 64" className="h-7 w-7">
        <circle cx="32" cy="32" r="18" fill="none" stroke="#D9A52D" strokeWidth="3" />
        <path d="M32 18 L36 30 L48 30 L38 38 L42 50 L32 42 L22 50 L26 38 L16 30 L28 30 Z" fill="#D9A52D" />
      </svg>
    </div>
  );
}

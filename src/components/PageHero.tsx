import { Link } from 'react-router-dom';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export default function PageHero({ eyebrow, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-800 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="placeholder-image absolute inset-0 opacity-90" />
      <div className="absolute inset-0 bg-navy-900/40" />
      <div className="container-page relative z-10">
        <div className="max-w-3xl">
          <span className="eyebrow text-gold-300">{eyebrow}</span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">{title}</h1>
          {description && <p className="mt-5 text-lg leading-relaxed text-navy-100">{description}</p>}
          {breadcrumb && (
            <nav className="mt-6 flex items-center gap-2 text-sm text-navy-200">
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  {b.to ? (
                    <Link to={b.to} className="transition-colors hover:text-gold-300">{b.label}</Link>
                  ) : (
                    <span className="text-gold-300">{b.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span className="text-navy-400">/</span>}
                </span>
              ))}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { type LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  icon?: LucideIcon;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  icon: Icon,
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      {eyebrow && (
        <span className="eyebrow">
          {Icon && <Icon className="h-4 w-4" />}
          {eyebrow}
        </span>
      )}
      <h2 className="section-title max-w-2xl">{title}</h2>
      {description && (
        <p className="prose-lead max-w-2xl">{description}</p>
      )}
      <div className={`mt-2 h-1 w-16 rounded-full bg-gold-500 ${align === 'center' ? '' : 'self-start'}`} />
    </div>
  );
}

export function SectionHeaderLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-gold-600"
    >
      {label}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}

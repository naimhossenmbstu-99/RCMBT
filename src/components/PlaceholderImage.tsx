interface PlaceholderImageProps {
  variant?: 'navy' | 'gold' | 'mist';
  className?: string;
  label?: string;
  icon?: React.ReactNode;
}

/**
 * Placeholder visual used until official club photographs are provided.
 * Renders a tasteful gradient with an optional centered label/icon.
 */
export default function PlaceholderImage({
  variant = 'navy',
  className = '',
  label,
  icon,
}: PlaceholderImageProps) {
  const base =
    variant === 'gold'
      ? 'placeholder-image-gold'
      : variant === 'mist'
        ? 'placeholder-image-mist'
        : 'placeholder-image';
  return (
    <div className={`${base} flex items-center justify-center ${className}`}>
      <div className="relative z-10 flex flex-col items-center gap-3 text-center px-4">
        {icon && <div className="opacity-80">{icon}</div>}
        {label && (
          <span
            className={`text-xs font-semibold uppercase tracking-[0.18em] ${
              variant === 'mist' ? 'text-navy-700' : 'text-white/80'
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

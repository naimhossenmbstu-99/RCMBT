import { Link } from 'react-router-dom';
import { CalendarDays, ArrowUpRight } from 'lucide-react';
import type { NewsItem } from '@/data/content';
import PlaceholderImage from './PlaceholderImage';

export function NewsCard({ item }: { item: NewsItem }) {
  const date = new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  return (
    <article className="card group overflow-hidden">
      <PlaceholderImage className="h-40 w-full" label={item.category} />
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center gap-3 text-xs text-charcoal/50">
          <span className="rounded-full bg-gold-50 px-3 py-1 font-semibold text-gold-700">{item.category}</span>
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" /> {date}
          </span>
        </div>
        <h3 className="font-heading text-lg font-bold leading-snug text-navy-800 transition-colors group-hover:text-navy-600">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-charcoal/70">{item.excerpt}</p>
        <Link
          to="/news"
          className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 transition-colors hover:text-gold-600"
        >
          Read more <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

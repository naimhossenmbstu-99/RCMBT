import { useState } from 'react';
import { CalendarDays, Tag } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import { NewsCard } from '@/components/NewsCard';
import { NEWS_ITEMS } from '@/data/content';

const CATEGORIES = ['All', 'Announcement', 'Event', 'Program'];

export default function News() {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? NEWS_ITEMS : NEWS_ITEMS.filter((n) => n.category === filter);

  const sorted = [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="Stay up to date"
        description="The latest announcements, events and activities from our club and the wider Rotaract community."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'News & Events' }]}
      />

      {/* Featured article */}
      {featured && (
        <section className="py-20 sm:py-28">
          <div className="container-page">
            <article className="card grid overflow-hidden lg:grid-cols-2">
              <div className="placeholder-image h-64 lg:h-full" />
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-gold-50 px-3 py-1 font-semibold text-gold-700">{featured.category}</span>
                  <span className="flex items-center gap-1 text-charcoal/50">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-navy-800">{featured.title}</h2>
                <p className="mt-3 text-charcoal/70 leading-relaxed">{featured.excerpt}</p>
                <p className="mt-4 text-sm text-charcoal/50">Full article — pending publication.</p>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Filter + grid */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="All Updates"
            title="Browse news and events"
            description="Filter by type to find the updates most relevant to you."
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <span className="flex items-center gap-1.5 text-sm font-medium text-charcoal/60">
              <Tag className="h-4 w-4" /> Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === cat ? 'bg-navy-700 text-white shadow-md' : 'bg-white text-charcoal/70 hover:bg-navy-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((n) => <NewsCard key={n.id} item={n} />)}
          </div>

          {rest.length === 0 && (
            <p className="mt-12 text-center text-charcoal/50">No items in this category yet.</p>
          )}

          <p className="mt-10 text-center text-xs text-charcoal/50">
            News items are placeholders. Verified articles will be published as they are written.
          </p>
        </div>
      </section>
    </>
  );
}

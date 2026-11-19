import { useState } from 'react';
import { Images, X } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import PlaceholderImage from '@/components/PlaceholderImage';
import { GALLERY_ALBUMS } from '@/data/content';

const CATEGORIES = ['All', 'Ceremony', 'Project', 'Environment', 'Workshop', 'Fellowship', 'Health'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const albums = filter === 'All' ? GALLERY_ALBUMS : GALLERY_ALBUMS.filter((a) => a.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of service and fellowship"
        description="A visual chronicle of our projects, events and the people who make them happen."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Photo Albums"
            title="Browse our gallery"
            description="Filter by category to explore specific types of activities and events."
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
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
            {albums.map((album) => (
              <article
                key={album.id}
                className="card group cursor-pointer overflow-hidden"
                onClick={() => setLightbox(album.id)}
              >
                <div className="relative">
                  <PlaceholderImage className="h-56 w-full" label={album.category} />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy-950/0 opacity-0 transition-all duration-300 group-hover:bg-navy-950/40 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-navy-800">
                      <Images className="h-4 w-4" /> View Album
                    </span>
                  </div>
                  <span className="absolute right-3 top-3 rounded-full bg-navy-900/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {album.count} photos
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold text-navy-800">{album.title}</h3>
                  <p className="mt-1 text-xs text-charcoal/60">{album.date} · {album.category}</p>
                </div>
              </article>
            ))}
          </div>

          {albums.length === 0 && (
            <p className="mt-12 text-center text-charcoal/50">No albums in this category yet.</p>
          )}

          <p className="mt-10 text-center text-xs text-charcoal/50">
            Album covers are placeholder graphics. Official photographs will be displayed once provided by the club.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/90 p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-3xl" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const album = GALLERY_ALBUMS.find((a) => a.id === lightbox)!;
              return (
                <div>
                  <h3 className="mb-4 font-heading text-xl font-bold text-white">{album.title}</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {Array.from({ length: Math.min(6, album.count) }).map((_, i) => (
                      <PlaceholderImage key={i} className="aspect-square rounded-lg" label={`Photo ${i + 1}`} />
                    ))}
                  </div>
                  <p className="mt-4 text-center text-sm text-navy-200">
                    Placeholder photos — {album.count} total. Official images will replace these.
                  </p>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}

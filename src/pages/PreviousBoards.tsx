import { Crown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import { PREVIOUS_BOARDS } from '@/data/content';

export default function PreviousBoards() {
  return (
    <>
      <PageHero
        eyebrow="Previous Executive Boards"
        title="Our leadership legacy"
        description="The presidents and boards who have led our club through each rotary year, building the foundation we stand on today."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Previous Boards' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6">
            {PREVIOUS_BOARDS.map((board, i) => (
              <article
                key={i}
                className="card group flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8"
              >
                {/* Year badge */}
                <div className="flex shrink-0 flex-col items-center justify-center sm:w-32">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-navy-700 text-center ring-4 ring-gold-500/10 transition-transform group-hover:scale-105">
                    <div>
                      <p className="font-heading text-xs font-bold leading-tight text-gold-400">{board.year.split('–')[0]}</p>
                      <p className="font-heading text-xs font-bold leading-tight text-gold-400">{board.year.split('–')[1]}</p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700">
                      <Crown className="h-3.5 w-3.5" /> President
                    </span>
                    <h3 className="font-heading text-lg font-bold text-navy-800">{board.president}</h3>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-navy-600">Theme: "{board.theme}"</p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{board.highlights}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 rounded-xl bg-gold-50 p-4 text-center text-xs text-charcoal/60">
            All entries are placeholders. Verified board rosters, themes and highlights will be added once official records are provided.
          </p>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-center">
        <div className="container-page">
          <h2 className="font-heading text-3xl font-bold text-white">Meet today's leaders</h2>
          <p className="mx-auto mt-4 max-w-lg text-navy-100">
            Discover the current executive board leading our club in {`2026–27`}.
          </p>
          <Link to="/board" className="btn-gold mt-8">
            Current Executive Board <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

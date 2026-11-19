import { Link } from 'react-router-dom';
import { ArrowRight, Crown } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import { BoardCard } from '@/components/BoardCard';
import { EXECUTIVE_BOARD, CLUB } from '@/data/content';

export default function ExecutiveBoard() {
  const president = EXECUTIVE_BOARD[0];
  const rest = EXECUTIVE_BOARD.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Executive Board"
        title={`Leadership for ${CLUB.rotaryYear}`}
        description="Meet the dedicated team guiding our club's vision, projects and fellowship this rotary year."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Executive Board' }]}
      />

      {/* President spotlight */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-500 text-4xl font-bold text-gold-400 ring-8 ring-gold-500/10">
                {president.initials}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-700">
                <Crown className="h-3.5 w-3.5" /> President
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold text-navy-800">{president.name}</h2>
              <p className="mt-1 text-charcoal/60">{president.portfolio}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/70">
                Leading the club under the annual theme "{CLUB.theme}", the president sets the vision and
                direction for the rotary year, overseeing all service initiatives and club activities.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-mist p-8">
              <h3 className="font-heading text-lg font-bold text-navy-800">A message from the president</h3>
              <div className="mt-4 h-1 w-12 rounded-full bg-gold-500" />
              <blockquote className="mt-5 text-charcoal/70 leading-relaxed">
                "Fellow Rotaractors, this rotary year we embrace the theme '{CLUB.theme}'. Together, we
                have the opportunity to serve our community with purpose and passion — building projects
                and relationships that endure far beyond a single year. I invite you to join us in this
                mission of service, leadership and lasting fellowship."
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-navy-700">
                — {president.name}, President {CLUB.rotaryYear}
              </p>
              <p className="mt-1 text-xs text-charcoal/50">Placeholder message — to be replaced with the official presidential address.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full board */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="The Team"
            title="Meet the executive board"
            description="The officers and directors responsible for the club's operations, service and growth."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rest.map((m) => <BoardCard key={m.id} member={m} />)}
          </div>
          <p className="mt-10 text-center text-xs text-charcoal/50">
            Board member names are placeholders. Verified profiles with photographs will be added once official information is provided.
          </p>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-center">
        <div className="container-page">
          <h2 className="font-heading text-3xl font-bold text-white">Meet the leaders who came before</h2>
          <p className="mx-auto mt-4 max-w-lg text-navy-100">
            Explore the previous executive boards that shaped our club's legacy.
          </p>
          <Link to="/previous-boards" className="btn-gold mt-8">
            Previous Boards <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

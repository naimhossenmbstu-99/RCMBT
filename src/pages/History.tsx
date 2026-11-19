import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import PlaceholderImage from '@/components/PlaceholderImage';
import { HISTORY_MILESTONES, CLUB } from '@/data/content';

export default function History() {
  return (
    <>
      <PageHero
        eyebrow="Our History"
        title="The journey so far"
        description="A chronicle of our club's growth, milestones and the people who shaped it."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Our History' }]}
      />

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">The Beginning</span>
            <h2 className="section-title mt-3">From charter to lasting impact</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold-500" />
            <p className="prose-lead mt-6">
              Every Rotaract club begins with a simple idea — that young people can be powerful agents of
              change. Our club was founded on that belief, chartered under the sponsorship of {CLUB.sponsorClub}
              and welcomed into the global family of {CLUB.parentOrg}.
            </p>
            <p className="mt-4 text-charcoal/70">
              Since those early days, our members have carried forward a tradition of service, fellowship
              and leadership. Each rotary year has brought new initiatives, new partnerships and new ways
              of giving back to the community of Tangail.
            </p>
            <p className="mt-4 rounded-xl bg-gold-50 p-4 text-sm text-charcoal/70">
              Note: The timeline below uses placeholder entries. Verified historical details will be added
              once official club records are provided.
            </p>
          </div>
          <PlaceholderImage variant="mist" className="h-96 rounded-2xl" label="Club Archive" />
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Milestones"
            title="Key moments in our journey"
            description="A timeline of the milestones that have defined our club's evolution."
          />
          <div className="mt-16 relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-navy-200 sm:left-1/2 sm:-translate-x-1/2" />
            <div className="flex flex-col gap-12">
              {HISTORY_MILESTONES.map((m, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col gap-6 sm:flex-row sm:items-center ${
                    i % 2 === 0 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-gold-500 shadow-md sm:left-1/2" />
                  {/* Content card */}
                  <div className="ml-12 w-full sm:ml-0 sm:w-1/2 sm:px-8">
                    <article className="card p-6">
                      <span className="inline-flex items-center gap-2 rounded-full bg-navy-700 px-3 py-1 text-xs font-bold text-gold-400">
                        {m.year}
                      </span>
                      <h3 className="mt-3 font-heading text-lg font-bold text-navy-800">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{m.description}</p>
                    </article>
                  </div>
                  {/* Spacer */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <PlaceholderImage variant="gold" className="h-80 rounded-2xl" label="Awards & Recognition" />
          <div>
            <span className="eyebrow"><Trophy className="h-4 w-4" /> Recognition</span>
            <h2 className="section-title mt-3">Awards and achievements</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold-500" />
            <p className="prose-lead mt-6">
              Over the years, our club and its members have been recognized for outstanding service,
              innovative projects and contributions to the district and the wider Rotaract community.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {[
                'District-level service awards — details pending verification',
                'Recognition for international partnership initiatives — details pending verification',
                'Member professional achievements — details pending verification',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
                  <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <p className="text-sm text-charcoal/70">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-charcoal/50">Placeholder entries — pending verified records.</p>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-center">
        <div className="container-page">
          <h2 className="font-heading text-3xl font-bold text-white">The story continues</h2>
          <p className="mx-auto mt-4 max-w-lg text-navy-100">
            Be part of the next chapter. Join us as we write the future of service in Tangail.
          </p>
          <Link to="/join" className="btn-gold mt-8">
            Join our club <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

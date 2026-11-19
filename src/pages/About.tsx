import { Link } from 'react-router-dom';
import { Target, Eye, Compass, Users, Globe, HeartHandshake, Award, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import PlaceholderImage from '@/components/PlaceholderImage';
import { CLUB, FOCUS_AREAS } from '@/data/content';

const VALUES = [
  { icon: HeartHandshake, title: 'Service Above Self', desc: 'We put the needs of others before our own, dedicating our time and skills to community upliftment.' },
  { icon: Users, title: 'Fellowship', desc: 'We build genuine, lasting friendships through shared experiences and a common purpose.' },
  { icon: Award, title: 'Integrity', desc: 'We uphold the highest ethical standards in everything we do, both as a club and as individuals.' },
  { icon: Globe, title: 'Global Mindedness', desc: 'We think and act beyond borders, connecting with Rotaractors worldwide for collective impact.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Who we are"
        description="A community of young leaders committed to service, professional growth and international fellowship."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow"><Compass className="h-4 w-4" /> Our Story</span>
            <h2 className="section-title mt-3">Serving Tangail, connected to the world</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold-500" />
            <p className="prose-lead mt-6">
              The {CLUB.name} is a Rotaract club based in {CLUB.location}, sponsored by {CLUB.sponsorClub}
              and operating under the umbrella of {CLUB.parentOrg}. We are part of a global movement of
              young adults who share a commitment to creating positive, sustainable change.
            </p>
            <p className="mt-4 text-charcoal/70">
              Our members come from diverse academic and professional backgrounds, united by a shared belief
              that young people have the power — and the responsibility — to shape a better future. Through
              community service, leadership development and international collaboration, we turn that belief
              into action.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <InfoTile label="Location" value={CLUB.location} />
              <InfoTile label="District" value={CLUB.district} />
              <InfoTile label="Sponsor Club" value={CLUB.sponsorClub.replace('Rotary Club of ', '')} />
              <InfoTile label="Parent Organization" value={CLUB.parentOrg} />
            </div>
          </div>
          <div className="grid gap-4">
            <PlaceholderImage className="h-72 rounded-2xl" label="Club in Action" />
            <div className="grid grid-cols-2 gap-4">
              <PlaceholderImage variant="gold" className="h-44 rounded-2xl" label="Fellowship" />
              <PlaceholderImage variant="mist" className="h-44 rounded-2xl" label="Leadership" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          <div className="card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-gold-400">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-navy-800">Our Mission</h3>
            <p className="mt-3 text-charcoal/70">
              To empower young leaders to create sustainable, positive change in their communities through
              service, professional development and international cooperation.
            </p>
          </div>
          <div className="card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-gold-400">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-navy-800">Our Vision</h3>
            <p className="mt-3 text-charcoal/70">
              A world where young people everywhere are active agents of compassion, innovation and service —
              building stronger, more connected communities.
            </p>
          </div>
          <div className="card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-navy-900">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-navy-800">Annual Theme</h3>
            <p className="mt-3 text-charcoal/70">
              "{CLUB.theme}" — our guiding call to action for Rotary Year {CLUB.rotaryYear}, challenging
              every member to build work that endures.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our core values"
            description="The principles that guide every decision, every project and every interaction within our club."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <article key={v.title} className="card group p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-all group-hover:bg-navy-700 group-hover:text-gold-400">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-base font-bold text-navy-800">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Areas of Focus"
            title="How we create impact"
            description="Our activities are organized around four service avenues central to the Rotaract framework."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {FOCUS_AREAS.map((area) => (
              <article key={area.title} className="card flex items-start gap-5 p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-700 text-gold-400">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy-800">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{area.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container-page">
          <h2 className="font-heading text-3xl font-bold text-navy-800">Want to learn more?</h2>
          <p className="mx-auto mt-4 max-w-lg text-charcoal/70">
            Explore our history, meet our leadership team, or discover the projects we are working on.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/history" className="btn-primary">Our History <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/board" className="btn-outline">Meet the Board</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-navy-100 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">{label}</p>
      <p className="mt-1 text-sm font-medium text-navy-800">{value}</p>
    </div>
  );
}

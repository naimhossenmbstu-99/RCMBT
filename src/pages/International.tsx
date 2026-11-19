import { Link } from 'react-router-dom';
import { Globe2, Handshake, Users2, Plane, ArrowRight, Mail } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import PlaceholderImage from '@/components/PlaceholderImage';
import { PARTNERSHIPS } from '@/data/content';

const PROGRAMS = [
  { icon: Handshake, title: 'Twin Club Program', desc: 'Formal partnerships with Rotaract clubs abroad for ongoing joint service and cultural exchange.' },
  { icon: Globe2, title: 'Joint Service Projects', desc: 'Cross-border projects addressing shared challenges, from environment to education.' },
  { icon: Users2, title: 'Cultural Exchange', desc: 'Virtual and in-person exchanges that build understanding and friendship across cultures.' },
  { icon: Plane, title: 'District Events & Conferences', desc: 'Participation in multi-district and international Rotaract gatherings and conferences.' },
];

export default function International() {
  return (
    <>
      <PageHero
        eyebrow="International Relations"
        title="Service beyond borders"
        description="We build bridges of fellowship and collaboration with Rotaract clubs around the world, extending our impact far beyond Tangail."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'International' }]}
      />

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow"><Globe2 className="h-4 w-4" /> Global Family</span>
            <h2 className="section-title mt-3">Part of a worldwide movement</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold-500" />
            <p className="prose-lead mt-6">
              Rotaract is a global program of Rotary International with clubs in over 180 countries. As
              members of this worldwide family, we believe that international cooperation makes our local
              service stronger, our friendships deeper and our impact greater.
            </p>
            <p className="mt-4 text-charcoal/70">
              Through twin club relationships, joint projects and participation in international events,
              our members gain a global perspective while contributing to projects that transcend borders.
            </p>
          </div>
          <PlaceholderImage variant="mist" className="h-80 rounded-2xl" label="Global Network" />
        </div>
      </section>

      {/* Programs */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Programs"
            title="How we engage internationally"
            description="The avenues through which we connect, collaborate and serve with clubs around the world."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((p) => (
              <article key={p.title} className="card group p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-gold-400 transition-transform group-hover:scale-110">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-base font-bold text-navy-800">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Partners"
            title="International club partnerships"
            description="The Rotaract clubs we collaborate with across the globe."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {PARTNERSHIPS.map((p, i) => (
              <article key={i} className="card flex items-center gap-5 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-500 text-gold-400">
                  <Globe2 className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <span className="rounded-full bg-gold-50 px-3 py-0.5 text-xs font-semibold text-gold-700">{p.type}</span>
                  <h3 className="mt-2 font-heading text-base font-bold text-navy-800">{p.club}</h3>
                  <p className="text-sm text-charcoal/60">{p.country}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-charcoal/50">
            Partnership details are placeholders. Verified club information will be added once official agreements are documented.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
        <PlaceholderImage className="absolute inset-0 opacity-20" />
        <div className="container-page relative z-10 text-center">
          <span className="eyebrow justify-center text-gold-300"><Mail className="h-4 w-4" /> Let's Connect</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Interested in partnering with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-100">
            We are always open to new twin club relationships, joint projects and international collaborations.
          </p>
          <Link to="/contact" className="btn-gold mt-8">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

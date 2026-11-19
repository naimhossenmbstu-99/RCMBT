import { Link } from 'react-router-dom';
import { ArrowRight, Target } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import { SDG_GOALS, FEATURED_PROJECTS } from '@/data/content';

export default function SdgImpact() {
  return (
    <>
      <PageHero
        eyebrow="SDG Impact"
        title="Aligning local action with global goals"
        description="We map every project to the UN Sustainable Development Goals, connecting our community service to the worldwide agenda for a better future by 2030."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'SDG Impact' }]}
      />

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center"><Target className="h-4 w-4" /> The 2030 Agenda</span>
            <h2 className="section-title mt-3">17 goals, one mission</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold-500" />
            <p className="prose-lead mt-6">
              The Sustainable Development Goals are a universal call to action to end poverty, protect the
              planet and ensure that all people enjoy peace and prosperity. As a Rotaract club, we
              contribute to these goals through targeted, measurable service projects.
            </p>
          </div>
        </div>
      </section>

      {/* SDG grid */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="The Goals"
            title="The 17 Sustainable Development Goals"
            description="Click each goal to see how our projects contribute. Goals shown without project links are areas we plan to expand into."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {SDG_GOALS.map((goal) => {
              const hasProject = FEATURED_PROJECTS.some((p) => p.sdg.includes(goal.number));
              return (
                <div
                  key={goal.number}
                  className="group relative flex flex-col items-center justify-center rounded-xl p-5 text-center text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: goal.color }}
                >
                  {hasProject && (
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-white/80" title="Active project" />
                  )}
                  <p className="font-heading text-3xl font-bold">{goal.number}</p>
                  <p className="mt-2 text-xs font-semibold leading-tight">{goal.title}</p>
                  <p className="mt-2 hidden text-[10px] leading-tight opacity-90 sm:block">{goal.short}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-xs text-charcoal/50">
            <span className="h-2 w-2 rounded-full bg-navy-700" /> = goal with an active club project
          </p>
        </div>
      </section>

      {/* Mapping */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Mapping"
            title="How our projects map to the SDGs"
            description="Each of our initiatives is aligned with one or more Sustainable Development Goals."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {FEATURED_PROJECTS.map((p) => (
              <article key={p.id} className="card flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-base font-bold text-navy-800">{p.title}</h3>
                  <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">{p.category}</span>
                </div>
                <p className="text-sm text-charcoal/70">{p.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {p.sdg.map((n) => {
                    const g = SDG_GOALS.find((s) => s.number === n);
                    return (
                      <span
                        key={n}
                        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold text-white"
                        style={{ backgroundColor: g?.color }}
                      >
                        <span className="font-heading">{n}</span> {g?.title}
                      </span>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-center">
        <div className="container-page">
          <h2 className="font-heading text-3xl font-bold text-white">Every action counts</h2>
          <p className="mx-auto mt-4 max-w-lg text-navy-100">
            See the full range of service projects driving our SDG contributions.
          </p>
          <Link to="/projects" className="btn-gold mt-8">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

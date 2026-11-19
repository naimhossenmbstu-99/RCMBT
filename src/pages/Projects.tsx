import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';
import PlaceholderImage from '@/components/PlaceholderImage';
import { FEATURED_PROJECTS, SDG_GOALS } from '@/data/content';

const CATEGORIES = ['All', 'Community Development', 'Education', 'Environment', 'Health'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? FEATURED_PROJECTS : FEATURED_PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Projects & Activities"
        title="Service in action"
        description="Our projects span community development, education, environment and health — each mapped to the UN Sustainable Development Goals."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
      />

      {/* Featured project spotlight */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <PlaceholderImage className="h-80 rounded-2xl" label="Signature Project" />
            <div>
              <span className="eyebrow">Signature Initiative</span>
              <h2 className="section-title mt-3">Clean Water for Rural Schools</h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-gold-500" />
              <p className="prose-lead mt-6">
                Access to safe drinking water is a fundamental right. Through this ongoing initiative, we
                install water purification facilities in rural schools across the Tangail district, ensuring
                that students can learn and grow in a healthy environment.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[6, 3].map((n) => {
                  const g = SDG_GOALS.find((s) => s.number === n);
                  return (
                    <span key={n} className="rounded-md px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: g?.color }}>
                      SDG {n}: {g?.title}
                    </span>
                  );
                })}
              </div>
              <p className="mt-6 text-sm text-charcoal/60">
                Placeholder project — full details, outcomes and beneficiary data to be added once verified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="All Projects"
            title="Explore our initiatives"
            description="Filter by area of service to discover the full range of our club's work."
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <span className="flex items-center gap-1.5 text-sm font-medium text-charcoal/60">
              <Filter className="h-4 w-4" /> Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-navy-700 text-white shadow-md'
                    : 'bg-white text-charcoal/70 hover:bg-navy-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-charcoal/50">No projects in this category yet.</p>
          )}

          <p className="mt-10 text-center text-xs text-charcoal/50">
            Project details are placeholders. Verified information will be added as projects are documented.
          </p>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-center">
        <div className="container-page">
          <h2 className="font-heading text-3xl font-bold text-white">See our impact on the Global Goals</h2>
          <p className="mx-auto mt-4 max-w-lg text-navy-100">
            Every project contributes to the UN Sustainable Development Goals. Explore the connections.
          </p>
          <Link to="/sdg" className="btn-gold mt-8">
            Explore SDG Impact <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

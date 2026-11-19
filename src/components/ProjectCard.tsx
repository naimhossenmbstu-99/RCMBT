import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { FeaturedProject } from '@/data/content';
import { SDG_GOALS } from '@/data/content';
import PlaceholderImage from './PlaceholderImage';

export function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <article className="card group overflow-hidden">
      <PlaceholderImage className="h-48 w-full" label={project.category} />
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">{project.category}</span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              project.status === 'Ongoing' ? 'bg-green-50 text-green-700' : 'bg-gold-50 text-gold-700'
            }`}
          >
            {project.status}
          </span>
        </div>
        <h3 className="font-heading text-lg font-bold text-navy-800 transition-colors group-hover:text-navy-600">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-charcoal/70">{project.summary}</p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.sdg.map((n) => {
            const goal = SDG_GOALS.find((g) => g.number === n);
            return (
              <span
                key={n}
                className="rounded-md px-2 py-0.5 text-[10px] font-bold text-white"
                style={{ backgroundColor: goal?.color ?? '#123B68' }}
                title={goal?.title}
              >
                SDG {n}
              </span>
            );
          })}
        </div>
        <Link
          to="/projects"
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 transition-colors hover:text-gold-600"
        >
          Learn more <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

import type { BoardMember } from '@/data/content';

export function BoardCard({ member }: { member: BoardMember }) {
  return (
    <article className="card group flex flex-col items-center p-6 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-500 text-xl font-bold text-gold-400 ring-4 ring-gold-500/10 transition-transform duration-300 group-hover:scale-105">
        {member.initials}
      </div>
      <h3 className="mt-4 font-heading text-base font-bold text-navy-800">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold text-gold-600">{member.role}</p>
      <p className="mt-2 text-xs text-charcoal/60">{member.portfolio}</p>
    </article>
  );
}

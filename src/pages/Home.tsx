import { Link } from 'react-router-dom';
import {
  ArrowRight, HeartHandshake, Briefcase, Globe, Users, Target, Sparkles, TrendingUp, Handshake, ShieldCheck,
} from 'lucide-react';
import {
  CLUB, HOME_STATS, FEATURED_PROJECTS, EXECUTIVE_BOARD, NEWS_ITEMS, PARTNERSHIPS, FOCUS_AREAS, SDG_GOALS,
} from '@/data/content';
import SectionHeader, { SectionHeaderLink } from '@/components/SectionHeader';
import PlaceholderImage from '@/components/PlaceholderImage';
import { ProjectCard } from '@/components/ProjectCard';
import { BoardCard } from '@/components/BoardCard';
import { NewsCard } from '@/components/NewsCard';

const FOCUS_ICONS: Record<string, typeof HeartHandshake> = {
  HeartHandshake, Briefcase, Globe, Users,
};

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FocusAreas />
      <Stats />
      <FeaturedProjects />
      <SdgPreview />
      <BoardHighlights />
      <NewsHighlights />
      <InternationalPreview />
      <MembershipCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <PlaceholderImage className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/75 to-navy-800/50" />
      <div className="container-page relative z-10 pt-24">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
            <Sparkles className="h-3.5 w-3.5" /> Annual Theme {CLUB.rotaryYear}
          </span>
          <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            Create <span className="text-gold-400">Lasting</span> Impact
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
            We are the Rotaract Club of Mawlana Bhashani Tangail — a community of young leaders
            united by fellowship, professional development and sustainable service to society.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/projects" className="btn-gold">
              Explore Our Activities <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/join" className="btn border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
              Become a Member
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-navy-200">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold-400" /> {CLUB.parentOrg}</span>
            <span className="hidden items-center gap-2 sm:flex"><MapPinLight /> {CLUB.location}</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function MapPinLight() {
  return <span className="h-2 w-2 rounded-full bg-gold-400" />;
}

function Intro() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="eyebrow"><Target className="h-4 w-4" /> Who We Are</span>
          <h2 className="section-title mt-3">A youth movement for service, leadership and fellowship</h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-gold-500" />
          <p className="prose-lead mt-6">
            The Rotaract Club of Mawlana Bhashani Tangail is part of a global network of young adults
            ages 18 to 30 who are committed to creating positive change in their communities.
            Sponsored by {CLUB.sponsorClub} and operating under {CLUB.parentOrg}, we bring together
            passionate individuals to develop professionally, serve locally and connect globally.
          </p>
          <p className="mt-4 text-charcoal/70">
            Through service projects, professional development workshops and international partnerships,
            our members grow as leaders while delivering meaningful, sustainable impact across the
            Tangail region and beyond.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-navy-700 transition-colors hover:text-gold-600">
            Learn more about our club <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 animate-fade-up">
          <PlaceholderImage className="h-64 rounded-2xl" label="Club Photo" />
          <PlaceholderImage variant="gold" className="mt-8 h-56 rounded-2xl" label="Service in Action" />
          <PlaceholderImage variant="mist" className="-mt-8 h-56 rounded-2xl" label="Community" />
          <PlaceholderImage className="h-64 rounded-2xl" label="Fellowship" />
        </div>
      </div>
    </section>
  );
}

function FocusAreas() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="What We Do"
          title="Four pillars of our service"
          description="Our club's work is organized around four areas of focus that reflect the global Rotaract framework."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS_AREAS.map((area, i) => {
            const Icon = FOCUS_ICONS[area.icon] ?? Users;
            return (
              <article
                key={area.title}
                className="card group p-7 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-gold-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-900">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy-800">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{area.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-20 sm:py-24">
      <PlaceholderImage className="absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-navy-900/60" />
      <div className="container-page relative z-10">
        <div className="text-center">
          <span className="eyebrow text-gold-300"><TrendingUp className="h-4 w-4" /> Our Reach</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Achievements and impact
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-100">
            The following figures are placeholder values to be replaced with verified club statistics.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {HOME_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/10 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="font-heading text-4xl font-bold text-gold-400 sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-navy-100">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-navy-300">
          Placeholder values — pending verified club data.
        </p>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            align="left"
            eyebrow="Featured Work"
            title="Projects making a difference"
            description="A selection of our ongoing and completed service initiatives across the region."
          />
          <SectionHeaderLink to="/projects" label="View all projects" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PROJECTS.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}

function SdgPreview() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Global Goals"
              title="Advancing the UN Sustainable Development Goals"
              description="Every project we run is mapped to specific SDGs, aligning local action with the global agenda for a better world by 2030."
            />
            <Link to="/sdg" className="mt-6 inline-flex items-center gap-2 font-semibold text-navy-700 transition-colors hover:text-gold-600">
              Explore our SDG impact <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
            {SDG_GOALS.slice(0, 12).map((goal) => (
              <div
                key={goal.number}
                className="group flex aspect-square cursor-pointer items-center justify-center rounded-xl text-center transition-all hover:scale-105"
                style={{ backgroundColor: goal.color }}
                title={goal.title}
              >
                <div className="text-white">
                  <p className="font-heading text-lg font-bold leading-none">{goal.number}</p>
                  <p className="mt-1 hidden text-[8px] font-semibold leading-tight sm:block">{goal.title.split(' ')[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BoardHighlights() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            align="left"
            eyebrow="Leadership"
            title={`Executive Board ${CLUB.rotaryYear}`}
            description="The dedicated team leading our club this rotary year."
          />
          <SectionHeaderLink to="/board" label="Meet the full board" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {EXECUTIVE_BOARD.slice(0, 3).map((m) => <BoardCard key={m.id} member={m} />)}
        </div>
      </div>
    </section>
  );
}

function NewsHighlights() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            align="left"
            eyebrow="Latest Updates"
            title="News and announcements"
            description="Stay current with our recent activities, events and club milestones."
          />
          <SectionHeaderLink to="/news" label="All news & events" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {NEWS_ITEMS.slice(0, 4).map((n) => <NewsCard key={n.id} item={n} />)}
        </div>
      </div>
    </section>
  );
}

function InternationalPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <PlaceholderImage variant="mist" className="h-80 rounded-2xl" label="Global Fellowship" />
        <div>
          <SectionHeader
            align="left"
            eyebrow="Beyond Borders"
            title="International partnerships and fellowship"
            description="We build bridges across countries through twin club relationships, joint service projects and cultural exchange."
          />
          <div className="mt-6 flex flex-col gap-3">
            {PARTNERSHIPS.slice(0, 3).map((p, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <Handshake className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-800">{p.club}</p>
                  <p className="text-xs text-charcoal/60">{p.country} · {p.type}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/international" className="mt-6 inline-flex items-center gap-2 font-semibold text-navy-700 transition-colors hover:text-gold-600">
            Learn about our partnerships <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MembershipCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <PlaceholderImage className="absolute inset-0 opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/80 to-navy-800/40" />
      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <span className="eyebrow text-gold-300"><HeartHandshake className="h-4 w-4" /> Join the Movement</span>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold text-white sm:text-5xl">
          Be part of something bigger than yourself
        </h2>
        <p className="mt-5 max-w-xl text-lg text-navy-100">
          Develop your leadership, build lifelong friendships and create lasting impact in your community.
          Membership is open to young adults aged 18 to 30.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/join" className="btn-gold">
            Start your application <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

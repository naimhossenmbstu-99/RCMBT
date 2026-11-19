import { Link } from 'react-router-dom';
import {
  Lock, ShieldCheck, ArrowRight, LayoutDashboard, Users, FolderKanban, Newspaper,
  Image, Settings, Globe, CalendarDays, ClipboardList, Handshake,
} from 'lucide-react';

const MODULES = [
  { icon: Users, title: 'Executive Board', desc: 'Manage current and previous board members.' },
  { icon: CalendarDays, title: 'Rotary Years', desc: 'Organize content by rotary year.' },
  { icon: FolderKanban, title: 'Projects', desc: 'Create and update service projects.' },
  { icon: Globe, title: 'SDG Mappings', desc: 'Map projects to Sustainable Development Goals.' },
  { icon: Image, title: 'Gallery & Albums', desc: 'Upload and organize photographs.' },
  { icon: Newspaper, title: 'News & Events', desc: 'Publish announcements and event updates.' },
  { icon: ClipboardList, title: 'Membership', desc: 'Review membership applications.' },
  { icon: Handshake, title: 'Partnerships', desc: 'Manage international club partnerships.' },
  { icon: Settings, title: 'Website Settings', desc: 'Configure site-wide content and preferences.' },
];

export default function Admin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-950 px-5 py-20">
      <div className="w-full max-w-3xl">
        <div className="rounded-3xl border border-white/10 bg-navy-900 p-8 text-center shadow-2xl sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/10 ring-1 ring-gold-500/30">
            <Lock className="h-8 w-8 text-gold-400" />
          </div>
          <h1 className="mt-6 font-heading text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="mx-auto mt-3 max-w-md text-navy-200">
            The protected administration area for managing club content is under preparation.
            Authentication and content management modules will be available here.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-navy-100">
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            Protected route — authentication will be required.
          </div>

          <div className="mt-10 text-left">
            <div className="flex items-center gap-2 text-gold-400">
              <LayoutDashboard className="h-5 w-5" />
              <h2 className="font-heading text-sm font-semibold uppercase tracking-wider">Planned Modules</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {MODULES.map((m) => (
                <div key={m.title} className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-700 text-gold-400">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{m.title}</p>
                    <p className="text-xs text-navy-200">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link to="/" className="btn-gold mt-10">
            Back to Website <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Sparkles, Users, Heart, Briefcase, Globe, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';

const BENEFITS = [
  { icon: Heart, title: 'Serve Your Community', desc: 'Lead and participate in meaningful service projects that create real, lasting impact.' },
  { icon: Briefcase, title: 'Grow Professionally', desc: 'Access workshops, mentorship and leadership roles that build your career skills.' },
  { icon: Users, title: 'Build Friendships', desc: 'Join a supportive network of like-minded young people who become lifelong friends.' },
  { icon: Globe, title: 'Go Global', desc: 'Connect with Rotaractors worldwide through twin clubs, exchanges and conferences.' },
];

const REQUIREMENTS = [
  'Aged 18 to 30 years',
  'Residing in or connected to the Tangail area',
  'Passionate about community service and leadership',
  'Willing to actively participate in club activities',
  'Committed to the values of Rotaract and Rotary International',
];

export default function Join() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Become a member"
        description="Take the first step toward a journey of service, leadership and fellowship. Membership is open to young adults aged 18 to 30."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Join Us' }]}
      />

      {/* Benefits */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why Join"
            title="What membership offers you"
            description="Being a Rotaractor is more than volunteering — it is a platform for personal growth, professional development and global connection."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <article key={b.title} className="card group p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-gold-400 transition-transform group-hover:scale-110">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-base font-bold text-navy-800">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Form */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          {/* Requirements */}
          <div>
            <span className="eyebrow"><CheckCircle2 className="h-4 w-4" /> Eligibility</span>
            <h2 className="section-title mt-3">Who can join?</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold-500" />
            <ul className="mt-6 flex flex-col gap-3">
              {REQUIREMENTS.map((req) => (
                <li key={req} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <span className="text-sm text-charcoal/80">{req}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-gold-200 bg-gold-50 p-5">
              <span className="flex items-center gap-2 text-sm font-semibold text-gold-700">
                <Sparkles className="h-4 w-4" /> Membership Process
              </span>
              <p className="mt-2 text-sm text-charcoal/70">
                Submit the application form, attend a club meeting as a guest, meet our members, and upon
                approval by the board, be inducted as an official member.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-white p-8 shadow-card">
            <h3 className="font-heading text-xl font-bold text-navy-800">Membership Application</h3>
            <p className="mt-2 text-sm text-charcoal/60">
              Fill in your details below. Our membership team will reach out to you.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-green-50 p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
                <h4 className="font-heading text-lg font-bold text-navy-800">Application received!</h4>
                <p className="text-sm text-charcoal/70">
                  Thank you for your interest. Our membership team will contact you within a few days.
                  This is a demo form — no data has been stored.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline mt-2">
                  Submit another
                </button>
              </div>
            ) : (
              <form
                className="mt-6 flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Your full name" required />
                  <Field label="Age" name="age" type="number" placeholder="e.g. 24" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                  <Field label="Phone" name="phone" placeholder="+880 1XXX-XXXXXX" required />
                </div>
                <Field label="Occupation / Academic Background" name="occupation" placeholder="Student, Professional, etc." />
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-navy-800">Why do you want to join?</label>
                  <textarea
                    name="motivation"
                    rows={4}
                    placeholder="Tell us briefly what motivates you to join our club..."
                    className="w-full rounded-xl border border-navy-100 bg-mist px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary mt-2 w-full">
                  Submit Application <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-charcoal/50">
                  This is a demo form. When integrated, applications will be stored securely for review by the membership team.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-center">
        <div className="container-page">
          <h2 className="font-heading text-3xl font-bold text-white">Have questions before applying?</h2>
          <p className="mx-auto mt-4 max-w-lg text-navy-100">
            We are happy to help. Reach out and we will get back to you.
          </p>
          <Link to="/contact" className="btn-gold mt-8">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = 'text', placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy-800">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-navy-100 bg-mist px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
      />
    </div>
  );
}

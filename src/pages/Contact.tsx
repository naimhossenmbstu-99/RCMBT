import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { CLUB } from '@/data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="We would love to hear from you — whether you are interested in joining, partnering, or simply learning more about our club."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <ContactInfo icon={MapPin} title="Address" lines={[CLUB.address]} />
            <ContactInfo icon={Mail} title="Email" lines={[CLUB.email]} href={`mailto:${CLUB.email}`} />
            <ContactInfo icon={Phone} title="Phone" lines={[CLUB.phone]} />
            <ContactInfo icon={Clock} title="Meetings" lines={['Regular club meetings are held monthly.', 'Guests are always welcome.']} />
            <div className="rounded-2xl bg-navy-700 p-6 text-white">
              <h3 className="font-heading text-base font-bold text-gold-400">Follow Us</h3>
              <p className="mt-2 text-sm text-navy-100">Stay connected through our social media channels for the latest updates.</p>
              <div className="mt-4 flex gap-3">
                {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-navy-100 transition-colors hover:bg-gold-500 hover:text-navy-900"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 rounded-2xl bg-white p-8 shadow-card">
            <h2 className="font-heading text-2xl font-bold text-navy-800">Send us a message</h2>
            <p className="mt-2 text-sm text-charcoal/60">
              Fill out the form and we will respond as soon as possible.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-green-50 p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
                <h4 className="font-heading text-lg font-bold text-navy-800">Message sent!</h4>
                <p className="text-sm text-charcoal/70">
                  Thank you for reaching out. We will get back to you soon. This is a demo form — no data has been stored.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline mt-2">Send another</button>
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
                  <Field label="Full Name" name="name" placeholder="Your name" required />
                  <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <Field label="Subject" name="subject" placeholder="What is this about?" required />
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-navy-800">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full rounded-xl border border-navy-100 bg-mist px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto sm:self-start">
                  Send Message <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-charcoal/50">
                  This is a demo form. When integrated, messages will be delivered to the club's inbox.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-mist py-12">
        <div className="container-page">
          <div className="placeholder-image-mist flex h-72 items-center justify-center rounded-2xl">
            <div className="flex flex-col items-center gap-2 text-navy-700">
              <MapPin className="h-10 w-10" />
              <p className="font-heading text-lg font-bold">{CLUB.location}</p>
              <p className="text-sm text-navy-600">Interactive map will be embedded here.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfo({
  icon: Icon, title, lines, href,
}: {
  icon: typeof Mail; title: string; lines: string[]; href?: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-card">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-heading text-sm font-bold uppercase tracking-wider text-gold-600">{title}</h3>
      {lines.map((line, i) => (
        <p key={i} className="mt-1 text-sm text-charcoal/80">
          {href ? <a href={href} className="hover:text-navy-700">{line}</a> : line}
        </p>
      ))}
    </div>
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

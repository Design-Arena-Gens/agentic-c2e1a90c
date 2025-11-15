'use client';

import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Fiber-Class Internet",
    description: "Symmetrical speeds up to 300 Mbps with redundant power and network for non-stop productivity.",
    icon: "⚡"
  },
  {
    title: "Creator Pods",
    description: "Sound-treated pods with 4K webcams, podcast mics, and 27-inch monitors for content creators.",
    icon: "🎙️"
  },
  {
    title: "Business Concierge",
    description: "Printing, scanning, document notarization, and CAC registration support on standby.",
    icon: "💼"
  }
];

const packages = [
  {
    name: "Flex Pass",
    price: "₦1,200",
    caption: "per hour",
    benefits: ["High-speed workstation", "Complimentary coffee", "On-site tech support"]
  },
  {
    name: "Creator Day",
    price: "₦6,500",
    caption: "per day",
    benefits: ["Private creator pod", "4K livestream-ready setup", "Sound engineering assistance"]
  },
  {
    name: "Business Suite",
    price: "₦35,000",
    caption: "per week",
    benefits: ["Dedicated desk", "Unlimited printing", "Priority booking & concierge"]
  }
];

const faqs = [
  {
    question: "Where are you located?",
    answer:
      "We are centrally located in Yaba, Lagos – 5 minutes from Unilag and the Lagos tech cluster."
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes. Teams of 5+ enjoy custom pricing, dedicated VLANs, and branded workspace setups."
  },
  {
    question: "What about power reliability?",
    answer:
      "We run on solar-hybrid + inverter backup with automatic failover to ensure zero downtime."
  }
];

const stats = [
  { value: "99.9%", label: "Uptime across all zones" },
  { value: "300+", label: "Active members monthly" },
  { value: "24/7", label: "Security & support" }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-brand-secondary/30 blur-3xl" />
      <div className="absolute -bottom-10 left-10 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl" />

      <header className="section-container py-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary/20">
            <span className="text-2xl">🌐</span>
          </div>
          <div>
            <p className="text-xl font-semibold tracking-wide">NexaLink Cyber Cafe</p>
            <p className="text-sm text-slate-300">Nigeria&apos;s smart digital playground</p>
          </div>
        </div>
        <nav className="hidden gap-8 text-sm font-medium text-slate-200 md:flex">
          <Link href="#services" className="hover:text-brand-secondary">Services</Link>
          <Link href="#pricing" className="hover:text-brand-secondary">Pricing</Link>
          <Link href="#testimonials" className="hover:text-brand-secondary">Stories</Link>
          <Link href="#contact" className="hover:text-brand-secondary">Contact</Link>
        </nav>
        <Link
          href="#booking"
          className="rounded-full border border-brand-secondary/50 bg-brand-secondary/20 px-6 py-2 text-sm font-semibold text-brand-accent backdrop-blur hover:border-brand-accent/60 hover:bg-brand-secondary/30"
        >
          Book a Seat
        </Link>
      </header>

      <section className="section-container grid gap-12 pb-24 pt-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-brand-secondary/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-accent">
            Future of work in Lagos
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            The cyber cafe reinvented for Nigeria&apos;s creators, founders & gamers.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            NexaLink fuses enterprise-grade internet, immersive gaming rigs, and business concierge services to power
            your next big idea. Slide into a smart pod, stream in 4K, or launch a startup – all under one roof.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#booking"
              className="rounded-full bg-brand-secondary px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-brand-secondary/40 transition hover:bg-brand-accent"
            >
              Reserve a Pod
            </Link>
            <Link
              href="#tour"
              className="rounded-full border border-slate-700 px-8 py-3 text-sm font-semibold text-slate-100 hover:border-brand-secondary/60 hover:text-brand-accent"
            >
              Take a virtual tour
            </Link>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 backdrop-blur md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-semibold text-brand-accent">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-secondary/40 via-brand-primary/30 to-brand-accent/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/80 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="A modern cyber cafe in Lagos"
              width={700}
              height={900}
              className="h-full w-full object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-slate-700/60 bg-slate-950/70 p-4 backdrop-blur">
              <p className="text-sm text-brand-accent">Power Snapshot</p>
              <p className="text-lg font-semibold text-white">Solar + Inverter + Fiber – uptime guaranteed, even through NEPA outages.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-container pb-24">
        <div className="flex flex-col gap-6 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Built for Lagos speed, crafted for Nigeria.</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Whether you code, design, game, or run a business, NexaLink gives you the tools, bandwidth, and vibe to do
              your best work without friction.
            </p>
          </div>
          <Link
            href="#contact"
            className="self-start rounded-full border border-brand-secondary/40 px-6 py-2 text-sm font-semibold text-brand-secondary hover:border-brand-accent hover:text-brand-accent"
          >
            Partner with us
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/50 p-8 shadow-lg shadow-slate-950/60"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-secondary/10" />
            </div>
          ))}
        </div>
      </section>

      <section id="tour" className="section-container pb-24">
        <div className="grid gap-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-10 backdrop-blur md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Spaces</p>
            <h2 className="text-3xl font-semibold text-white">Immersive zones for every mission.</h2>
            <p className="text-slate-300">
              Switch from gamer arena to investor-ready boardroom in seconds. Every zone is acoustically treated, climate
              controlled, and connected to dedicated bandwidth pipes with independent QoS.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <span className="text-brand-accent">▹</span>
                VR-ready gaming rigs with 240Hz monitors.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-accent">▹</span>
                CEO pods with wireless conferencing and smart whiteboards.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-accent">▹</span>
                Creator studios with lighting kits & green screen stations.
              </li>
            </ul>
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-brand-secondary hover:border-brand-secondary hover:text-brand-accent"
            >
              Book a guided tour →
            </Link>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6">
              <p className="text-sm text-brand-accent">Launch zone</p>
              <h3 className="mt-2 text-lg font-semibold text-white">Startup Sprint Deck</h3>
              <p className="mt-3 text-sm text-slate-300">
                Weekly sessions with mentors, legal advisors, and product strategists to fast-track your launch.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6">
              <p className="text-sm text-brand-accent">Night mode</p>
              <h3 className="mt-2 text-lg font-semibold text-white">Midnight Hackathons</h3>
              <p className="mt-3 text-sm text-slate-300">
                Join Lagos&apos; brightest minds for overnight build sessions with power backup, refreshments, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section-container pb-24">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Membership</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Flexible plans that scale with your hustle.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Pay-as-you-go or lock in dedicated space. All plans include power backup, enterprise Wi-Fi 6, and access to our
            digital concierge services.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className={`relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/50 p-8 transition ${
                idx === 1 ? "md:-translate-y-4 md:scale-[1.02] border-brand-secondary/60" : ""
              }`}
            >
              {idx === 1 && (
                <span className="absolute right-6 top-6 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
              <p className="mt-6 text-4xl font-bold text-brand-accent">{pkg.price}</p>
              <p className="text-sm text-slate-400">{pkg.caption}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {pkg.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="text-brand-secondary">✔</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="#booking"
                className="mt-8 inline-flex w-full justify-center rounded-full border border-brand-secondary/40 px-6 py-3 text-sm font-semibold text-brand-secondary hover:border-brand-accent/60 hover:text-brand-accent"
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="section-container pb-24">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-10 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Community</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Trusted by founders, designers & pro gamers.</h2>
              <p className="mt-4 text-slate-300">
                From fintech startups to esports teams, NexaLink provides the always-on workspace Lagos&apos; innovators rely on.
              </p>
            </div>
            <div className="space-y-6">
              <blockquote className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 text-sm text-slate-300">
                “Our product launches now happen twice as fast. Having a reliable cyber cafe with dedicated pods and
                nonstop power in Yaba is a game changer.”
                <footer className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Amaka O., Founder @ PayWave</span>
                  <span>Lagos</span>
                </footer>
              </blockquote>
              <blockquote className="rounded-2xl border border-brand-secondary/40 bg-brand-secondary/10 p-6 text-sm text-slate-200">
                “We stream tournaments in 4K without lag. NexaLink&apos;s gaming rigs and fiber backbone are unmatched.”
                <footer className="mt-4 flex items-center justify-between text-xs text-brand-accent/80">
                  <span>Tofunmi S., Captain @ Naija Legends Esports</span>
                  <span>Victoria Island</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-container pb-24">
        <div className="grid gap-8 rounded-3xl border border-slate-800/70 bg-slate-900/40 p-10 backdrop-blur md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">FAQs</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Answers before you plug in.</h2>
            <p className="mt-4 text-slate-300">
              From subscriptions to security, here&apos;s everything you need to know before stepping into Nigeria&apos;s smartest
              cyber cafe.
            </p>
            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-slate-800/70 bg-slate-950/50 p-5">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-brand-secondary/40 bg-brand-secondary/10 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Enterprise</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Need a custom deployment?</h3>
            <p className="mt-3 text-sm text-slate-200">
              We deploy pop-up cyber cafes for conferences, film productions, and esports tournaments across Nigeria.
            </p>
            <Link
              href="mailto:enterprise@nexalink.africa"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-yellow-300"
            >
              Request a proposal
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="section-container pb-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Visit us</p>
            <h2 className="text-3xl font-semibold text-white">Plug into NexaLink today.</h2>
            <p className="text-slate-300">
              Walk in or pre-book your spot. We&apos;re steps away from key bus routes and the Lagos metro. Parking is secured
              and monitored 24/7.
            </p>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 text-sm text-slate-300">
              <p className="text-brand-accent">Address</p>
              <p className="mt-2">14 Montgomery Road, Yaba, Lagos, Nigeria</p>
              <p className="mt-4 text-brand-accent">Contact</p>
              <p className="mt-2">+234 806 000 7788</p>
              <p>hello@nexalink.africa</p>
              <p className="mt-4 text-brand-accent">Hours</p>
              <p className="mt-2">Mon – Sun: 7:00am – 11:00pm</p>
            </div>
          </div>
          <form
            id="booking"
            className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-900/50 p-8 backdrop-blur"
            onSubmit={(event) => event.preventDefault()}
          >
            <h3 className="text-xl font-semibold text-white">Reserve your seat</h3>
            <p className="text-sm text-slate-400">
              Drop your details and our concierge will confirm availability within 30 minutes during operating hours.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                <span className="text-slate-300">Full Name</span>
                <input
                  type="text"
                  placeholder="Adaeze Okafor"
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-brand-secondary focus:outline-none"
                  required
                />
              </label>
              <label className="text-sm">
                <span className="text-slate-300">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-brand-secondary focus:outline-none"
                  required
                />
              </label>
            </div>
            <label className="text-sm">
              <span className="text-slate-300">Phone</span>
              <input
                type="tel"
                placeholder="+234"
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-brand-secondary focus:outline-none"
                required
              />
            </label>
            <label className="text-sm">
              <span className="text-slate-300">What do you need?</span>
              <select
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-brand-secondary focus:outline-none"
                defaultValue="Creator Pod"
              >
                <option>Creator Pod</option>
                <option>Gaming Arena</option>
                <option>Business Suite</option>
                <option>Event Hosting</option>
              </select>
            </label>
            <label className="text-sm">
              <span className="text-slate-300">Preferred date</span>
              <input
                type="date"
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-brand-secondary focus:outline-none"
                required
              />
            </label>
            <label className="text-sm">
              <span className="text-slate-300">Additional notes</span>
              <textarea
                rows={4}
                placeholder="Tell us how we can tailor your experience."
                className="mt-2 w-full resize-none rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-brand-secondary focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-accent"
            >
              Submit request
            </button>
            <p className="text-xs text-slate-500">
              By submitting, you agree to our community guidelines and consent to receive WhatsApp updates.
            </p>
          </form>
        </div>
      </section>

      <footer className="section-container pb-12">
        <div className="flex flex-col gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/40 p-8 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Join the NexaLink signal.</p>
            <p className="text-sm text-slate-400">Weekly drops on events, founders night, and esports tournaments.</p>
          </div>
          <form className="flex w-full flex-col gap-3 md:w-auto md:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-brand-secondary focus:outline-none md:w-64"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-accent"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} NexaLink Cyber Cafe. Built in Lagos.</p>
          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Community Guidelines</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

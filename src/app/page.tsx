import Image from "next/image";
import Link from "next/link";

const KEY_SERVICES = [
  { title: "Flag a Concern", href: "https://services.mccaa.org.mt/home/infringement", icon: "🚩" },
  { title: "Registration of Lifts", href: "https://services.mccaa.org.mt/forms/lift", icon: "🛗" },
  { title: "Valuation of Precious Metals and Stones", href: "/valuation-of-precious-metals-and-stones", icon: "💎" },
  { title: "TRUST YOU Scheme", href: "/trust-you-scheme", icon: "🤝" },
  { title: "Buy a Standard", href: "/buy-a-standard", icon: "📋" },
  { title: "Online Forms", href: "/online-forms", icon: "📝" },
];

const NEWS_ITEMS = [
  {
    title: "User Guidelines | Various Laws, 2026",
    date: "August 2026",
    excerpt: "Various Laws relating to Internal Market Emergency Procedures for Market Surveillance and Conformity Assessment (Amendment) Regulations, 2026",
    href: "/user-guidelines-various-laws-2026",
  },
  {
    title: "Office for Competition | Decision 17.09.2026",
    date: "September 2026",
    excerpt: "The Office for Competition approves the acquisition of Omega Meyer Limited and Meyer Organic Private Limited by BCPE Wellbeing Holdco",
    href: "/office-for-competition-decision-17-09-2026",
  },
  {
    title: "Renewal of the 'Trust You' scheme for businesses",
    date: "September 2026",
    excerpt: "The Minister for European Funds, Social Dialogue and Consumer Protection, Keith Azzopardi Tanti, together with the Chairperson of the Malta Competition and Consumer Affairs Authority",
    href: "/renewal-of-the-trust-you-scheme-for-businesses",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a3a5c] to-[#0f2440] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Protecting Consumers
              <br />
              <span className="text-[#e84c22]">Supporting Businesses</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              The Malta Competition and Consumer Affairs Authority ensures fair markets
              and protects consumer rights through regulations, enforcement and education.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/file-a-consumer-complaint"
                className="rounded-md bg-[#e84c22] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#c73d18]"
              >
                File a Consumer Complaint
              </Link>
              <Link
                href="/consumer-handbook"
                className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Consumer Handbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consumers Hub & Business Hub */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Consumers Hub */}
            <div className="rounded-xl bg-white p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-[#1a3a5c]">Consumers Hub</h2>
              <p className="mt-3 text-gray-600">
                Know your rights, file complaints, and find information on product safety.
                We are here to help you.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link href="/file-a-consumer-complaint" className="rounded-md bg-[#1a3a5c] px-4 py-2.5 text-sm font-medium text-white text-center hover:bg-[#0f2440]">
                  File a Consumer Complaint
                </Link>
                <Link href="/consumer-handbook" className="rounded-md bg-[#1a3a5c] px-4 py-2.5 text-sm font-medium text-white text-center hover:bg-[#0f2440]">
                  Consumer Handbook
                </Link>
                <Link href="/f-gases" className="rounded-md bg-[#1a3a5c] px-4 py-2.5 text-sm font-medium text-white text-center hover:bg-[#0f2440]">
                  F-Gases
                </Link>
                <Link href="/tribunal" className="rounded-md bg-[#1a3a5c] px-4 py-2.5 text-sm font-medium text-white text-center hover:bg-[#0f2440]">
                  Tribunal
                </Link>
              </div>
            </div>
            {/* Business Hub */}
            <div className="rounded-xl bg-white p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-[#1a3a5c]">Business Hub</h2>
              <p className="mt-3 text-gray-600">
                Understand your obligations, access standards, and ensure compliance with
                competition laws. Let&apos;s build a fair market together.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link href="/get-certified" className="rounded-md bg-[#e84c22] px-4 py-2.5 text-sm font-medium text-white text-center hover:bg-[#c73d18]">
                  Get Certified
                </Link>
                <Link href="/competition-law" className="rounded-md bg-[#e84c22] px-4 py-2.5 text-sm font-medium text-white text-center hover:bg-[#c73d18]">
                  Competition Law
                </Link>
                <Link href="/concentrations" className="rounded-md bg-[#e84c22] px-4 py-2.5 text-sm font-medium text-white text-center hover:bg-[#c73d18]">
                  Concentrations
                </Link>
                <Link href="/upcoming-directives" className="rounded-md bg-[#e84c22] px-4 py-2.5 text-sm font-medium text-white text-center hover:bg-[#c73d18]">
                  Upcoming Directives
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold text-[#1a3a5c]">Key Services</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KEY_SERVICES.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#e84c22]"
              >
                <span className="text-3xl">{svc.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-[#1a3a5c] group-hover:text-[#e84c22]">
                  {svc.title}
                </h3>
                <p className="mt-1 text-sm text-[#e84c22] font-medium">More Info →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding Markets */}
      <section className="bg-[#1a3a5c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                Safeguarding Markets
                <br />
                <span className="text-[#e84c22]">Empowering Consumers</span>
              </h2>
              <p className="mt-4 text-gray-300">
                The Malta Competition and Consumer Affairs Authority ensures fair markets
                and protects consumers rights through regulations, enforcement and education.
              </p>
              <Link
                href="/file-a-consumer-complaint"
                className="mt-6 inline-block rounded-md bg-[#e84c22] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#c73d18]"
              >
                File a Consumer Complaint
              </Link>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/images/safeguarding-markets.png"
                alt="Safeguarding Markets — Empowering Consumers"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premju Servizz bi Tbissima */}
      <section className="bg-gradient-to-r from-[#e84c22] to-[#c73d18] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold">Premju Servizz bi Tbissima</h2>
          <p className="mt-4 text-lg text-white/90">
            Competition period: 16 June – 14 July 2026
          </p>
          <p className="mt-2 text-white/80">
            Voting for the 11th edition of Premju Servizz bi Tbissima is now open.
            Cast your vote and recognise outstanding businesses.
          </p>
          <a
            href="https://servizzbitbissima.mccaa.org.mt/"
            className="mt-6 inline-block rounded-md bg-white px-8 py-3 font-bold text-[#e84c22] transition-colors hover:bg-gray-100"
          >
            VOTE NOW!
          </a>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-[#1a3a5c]">Latest News</h2>
            <Link href="/news" className="text-sm font-semibold text-[#e84c22] hover:underline">
              All News →
            </Link>
          </div>
          <p className="mt-2 text-gray-600">
            Understand your obligations, access standards, and ensure compliance with
            competition laws. Let&apos;s build a fair market together.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS_ITEMS.map((item) => (
              <article key={item.href} className="group rounded-xl border bg-white shadow-sm overflow-hidden">
                <div className="p-6">
                  <span className="text-xs font-medium text-[#e84c22] uppercase">News</span>
                  <h3 className="mt-2 text-lg font-semibold text-[#1a3a5c] group-hover:text-[#e84c22]">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
                  <p className="mt-3 text-sm font-medium text-[#e84c22]">Read More</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-xl bg-white p-8 shadow-sm border text-center">
            <h2 className="text-3xl font-bold text-[#1a3a5c]">Vacancies</h2>
            <p className="mt-3 text-gray-600">Check Our Latest Vacancies</p>
            <Link
              href="/vacancies"
              className="mt-6 inline-block rounded-md bg-[#1a3a5c] px-6 py-3 font-semibold text-white hover:bg-[#0f2440]"
            >
              See All Vacancies
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1a3a5c] py-16 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
          <form className="mt-6 flex gap-3 max-w-md mx-auto">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              placeholder="Email (Required)"
              className="flex-1 rounded-md border-0 px-4 py-3 text-gray-900 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="rounded-md bg-[#e84c22] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#c73d18]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
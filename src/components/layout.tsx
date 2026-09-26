import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Consumers", href: "/consumers" },
  { label: "Business", href: "/business" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/mccaa-logo.png"
            alt="MCCAA Logo"
            width={80}
            height={48}
            className="h-12 w-auto"
          />
          <span className="text-lg font-semibold text-[#1a3a5c] hidden sm:inline">
            MCCAA
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#1a3a5c]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/file-a-consumer-complaint"
          className="rounded-md bg-[#e84c22] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#c73d18]"
        >
          File a Complaint
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-gray-300">
              Malta Competition and Consumer Affairs Authority<br />
              Mizzi House, National Road<br />
              Blata l-Bajda HMR 9010<br />
              Malta
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/file-a-consumer-complaint" className="hover:text-white">File a Complaint</Link></li>
              <li><Link href="/consumer-handbook" className="hover:text-white">Consumer Handbook</Link></li>
              <li><Link href="/get-certified" className="hover:text-white">Get Certified</Link></li>
              <li><Link href="/vacancies" className="hover:text-white">Vacancies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/valuation-of-precious-metals-and-stones" className="hover:text-white">Precious Metals Valuation</Link></li>
              <li><Link href="/trust-you-scheme" className="hover:text-white">TRUST YOU Scheme</Link></li>
              <li><Link href="/buy-a-standard" className="hover:text-white">Buy a Standard</Link></li>
              <li><Link href="/online-forms" className="hover:text-white">Online Forms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com/mccaa" className="hover:text-[#e84c22]" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com/mccaa" className="hover:text-[#e84c22]" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MCCAA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
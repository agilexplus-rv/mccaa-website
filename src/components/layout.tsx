"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Assets (served from the original site)                                    */
/* -------------------------------------------------------------------------- */

const UPLOADS = "https://mccaa.org.mt/wp-content/uploads/2026/05";
const LOGO_URL = `${UPLOADS}/mccaa-logo.svg`;
const LOGO_DARK_URL = `${UPLOADS}/logo-2nd.svg`;
const FLAG_EN = "https://mccaa.org.mt/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.svg";
const FLAG_MT = "https://mccaa.org.mt/wp-content/plugins/sitepress-multilingual-cms/res/flags/mt.svg";

/* -------------------------------------------------------------------------- */
/*  Navigation data (mirrors the WordPress "Main Menu")                        */
/* -------------------------------------------------------------------------- */

type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  {
    label: "Consumer Hub",
    children: [
      { label: "FAQ", href: "/consumers-hub-faq" },
      { label: "File a Consumer Complaint", href: "/file-a-consumer-complaint" },
      { label: "F-Gases", href: "/f-gases" },
      { label: "Public Warning Statements", href: "/public-warning-statements" },
      { label: "Consumer Handbook", href: "/consumer-handbook" },
      { label: "Tribunal", href: "/tribunal" },
    ],
  },
  {
    label: "Business Hub",
    children: [
      { label: "FAQ", href: "/business-hub-faq" },
      { label: "Get Certified", href: "/get-certified" },
      { label: "Standards and Development", href: "/standards-and-development" },
      { label: "Calibration Services", href: "/calibration-services" },
      { label: "Testing Services", href: "/testing-services" },
      { label: "Competition Law", href: "/competition-law" },
      { label: "Concentrations", href: "/concentrations" },
      { label: "Upcoming Directives", href: "/upcoming-directives" },
    ],
  },
  {
    label: "Key Services",
    children: [
      { label: "Flag a Concern", href: "https://services.mccaa.org.mt/home/infringement", external: true },
      { label: "Registration of Lifts", href: "https://services.mccaa.org.mt/forms/lift", external: true },
      { label: "Buy a Standard", href: "/buy-a-standard" },
      { label: "Valuation of Precious Metals and Stones", href: "/valuation-of-precious-metals-and-stones" },
      { label: "Online Forms", href: "/online-forms" },
    ],
  },
  { label: "News", href: "/news" },
  {
    label: "Information",
    children: [
      { label: "Publications", href: "/publications" },
      { label: "Litigation", href: "/litigation" },
      {
        label: "Guidelines",
        children: [
          { label: "Influencer Marketing", href: "/influencer-marketing" },
          {
            label: "Services Act",
            href: `${UPLOADS}/OCA-G-101r0-Guidance-Notes-on-Article-9a-of-the-Services.pdf`,
            external: true,
          },
        ],
      },
      { label: "Technical Regulations", href: "/technical-regulations" },
      { label: "Trust You Scheme", href: "/trust-you-scheme" },
      { label: "Memoranda of Understanding", href: "/memoranda-of-understanding" },
    ],
  },
  { label: "Contact Us", href: "https://services.mccaa.org.mt/", external: true },
];

/* -------------------------------------------------------------------------- */
/*  Small inline icons (extracted from the original markup)                   */
/* -------------------------------------------------------------------------- */

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" aria-hidden="true" className={className} fill="currentColor">
      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className={className} fill="currentColor">
      <path d="M13.2679 12.6427C14.5086 11.2547 15.1938 9.45791 15.1925 7.59625C15.1925 3.40567 11.7824 0 7.59625 0C3.40567 0 0 3.41011 0 7.59625C0 11.7824 3.41011 15.1925 7.59625 15.1925C9.45791 15.1938 11.2547 14.5086 12.6427 13.2679L16.647 17.2723C16.6882 17.3137 16.7373 17.3465 16.7914 17.3686C16.8454 17.3907 16.9034 17.4017 16.9619 17.4009C17.0795 17.4004 17.1924 17.3543 17.2767 17.2723C17.3178 17.2312 17.3504 17.1825 17.3727 17.1289C17.395 17.0752 17.4064 17.0177 17.4064 16.9596C17.4064 16.9016 17.395 16.8441 17.3727 16.7904C17.3504 16.7368 17.3178 16.688 17.2767 16.647L13.2679 12.6427ZM0.88246 7.59625C0.88246 3.8979 3.89347 0.886895 7.59182 0.886895C11.2902 0.886895 14.3012 3.8979 14.3012 7.59625C14.3012 11.2946 11.2902 14.3056 7.59182 14.3056C3.89347 14.3056 0.88246 11.2946 0.88246 7.59625Z" />
    </svg>
  );
}

function BurgerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 12" aria-hidden="true" className={className} fill="currentColor">
      <path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 2l14 14M16 2L2 16" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 8 14" aria-hidden="true" className="h-[14px] w-auto" fill="currentColor">
      <path d="M5.33333 8.05H7.2381L8 5.25H5.33333V3.85C5.33333 3.129 5.33333 2.45 6.85714 2.45H8V0.0980001C7.75162 0.0679001 6.81371 0 5.82324 0C3.75467 0 2.28571 1.1599 2.28571 3.29V5.25H0V8.05H2.28571V14H5.33333V8.05Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true" className="h-[14px] w-auto" fill="currentColor">
      <path d="M4.06 0H9.94C12.18 0 14 1.82 14 4.06V9.94C14 11.0168 13.5723 12.0495 12.8109 12.8109C12.0495 13.5723 11.0168 14 9.94 14H4.06C1.82 14 0 12.18 0 9.94V4.06C0 2.98322 0.427749 1.95054 1.18915 1.18915C1.95054 0.427749 2.98322 0 4.06 0ZM3.92 1.4C3.25165 1.4 2.61068 1.6655 2.13809 2.13809C1.6655 2.61068 1.4 3.25165 1.4 3.92V10.08C1.4 11.473 2.527 12.6 3.92 12.6H10.08C10.7483 12.6 11.3893 12.3345 11.8619 11.8619C12.3345 11.3893 12.6 10.7483 12.6 10.08V3.92C12.6 2.527 11.473 1.4 10.08 1.4H3.92ZM10.675 2.45C10.9071 2.45 11.1296 2.54219 11.2937 2.70628C11.4578 2.87038 11.55 3.09294 11.55 3.325C11.55 3.55706 11.4578 3.77962 11.2937 3.94372C11.1296 4.10781 10.9071 4.2 10.675 4.2C10.4429 4.2 10.2204 4.10781 10.0563 3.94372C9.89219 3.77962 9.8 3.55706 9.8 3.325C9.8 3.09294 9.89219 2.87038 10.0563 2.70628C10.2204 2.54219 10.4429 2.45 10.675 2.45ZM7 3.5C7.92826 3.5 8.8185 3.86875 9.47487 4.52513C10.1313 5.1815 10.5 6.07174 10.5 7C10.5 7.92826 10.1313 8.8185 9.47487 9.47487C8.8185 10.1313 7.92826 10.5 7 10.5C6.07174 10.5 5.1815 10.1313 4.52513 9.47487C3.86875 8.8185 3.5 7.92826 3.5 7C3.5 6.07174 3.86875 5.1815 4.52513 4.52513C5.1815 3.86875 6.07174 3.5 7 3.5ZM7 4.9C6.44305 4.9 5.9089 5.12125 5.51508 5.51508C5.12125 5.9089 4.9 6.44305 4.9 7C4.9 7.55695 5.12125 8.0911 5.51508 8.48492C5.9089 8.87875 6.44305 9.1 7 9.1C7.55695 9.1 8.0911 8.87875 8.48492 8.48492C8.87875 8.0911 9.1 7.55695 9.1 7C9.1 6.44305 8.87875 5.9089 8.48492 5.51508C8.0911 5.12125 7.55695 4.9 7 4.9Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className="h-[13px] w-auto" fill="currentColor">
      <path d="M10.6667 0C11.0203 0 11.3594 0.140476 11.6095 0.390524C11.8595 0.640573 12 0.979711 12 1.33333V10.6667C12 11.0203 11.8595 11.3594 11.6095 11.6095C11.3594 11.8595 11.0203 12 10.6667 12H1.33333C0.979711 12 0.640573 11.8595 0.390524 11.6095C0.140476 11.3594 0 11.0203 0 10.6667V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0H10.6667ZM10.3333 10.3333V6.8C10.3333 6.2236 10.1044 5.6708 9.69678 5.26322C9.2892 4.85564 8.7364 4.62667 8.16 4.62667C7.59333 4.62667 6.93333 4.97333 6.61333 5.49333V4.75333H4.75333V10.3333H6.61333V7.04667C6.61333 6.53333 7.02667 6.11333 7.54 6.11333C7.78754 6.11333 8.02493 6.21167 8.19997 6.3867C8.375 6.56173 8.47333 6.79913 8.47333 7.04667V10.3333H10.3333ZM2.58667 3.70667C2.88371 3.70667 3.16859 3.58867 3.37863 3.37863C3.58867 3.16859 3.70667 2.88371 3.70667 2.58667C3.70667 1.96667 3.20667 1.46 2.58667 1.46C2.28786 1.46 2.00128 1.5787 1.78999 1.78999C1.5787 2.00128 1.46 2.28786 1.46 2.58667C1.46 3.20667 1.96667 3.70667 2.58667 3.70667ZM3.51333 10.3333V4.75333H1.66667V10.3333H3.51333Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Link helper: internal links use next/link, externals open in a new tab     */
/* -------------------------------------------------------------------------- */

function NavLink({
  item,
  className,
  children,
  onClick,
}: {
  item: NavItem;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  const label = children ?? item.label;
  if (!item.href) {
    return (
      <span className={className} onClick={onClick}>
        {label}
      </span>
    );
  }
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Desktop navigation                                                        */
/* -------------------------------------------------------------------------- */

const DROPDOWN_LINK =
  "flex items-center justify-between gap-3 whitespace-nowrap px-5 py-[13px] text-[16px] font-medium text-[#292929] transition-colors hover:bg-brand-cream hover:text-brand-gold";

function DesktopDropdown({ items }: { items: NavItem[] }) {
  return (
    <ul className="invisible absolute left-0 top-full z-50 min-w-[260px] translate-y-2 bg-white opacity-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
      {items.map((child) =>
        child.children ? (
          <li key={child.label} className="group/sub relative">
            <NavLink item={child} className={cn(DROPDOWN_LINK, "cursor-default")}>
              {child.label}
              <ChevronIcon className="h-[10px] w-[10px]" />
            </NavLink>
            <ul className="invisible absolute left-full top-0 z-50 min-w-[220px] bg-white opacity-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover/sub:visible group-hover/sub:opacity-100">
              {child.children.map((leaf) => (
                <li key={leaf.label}>
                  <NavLink item={leaf} className={DROPDOWN_LINK} />
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={child.label}>
            <NavLink item={child} className={DROPDOWN_LINK} />
          </li>
        )
      )}
    </ul>
  );
}

function DesktopNav({ tone }: { tone: "light" | "dark" }) {
  const itemClass = cn(
    "flex items-center gap-[6px] px-3 py-[13px] text-[16px] font-medium transition-colors hover:text-brand-gold",
    tone === "light" ? "text-white" : "text-brand-dark"
  );
  return (
    <nav aria-label="Main navigation" className="hidden xl:block">
      <ul className="flex items-center">
        {NAV_ITEMS.map((item) => (
          <li key={item.label} className={cn("relative", item.children && "group/nav")}>
            <NavLink item={item} className={cn(itemClass, item.children && "cursor-default")}>
              {item.label}
              {item.children && <ChevronIcon className="h-[10px] w-[10px]" />}
            </NavLink>
            {item.children && <DesktopDropdown items={item.children} />}
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Language switcher (WPML legacy dropdown look-alike)                        */
/* -------------------------------------------------------------------------- */

function LanguageSwitcher({ tone }: { tone: "light" | "dark" }) {
  return (
    <div className="group/lang relative" aria-label="Language switcher">
      <button
        type="button"
        className={cn(
          "flex items-center gap-2 py-2 text-[12px]",
          tone === "light" ? "text-white" : "text-brand-dark"
        )}
        aria-haspopup="true"
      >
        <Image src={FLAG_EN} alt="English" width={18} height={12} unoptimized className="h-3 w-[18px]" />
        <ChevronIcon className="h-[9px] w-[9px]" />
      </button>
      <ul className="invisible absolute right-0 top-full z-50 min-w-[120px] bg-white py-1 opacity-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover/lang:visible group-hover/lang:opacity-100">
        <li>
          <a
            href="https://mccaa.org.mt/mt/"
            lang="mt"
            hrefLang="mt"
            className="flex items-center gap-2 px-4 py-2 text-[14px] text-[#292929] hover:bg-brand-cream hover:text-brand-gold"
          >
            <Image src={FLAG_MT} alt="" width={18} height={12} unoptimized className="h-3 w-[18px]" />
            Maltese
          </a>
        </li>
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header bar (shared by the hero overlay and the sticky variant)             */
/* -------------------------------------------------------------------------- */

function HeaderBar({
  tone,
  menuOpen,
  onToggleMenu,
  searchOpen,
  onToggleSearch,
}: {
  tone: "light" | "dark";
  menuOpen: boolean;
  onToggleMenu: () => void;
  searchOpen: boolean;
  onToggleSearch: () => void;
}) {
  const iconColor = tone === "light" ? "text-white" : "text-brand-dark";
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-[1400px] items-center justify-between rounded-[5px] px-5 py-[30px]",
        tone === "light" ? "bg-white/10" : "min-h-[110px] bg-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm"
      )}
    >
      <div className="flex shrink-0 items-center xl:w-1/5">
        <Link href="/" aria-label="MCCAA – Home" className="inline-flex">
          <Image
            src={tone === "light" ? LOGO_URL : LOGO_DARK_URL}
            alt="MCCAA"
            width={88}
            height={50}
            unoptimized
            priority={tone === "light"}
            className="h-[50px] w-auto"
          />
        </Link>
      </div>

      <div className="hidden flex-1 xl:block">
        <DesktopNav tone={tone} />
      </div>

      <div className="flex items-center gap-4 xl:w-[10%] xl:justify-center">
        <button
          type="button"
          onClick={onToggleSearch}
          aria-label="Search"
          aria-expanded={searchOpen}
          className={cn("hidden transition-colors hover:text-brand-gold xl:block", iconColor)}
        >
          <SearchIcon className="h-[18px] w-[18px]" />
        </button>
        <div className="hidden xl:block">
          <LanguageSwitcher tone={tone} />
        </div>
        <button
          type="button"
          onClick={onToggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={cn("xl:hidden", iconColor)}
        >
          {menuOpen ? <CloseIcon className="h-[18px] w-[18px]" /> : <BurgerIcon className="h-[14px] w-[21px]" />}
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile menu panel                                                          */
/* -------------------------------------------------------------------------- */

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const leaf = "block px-5 py-[13px] text-[16px] font-medium text-[#292929] hover:bg-brand-cream hover:text-brand-gold";
  return (
    <nav aria-label="Mobile navigation" className="mx-auto mt-2 w-full max-w-[1400px] rounded-[5px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] xl:hidden">
      <ul className="max-h-[70vh] overflow-y-auto py-2">
        {NAV_ITEMS.map((item) =>
          item.children ? (
            <li key={item.label}>
              <details className="group/m">
                <summary className={cn(leaf, "flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden")}>
                  {item.label}
                  <ChevronIcon className="h-[10px] w-[10px] transition-transform group-open/m:rotate-180" />
                </summary>
                <ul className="bg-brand-cream/40 pl-4">
                  {item.children.map((child) =>
                    child.children ? (
                      <li key={child.label}>
                        <span className={cn(leaf, "text-brand-maroon")}>{child.label}</span>
                        <ul className="pl-4">
                          {child.children.map((sub) => (
                            <li key={sub.label}>
                              <NavLink item={sub} className={leaf} onClick={onNavigate} />
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={child.label}>
                        <NavLink item={child} className={leaf} onClick={onNavigate} />
                      </li>
                    )
                  )}
                </ul>
              </details>
            </li>
          ) : (
            <li key={item.label}>
              <NavLink item={item} className={leaf} onClick={onNavigate} />
            </li>
          )
        )}
        <li className="flex items-center gap-4 px-5 py-3">
          <a href="https://mccaa.org.mt/" lang="en" className="flex items-center gap-2 text-[14px] font-medium text-brand-gold">
            <Image src={FLAG_EN} alt="" width={18} height={12} unoptimized className="h-3 w-[18px]" />
            English
          </a>
          <a href="https://mccaa.org.mt/mt/" lang="mt" hrefLang="mt" className="flex items-center gap-2 text-[14px] font-medium text-[#292929] hover:text-brand-gold">
            <Image src={FLAG_MT} alt="" width={18} height={12} unoptimized className="h-3 w-[18px]" />
            Maltese
          </a>
        </li>
        <li className="px-5 pb-3 pt-1">
          <SearchForm autoFocus={false} />
        </li>
      </ul>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Search form                                                                */
/* -------------------------------------------------------------------------- */

function SearchForm({ autoFocus }: { autoFocus: boolean }) {
  return (
    <form action="/" method="get" role="search" className="flex items-center gap-2">
      <label htmlFor="site-search" className="sr-only">
        Search
      </label>
      <input
        id="site-search"
        type="search"
        name="s"
        autoComplete="off"
        autoFocus={autoFocus}
        placeholder="Type to start searching..."
        className="h-[50px] flex-1 rounded-input bg-brand-gray px-5 text-[16px] text-brand-input outline-none placeholder:text-brand-input focus:ring-2 focus:ring-brand-gold"
      />
      <button
        type="submit"
        aria-label="Submit search"
        className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-input bg-brand-gold text-white transition-colors hover:bg-brand-gold-dark"
      >
        <SearchIcon className="h-[18px] w-[18px]" />
      </button>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header                                                                     */
/* -------------------------------------------------------------------------- */

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen && !searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, searchOpen]);

  const toggleMenu = () => {
    setMenuOpen((v) => !v);
    setSearchOpen(false);
  };
  const toggleSearch = () => {
    setSearchOpen((v) => !v);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Hero header: translucent bar sitting on the maroon hero background */}
      <header className="relative z-40 bg-brand-maroon px-5 pt-[30px]">
        <HeaderBar
          tone="light"
          menuOpen={menuOpen}
          onToggleMenu={toggleMenu}
          searchOpen={searchOpen}
          onToggleSearch={toggleSearch}
        />
        {menuOpen && (
          <div className="absolute inset-x-0 top-full z-50 px-5">
            <MobileMenu onNavigate={() => setMenuOpen(false)} />
          </div>
        )}
        {searchOpen && (
          <div className="absolute inset-x-0 top-full z-50 px-5">
            <div className="mx-auto mt-2 w-full max-w-[1400px] rounded-[5px] bg-white p-5 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              <SearchForm autoFocus />
            </div>
          </div>
        )}
      </header>

      {/* Sticky header: slides in from the top once the hero has been scrolled past */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-in-out",
          stuck ? "translate-y-0" : "-translate-y-[130%]"
        )}
        aria-hidden={!stuck}
      >
        <HeaderBar
          tone="dark"
          menuOpen={menuOpen}
          onToggleMenu={toggleMenu}
          searchOpen={searchOpen}
          onToggleSearch={toggleSearch}
        />
        {stuck && menuOpen && (
          <div className="px-5">
            <MobileMenu onNavigate={() => setMenuOpen(false)} />
          </div>
        )}
        {stuck && searchOpen && (
          <div className="px-5">
            <div className="mx-auto mt-2 w-full max-w-[1400px] rounded-[5px] bg-white p-5 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              <SearchForm autoFocus />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                     */
/* -------------------------------------------------------------------------- */

const FOOTER_CONSUMER_HUB: NavItem[] = [
  { label: "FAQ", href: "/consumers-hub-faq" },
  { label: "File a Consumer Complaint", href: "/file-a-consumer-complaint" },
  { label: "Valuation of Precious Metals and Stones", href: "/valuation-of-precious-metals-and-stones" },
  { label: "Public Warning Statements", href: "/public-warning-statements" },
  { label: "Consumer Handbook", href: "/consumer-handbook" },
  { label: "Tribunal", href: "/tribunal" },
];

const FOOTER_BUSINESS_HUB: NavItem[] = [
  { label: "FAQ", href: "/business-hub-faq" },
  { label: "Get Certified", href: "/get-certified" },
  { label: "Standards and Development", href: "/standards-and-development" },
  { label: "Competition Law", href: "/competition-law" },
  { label: "Concentrations", href: "/concentrations" },
  { label: "Upcoming Directives", href: "/upcoming-directives" },
];

const FOOTER_INFORMATION: NavItem[] = [
  { label: "Publications", href: "/publications" },
  { label: "Litigation", href: "/litigation" },
  {
    label: "Guidelines",
    children: [
      { label: "Influencer Marketing", href: "/influencer-marketing" },
      {
        label: "Services Act",
        href: `${UPLOADS}/OCA-G-101r0-Guidance-Notes-on-Article-9a-of-the-Services.pdf`,
        external: true,
      },
    ],
  },
  { label: "Technical Regulations", href: "/technical-regulations" },
  { label: "Trust You Scheme", href: "/trust-you-scheme" },
];

const FOOTER_KEY_SERVICES: NavItem[] = [
  { label: "Flag a Concern", href: "https://services.mccaa.org.mt/home/infringement", external: true },
  { label: "Registration of Lifts", href: "https://services.mccaa.org.mt/forms/lift", external: true },
  { label: "Buy a Standard", href: "/buy-a-standard" },
  { label: "Valuation of Precious Metals and Stones", href: "/valuation-of-precious-metals-and-stones" },
  { label: "Online Forms", href: "/online-forms" },
];

const FOOTER_OTHER_LINKS: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "https://services.mccaa.org.mt/", external: true },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/MCCAAMalta", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/mccaa_malta/", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mccaamalta/posts/?feedView=all", Icon: LinkedinIcon },
];

const FOOTER_LINK = "text-[16px] font-normal leading-[1.25] text-white transition-colors hover:text-brand-gold";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[20px] font-medium leading-none text-white">{children}</h2>;
}

function FooterList({ items }: { items: NavItem[] }) {
  return (
    <ul className="space-y-[10px]">
      {items.map((item) =>
        item.children ? (
          <li key={item.label}>
            <details className="group/f">
              <summary className={cn(FOOTER_LINK, "flex cursor-pointer list-none items-center gap-3 [&::-webkit-details-marker]:hidden")}>
                {item.label}
                <ChevronIcon className="h-[10px] w-[10px] transition-transform group-open/f:rotate-180" />
              </summary>
              <ul className="mt-[6px] space-y-[6px] pl-4">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <NavLink item={child} className={FOOTER_LINK} />
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ) : (
          <li key={item.label}>
            <NavLink item={item} className={FOOTER_LINK} />
          </li>
        )
      )}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-maroon px-4 text-white md:px-[30px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Logo + social */}
        <div className="flex flex-col gap-6 pb-5 pt-[50px] md:flex-row md:items-end md:justify-between">
          <Link href="/" aria-label="MCCAA – Home" className="inline-flex">
            <Image src={LOGO_URL} alt="MCCAA" width={106} height={60} unoptimized className="h-[60px] w-auto" />
          </Link>
          <ul className="flex items-center gap-[5px]">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-gold"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 gap-10 border-y border-white/40 py-[50px] sm:grid-cols-2 lg:grid-cols-[1.35fr_1.15fr_0.9fr_1fr_1.35fr] lg:gap-6">
          <div className="flex flex-col gap-8">
            <FooterHeading>Consumer Hub</FooterHeading>
            <FooterList items={FOOTER_CONSUMER_HUB} />
          </div>
          <div className="flex flex-col gap-8">
            <FooterHeading>Business Hub</FooterHeading>
            <FooterList items={FOOTER_BUSINESS_HUB} />
          </div>
          <div className="flex flex-col gap-8">
            <FooterHeading>Information</FooterHeading>
            <FooterList items={FOOTER_INFORMATION} />
          </div>
          <div className="flex flex-col gap-8">
            <FooterHeading>Key Services</FooterHeading>
            <FooterList items={FOOTER_KEY_SERVICES} />
            <FooterHeading>Other Links</FooterHeading>
            <FooterList items={FOOTER_OTHER_LINKS} />
          </div>
          <div className="flex flex-col gap-8">
            <FooterHeading>Contact</FooterHeading>
            <address className="text-[16px] not-italic leading-[1.5] text-white">
              <a
                href="https://maps.app.goo.gl/z2QdL8AzNNB79yEK6"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-gold"
              >
                National Road, Blata l- Bajda HMR 9010, Malta
              </a>
            </address>
            <p className="text-[16px] leading-[1.875] text-white">
              Head Office:{" "}
              <a href="tel:+35623952000" className="transition-colors hover:text-brand-gold">
                +356 2395 2000
              </a>
              <br />
              Consumer Helpline:{" "}
              <a href="tel:+35680074400" className="transition-colors hover:text-brand-gold">
                +356 8007 4400
              </a>
            </p>
            <div>
              <a
                href="https://services.mccaa.org.mt/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-[20px] border border-brand-gold px-5 py-[10px] text-[14px] font-normal text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-[30px]">
          <ul className="flex flex-wrap items-center text-[14px] text-white">
            <li className="flex items-center after:mx-[13px] after:h-[10px] after:border-l-2 after:border-[#ddd] after:content-['']">
              <span>
                © {new Date().getFullYear()} <span className="font-bold text-brand-gold">MCCAA</span>
              </span>
            </li>
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-brand-gold">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

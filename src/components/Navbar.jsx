import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeHref = "#home";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white shadow-sm">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex shrink-0 items-center select-none"
          aria-label="thetiny.site"
        >
          <svg
            className="h-6 w-auto max-w-[140px] sm:max-w-[160px]"
            viewBox="0 0 210 28"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="21"
              fontFamily="sans-serif"
              fontWeight="bold"
              fontSize="22"
              letterSpacing="3"
              fill="currentColor"
            >
              THETINY
              <tspan dx="1" dy="-1" fill="#94a3b8">
                .
              </tspan>
              <tspan dx="2" fontStyle="italic">
                SITE
              </tspan>
            </text>
          </svg>
        </a>

        <ul className="hidden items-center gap-5 lg:gap-8 xl:gap-10 md:flex">
          {navLinks.map((l) => {
            const isActive = l.href === activeHref;

            return (
              <li key={l.href} className="relative py-6">
                <a
                  href={l.href}
                  className={`whitespace-nowrap text-sm lg:text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#6320ee]"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {l.label}
                </a>

                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#6320ee]" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop*/}
        <div className="hidden items-center gap-2 lg:gap-3 md:flex">
          <a
            href="#login"
            className="whitespace-nowrap rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 lg:px-4"
          >
            Log In
          </a>

          <a
            href="#signup"
            className="whitespace-nowrap rounded-xl bg-[#6320ee] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#521ac9] lg:px-4"
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile*/}
        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="absolute left-0 top-full w-full border-b border-slate-200 bg-white px-5 py-5 shadow-lg md:hidden sm:px-6">
          <ul className="flex flex-col">
            {navLinks.map((l) => {
              const isActive = l.href === activeHref;

              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-slate-100 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#6320ee]"
                        : "text-slate-700 hover:text-[#6320ee]"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="w-full rounded-xl border border-slate-200 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Log In
            </a>

            <a
              href="#signup"
              onClick={() => setOpen(false)}
              className="w-full rounded-xl bg-[#6320ee] py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#521ac9]"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

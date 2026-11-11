import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { footer } from "../data/siteData";

export default function Footer() {
  const socialIcons = [FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp];

  return (
    <footer className="bg-white text-slate-600 border-t border-black">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
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
            </div>

            <p className="text-sm leading-relaxed text-slate-500 max-w-md">
              {footer.tagline}
            </p>

            <div className="flex gap-3 pt-2">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="space-y-2 pt-2 text-sm">
              <a
                href={`mailto:${footer.email}`}
                className="flex items-center gap-2.5 text-slate-700 hover:text-indigo-600"
              >
                <HiMail size={18} className="text-indigo-600" />
                <span>{footer.email}</span>
              </a>
              <a
                href={`tel:${footer.phone}`}
                className="flex items-center gap-2.5 text-slate-700 hover:text-indigo-600"
              >
                <HiPhone size={18} className="text-indigo-600" />
                <span>{footer.phone}</span>
              </a>
            </div>
          </div>
          {Object.entries(footer.columns).map(([heading, links]) => (
            <div key={heading} className="md:col-span-3">
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase mb-4">
                {heading}
              </h4>
              <ul className="space-y-3 text-sm">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 transition hover:text-slate-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{footer.copyright}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.bottomLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-slate-900 transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

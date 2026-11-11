import { Check, ArrowRight } from "lucide-react";
import { pricing } from "../data/siteData";

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center mb-16">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
          PRICING
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl tracking-tight">
          Simple, transparent pricing.
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          No hidden fees. Start free, scale when you're ready.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-3 items-stretch">
        {pricing.plans.map((p) => {
          const f = p.featured;
          return (
            <div
              key={p.name}
              className={`flex flex-col justify-between rounded-3xl p-8 transition-all ${
                f
                  ? "bg-[#6320ee] text-white shadow-2xl shadow-indigo-600/30 scale-[1.03] z-10"
                  : "border border-slate-200/80 bg-white shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)]"
              }`}
            >
              <div>
                <h3
                  className={`text-xs font-bold uppercase tracking-wider ${f ? "text-indigo-200" : "text-slate-400"}`}
                >
                  {p.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {p.price}
                  </span>
                  <span
                    className={`text-xs font-medium ${f ? "text-indigo-200" : "text-slate-400"}`}
                  >
                    {p.name.toLowerCase() === "free"
                      ? "/forever"
                      : "/per month"}
                  </span>
                </div>

                <p
                  className={`mt-3 text-sm ${f ? "text-indigo-100" : "text-slate-500"}`}
                >
                  {p.note}
                </p>

                <ul className="mt-8 space-y-3.5">
                  {p.features.map((x) => (
                    <li key={x} className="flex items-center gap-3 text-sm">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          f
                            ? "bg-white/20 text-white"
                            : "bg-indigo-50 text-[#6320ee]"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span
                        className={
                          f
                            ? "text-indigo-50 font-normal"
                            : "text-slate-600 font-normal"
                        }
                      >
                        {x}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={`mt-10 flex items-center justify-center gap-2 rounded-xl font-bold py-3.5 text-center text-sm transition-colors shadow-sm ${
                  f
                    ? "bg-white text-[#6320ee] hover:bg-slate-50"
                    : "bg-[#6320ee] text-white hover:bg-[#5219cb]"
                }`}
              >
                <span>{p.cta}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

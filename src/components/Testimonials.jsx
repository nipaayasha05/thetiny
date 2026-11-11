import { Star } from "lucide-react";
import { testimonials } from "../data/siteData";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl tracking-tight">
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex gap-1 text-[#6320ee]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <blockquote className="mt-4 text-slate-700 font-normal">
                {r.text}
              </blockquote>

              <figcaption className="mt-6">
                <span className="block text-sm font-bold text-slate-900">
                  {r.name}
                </span>
                <span className="text-sm text-slate-500">{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

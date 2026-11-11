import { why } from "../data/siteData";
import Icon from "./Icon";

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Why Choose Our Platform?
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Everything you need to manage and track your links
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3 ">
        {why.items.map((i) => (
          <div
            key={i.title}
            className="rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-md"
          >
            <span className="inline-block text-[#6320ee]">
              <Icon name={i.icon} className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              {i.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {i.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Check } from "lucide-react";
import { premium } from "../data/siteData";

export default function Premium() {
  return (
    <section id="premium" className="bg-slate-50 py-20">
      <div className="mx-auto grid sm:grid-cols-2 max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            {premium.title}
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl tracking-tight">
            {premium.subtitle}
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed text-sm sm:text-base">
            {premium.text}
          </p>

          <ul className="mt-8 space-y-3.5">
            {premium.features?.map((feature, idx) => {
              const featureText =
                typeof feature === "string"
                  ? feature
                  : feature.title || feature.text;

              return (
                <li key={idx} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    {featureText}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative rounded-3xl bg-[#6320ee] p-6 sm:p-8 text-white shadow-xl">
          <h3 className="text-center font-medium text-white/90 text-sm mb-6">
            Link Analytics Dashboard
          </h3>

          <div className="space-y-5">
            {[
              { link: "shorturl.bd/ig9Kp2", clicks: "1,247", width: "w-4/5" },
              { link: "shorturl.bd/yt3Nm8", clicks: "589", width: "w-3/5" },
              { link: "shorturl.bd/lk7Rv1", clicks: "312", width: "w-2/5" },
              { link: "shorturl.bd/fb2Wx9", clicks: "198", width: "w-1/4" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs sm:text-sm text-indigo-100">
                    {item.link}
                  </span>
                  <span className="font-bold text-sm sm:text-base text-white">
                    {item.clicks}
                  </span>
                </div>

                <div className="h-1.5 w-full bg-indigo-900/30 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-indigo-400/50 rounded-full ${item.width}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

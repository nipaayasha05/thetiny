import { BarChart3, Copy, QrCode } from "lucide-react";
import { popularLinks } from "../data/siteData";


export default function PopularLinks() {
  return (
    <section id="popular" className="mx-auto max-w-4xl px-4 py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Most Popular Links
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Check out the most clicked links on our platform
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {popularLinks.map((l) => (
          <div 
            key={l.short} 
            className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] gap-4 transition-all hover:border-slate-200"
          >
         
            <div className="overflow-hidden">
              <span className="font-semibold text-[#6320ee] text-base">
                https://{l.short}
              </span>
              <p className="mt-1 truncate text-xs text-slate-400 max-w-md">
                {l.long}
              </p>
            </div>

  <div className="flex items-center gap-2.5 self-end sm:self-center shrink-0">
            
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50/80 border border-slate-100 px-3 py-2 rounded-xl">
                <BarChart3 size={14} className="text-slate-400" /> 
                <span>{l.clicks} clicks</span>
              </div>

              <button className="flex items-center gap-1.5 bg-[#6320ee] hover:bg-[#6320ee] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm">
                <Copy size={14} />
                <span>Copy</span>
              </button>

              <button className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-600 text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors">
                <QrCode size={14} className="text-slate-400" />
                <span>QR</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
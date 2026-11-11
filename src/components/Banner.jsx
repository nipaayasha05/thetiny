// import { bannerStats } from "../data/siteData";
export default function Banner() {
  const stats = [["2M+", "Links created"], ["150M+", "Clicks tracked"], ["99.9%", "Uptime"], ["120+", "Countries reached"]];
  return (
    <section className="bg-[#6320ee]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-center text-white md:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="text-3xl font-extrabold md:text-4xl">{n}</div>
            <div className="mt-1 text-sm text-indigo-100">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
 

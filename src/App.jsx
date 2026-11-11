import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import PopularLinks from "./components/PopularLinks";
import Premium from "./components/Premium";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar /><Hero /><Banner /><PopularLinks /><Premium /><Pricing /><Testimonials /><WhyChoose /><Footer />
    </div>
  );
}

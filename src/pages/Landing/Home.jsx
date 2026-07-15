import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import DashboardPreview from "./DashboardPreview";
import WhyUs from "./WhyUs";
import Security from "./Security";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";

function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <WhyUs />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;
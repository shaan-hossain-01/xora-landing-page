import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Features from "../sections/Features";
import FAQ from "../sections/FAQ";
import Testimonials from "../sections/Testimonials";
import Download from "../sections/Download";
import Footer from "../sections/Footer";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}

export default App;

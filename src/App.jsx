import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Features from "../sections/Features";
import FAQ from "../sections/FAQ";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
    </main>
  );
}

export default App;

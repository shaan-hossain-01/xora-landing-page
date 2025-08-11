import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Features from "./components/Features";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}

export default App;

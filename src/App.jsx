import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueSection from "./components/ValueSection";
import Packages from "./components/Packages";
import Itinerary from "./components/Itinerary";
import Promo from "./components/Promo";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueSection />
      <Packages />
      <Itinerary />
      <Promo />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;

import "./styles/theme.css";
import "./styles/global.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import ReviewsSlider from "./components/ReviewsSlider";
import WhatsAppCTA from "./components/WhatsAppCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <ReviewsSlider />
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
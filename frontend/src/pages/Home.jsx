import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import ReviewsSlider from '../components/ReviewsSlider';
import Footer from '../components/Footer';
import WhatsAppCTA from '../components/WhatsAppCTA';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <ReviewsSlider />
        <Footer />
      </main>
      <WhatsAppCTA />
    </div>
  );
};

export default Home;

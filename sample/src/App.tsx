import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
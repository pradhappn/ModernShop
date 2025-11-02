
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default App;

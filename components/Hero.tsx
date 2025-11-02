
import React from 'react';
import { ArrowRightIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
          alt="Modern living room"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Discover Modern Living
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Curated collection of premium products for your lifestyle.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="inline-flex items-center gap-x-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Shop Now <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white border border-white rounded-md px-5 py-3 hover:bg-white hover:text-gray-900 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

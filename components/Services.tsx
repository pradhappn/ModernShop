
import React from 'react';
import { TruckIcon, ReturnIcon, ShieldIcon } from './icons';

const ServiceItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 text-blue-600 mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
    </div>
);

const Services: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceItem
            icon={<TruckIcon className="w-8 h-8" />}
            title="Free Shipping"
            description="On orders over $50"
          />
          <ServiceItem
            icon={<ReturnIcon className="w-8 h-8" />}
            title="Easy Returns"
            description="30-day return policy"
          />
          <ServiceItem
            icon={<ShieldIcon className="w-8 h-8" />}
            title="Secure Payment"
            description="100% secure transactions"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

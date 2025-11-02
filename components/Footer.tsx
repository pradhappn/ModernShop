
import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold text-gray-900">ModernShop</a>
            <p className="text-gray-600">Premium products for modern living. Quality and style in every purchase.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900"><FacebookIcon /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><InstagramIcon /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><TwitterIcon /></a>
            </div>
          </div>
          
          {/* Column 2: Shop */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">All Products</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">New Arrivals</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Best Sellers</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Sale</a></li>
            </ul>
          </div>
          
          {/* Column 3: Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Shipping Info</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Returns</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Newsletter</h3>
            <p className="mt-4 text-base text-gray-600">Subscribe for exclusive offers and updates</p>
            <form className="mt-4 flex items-center">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button type="submit" className="ml-2 flex-shrink-0 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">&copy; 2025 ModernShop owned @ pradhap. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

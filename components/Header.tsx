
import React from 'react';
import { SearchIcon, UserIcon, CartIcon } from './icons';

const Header: React.FC = () => {
  const navLinks = ['Shop', 'Categories', 'About', 'Contact'];

  return (
    <header className="sticky top-0 bg-white z-10 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-900">ModernShop</a>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <SearchIcon className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <UserIcon className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <CartIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

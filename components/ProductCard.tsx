
import React from 'react';
import { Product } from '../types';
import { StarIcon, CartIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

const StarRating: React.FC<{ rating: number; reviews: number }> = ({ rating, reviews }) => {
    return (
        <div className="flex items-center">
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <StarIcon
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">({reviews})</span>
        </div>
    );
};


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="aspect-w-1 aspect-h-1 bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{product.category}</p>
        <h3 className="mt-2 text-base font-semibold text-gray-900">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <div className="mt-2">
            <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
          <button className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
            <CartIcon className="-ml-0.5 h-5 w-5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

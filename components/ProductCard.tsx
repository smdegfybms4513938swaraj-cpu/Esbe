import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/product/${product.id}`} className="block group h-full">
      <div 
        className="relative aspect-[3/4] bg-pure overflow-hidden border-2 border-transparent group-hover:border-carbon transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={product.images.main} 
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img 
          src={product.images.hover} 
          alt={`${product.name} fit`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-carbon/60 flex items-center justify-center">
            <span className="font-vina text-4xl text-white tracking-wider border-4 border-white p-2 transform -rotate-12">SOLD OUT</span>
          </div>
        )}
      </div>

      <div className="mt-3 flex justify-between items-start px-1">
        <div>
          <h3 className="font-afacad font-bold text-lg leading-tight uppercase tracking-wide group-hover:text-industrialOrange transition-colors">
            {product.name}
          </h3>
          <p className="font-afacad text-sm text-gray-500 mt-1">Essential Collection</p>
        </div>
        <span className="font-afacad font-bold text-lg">
          ₹{product.price.toLocaleString()}
        </span>
      </div>
    </Link>
  );
};
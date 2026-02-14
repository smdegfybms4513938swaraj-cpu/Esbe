import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../constants';

export const Shop: React.FC = () => {
  return (
    <div className="min-h-screen bg-vapor py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 border-b-2 border-carbon pb-6">
          <h1 className="font-vina text-6xl md:text-8xl text-carbon uppercase tracking-tight">
            The Collection
          </h1>
          <p className="font-afacad text-carbon/60 uppercase tracking-widest mt-2">
            Drop 1.0 / Available Now
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {MOCK_PRODUCTS.map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
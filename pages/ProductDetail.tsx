import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { Product } from '../types';
import { ArrowLeft, Ruler } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  useEffect(() => {
    const found = MOCK_PRODUCTS.find(p => p.id === id);
    if (found) {
      setProduct(found);
    } else {
      navigate('/shop');
    }
  }, [id, navigate]);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-vapor relative">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">
        
        {/* Mobile Back Button */}
        <div className="lg:hidden p-4 absolute top-0 left-0 z-10">
          <button onClick={() => navigate('/shop')} className="bg-white/80 p-2 rounded-full backdrop-blur-md">
            <ArrowLeft size={24} />
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-7 bg-pure h-[60vh] lg:h-[calc(100vh-80px)] sticky top-0 lg:top-20 overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-carbon">
          <img 
            src={product.images.main} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="lg:col-span-5 p-6 lg:p-12 flex flex-col justify-center h-full">
          <div className="mb-2">
            <span className="font-afacad text-sm text-industrialOrange font-bold tracking-widest uppercase border border-industrialOrange px-2 py-1">
              In Stock
            </span>
          </div>
          
          <h1 className="font-vina text-6xl lg:text-8xl text-carbon leading-none mb-4 uppercase">
            {product.name}
          </h1>
          
          <div className="font-afacad text-2xl lg:text-3xl font-bold text-carbon mb-8">
            ₹{product.price.toLocaleString()}
          </div>

          <div className="space-y-8 mb-10">
            <div>
              <h3 className="font-vina text-2xl mb-3 text-carbon uppercase">Details</h3>
              <ul className="list-none space-y-2">
                {product.description.map((point, idx) => (
                  <li key={idx} className="font-afacad text-lg flex items-start">
                    <span className="mr-3 text-industrialOrange font-bold">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-vina text-2xl text-carbon uppercase">Size</h3>
                <button 
                  onClick={() => setIsSizeChartOpen(true)}
                  className="flex items-center text-sm font-afacad underline hover:text-industrialOrange"
                >
                  <Ruler size={14} className="mr-1" /> Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      w-14 h-14 border-2 font-bold font-afacad text-lg transition-all
                      ${selectedSize === size 
                        ? 'bg-carbon text-white border-carbon' 
                        : 'bg-transparent text-carbon border-carbon hover:bg-carbon/10'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="sticky bottom-0 bg-vapor pt-4 pb-8 border-t lg:border-none border-gray-200">
             <Button 
                variant="primary" 
                fullWidth 
                disabled={!selectedSize}
                className="text-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_#1A1A1A]"
              >
                {selectedSize ? `ADD TO BAG - ₹${product.price.toLocaleString()}` : 'SELECT SIZE'}
              </Button>
          </div>
        </div>
      </div>

      {/* Size Chart Modal */}
      {isSizeChartOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-carbon/80 backdrop-blur-sm">
          <div className="bg-vapor w-full max-w-md border-4 border-carbon p-6 relative shadow-[8px_8px_0px_0px_#E85D04]">
            <button 
              onClick={() => setIsSizeChartOpen(false)}
              className="absolute top-4 right-4 text-carbon hover:text-industrialOrange"
            >
              <X size={32} />
            </button>
            <h2 className="font-vina text-4xl mb-6 uppercase">Size Guide</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-carbon">
                    <th className="py-2 font-afacad font-bold uppercase">Size</th>
                    <th className="py-2 font-afacad font-bold uppercase">Chest</th>
                    <th className="py-2 font-afacad font-bold uppercase">Length</th>
                  </tr>
                </thead>
                <tbody className="font-afacad">
                  <tr className="border-b border-gray-300">
                    <td className="py-3">S</td>
                    <td className="py-3">20"</td>
                    <td className="py-3">28"</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3">M</td>
                    <td className="py-3">22"</td>
                    <td className="py-3">29"</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3">L</td>
                    <td className="py-3">24"</td>
                    <td className="py-3">30"</td>
                  </tr>
                  <tr>
                    <td className="py-3">XL</td>
                    <td className="py-3">26"</td>
                    <td className="py-3">31"</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm font-afacad text-gray-500">* Measurements in inches. Fits boxy.</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple Close icon needed here as lucide X is used
const X = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 6 6 18"/><path d="m6 6 18 18"/>
  </svg>
);

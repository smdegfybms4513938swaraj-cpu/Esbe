import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full bg-vapor/95 backdrop-blur-sm border-b-2 border-carbon">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-carbon hover:text-industrialOrange transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link to="/" className="text-carbon hover:text-carbon/80 transition-opacity">
              <Logo className="h-10 md:h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="font-afacad font-medium text-lg tracking-widest uppercase hover:text-industrialOrange transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart Icon (Placeholder) */}
          <div className="flex-1 flex justify-end md:flex-none md:ml-12">
            <button className="relative group">
              <ShoppingBag size={24} className="text-carbon group-hover:text-industrialOrange transition-colors" />
              <span className="absolute -top-2 -right-2 bg-industrialOrange text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-none">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-vapor border-b-2 border-carbon flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="font-vina text-5xl text-carbon uppercase hover:text-industrialOrange transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
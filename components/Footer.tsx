import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-carbon text-vapor py-12 border-t-4 border-industrialOrange">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          
          <div className="space-y-6">
            <Logo className="h-20 md:h-24 w-auto text-vapor" />
            <p className="font-afacad text-sm uppercase tracking-widest opacity-80 max-w-xs">
              Redefining the everyday uniform.<br/>
              <span className="text-industrialOrange font-bold text-lg mt-2 block">Simply Bold.</span>
            </p>
          </div>

          <div className="flex flex-col md:items-end space-y-2 w-full md:w-auto">
            <div className="flex space-x-6">
              <a href="#" className="font-afacad uppercase hover:text-industrialOrange transition-colors">Instagram</a>
              <a href="#" className="font-afacad uppercase hover:text-industrialOrange transition-colors">TikTok</a>
              <a href="#" className="font-afacad uppercase hover:text-industrialOrange transition-colors">Support</a>
            </div>
            <p className="font-afacad text-xs opacity-50 mt-4">
              © 2026 EsBe. Mumbai. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
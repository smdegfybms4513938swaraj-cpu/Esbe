import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-vapor flex items-center justify-center p-4">
      <div className="max-w-4xl w-full border-4 border-carbon p-8 md:p-16 bg-white shadow-[8px_8px_0px_0px_#1A1A1A]">
        
        <div className="text-center mb-12">
          <h1 className="font-vina text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase text-carbon mb-6">
            NOISE IS EASY.<br/><span className="text-industrialOrange">CLARITY IS HARD.</span>
          </h1>
          <div className="h-2 w-24 bg-carbon mx-auto"></div>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <p className="font-afacad text-xl md:text-2xl leading-relaxed text-carbon font-medium">
            <span className="font-vina text-3xl">EsBe</span> is the intersection of essential design and high-impact style.
          </p>
          
          <p className="font-afacad text-lg md:text-xl leading-relaxed text-carbon/80">
            Born from the idea that the basics shouldn't be boring, we strip away the excess to focus on structure, quality, and fit. 
            We are inspired by the raw industrial textures of Mumbai and the silence found in perfect geometry.
          </p>

          <p className="font-afacad text-lg md:text-xl leading-relaxed text-carbon/80">
            This isn't just a label. It's a standard.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4">
          <div className="bg-carbon text-vapor p-6 text-center">
             <h3 className="font-vina text-4xl mb-2">EST.</h3>
             <p className="font-afacad text-xl">2026</p>
          </div>
          <div className="bg-industrialOrange text-white p-6 text-center">
             <h3 className="font-vina text-4xl mb-2">LOC.</h3>
             <p className="font-afacad text-xl">MUMBAI</p>
          </div>
        </div>
      </div>
    </div>
  );
};
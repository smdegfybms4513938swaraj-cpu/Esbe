import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Marquee } from '../components/Marquee';
import { MARQUEE_TEXT } from '../constants';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-carbon overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/esbehero/1920/1080" 
            alt="Hero Model Back" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="font-vina text-[15vw] md:text-[12vw] leading-none text-vapor tracking-tight animate-fade-in-up">
            DROP 1.0 LIVE.
          </h1>
          <p className="font-afacad text-industrialOrange font-bold tracking-[0.3em] text-xl md:text-2xl mt-2 uppercase">
            Simply Bold.
          </p>
          <div className="mt-8 md:mt-12">
            <Button 
              variant="primary" 
              onClick={() => navigate('/shop')}
              className="text-xl px-12 py-5 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              SHOP NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <Marquee text={MARQUEE_TEXT} />

      {/* Brief Intro / Value Prop */}
      <section className="bg-vapor py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-vina text-5xl md:text-7xl text-carbon mb-6 uppercase">
            No Noise. Just Structure.
          </h2>
          <p className="font-afacad text-lg md:text-xl text-carbon/80 leading-relaxed max-w-2xl mx-auto">
            Born from the streets of Mumbai. Designed for the modern uniform. 
            We strip away the excess to focus on what matters: Cut, Fabric, and Impact.
          </p>
        </div>
      </section>
    </div>
  );
};
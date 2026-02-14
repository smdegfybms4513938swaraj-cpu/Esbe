import React from 'react';

interface MarqueeProps {
  text: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="relative overflow-hidden bg-carbon py-3 border-y border-vapor">
      <div className="whitespace-nowrap animate-marquee flex items-center">
        <span className="font-vina text-2xl text-vapor tracking-wider mx-4 uppercase">{text}</span>
        <span className="font-vina text-2xl text-vapor tracking-wider mx-4 uppercase">{text}</span>
        <span className="font-vina text-2xl text-vapor tracking-wider mx-4 uppercase">{text}</span>
        <span className="font-vina text-2xl text-vapor tracking-wider mx-4 uppercase">{text}</span>
      </div>
    </div>
  );
};
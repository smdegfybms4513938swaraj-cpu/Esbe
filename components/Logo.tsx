import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10" }) => {
  return (
    <svg 
      viewBox="0 0 270 100" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="EsBe Logo"
    >
      {/* E */}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M0 0 H60 V100 H0 V0 Z M25 20 H60 V40 H25 V20 Z M25 60 H60 V80 H25 V60 Z"
      />
      {/* S */}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M70 0 H130 V100 H70 V0 Z M100 20 H130 V40 H100 V20 Z M70 60 H100 V80 H70 V60 Z"
      />
      {/* B */}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M140 0 H200 V100 H140 V0 Z M165 20 H185 V40 H165 V20 Z M165 60 H185 V80 H165 V60 Z"
      />
      {/* e */}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M210 0 H270 V100 H210 V0 Z M235 20 H255 V40 H235 V20 Z M235 60 H270 V80 H235 V60 Z"
      />
    </svg>
  );
};
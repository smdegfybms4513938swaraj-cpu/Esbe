import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-afacad font-bold uppercase tracking-wider py-4 px-8 transition-all duration-200 border-2 text-sm md:text-base";
  
  const variants = {
    primary: "bg-industrialOrange border-industrialOrange text-white hover:bg-white hover:text-industrialOrange",
    secondary: "bg-carbon border-carbon text-white hover:bg-white hover:text-carbon",
    outline: "bg-transparent border-carbon text-carbon hover:bg-carbon hover:text-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
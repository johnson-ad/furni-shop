import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white-outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  // Définir les classes Tailwind en fonction de la variante
  const baseClasses = 'inline-block font-semibold py-3 px-6 rounded-full transition-colors duration-300 text-center';
  
  const variantClasses = {
    primary: 'bg-[#3b5d50] hover:bg-[#314d43] text-white border border-[#3b5d50]',
    secondary: 'bg-[#f9bf29] hover:bg-[#f8b810] text-[#2f2f2f] border border-[#f9bf29]',
    'white-outline': 'bg-transparent border-2 border-white/30 hover:border-white text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
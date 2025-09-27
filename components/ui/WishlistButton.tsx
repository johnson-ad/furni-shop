'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useFavoritesStore } from '../../app/favorites/page';
import { Product } from '../../types/product';

interface WishlistButtonProps {
  product: Product;
  className?: string;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ product, className = '' }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavoritesStore();
  const isProductFavorite = isFavorite(product.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isProductFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleToggleFavorite}
      className={`w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md ${className}`}
      aria-label={isProductFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${isProductFavorite ? 'text-red-500' : 'text-gray-400'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    </motion.button>
  );
};

export default WishlistButton;
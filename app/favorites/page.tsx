'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../data/products';
import Button from '../../components/ui/Button';

// Définition du store pour les favoris
interface FavoritesStore {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

// Création d'un hook personnalisé pour gérer les favoris
const useFavoritesStore = (): FavoritesStore => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  // Charger les favoris depuis le localStorage au chargement de la page
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Sauvegarder les favoris dans le localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product: Product) => {
    setFavorites(prev => {
      if (!prev.some(item => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromFavorites = (productId: number) => {
    setFavorites(prev => prev.filter(item => item.id !== productId));
  };

  const isFavorite = (productId: number) => {
    return favorites.some(item => item.id === productId);
  };

  return { favorites, addToFavorites, removeFromFavorites, isFavorite };
};

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavoritesStore();

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-8 text-center"
        >
          Your Favorites
        </motion.h1>

        {favorites.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center py-12"
          >
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-[#2f2f2f] mb-4">Your favorites list is empty</h2>
            <p className="text-[#6a6a6a] mb-8 max-w-md mx-auto">Browse our shop and add items to your favorites to save them for later.</p>
            <Link href="/shop">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={product.image} 
                      alt={product.title} 
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <button 
                    onClick={() => removeFromFavorites(product.id)}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
                    aria-label="Remove from favorites"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-[#2f2f2f] mb-2">
                    <Link href={`/shop/${product.id}`} className="hover:text-[#3b5d50] transition-colors duration-300">
                      {product.title}
                    </Link>
                  </h3>
                  <p className="text-[#6a6a6a] text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#3b5d50] font-bold">${product.price.toFixed(2)}</span>
                    <Link href={`/shop/${product.id}`}>
                      <Button variant="outline" size="sm">View Details</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;

// Exporter le hook pour l'utiliser dans d'autres composants
export { useFavoritesStore };
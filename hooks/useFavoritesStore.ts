'use client';

import { useState, useEffect } from 'react';
import { Product } from '../data/products';

// Définition du store pour les favoris
export interface FavoritesStore {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

// Création d'un hook personnalisé pour gérer les favoris
export const useFavoritesStore = (): FavoritesStore => {
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
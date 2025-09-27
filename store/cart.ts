import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '../types/product';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>(
  persist(
    (set, get) => ({
      items: [],
      
      // Ajouter un produit au panier
      addItem: (product: Product, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === product.id);
        
        if (existingItem) {
          // Si le produit existe déjà, mettre à jour la quantité
          set({
            items: items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          // Sinon, ajouter le nouveau produit
          set({
            items: [...items, { ...product, quantity }],
          });
        }
      },
      
      // Supprimer un produit du panier
      removeItem: (productId: number) => {
        const { items } = get();
        set({
          items: items.filter(item => item.id !== productId),
        });
      },
      
      // Mettre à jour la quantité d'un produit
      updateQuantity: (productId: number, quantity: number) => {
        const { items } = get();
        
        if (quantity <= 0) {
          // Si la quantité est 0 ou moins, supprimer l'article
          set({
            items: items.filter(item => item.id !== productId),
          });
        } else {
          // Sinon, mettre à jour la quantité
          set({
            items: items.map(item =>
              item.id === productId ? { ...item, quantity } : item
            ),
          });
        }
      },
      
      // Vider le panier
      clearCart: () => set({ items: [] }),
      
      // Obtenir le nombre total d'articles dans le panier
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },
      
      // Obtenir le prix total du panier
      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'furni-cart', // Nom pour le stockage local
    }
  )
);
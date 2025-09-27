import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      
      addToCart: (product: Product, quantity: number = 1) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === product.id);
        
        let updatedItems;
        
        if (existingItem) {
          updatedItems = items.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          updatedItems = [...items, { ...product, quantity }];
        }
        
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        set({ items: updatedItems, totalItems, totalPrice });
      },
      
      removeFromCart: (productId: number) => {
        const { items } = get();
        const updatedItems = items.filter(item => item.id !== productId);
        
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        set({ items: updatedItems, totalItems, totalPrice });
      },
      
      updateQuantity: (productId: number, quantity: number) => {
        const { items } = get();
        
        if (quantity <= 0) {
          return get().removeFromCart(productId);
        }
        
        const updatedItems = items.map(item => 
          item.id === productId ? { ...item, quantity } : item
        );
        
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        set({ items: updatedItems, totalItems, totalPrice });
      },
      
      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
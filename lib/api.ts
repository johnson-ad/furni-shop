import { Product } from '../types/product';
import { User, LoginCredentials } from '../types/user';

// Base API URL - à remplacer par l'URL réelle de l'API lorsqu'elle sera disponible
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

// Fonction utilitaire pour les requêtes fetch
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  
  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });
  
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }
  
  return response.json();
}

// API Produits
export const productsAPI = {
  getAll: async (): Promise<Product[]> => {
    // Simulation d'une requête API - à remplacer par un vrai appel API
    return fetchAPI<Product[]>('/products');
  },
  
  getById: async (id: string): Promise<Product> => {
    return fetchAPI<Product>(`/products/${id}`);
  },
  
  getFeatured: async (): Promise<Product[]> => {
    return fetchAPI<Product[]>('/products/featured');
  },
};

// API Authentification
export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<{ user: User; token: string }> => {
    return fetchAPI<{ user: User; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },
  
  register: async (userData: LoginCredentials & { name: string }): Promise<{ user: User; token: string }> => {
    return fetchAPI<{ user: User; token: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
  
  logout: async (): Promise<void> => {
    return fetchAPI<void>('/auth/logout', { method: 'POST' });
  },
  
  getProfile: async (): Promise<User> => {
    return fetchAPI<User>('/auth/profile');
  },
};

// API Panier (pour une future intégration avec un backend)
export const cartAPI = {
  getCart: async (): Promise<Product[]> => {
    return fetchAPI<Product[]>('/cart');
  },
  
  addToCart: async (productId: string, quantity: number): Promise<void> => {
    return fetchAPI<void>('/cart/add', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    });
  },
  
  updateQuantity: async (productId: string, quantity: number): Promise<void> => {
    return fetchAPI<void>('/cart/update', {
      method: 'PUT',
      body: JSON.stringify({ productId, quantity }),
    });
  },
  
  removeFromCart: async (productId: string): Promise<void> => {
    return fetchAPI<void>(`/cart/remove/${productId}`, {
      method: 'DELETE',
    });
  },
  
  clearCart: async (): Promise<void> => {
    return fetchAPI<void>('/cart/clear', { method: 'DELETE' });
  },
};
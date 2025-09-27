import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    title: 'Nordic Chair',
    price: 50.00,
    description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    image: '/images/product-1.png',
    category: 'Chair',
    featured: true,
    quantity: 1
  },
  {
    id: 2,
    title: 'Kruzo Aero Chair',
    price: 78.00,
    description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    image: '/images/product-2.png',
    category: 'Chair',
    featured: true,
    quantity: 1
  },
  {
    id: 3,
    title: 'Ergonomic Chair',
    price: 43.00,
    description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    image: '/images/product-3.png',
    category: 'Chair',
    featured: true,
    quantity: 1
  },
  {
    id: 4,
    title: 'Modern Sofa',
    price: 120.00,
    description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    image: '/images/sofa.png',
    category: 'Sofa',
    featured: false,
    quantity: 1
  },
  {
    id: 5,
    title: 'Minimalist Table',
    price: 65.00,
    description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    image: '/images/product-1.png',
    category: 'Table',
    featured: false,
    quantity: 1
  },
  {
    id: 6,
    title: 'Wooden Bookshelf',
    price: 89.00,
    description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    image: '/images/product-2.png',
    category: 'Shelf',
    featured: false,
    quantity: 1
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
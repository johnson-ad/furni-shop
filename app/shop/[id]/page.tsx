'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCartStore } from '../../../store/cart';
import { getProductById, getFeaturedProducts } from '../../../data/products';
import ProductCard from '../../../components/ui/ProductCard';
import Button from '../../../components/ui/Button';

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  // Utiliser React.use pour accéder aux paramètres
  const resolvedParams = use(Promise.resolve(params));
  const productId = parseInt(resolvedParams.id);
  const product = getProductById(productId);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== productId).slice(0, 3);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#2f2f2f] mb-4">Product Not Found</h1>
          <p className="text-[#6a6a6a] mb-8">The product you are looking for does not exist.</p>
          <Link href="/shop" className="inline-block bg-[#3b5d50] text-white px-6 py-3 rounded-md hover:bg-[#314d43] transition-colors duration-300">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Produit principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image du produit */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#f8f9fa] rounded-lg p-8 flex items-center justify-center"
          >
            <Image 
              src={product.image} 
              alt={product.title} 
              width={400} 
              height={400} 
              className="max-w-full h-auto object-contain"
            />
          </motion.div>

          {/* Détails du produit */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-4">{product.title}</h1>
            <div className="text-2xl font-semibold text-[#3b5d50] mb-6">${product.price.toFixed(2)}</div>
            
            <div className="mb-6">
              <p className="text-[#6a6a6a]">{product.description}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-center">
                <span className="mr-4 text-[#6a6a6a]">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 py-1 text-[#6a6a6a] hover:bg-gray-100 transition-colors duration-300"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-12 text-center border-x border-gray-300 py-1 focus:outline-none"
                    min="1"
                  />
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-1 text-[#6a6a6a] hover:bg-gray-100 transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Link href="/cart">
                <Button variant="secondary">
                  View Cart
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center mb-2">
                <span className="font-semibold text-[#2f2f2f] mr-2">Category:</span>
                <span className="text-[#6a6a6a]">{product.category}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Produits similaires */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-8 text-center">Related Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
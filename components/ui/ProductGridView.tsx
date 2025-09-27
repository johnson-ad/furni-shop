'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';

interface ProductGridViewProps {
  products: Product[];
}

const ProductGridView: React.FC<ProductGridViewProps> = ({ products }) => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
};

export default ProductGridView;
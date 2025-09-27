'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import WishlistButton from './WishlistButton';
import { Product } from '../../types/product';
import { useCartStore } from '../../store/cart';

interface ProductListViewProps {
  products: Product[];
}

const ProductListView: React.FC<ProductListViewProps> = ({ products }) => {
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
      className="space-y-4"
    >
      {products.map(product => (
        <motion.div 
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row"
        >
          <Link href={`/shop/${product.id}`} className="md:w-1/4 relative h-64 md:h-auto">
            <Image 
              src={product.image} 
              alt={product.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex-1">
              <Link href={`/shop/${product.id}`} className="no-underline">
                <h3 className="text-xl font-semibold text-[#2f2f2f] mb-2 hover:text-[#3b5d50] transition-colors">{product.title}</h3>
              </Link>
              <p className="text-[#6a6a6a] mb-4 line-clamp-2">{product.description}</p>
              <div className="mb-4">
                <span className="text-[#3b5d50] font-bold text-xl">${product.price.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-2">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const { addItem } = useCartStore();
                    addItem(product, 1);
                  }}
                  className="bg-[#3b5d50] text-white px-4 py-2 rounded-md hover:bg-[#314d43] transition-colors"
                >
                  Add to Cart
                </button>
                <Link href={`/shop/${product.id}`} className="bg-gray-100 text-[#6a6a6a] px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                  View Details
                </Link>
              </div>
              <div>
                <WishlistButton product={product} />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductListView;
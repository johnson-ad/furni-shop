import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '../../types/product';
import { useCartStore } from '../../store/cart';
import WishlistButton from './WishlistButton';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative ${featured ? 'pb-12' : ''}`}
    >
      <Link href={`/shop/${product.id}`} className="block text-center no-underline relative group">
        <div className="relative">
          <motion.div 
            whileHover={{ y: -25 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Image 
              src={product.image} 
              alt={product.title}
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="absolute top-0 right-0 m-2">
              <WishlistButton product={product} />
            </div>
          </motion.div>
        </div>
        
        <h3 className="font-semibold text-base text-[#2f2f2f]">{product.title}</h3>
        <strong className="block font-extrabold text-lg text-[#2f2f2f]">${product.price.toFixed(2)}</strong>
        
        <motion.button
          whileHover={{ y: -10, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleAddToCart}
          className="absolute w-9 h-9 bg-[#2f2f2f] rounded-full left-1/2 -translate-x-1/2 bottom-0 flex items-center justify-center group-hover:bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Image src="/images/cross.svg" alt="Add to cart" width={15} height={15} className="invert" />
        </motion.button>
      </Link>
      
      {featured && (
        <motion.div 
          initial={{ height: '0%' }}
          whileHover={{ height: '70%' }}
          className="absolute bottom-0 left-0 right-0 bg-[#dce5e4] z-[-1] rounded-lg transition-all duration-300"
        />
      )}
    </motion.div>
  );
};

export default ProductCard;
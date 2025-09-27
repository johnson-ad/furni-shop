'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCartStore } from '../../store/cart';
import Button from '../../components/ui/Button';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCartStore();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity >= 1) {
      updateQuantity(id, quantity);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-8 text-center"
        >
          Your Cart
        </motion.h1>

        {cart.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center py-12"
          >
            <p className="text-[#6a6a6a] text-lg mb-8">Your cart is empty.</p>
            <Link href="/shop">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-2 text-left text-[#2f2f2f] font-semibold">Product</th>
                    <th className="py-4 px-2 text-center text-[#2f2f2f] font-semibold">Price</th>
                    <th className="py-4 px-2 text-center text-[#2f2f2f] font-semibold">Quantity</th>
                    <th className="py-4 px-2 text-center text-[#2f2f2f] font-semibold">Total</th>
                    <th className="py-4 px-2 text-center text-[#2f2f2f] font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200">
                      <td className="py-4 px-2">
                        <div className="flex items-center">
                          <div className="w-16 h-16 relative bg-[#f8f9fa] rounded-md mr-4 flex-shrink-0">
                            <Image 
                              src={item.image} 
                              alt={item.title} 
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                          <div>
                            <Link href={`/shop/${item.id}`} className="text-[#2f2f2f] font-medium hover:text-[#3b5d50] transition-colors duration-300">
                              {item.title}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-center text-[#6a6a6a]">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="py-4 px-2 text-center">
                        <div className="flex items-center justify-center">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-[#6a6a6a] hover:bg-gray-100 transition-colors duration-300"
                            >
                              -
                            </button>
                            <input 
                              type="number" 
                              value={item.quantity} 
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                              className="w-10 text-center border-x border-gray-300 py-1 focus:outline-none"
                              min="1"
                            />
                            <button 
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-[#6a6a6a] hover:bg-gray-100 transition-colors duration-300"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-center font-medium text-[#3b5d50]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-4 px-2 text-center">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-between items-start">
              <div className="mb-6 md:mb-0">
                <Button variant="secondary" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg w-full md:w-80">
                <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">Cart Total</h3>
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-[#6a6a6a]">Subtotal</span>
                    <span className="font-medium text-[#2f2f2f]">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6a6a6a]">Shipping</span>
                    <span className="font-medium text-[#2f2f2f]">Free</span>
                  </div>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-bold text-[#2f2f2f]">Total</span>
                  <span className="text-lg font-bold text-[#3b5d50]">${getTotalPrice().toFixed(2)}</span>
                </div>
                <Link href="/checkout">
                  <Button variant="primary" className="w-full">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
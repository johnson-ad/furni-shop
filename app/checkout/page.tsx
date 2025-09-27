'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '../../store/cart';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const CheckoutPage = () => {
  const { cart, getTotalPrice, clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'credit-card',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler le traitement de la commande
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
    }, 1500);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#2f2f2f] mb-4">Your Cart is Empty</h1>
          <p className="text-[#6a6a6a] mb-8">Please add some products to your cart before proceeding to checkout.</p>
          <Link href="/shop" className="inline-block bg-[#3b5d50] text-white px-6 py-3 rounded-md hover:bg-[#314d43] transition-colors duration-300">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#2f2f2f] mb-2">Order Placed Successfully!</h2>
              <p className="text-[#6a6a6a]">Thank you for your purchase. We'll send you a confirmation email shortly.</p>
            </div>
            <div className="mt-8">
              <Link href="/">
                <Button variant="primary" className="w-full">
                  Return to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-8 text-center"
        >
          Checkout
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Formulaire de paiement */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#2f2f2f] mb-6">Billing Details</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <Input
                    label="Street Address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <Input
                    label="City"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Postal Code"
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Country"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#2f2f2f] mb-3">Payment Method</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit-card"
                        checked={formData.paymentMethod === 'credit-card'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-[#6a6a6a]">Credit Card</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-[#6a6a6a]">PayPal</span>
                    </label>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="w-full">
                  Place Order
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Résumé de la commande */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#f8f9fa] p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-bold text-[#2f2f2f] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center">
                    <div className="w-16 h-16 relative bg-white rounded-md mr-4 flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-[#2f2f2f] font-medium">{item.title}</h3>
                      <div className="flex justify-between">
                        <span className="text-[#6a6a6a] text-sm">{item.quantity} x ${item.price.toFixed(2)}</span>
                        <span className="font-medium text-[#3b5d50]">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-[#6a6a6a]">Subtotal</span>
                  <span className="font-medium text-[#2f2f2f]">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#6a6a6a]">Shipping</span>
                  <span className="font-medium text-[#2f2f2f]">Free</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#6a6a6a]">Tax</span>
                  <span className="font-medium text-[#2f2f2f]">${(getTotalPrice() * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-[#2f2f2f]">Total</span>
                  <span className="text-lg font-bold text-[#3b5d50]">${(getTotalPrice() * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
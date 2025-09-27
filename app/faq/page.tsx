'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days. You will receive a tracking number once your order ships so you can monitor its progress.',
      category: 'shipping',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Products must be returned in their original condition and packaging. Please note that custom or personalized items cannot be returned unless there is a defect. Shipping costs for returns are the responsibility of the customer unless the return is due to our error.',
      category: 'returns',
    },
    {
      question: 'Do you offer assembly services?',
      answer: 'Yes, we offer assembly services for an additional fee. During checkout, you can select the assembly option. Our professional team will contact you to schedule a convenient time for assembly after your furniture is delivered.',
      category: 'services',
    },
    {
      question: 'How do I care for my wooden furniture?',
      answer: 'To maintain the beauty of your wooden furniture, dust regularly with a soft, dry cloth. Avoid placing furniture in direct sunlight or near heat sources. Clean spills immediately with a slightly damp cloth and dry thoroughly. We recommend using coasters for drinks and applying furniture polish every few months.',
      category: 'product-care',
    },
    {
      question: 'Can I modify my order after it\'s placed?',
      answer: 'Order modifications are possible within 24 hours of placing your order. Please contact our customer service team immediately if you need to make changes. After 24 hours, orders typically enter processing and cannot be modified.',
      category: 'orders',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to many countries worldwide. International shipping costs and delivery times vary by location. Import duties and taxes may apply and are the responsibility of the customer. These charges are not included in our shipping fees.',
      category: 'shipping',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay. For orders over $1,000, we also offer financing options through Affirm.',
      category: 'payment',
    },
    {
      question: 'Are your products eco-friendly?',
      answer: 'Many of our products are made with sustainable materials and eco-friendly manufacturing processes. Look for our "Eco-Friendly" badge on product pages. We\'re committed to increasing our sustainable product offerings and reducing our environmental impact.',
      category: 'product-info',
    },
    {
      question: 'Do you offer a warranty?',
      answer: 'Yes, most of our furniture comes with a 1-year warranty against manufacturing defects. Some premium lines offer extended warranties of up to 5 years. Warranty details are specified on each product page and in the documentation that comes with your purchase.',
      category: 'product-info',
    },
    {
      question: 'Can I cancel my order?',
      answer: 'Orders can be cancelled within 24 hours of placement for a full refund. After this window, cancellation may not be possible if processing or shipping has begun. Please contact customer service immediately if you need to cancel an order.',
      category: 'orders',
    },
    {
      question: 'Do you offer design consultation services?',
      answer: 'Yes, we offer complimentary virtual design consultations with our interior design experts. They can help you select furniture that matches your style and space requirements. Premium in-home consultation services are also available for a fee in select locations.',
      category: 'services',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order ships, you\'ll receive an email with tracking information. You can also log into your account on our website to view order status and tracking details. If you have any questions about your shipment, our customer service team is happy to assist.',
      category: 'orders',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'shipping', name: 'Shipping' },
    { id: 'returns', name: 'Returns & Refunds' },
    { id: 'orders', name: 'Orders' },
    { id: 'product-info', name: 'Product Information' },
    { id: 'product-care', name: 'Product Care' },
    { id: 'services', name: 'Services' },
    { id: 'payment', name: 'Payment' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-4 text-center">Frequently Asked Questions</h1>
          <p className="text-[#6a6a6a] mb-12 text-center max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, returns, and more. If you can't find what you're looking for, please contact our customer support team.
          </p>

          {/* Category Tabs */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap ${activeCategory === category.id ? 'bg-[#3b5d50] text-white' : 'bg-gray-100 text-[#6a6a6a] hover:bg-gray-200'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="font-medium text-[#2f2f2f]">{item.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-[#3b5d50] transition-transform duration-300 ${openItems.includes(index) ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 border-t border-gray-100 bg-white">
                        <p className="text-[#6a6a6a]">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 bg-[#f8f9fa] rounded-lg p-6 text-center"
          >
            <h2 className="text-xl font-bold text-[#2f2f2f] mb-3">Still have questions?</h2>
            <p className="text-[#6a6a6a] mb-6">Our customer support team is here to help you.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-block bg-[#3b5d50] text-white px-6 py-3 rounded-md hover:bg-[#314d43] transition-colors duration-300">
                Contact Us
              </Link>
              <a href="mailto:support@furni.com" className="inline-block bg-white border border-[#3b5d50] text-[#3b5d50] px-6 py-3 rounded-md hover:bg-gray-50 transition-colors duration-300">
                Email Support
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
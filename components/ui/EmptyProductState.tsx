'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EmptyProductStateProps {
  onClearFilters: () => void;
}

const EmptyProductState: React.FC<EmptyProductStateProps> = ({ onClearFilters }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12 bg-gray-50 rounded-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className="text-[#6a6a6a] text-lg mb-4">No products found matching your criteria.</p>
      <button 
        onClick={onClearFilters}
        className="text-[#3b5d50] font-medium hover:underline"
      >
        Clear all filters
      </button>
    </motion.div>
  );
};

export default EmptyProductState;
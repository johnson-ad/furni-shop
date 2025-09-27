'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import ProductFilters from '../../components/ui/ProductFilters';
import ProductGridView from '../../components/ui/ProductGridView';
import ProductListView from '../../components/ui/ProductListView';
import EmptyProductState from '../../components/ui/EmptyProductState';
import Pagination from '../../components/ui/Pagination';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];
  const productsPerPage = 6;
  
  // Filter products based on category and search query
  const filteredProducts = products
    .filter(product => {
      // Category filter
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      
      // Search filter
      const searchMatch = searchQuery === '' || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      // Sort products
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  // Function to clear all filters
  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('default');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* En-tête de la page */}
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#2f2f2f] mb-4"
          >
            Shop
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#6a6a6a] max-w-2xl mx-auto"
          >
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </motion.p>
        </div>

        {/* Product Filters Component */}
        <ProductFilters 
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {/* Résultats de recherche */}
        <div className="mb-4">
          <p className="text-[#6a6a6a]">
            Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
          </p>
        </div>

        {/* Product Views */}
        {filteredProducts.length > 0 ? (
          <>
            {viewMode === 'grid' ? (
              <ProductGridView products={currentProducts} />
            ) : (
              <ProductListView products={currentProducts} />
            )}
          </>
        ) : (
          <EmptyProductState onClearFilters={clearFilters} />
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="mt-12">
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
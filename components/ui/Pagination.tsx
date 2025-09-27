'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // If total pages is less than or equal to maxPagesToShow, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);
      
      // Calculate start and end of page range
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're at the start or end
      if (currentPage <= 2) {
        endPage = 3;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 2;
      }
      
      // Add ellipsis if needed before the range
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add the range of pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed after the range
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always include last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav className={`flex justify-center mt-8 ${className}`} aria-label="Pagination">
      <ul className="flex items-center space-x-2">
        {/* Previous button */}
        <li>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-md border ${currentPage === 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 bg-white text-[#6a6a6a] hover:bg-gray-50'}`}
            aria-label="Previous page"
          >
            <span className="sr-only">Previous</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </li>
        
        {/* Page numbers */}
        {getPageNumbers().map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span className="w-10 h-10 flex items-center justify-center text-[#6a6a6a]">
                ...
              </span>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(page as number)}
                className={`w-10 h-10 flex items-center justify-center rounded-md ${currentPage === page ? 'bg-[#3b5d50] text-white' : 'border border-gray-300 bg-white text-[#6a6a6a] hover:bg-gray-50'}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </motion.button>
            )}
          </li>
        ))}
        
        {/* Next button */}
        <li>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 flex items-center justify-center rounded-md border ${currentPage === totalPages ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 bg-white text-[#6a6a6a] hover:bg-gray-50'}`}
            aria-label="Next page"
          >
            <span className="sr-only">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
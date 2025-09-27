'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useCartStore } from '@/store/cart';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const cartItemsCount = useCartStore(state => state.getTotalItems());

  // Gérer le défilement pour ajouter une ombre à la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About us' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact us' },
  ];

  return (
    <nav className={`py-5 bg-[#3b5d50] ${isScrolled ? 'shadow-lg' : ''} transition-shadow duration-300 sticky top-0 z-50`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-semibold text-white no-underline">
            Furni<span className="opacity-40">.</span>
          </Link>

          {/* Hamburger menu pour mobile */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation links - Desktop */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="relative">
                    <Link 
                      href={link.href} 
                      className={`text-white font-medium hover:opacity-100 transition-opacity relative ${isActive ? 'opacity-100' : 'opacity-50'}`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div 
                          layoutId="navbar-underline"
                          className="absolute h-1 bg-[#f9bf29] left-2 right-2 -bottom-1"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* User and Cart icons */}
            <div className="flex items-center ml-10 space-x-5">
              <Link href="/login" className="text-white">
                <Image src="/images/user.svg" alt="User account" width={20} height={20} />
              </Link>
              <Link href="/cart" className="text-white relative">
                <Image src="/images/cart.svg" alt="Shopping cart" width={20} height={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#f9bf29] text-[#2f2f2f] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation links - Mobile */}
        <motion.div 
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden mt-4"
        >
          <ul className="flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`text-white font-medium block ${pathname === link.href ? 'opacity-100' : 'opacity-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex space-x-6 pt-2">
              <Link href="/login" className="text-white" onClick={() => setIsMenuOpen(false)}>
                <Image src="/images/user.svg" alt="User account" width={20} height={20} />
              </Link>
              <Link href="/cart" className="text-white relative" onClick={() => setIsMenuOpen(false)}>
                <Image src="/images/cart.svg" alt="Shopping cart" width={20} height={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#f9bf29] text-[#2f2f2f] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
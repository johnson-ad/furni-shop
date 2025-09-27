'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#3b5d50] pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texte et boutons */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Modern Interior <span className="d-block">Design Studio</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="white-outline" href="/shop">
                Shop Now
              </Button>
              <Button variant="secondary" href="/explore">
                Explore
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image 
                src="/images/couch.png" 
                alt="Couch" 
                width={700} 
                height={600} 
                className="w-full h-auto"
                priority
              />
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 lg:w-64 lg:h-64 bg-[#dce5e4] rounded-full z-0 opacity-50"></div>
            <div className="absolute top-1/4 -right-10 w-20 h-20 lg:w-40 lg:h-40 bg-[#dce5e4] rounded-full z-0 opacity-50"></div>
          </motion.div>
        </div>
      </div>

      {/* Vague décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L48 8.875C96 17.75 192 35.5 288 53.25C384 71 480 88.75 576 80.5C672 71 768 35.5 864 26.625C960 17.75 1056 35.5 1152 44.375C1248 53.25 1344 53.25 1392 53.25L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
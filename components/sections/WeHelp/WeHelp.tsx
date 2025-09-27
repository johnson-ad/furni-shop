'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';

const WeHelp: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Grille d'images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <Image 
                    src="/images/img-grid-1.jpg" 
                    alt="Interior Design" 
                    width={300} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image 
                    src="/images/img-grid-3.jpg" 
                    alt="Interior Design" 
                    width={300} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <Image 
                    src="/images/img-grid-2.jpg" 
                    alt="Interior Design" 
                    width={300} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image 
                    src="/images/img-grid-3.jpg" 
                    alt="Interior Design" 
                    width={300} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#dce5e4] rounded-full z-0 opacity-50"></div>
            <div className="absolute top-1/4 -right-10 w-20 h-20 bg-[#dce5e4] rounded-full z-0 opacity-50"></div>
          </motion.div>

          {/* Texte et bouton */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-6">
              We Help You Make Modern Interior Design
            </h2>
            <p className="text-[#6a6a6a] mb-6">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada
            </p>
            
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <span className="mr-3 text-[#3b5d50]">✓</span>
                <span className="text-[#6a6a6a]">Donec vitae odio quis nisl dapibus malesuada</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-[#3b5d50]">✓</span>
                <span className="text-[#6a6a6a]">Donec vitae odio quis nisl dapibus malesuada</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-[#3b5d50]">✓</span>
                <span className="text-[#6a6a6a]">Donec vitae odio quis nisl dapibus malesuada</span>
              </li>
            </ul>
            
            <Button variant="primary" href="/services">
              Explore
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeHelp;
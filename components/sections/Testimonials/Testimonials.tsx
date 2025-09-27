'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  position: string;
  image: string;
  quote: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: 'Maria Jones',
    position: 'CEO, Co-Founder, XYZ Inc.',
    image: '/images/person_1.jpg',
    quote: '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."'
  },
  {
    name: 'John Smith',
    position: 'Product Designer',
    image: '/images/person_2.jpg',
    quote: '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."'
  },
  {
    name: 'Emily Davis',
    position: 'Interior Designer',
    image: '/images/person_3.jpg',
    quote: '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    // Auto-rotation
    intervalRef.current = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-[#eff2f1]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-4"
            >
              Testimonials
            </motion.h2>
          </div>

          <div className="relative">
            {/* Contrôles */}
            <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
              <button 
                onClick={goToPrev}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#3b5d50] hover:bg-[#3b5d50] hover:text-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
              <button 
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#3b5d50] hover:bg-[#3b5d50] hover:text-white transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slider */}
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    width={80} 
                    height={80} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center">
                  <p className="text-[#6a6a6a] italic mb-6">
                    {testimonials[currentIndex].quote}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#2f2f2f]">
                    {testimonials[currentIndex].name}
                  </h3>
                  
                  <p className="text-[#6a6a6a]">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Indicateurs */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-[#3b5d50]' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
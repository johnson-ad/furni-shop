'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

const ServicesPage = () => {
  const features: ServiceFeature[] = [
    {
      icon: '/images/truck.svg',
      title: 'Fast & Free Shipping',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      icon: '/images/bag.svg',
      title: 'Easy to Shop',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      icon: '/images/support.svg',
      title: '24/7 Support',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      icon: '/images/return.svg',
      title: 'Hassle Free Returns',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      icon: '/images/truck.svg',
      title: 'Fast & Free Shipping',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      icon: '/images/bag.svg',
      title: 'Easy to Shop',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      icon: '/images/support.svg',
      title: '24/7 Support',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      icon: '/images/return.svg',
      title: 'Hassle Free Returns',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    }
  ];

  const products = [
    {
      image: '/images/product-1.png',
      title: 'Nordic Chair',
      price: '$50.00'
    },
    {
      image: '/images/product-2.png',
      title: 'Kruzo Aero Chair',
      price: '$78.00'
    },
    {
      image: '/images/product-3.png',
      title: 'Ergonomic Chair',
      price: '$43.00'
    }
  ];

  const testimonials = [
    {
      quote: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      author: 'Maria Jones',
      position: 'CEO, Co-Founder, XYZ Inc.',
      image: '/images/person-1.png'
    },
    {
      quote: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
      author: 'John Doe',
      position: 'Product Designer, ABC Corp.',
      image: '/images/person-2.png'
    },
    {
      quote: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
      author: 'Sarah Smith',
      position: 'Marketing Director, XYZ Inc.',
      image: '/images/person-3.png'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-[#3b5d50] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h1>
              <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto lg:mx-0">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="secondary" href="/shop">
                  Shop Now
                </Button>
                <Button variant="white-outline" href="/explore">
                  Explore
                </Button>
              </div>
            </motion.div>
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
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#dce5e4] rounded-full">
                  <Image src={feature.icon} alt={feature.title} width={30} height={30} />
                </div>
                <h3 className="text-xl font-bold text-[#2f2f2f] mb-2">{feature.title}</h3>
                <p className="text-[#6a6a6a]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <h2 className="text-3xl font-bold text-[#2f2f2f] mb-4">Crafted with excellent material.</h2>
              <p className="text-[#6a6a6a] mb-6">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <Button variant="primary" href="/shop">
                Explore
              </Button>
            </motion.div>

            {products.map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="lg:col-span-3 group"
              >
                <Link href="/shop" className="block relative overflow-hidden rounded-lg">
                  <div className="aspect-square relative overflow-hidden bg-gray-100 rounded-lg mb-3 group-hover:shadow-md transition-shadow duration-300">
                    <Image 
                      src={product.image} 
                      alt={product.title} 
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Image src="/images/cross.svg" alt="Add to cart" width={15} height={15} />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-[#2f2f2f]">{product.title}</h3>
                  <strong className="text-[#3b5d50] font-bold">{product.price}</strong>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#2f2f2f] mb-4">Testimonials</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <blockquote className="mb-6 text-[#6a6a6a] italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      width={48} 
                      height={48} 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2f2f2f]">{testimonial.author}</h3>
                    <span className="text-sm text-[#6a6a6a]">{testimonial.position}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
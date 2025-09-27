'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-start"
    >
      <div className="bg-[#dce5e4] w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Image src={icon} alt={title} width={30} height={30} />
      </div>
      <h3 className="text-xl font-semibold text-[#2f2f2f] mb-2">{title}</h3>
      <p className="text-[#6a6a6a]">{description}</p>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#6a6a6a] text-lg"
          >
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
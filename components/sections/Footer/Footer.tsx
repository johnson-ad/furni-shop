'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler un envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setName('');
      
      // Réinitialiser le message de succès après 3 secondes
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <footer className="bg-[#eff2f1] pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        {/* Image du sofa */}
        <div className="absolute right-0 -top-20 lg:-top-40 w-40 md:w-60 lg:w-80 opacity-70 md:opacity-100">
          <Image src="/images/sofa.png" alt="Sofa" width={400} height={250} />
        </div>

        {/* Formulaire d'abonnement */}
        <div className="relative z-10 mb-16">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            >
              <h3 className="flex items-center text-xl md:text-2xl font-semibold mb-6">
                <span className="mr-2">
                  <Image src="/images/envelope-outline.svg" alt="Envelope" width={24} height={24} />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>

              {isSubmitted ? (
                <div className="text-green-600 py-4 px-6 bg-green-50 rounded-md">
                  Thank you for subscribing to our newsletter!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3b5d50] focus:border-[#3b5d50] outline-none"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3b5d50] focus:border-[#3b5d50] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-6 py-3 bg-[#3b5d50] text-white rounded-md hover:bg-[#314d43] transition-colors duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <i className="fa fa-paper-plane"></i>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Contenu principal du footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Colonne de gauche - Logo et description */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <Link href="/" className="text-2xl font-semibold text-[#2f2f2f] no-underline">
                Furni<span className="opacity-40">.</span>
              </Link>
            </div>
            <p className="text-[#6a6a6a] mb-6">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant
            </p>

            <ul className="flex space-x-4">
              <li>
                <a href="#" className="w-10 h-10 rounded-full bg-[#3b5d50] flex items-center justify-center text-white hover:bg-[#314d43] transition-colors duration-300">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="w-10 h-10 rounded-full bg-[#3b5d50] flex items-center justify-center text-white hover:bg-[#314d43] transition-colors duration-300">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="w-10 h-10 rounded-full bg-[#3b5d50] flex items-center justify-center text-white hover:bg-[#314d43] transition-colors duration-300">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="w-10 h-10 rounded-full bg-[#3b5d50] flex items-center justify-center text-white hover:bg-[#314d43] transition-colors duration-300">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne de droite - Liens */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {/* Première colonne de liens */}
              <div>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">About us</Link></li>
                  <li><Link href="/services" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Services</Link></li>
                  <li><Link href="/blog" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Blog</Link></li>
                  <li><Link href="/contact" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Contact us</Link></li>
                </ul>
              </div>

              {/* Deuxième colonne de liens */}
              <div>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Support</a></li>
                  <li><a href="#" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Knowledge base</a></li>
                  <li><a href="#" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Live chat</a></li>
                </ul>
              </div>

              {/* Troisième colonne de liens */}
              <div>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Jobs</a></li>
                  <li><a href="#" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Our team</a></li>
                  <li><a href="#" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Leadership</a></li>
                  <li><a href="#" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Privacy Policy</a></li>
                </ul>
              </div>

              {/* Quatrième colonne de liens */}
              <div>
                <ul className="space-y-2">
                  <li><Link href="/shop" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Nordic Chair</Link></li>
                  <li><Link href="/shop" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Kruzo Aero</Link></li>
                  <li><Link href="/shop" className="text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Ergonomic Chair</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="text-center lg:text-left">
              <p className="text-sm text-[#6a6a6a]">
                Copyright &copy;{new Date().getFullYear()}. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co" className="text-[#3b5d50]">Untree.co</a> Distributed By <a href="https://themewagon.com" className="text-[#3b5d50]">ThemeWagon</a>
              </p>
            </div>

            <div className="text-center lg:text-right">
              <ul className="flex justify-center lg:justify-end space-x-6">
                <li><a href="#" className="text-sm text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Terms &amp; Conditions</a></li>
                <li><a href="#" className="text-sm text-[#6a6a6a] hover:text-[#3b5d50] transition-colors duration-300">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
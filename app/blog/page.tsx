'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Choose the Perfect Sofa for Your Living Room',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    date: 'March 15, 2023',
    author: 'John Doe',
    image: '/images/post-1.jpg',
    category: 'Furniture'
  },
  {
    id: 2,
    title: '10 Interior Design Trends to Watch in 2023',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    date: 'February 28, 2023',
    author: 'Jane Smith',
    image: '/images/post-2.jpg',
    category: 'Design'
  },
  {
    id: 3,
    title: 'The Benefits of Sustainable Furniture for Your Home',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    date: 'February 15, 2023',
    author: 'Michael Brown',
    image: '/images/post-3.jpg',
    category: 'Sustainability'
  },
  {
    id: 4,
    title: 'How to Create a Cozy Reading Nook in Your Home',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    date: 'January 30, 2023',
    author: 'Sarah Johnson',
    image: '/images/post-1.jpg',
    category: 'Interior'
  },
  {
    id: 5,
    title: 'Small Space Solutions: Furniture for Apartments',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    date: 'January 15, 2023',
    author: 'John Doe',
    image: '/images/post-2.jpg',
    category: 'Furniture'
  },
  {
    id: 6,
    title: 'The Art of Mixing and Matching Furniture Styles',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    date: 'December 28, 2022',
    author: 'Jane Smith',
    image: '/images/post-3.jpg',
    category: 'Design'
  },
];

const BlogPost = ({ post }: { post: BlogPost }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm"
    >
      <div className="relative h-60 w-full">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-sm text-[#3b5d50] font-medium">{post.category}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-[#6a6a6a]">{post.date}</span>
        </div>
        <h3 className="text-xl font-bold text-[#2f2f2f] mb-2">
          <Link href={`/blog/${post.id}`} className="hover:text-[#3b5d50] transition-colors duration-300">
            {post.title}
          </Link>
        </h3>
        <p className="text-[#6a6a6a] mb-4">{post.excerpt}</p>
        <div className="flex items-center">
          <span className="text-sm text-[#6a6a6a]">By {post.author}</span>
        </div>
      </div>
    </motion.div>
  );
};

const BlogPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* En-tête de la page */}
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#2f2f2f] mb-4"
          >
            Our Blog
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

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-[#6a6a6a] hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-[#3b5d50] bg-[#3b5d50] text-white">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-[#6a6a6a] hover:bg-gray-50">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-[#6a6a6a] hover:bg-gray-50">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-[#6a6a6a] hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
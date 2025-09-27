'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  authorImage: string;
}

const blogPosts: BlogPostProps[] = [
  {
    id: 1,
    title: 'First Time Home Owner Ideas',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    image: '/images/post-1.jpg',
    date: 'Mar 15, 2023',
    author: 'Kristin Watson',
    authorImage: '/images/person_1.jpg'
  },
  {
    id: 2,
    title: 'How To Keep Your Furniture Clean',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    image: '/images/post-2.jpg',
    date: 'Mar 18, 2023',
    author: 'Robert Fox',
    authorImage: '/images/person_2.jpg'
  },
  {
    id: 3,
    title: 'Small Space Furniture Selections',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    image: '/images/post-3.jpg',
    date: 'Mar 20, 2023',
    author: 'Emily Davis',
    authorImage: '/images/person_3.jpg'
  }
];

const BlogPost: React.FC<{ post: BlogPostProps }> = ({ post }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-60 overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <Image 
              src={post.authorImage} 
              alt={post.author} 
              width={40} 
              height={40} 
              className="object-cover"
            />
          </div>
          <div>
            <span className="block text-sm text-[#6a6a6a]">{post.author}</span>
            <span className="block text-xs text-[#6a6a6a]">{post.date}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-[#2f2f2f] mb-3">
          <Link href={`/blog/${post.id}`} className="hover:text-[#3b5d50] transition-colors duration-300">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-[#6a6a6a] mb-4">
          {post.excerpt}
        </p>
        
        <Link 
          href={`/blog/${post.id}`} 
          className="inline-flex items-center text-[#3b5d50] hover:text-[#2f4b40] font-medium transition-colors duration-300"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-4 md:mb-0"
          >
            Recent Blog
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/blog" className="text-[#3b5d50] hover:text-[#2f4b40] font-medium transition-colors duration-300">
              View All Posts
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
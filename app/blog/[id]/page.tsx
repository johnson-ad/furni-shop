'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorImage: string;
  image: string;
  category: string;
}

// Props interface compatible with Next.js 15
interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Choose the Perfect Sofa for Your Living Room',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.</p>
      
      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.</p>
      
      <h2>What to Consider When Choosing a Sofa</h2>
      
      <p>Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras. Morbi posuere vestibulum lectus et. Molestie adipiscing diam nibh justo, at nisl, suspendisse consequat. Risus pellentesque felis quis etiam.</p>
      
      <ul>
        <li>Size and scale of your room</li>
        <li>Comfort and cushion filling</li>
        <li>Fabric durability and maintenance</li>
        <li>Frame construction and quality</li>
        <li>Style and design aesthetic</li>
      </ul>
      
      <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.</p>
      
      <h2>Popular Sofa Styles</h2>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.</p>
      
      <ol>
        <li>Mid-century modern</li>
        <li>Chesterfield</li>
        <li>Sectional</li>
        <li>Lawson</li>
        <li>English roll arm</li>
      </ol>
      
      <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.</p>
    `,
    date: 'March 15, 2023',
    author: 'John Doe',
    authorImage: '/images/person_1.jpg',
    image: '/images/post-1.jpg',
    category: 'Furniture'
  },
  {
    id: 2,
    title: '10 Interior Design Trends to Watch in 2023',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.</p>
      
      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.</p>
      
      <h2>Top Design Trends for 2023</h2>
      
      <p>Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras. Morbi posuere vestibulum lectus et. Molestie adipiscing diam nibh justo, at nisl, suspendisse consequat. Risus pellentesque felis quis etiam.</p>
      
      <ul>
        <li>Sustainable materials and eco-friendly designs</li>
        <li>Curved furniture and organic shapes</li>
        <li>Biophilic design with natural elements</li>
        <li>Bold colors and patterns</li>
        <li>Multifunctional spaces</li>
      </ul>
      
      <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.</p>
      
      <h2>How to Incorporate These Trends</h2>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.</p>
      
      <ol>
        <li>Start with small accent pieces</li>
        <li>Focus on one room at a time</li>
        <li>Mix trends with timeless elements</li>
        <li>Consider your existing décor</li>
        <li>Don't be afraid to experiment</li>
      </ol>
      
      <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.</p>
    `,
    date: 'March 10, 2023',
    author: 'Jane Smith',
    authorImage: '/images/person_2.jpg',
    image: '/images/post-2.jpg',
    category: 'Design'
  },
  {
    id: 3,
    title: 'Creating a Cozy Reading Nook in Your Home',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.</p>
      
      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.</p>
      
      <h2>Essential Elements for a Reading Nook</h2>
      
      <p>Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras. Morbi posuere vestibulum lectus et. Molestie adipiscing diam nibh justo, at nisl, suspendisse consequat. Risus pellentesque felis quis etiam.</p>
      
      <ul>
        <li>Comfortable seating with good back support</li>
        <li>Adequate lighting for reading</li>
        <li>A small side table for books and drinks</li>
        <li>Soft textiles for warmth and comfort</li>
        <li>Personal touches and decorative elements</li>
      </ul>
      
      <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.</p>
    `,
    date: 'March 5, 2023',
    author: 'Mike Johnson',
    authorImage: '/images/person_3.jpg',
    image: '/images/post-3.jpg',
    category: 'Interior'
  }
];

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Await the params to get the id
  const { id } = await params;
  const postId = parseInt(id);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas.</p>
          <Link href="/blog">
            <Button>Retour au blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        className="relative h-96 bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {post.title}
          </motion.h1>
          <motion.div 
            className="flex items-center justify-center space-x-4 text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.category}</span>
            <span>•</span>
            <span>Par {post.author}</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Featured Image */}
          <div className="relative h-64 md:h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12">
            {/* Author Info */}
            <motion.div 
              className="flex items-center mb-8 pb-8 border-b border-gray-200"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative w-12 h-12 mr-4">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{post.author}</h3>
                <p className="text-sm text-gray-600">{post.date}</p>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div 
              className="prose prose-lg max-w-none"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-600">Tags:</span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Mobilier
                </span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Design
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="mt-12 flex justify-between items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="/blog">
            <Button variant="secondary">
              ← Retour au blog
            </Button>
          </Link>
          
          <div className="flex space-x-4">
            {postId > 1 && (
              <Link href={`/blog/${postId - 1}`}>
                <Button variant="secondary">
                  ← Article précédent
                </Button>
              </Link>
            )}
            {postId < blogPosts.length && (
              <Link href={`/blog/${postId + 1}`}>
                <Button variant="secondary">
                  Article suivant →
                </Button>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.section 
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.id !== postId)
              .slice(0, 2)
              .map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.8 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <Button variant="outline" size="sm">
                        Lire la suite
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
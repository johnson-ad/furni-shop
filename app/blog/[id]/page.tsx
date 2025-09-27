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
    date: 'February 28, 2023',
    author: 'Jane Smith',
    authorImage: '/images/person_2.jpg',
    image: '/images/post-2.jpg',
    category: 'Design'
  },
  {
    id: 3,
    title: 'The Benefits of Sustainable Furniture for Your Home',
    excerpt: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.</p>
      
      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.</p>
      
      <h2>Why Choose Sustainable Furniture</h2>
      
      <p>Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras. Morbi posuere vestibulum lectus et. Molestie adipiscing diam nibh justo, at nisl, suspendisse consequat. Risus pellentesque felis quis etiam.</p>
      
      <ul>
        <li>Reduces environmental impact</li>
        <li>Improves indoor air quality</li>
        <li>Supports ethical manufacturing practices</li>
        <li>Often more durable and long-lasting</li>
        <li>Creates a healthier home environment</li>
      </ul>
      
      <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.</p>
      
      <h2>Sustainable Materials to Look For</h2>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.</p>
      
      <ol>
        <li>Reclaimed or recycled wood</li>
        <li>Bamboo</li>
        <li>Cork</li>
        <li>Organic cotton and wool</li>
        <li>Water-based finishes and glues</li>
      </ol>
      
      <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.</p>
    `,
    date: 'February 15, 2023',
    author: 'Michael Brown',
    authorImage: '/images/person_3.jpg',
    image: '/images/post-3.jpg',
    category: 'Sustainability'
  },
];

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const postId = parseInt(params.id);
  const post = blogPosts.find(post => post.id === postId);
  const relatedPosts = blogPosts.filter(p => p.id !== postId && p.category === post?.category).slice(0, 2);

  if (!post) {
    return (
      <div className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#2f2f2f] mb-4">Post Not Found</h1>
          <p className="text-[#6a6a6a] mb-8">The blog post you are looking for does not exist.</p>
          <Link href="/blog" className="inline-block bg-[#3b5d50] text-white px-6 py-3 rounded-md hover:bg-[#314d43] transition-colors duration-300">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* En-tête de l'article */}
          <div className="mb-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-block bg-[#3b5d50] text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2f2f2f] mb-4"
            >
              {post.title}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="flex items-center mr-6">
                <div className="w-10 h-10 relative rounded-full overflow-hidden mr-2">
                  <Image 
                    src={post.authorImage} 
                    alt={post.author} 
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[#6a6a6a]">{post.author}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3b5d50] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-[#6a6a6a]">{post.date}</span>
              </div>
            </motion.div>
          </div>

          {/* Image principale */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-10"
          >
            <Image 
              src={post.image} 
              alt={post.title} 
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Contenu de l'article */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Partage et tags */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-b border-gray-200 py-6 mb-10">
            <div className="mb-4 md:mb-0">
              <span className="font-medium text-[#2f2f2f] mr-2">Tags:</span>
              <span className="inline-block bg-gray-100 text-[#6a6a6a] px-3 py-1 rounded-full text-sm mr-2 mb-2">
                {post.category}
              </span>
              <span className="inline-block bg-gray-100 text-[#6a6a6a] px-3 py-1 rounded-full text-sm mr-2 mb-2">
                Interior
              </span>
              <span className="inline-block bg-gray-100 text-[#6a6a6a] px-3 py-1 rounded-full text-sm mb-2">
                Home
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-[#2f2f2f] mr-3">Share:</span>
              <div className="flex space-x-2">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3b5d50] text-white hover:bg-[#314d43] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3b5d50] text-white hover:bg-[#314d43] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3b5d50] text-white hover:bg-[#314d43] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Articles connexes */}
          {relatedPosts.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#2f2f2f] mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map(relatedPost => (
                  <motion.div 
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="relative h-48 w-full">
                      <Image 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#2f2f2f] mb-2">
                        <Link href={`/blog/${relatedPost.id}`} className="hover:text-[#3b5d50] transition-colors duration-300">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-[#6a6a6a] text-sm mb-4">{relatedPost.excerpt}</p>
                      <Link href={`/blog/${relatedPost.id}`} className="text-[#3b5d50] font-medium hover:underline">
                        Read More
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Retour au blog */}
          <div className="text-center">
            <Link href="/blog">
              <Button variant="primary">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setFormStatus('success');
      
      // Rediriger après 1 seconde
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#2f2f2f] mb-2">Login</h1>
              <p className="text-[#6a6a6a]">Welcome back! Please login to your account.</p>
            </div>

            {formStatus === 'success' && (
              <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
                Login successful! Redirecting...
              </div>
            )}

            {formStatus === 'error' && (
              <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
                Invalid email or password. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>

              <div className="mb-6">
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-[#3b5d50] focus:ring-[#3b5d50] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-[#6a6a6a]">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password" className="text-[#3b5d50] hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div className="mb-6">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full"
                >
                  {formStatus === 'submitting' ? 'Logging in...' : 'Login'}
                </Button>
              </div>

              <div className="text-center">
                <p className="text-[#6a6a6a]">
                  Don't have an account?{' '}
                  <Link href="/register" className="text-[#3b5d50] hover:underline">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
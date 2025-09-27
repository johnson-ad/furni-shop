'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

type AuthMode = 'login' | 'register';

const AuthPage = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateLogin = () => {
    const newErrors: Record<string, string> = {};
    
    if (!loginData.email) newErrors.email = 'Email is required';
    if (!loginData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors: Record<string, string> = {};
    
    if (!registerData.firstName) newErrors.firstName = 'First name is required';
    if (!registerData.lastName) newErrors.lastName = 'Last name is required';
    if (!registerData.email) newErrors.email = 'Email is required';
    if (!registerData.password) newErrors.password = 'Password is required';
    else if (registerData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!registerData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (registerData.password !== registerData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateLogin()) {
      // Ici, vous pourriez appeler une API pour l'authentification
      console.log('Login data:', loginData);
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateRegister()) {
      // Ici, vous pourriez appeler une API pour l'inscription
      console.log('Register data:', registerData);
    }
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            {/* Onglets */}
            <div className="flex mb-8 border-b border-gray-200">
              <button 
                onClick={() => setMode('login')}
                className={`flex-1 pb-4 text-center font-medium ${mode === 'login' ? 'text-[#3b5d50] border-b-2 border-[#3b5d50]' : 'text-[#6a6a6a]'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setMode('register')}
                className={`flex-1 pb-4 text-center font-medium ${mode === 'register' ? 'text-[#3b5d50] border-b-2 border-[#3b5d50]' : 'text-[#6a6a6a]'}`}
              >
                Register
              </button>
            </div>

            {/* Formulaire de connexion */}
            {mode === 'login' && (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleLoginSubmit}
              >
                <div className="mb-4">
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    error={errors.email}
                    required
                  />
                </div>
                <div className="mb-6">
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    error={errors.password}
                    required
                  />
                </div>
                <div className="mb-6 text-right">
                  <Link href="/auth/forgot-password" className="text-sm text-[#3b5d50] hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <Button variant="primary" type="submit" className="w-full">
                  Login
                </Button>
              </motion.form>
            )}

            {/* Formulaire d'inscription */}
            {mode === 'register' && (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleRegisterSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={registerData.firstName}
                    onChange={handleRegisterChange}
                    error={errors.firstName}
                    required
                  />
                  <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={registerData.lastName}
                    onChange={handleRegisterChange}
                    error={errors.lastName}
                    required
                  />
                </div>
                <div className="mb-4">
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    error={errors.email}
                    required
                  />
                </div>
                <div className="mb-4">
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    error={errors.password}
                    required
                  />
                </div>
                <div className="mb-6">
                  <Input
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                    error={errors.confirmPassword}
                    required
                  />
                </div>
                <Button variant="primary" type="submit" className="w-full">
                  Register
                </Button>
              </motion.form>
            )}

            <div className="mt-6 text-center text-sm text-[#6a6a6a]">
              {mode === 'login' ? (
                <p>Don't have an account? <button onClick={() => setMode('register')} className="text-[#3b5d50] hover:underline">Register</button></p>
              ) : (
                <p>Already have an account? <button onClick={() => setMode('login')} className="text-[#3b5d50] hover:underline">Login</button></p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
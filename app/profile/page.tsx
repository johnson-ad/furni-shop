'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import { useCartStore } from '../../store/cart';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'settings'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street',
    city: 'New York',
    postalCode: '10001',
    country: 'United States',
  });

  const { items, getTotalPrice } = useCartStore();

  // Commandes fictives pour la démonstration
  const orders = [
    {
      id: 'ORD-2023-001',
      date: '2023-05-15',
      status: 'Delivered',
      total: 1250.99,
      items: [
        { id: '1', title: 'Nordic Chair', price: 599.99, quantity: 1, image: '/images/product-1.png' },
        { id: '2', title: 'Kruzo Aero Chair', price: 329.00, quantity: 2, image: '/images/product-2.png' },
      ],
    },
    {
      id: 'ORD-2023-002',
      date: '2023-06-22',
      status: 'Processing',
      total: 899.99,
      items: [
        { id: '3', title: 'Ergonomic Chair', price: 899.99, quantity: 1, image: '/images/product-3.png' },
      ],
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Ici, vous pourriez envoyer les données mises à jour à votre API
    alert('Profile updated successfully!');
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-8 text-center"
        >
          My Account
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/4 bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#3b5d50] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#2f2f2f]">{profile.firstName} {profile.lastName}</h2>
                <p className="text-[#6a6a6a]">{profile.email}</p>
              </div>
            </div>

            <nav className="mb-6">
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-300 ${activeTab === 'profile' ? 'bg-[#3b5d50] text-white' : 'hover:bg-gray-100'}`}
                  >
                    Profile Information
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('orders')}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-300 ${activeTab === 'orders' ? 'bg-[#3b5d50] text-white' : 'hover:bg-gray-100'}`}
                  >
                    Order History
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-300 ${activeTab === 'settings' ? 'bg-[#3b5d50] text-white' : 'hover:bg-gray-100'}`}
                  >
                    Account Settings
                  </button>
                </li>
              </ul>
            </nav>

            <div className="pt-4 border-t border-gray-200">
              <Link href="/favorites">
                <Button variant="outline" className="w-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  My Favorites
                </Button>
              </Link>
              <Link href="/auth">
                <Button variant="secondary" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-3/4 bg-white rounded-lg shadow-sm p-6"
          >
            {/* Profile Information */}
            {activeTab === 'profile' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#2f2f2f]">Profile Information</h2>
                  {!isEditing && (
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </Button>
                  )}
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[#6a6a6a] mb-2">First Name</label>
                      {isEditing ? (
                        <input 
                          type="text" 
                          name="firstName" 
                          value={profile.firstName} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"
                          required 
                        />
                      ) : (
                        <p className="text-[#2f2f2f] font-medium">{profile.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#6a6a6a] mb-2">Last Name</label>
                      {isEditing ? (
                        <input 
                          type="text" 
                          name="lastName" 
                          value={profile.lastName} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"
                          required 
                        />
                      ) : (
                        <p className="text-[#2f2f2f] font-medium">{profile.lastName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#6a6a6a] mb-2">Email</label>
                      {isEditing ? (
                        <input 
                          type="email" 
                          name="email" 
                          value={profile.email} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"
                          required 
                        />
                      ) : (
                        <p className="text-[#2f2f2f] font-medium">{profile.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#6a6a6a] mb-2">Phone</label>
                      {isEditing ? (
                        <input 
                          type="tel" 
                          name="phone" 
                          value={profile.phone} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"
                        />
                      ) : (
                        <p className="text-[#2f2f2f] font-medium">{profile.phone}</p>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">Address Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="md:col-span-2">
                      <label className="block text-[#6a6a6a] mb-2">Street Address</label>
                      {isEditing ? (
                        <input 
                          type="text" 
                          name="address" 
                          value={profile.address} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"
                        />
                      ) : (
                        <p className="text-[#2f2f2f] font-medium">{profile.address}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#6a6a6a] mb-2">City</label>
                      {isEditing ? (
                        <input 
                          type="text" 
                          name="city" 
                          value={profile.city} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"
                        />
                      ) : (
                        <p className="text-[#2f2f2f] font-medium">{profile.city}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#6a6a6a] mb-2">Postal Code</label>
                      {isEditing ? (
                        <input 
                          type="text" 
                          name="postalCode" 
                          value={profile.postalCode} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"
                        />
                      ) : (
                        <p className="text-[#2f2f2f] font-medium">{profile.postalCode}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#6a6a6a] mb-2">Country</label>
                      {isEditing ? (
                        <input 
                          type="text" 
                          name="country" 
                          value={profile.country} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"
                        />
                      ) : (
                        <p className="text-[#2f2f2f] font-medium">{profile.country}</p>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex justify-end space-x-3">
                      <Button 
                        variant="ghost" 
                        onClick={() => setIsEditing(false)}
                        type="button"
                      >
                        Cancel
                      </Button>
                      <Button 
                        variant="primary" 
                        type="submit"
                      >
                        Save Changes
                      </Button>
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* Order History */}
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-2xl font-bold text-[#2f2f2f] mb-6">Order History</h2>
                
                {orders.length === 0 ? (
                  <div className="text-center py-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <h3 className="text-xl font-medium text-[#2f2f2f] mb-2">No orders yet</h3>
                    <p className="text-[#6a6a6a] mb-6">You haven't placed any orders yet.</p>
                    <Link href="/shop">
                      <Button variant="primary">Start Shopping</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                          <div>
                            <p className="text-sm text-[#6a6a6a]">Order ID: <span className="font-medium text-[#2f2f2f]">{order.id}</span></p>
                            <p className="text-sm text-[#6a6a6a]">Date: <span className="font-medium text-[#2f2f2f]">{order.date}</span></p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="space-y-4">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex items-center">
                                <div className="relative w-16 h-16 mr-4">
                                  <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    fill
                                    className="object-cover rounded-md"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-[#2f2f2f] font-medium">{item.title}</h4>
                                  <p className="text-sm text-[#6a6a6a]">Quantity: {item.quantity}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-[#3b5d50] font-bold">${item.price.toFixed(2)}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                            <p className="text-[#6a6a6a]">Total</p>
                            <p className="text-xl font-bold text-[#3b5d50]">${order.total.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 flex justify-end">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Account Settings */}
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-[#2f2f2f] mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-medium text-[#2f2f2f] mb-4">Change Password</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-[#6a6a6a] mb-2">Current Password</label>
                        <input 
                          type="password" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"
                          required 
                        />
                      </div>
                      <div>
                        <label className="block text-[#6a6a6a] mb-2">New Password</label>
                        <input 
                          type="password" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"
                          required 
                        />
                      </div>
                      <div>
                        <label className="block text-[#6a6a6a] mb-2">Confirm New Password</label>
                        <input 
                          type="password" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"
                          required 
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button variant="primary" type="submit">
                          Update Password
                        </Button>
                      </div>
                    </form>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-medium text-[#2f2f2f] mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[#2f2f2f] font-medium">Order updates</p>
                          <p className="text-sm text-[#6a6a6a]">Receive emails about your orders</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3b5d50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3b5d50]"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[#2f2f2f] font-medium">Promotions and sales</p>
                          <p className="text-sm text-[#6a6a6a]">Receive emails about promotions, sales and new arrivals</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3b5d50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3b5d50]"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[#2f2f2f] font-medium">Account activity</p>
                          <p className="text-sm text-[#6a6a6a]">Receive emails for login attempts, password changes, etc.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3b5d50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3b5d50]"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                    <h3 className="text-lg font-medium text-red-600 mb-4">Delete Account</h3>
                    <p className="text-sm text-red-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                    <Button variant="ghost" className="text-red-600 hover:bg-red-100">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
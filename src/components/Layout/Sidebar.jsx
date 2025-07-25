import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiHeart, FiBaby, FiCamera, FiBook, FiGift, FiMessageCircle, FiSettings } = FiIcons;

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const navItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/story', icon: FiHeart, label: 'Our Story' },
    { path: '/motherhood', icon: FiBaby, label: 'Motherhood' },
    { path: '/wedding', icon: FiCamera, label: 'Wedding' },
    { path: '/childhood', icon: FiBook, label: 'Childhood' },
    { path: '/gallery', icon: FiCamera, label: 'Gallery' },
    { path: '/capsules', icon: FiGift, label: 'Capsules' },
    { path: '/message', icon: FiMessageCircle, label: 'Message' },
  ];

  if (user) {
    navItems.push({ path: '/admin', icon: FiSettings, label: 'Admin' });
  }

  return (
    <motion.aside 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden md:flex fixed left-0 top-16 bottom-0 w-64 bg-white/90 dark:bg-charcoal-900/90 backdrop-blur-md border-r border-cream-200 dark:border-charcoal-700 z-40"
    >
      <div className="flex flex-col w-full p-6">
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.path}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-900/20'
                  : 'text-charcoal-600 dark:text-charcoal-400 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-cream-50 dark:hover:bg-charcoal-800'
              }`}
            >
              <SafeIcon icon={item.icon} className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
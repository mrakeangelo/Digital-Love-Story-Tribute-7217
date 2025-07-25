import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiHeart, FiBaby, FiCamera, FiBook, FiGift, FiMessageCircle, FiSettings } = FiIcons;

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <motion.nav 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-charcoal-900/90 backdrop-blur-md border-t border-cream-200 dark:border-charcoal-700 md:hidden"
    >
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.slice(0, 4).map((item) => (
          <motion.button
            key={item.path}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              location.pathname === item.path
                ? 'text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-900/20'
                : 'text-charcoal-600 dark:text-charcoal-400 hover:text-gold-600 dark:hover:text-gold-400'
            }`}
          >
            <SafeIcon icon={item.icon} className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
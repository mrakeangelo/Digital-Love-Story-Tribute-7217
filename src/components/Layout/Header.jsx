import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon, FiUser, FiLogOut } = FiIcons;

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-charcoal-900/80 backdrop-blur-md border-b border-cream-200 dark:border-charcoal-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <h1 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100">
              Her Universe
            </h1>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-cream-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-cream-200 hover:bg-cream-200 dark:hover:bg-charcoal-700 transition-colors"
            >
              <SafeIcon 
                icon={isDark ? FiSun : FiMoon} 
                className="w-5 h-5" 
              />
            </motion.button>
            
            {user && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSignOut}
                className="p-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-900/50 transition-colors"
              >
                <SafeIcon icon={FiLogOut} className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
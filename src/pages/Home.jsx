import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiArrowRight, FiStar } = FiIcons;

const Home = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-gold-50 to-rose-100 dark:from-charcoal-900 dark:via-charcoal-800 dark:to-charcoal-700" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gold-200/30 dark:bg-gold-800/30"
        />
        <motion.div
          animate={{ 
            x: [0, -25, 0],
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-16 w-32 h-32 rounded-full bg-rose-200/20 dark:bg-rose-800/20"
        />
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-20 w-16 h-16 rounded-full bg-cream-300/40 dark:bg-cream-700/40"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-gold-400 to-rose-400 flex items-center justify-center"
          >
            <SafeIcon icon={FiHeart} className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
            A Love Story
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair text-gold-600 dark:text-gold-400 mb-2">
            Still Being Written
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg md:text-xl text-charcoal-700 dark:text-charcoal-300 font-inter leading-relaxed mb-6">
            Welcome to <span className="font-semibold text-gold-600 dark:text-gold-400">Her Universe</span> — 
            a digital sanctuary celebrating the beautiful journey of love, life, and the extraordinary woman at the center of it all.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gold-600 dark:text-gold-400">
            <SafeIcon icon={FiStar} className="w-5 h-5" />
            <span className="font-medium">Every moment, every memory, every milestone</span>
            <SafeIcon icon={FiStar} className="w-5 h-5" />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/story')}
            className="group"
          >
            <span>View Our Journey</span>
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </motion.div>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/gallery')}
          >
            Enter Gallery
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-sm text-charcoal-500 dark:text-charcoal-400 font-inter">
            "In every shared glance, every gentle touch, every whispered word — 
            <br className="hidden sm:block" />
            we find the poetry of our love story."
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
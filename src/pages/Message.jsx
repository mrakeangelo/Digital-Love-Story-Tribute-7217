import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiStar, FiFeather } = FiIcons;

const Message = () => {
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
    <div className="min-h-screen p-4 md:p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
            For Me, From Me
          </h1>
          <p className="text-xl text-charcoal-600 dark:text-charcoal-300 font-inter">
            A letter to myself, written with love and hope
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold-200/30 dark:bg-gold-800/30 rounded-full animate-float" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-rose-200/30 dark:bg-rose-800/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          
          <Card className="relative bg-gradient-to-br from-cream-50 to-gold-50 dark:from-charcoal-800 dark:to-charcoal-700 border-2 border-gold-200 dark:border-gold-700 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gold-400 to-rose-400 flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiFeather} className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100">
                My Dearest Self
              </h2>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed space-y-6">
                <p>
                  As I sit here writing this letter to you — to <em>me</em> — I want you to remember 
                  who you are at your core. You are a woman of incredible strength, even when you 
                  don't feel strong. You are beautiful, inside and out, even on days when you 
                  can't see it in the mirror.
                </p>

                <p>
                  Remember that you are loved beyond measure. Your husband sees you as his entire 
                  world, and your children see you as their superhero. But more importantly, 
                  you need to see yourself through their eyes sometimes — through the eyes of love, 
                  not criticism.
                </p>

                <p>
                  You have weathered storms that would have broken others. You have loved fiercely, 
                  forgiven graciously, and grown beautifully. Every scar tells a story of survival, 
                  and every smile is a testament to your resilience.
                </p>

                <p>
                  On the days when you feel like you're not enough — not a good enough wife, mother, 
                  or woman — remember this moment. Remember that you are exactly who you need to be. 
                  You are enough. You have always been enough.
                </p>

                <p>
                  Your dreams matter. Your voice matters. Your happiness matters. Don't apologize 
                  for taking up space in this world. You belong here, and you have so much light 
                  to share.
                </p>

                <p>
                  Keep dancing in the kitchen. Keep singing in the car. Keep believing in magic 
                  and happy endings. Keep being the woman who sees the good in everyone and 
                  everything, because that's one of your most beautiful qualities.
                </p>

                <p>
                  And remember — you are not just surviving this beautiful, messy, wonderful life. 
                  You are <em>thriving</em>. You are writing a love story that will inspire others 
                  for generations to come.
                </p>

                <div className="text-center mt-8 pt-6 border-t border-gold-200 dark:border-gold-700">
                  <p className="text-lg font-medium">
                    You are loved. You are valued. You are enough.
                  </p>
                  <p className="text-sm text-charcoal-600 dark:text-charcoal-400 mt-2">
                    With all my love and hope,
                  </p>
                  <p className="font-playfair font-bold text-xl text-gold-600 dark:text-gold-400 mt-1">
                    Me ♡
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiHeart} className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-2">
              You Are Loved
            </h3>
            <p className="text-charcoal-700 dark:text-charcoal-200 font-inter text-sm">
              By your family, friends, and most importantly, by yourself
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-400 to-yellow-500 flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiStar} className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-2">
              You Are Strong
            </h3>
            <p className="text-charcoal-700 dark:text-charcoal-200 font-inter text-sm">
              Stronger than you know, braver than you feel
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiFeather} className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-2">
              You Are Enough
            </h3>
            <p className="text-charcoal-700 dark:text-charcoal-200 font-inter text-sm">
              Exactly as you are, in this moment, always
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Message;
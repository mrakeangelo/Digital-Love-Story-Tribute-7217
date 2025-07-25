import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'p-6',
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.2 }}
      className={`bg-white dark:bg-charcoal-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${padding} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiChevronLeft, FiChevronRight, FiHeart, FiCamera, FiMapPin, FiCalendar } = FiIcons;

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Us', 'Travel', 'Motherhood', 'Life'];

  const galleryItems = [
    {
      id: 1,
      title: "Our First Vacation",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=500&fit=crop",
      description: "Santorini, Greece - Where you said it was the most beautiful place you'd ever seen",
      date: "Summer 2020",
      location: "Santorini, Greece"
    },
    {
      id: 2,
      title: "Coffee Shop Dates",
      category: "Us",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=500&fit=crop",
      description: "Our Sunday morning tradition - coffee, pastries, and endless conversations",
      date: "Every Sunday",
      location: "Our favorite cafe"
    },
    {
      id: 3,
      title: "Pregnancy Glow",
      category: "Motherhood",
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&h=500&fit=crop",
      description: "28 weeks - You were absolutely radiant and so excited to meet our little one",
      date: "March 2023",
      location: "Our home"
    },
    {
      id: 4,
      title: "Hiking Adventures",
      category: "Life",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=500&fit=crop",
      description: "The trail where you convinced me to hike 'just a little further' for the perfect view",
      date: "Fall 2021",
      location: "Blue Ridge Mountains"
    },
    {
      id: 5,
      title: "Date Night",
      category: "Us",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=500&fit=crop",
      description: "Dressed up for our anniversary dinner - you took my breath away",
      date: "March 2023",
      location: "The Ivy Restaurant"
    },
    {
      id: 6,
      title: "Beach Days",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=500&fit=crop",
      description: "Maldives honeymoon - Building sandcastles and watching sunsets together",
      date: "July 2022",
      location: "Maldives"
    },
    {
      id: 7,
      title: "Baby Shower",
      category: "Motherhood",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
      description: "Surrounded by love and excitement for our little miracle",
      date: "April 2023",
      location: "Mom's backyard"
    },
    {
      id: 8,
      title: "Lazy Sundays",
      category: "Life",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=500&fit=crop",
      description: "Reading together in bed - your favorite way to spend a quiet morning",
      date: "Every Sunday",
      location: "Our bedroom"
    },
    {
      id: 9,
      title: "City Walks",
      category: "Us",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=500&fit=crop",
      description: "Exploring downtown, holding hands and discovering new places together",
      date: "Spring 2021",
      location: "Downtown"
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-charcoal-600 dark:text-charcoal-300 font-inter">
            Capturing the beautiful moments of our journey together
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="cursor-pointer"
              onClick={() => openModal(item)}
            >
              <Card className="p-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-playfair font-bold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {item.date}
                    </p>
                  </div>
                  <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <SafeIcon icon={FiCamera} className="w-4 h-4 text-white" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-charcoal-800 rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                </button>

                {/* Image */}
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-[60vh] object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gold-400 to-rose-400 flex items-center justify-center">
                      <SafeIcon icon={FiHeart} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100">
                        {selectedImage.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-charcoal-600 dark:text-charcoal-300">
                        <span className="flex items-center space-x-1">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                          <span>{selectedImage.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                          <span>{selectedImage.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Gallery;
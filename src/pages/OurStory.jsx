import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiCalendar, FiMapPin, FiStar } = FiIcons;

const OurStory = () => {
  const storyMilestones = [
    {
      id: 1,
      title: "First Meeting",
      date: "March 15, 2019",
      location: "Coffee Shop Downtown",
      description: "The moment our eyes met across that crowded coffee shop, I knew my life was about to change forever. You were reading a book, completely absorbed, and when you looked up and smiled...",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
      icon: FiHeart,
      color: "from-rose-400 to-pink-500"
    },
    {
      id: 2,
      title: "First Date",
      date: "March 22, 2019",
      location: "Sunset Park",
      description: "Our first official date was a picnic in the park. We talked for hours, sharing dreams, fears, and everything in between. The sunset that evening seemed to last forever.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
      icon: FiStar,
      color: "from-gold-400 to-yellow-500"
    },
    {
      id: 3,
      title: "Moving In Together",
      date: "September 10, 2020",
      location: "Our First Home",
      description: "The day we got the keys to our first place together. Boxes everywhere, but we were home. We danced in the empty living room to music from your phone.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      icon: FiMapPin,
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 4,
      title: "The Proposal",
      date: "December 25, 2021",
      location: "Where We First Met",
      description: "I brought you back to that same coffee shop where it all began. When I got down on one knee, you cried before I even asked the question. Of course, you said yes.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      icon: FiHeart,
      color: "from-rose-500 to-red-500"
    },
    {
      id: 5,
      title: "Our Wedding Day",
      date: "June 18, 2022",
      location: "Garden Venue",
      description: "The most beautiful day of our lives. Surrounded by family and friends, we promised to love each other through everything life would bring. Your dress was perfect, but your smile was even more radiant.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      icon: FiHeart,
      color: "from-gold-500 to-amber-500"
    },
    {
      id: 6,
      title: "Expecting Our First",
      date: "March 5, 2023",
      location: "Doctor's Office",
      description: "The day we found out we were going to be parents. We held each other and cried happy tears. I've never seen you more beautiful than in that moment of pure joy.",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
      icon: FiHeart,
      color: "from-green-400 to-emerald-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
            Our Love Story
          </h1>
          <p className="text-xl text-charcoal-600 dark:text-charcoal-300 font-inter">
            Every chapter of our journey together
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {storyMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
            >
              <div className="md:w-1/2">
                <Card className="h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center`}>
                      <SafeIcon icon={milestone.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100">
                        {milestone.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-charcoal-600 dark:text-charcoal-300">
                        <span className="flex items-center space-x-1">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                          <span>{milestone.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                          <span>{milestone.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
                    {milestone.description}
                  </p>
                </Card>
              </div>
              
              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl shadow-lg h-64 md:h-80"
                >
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-gold-50 to-rose-50 dark:from-gold-900/20 dark:to-rose-900/20 border-2 border-gold-200 dark:border-gold-700">
            <h2 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
              Our Story Continues...
            </h2>
            <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
              Every day with you is a new page in our love story. From the moment we met to this very day, 
              you continue to amaze me with your strength, beauty, and the way you love our family. 
              Here's to all the chapters yet to be written.
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurStory;
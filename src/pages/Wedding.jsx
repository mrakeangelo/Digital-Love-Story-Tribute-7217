import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiCamera, FiMusic, FiStar, FiSun } = FiIcons;

const Wedding = () => {
  const weddingMoments = [
    {
      title: "Getting Ready",
      description: "The morning of our wedding, you were glowing with happiness. Your bridesmaids helped you into your dress, and when I saw you walking down the aisle, my heart stopped.",
      image: "https://images.unsplash.com/photo-1594736797933-d0cc4e0c4b16?w=400&h=300&fit=crop",
      time: "9:00 AM"
    },
    {
      title: "First Look",
      description: "The moment I turned around and saw you in your wedding dress for the first time. I couldn't hold back the tears – you were absolutely breathtaking.",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
      time: "2:00 PM"
    },
    {
      title: "Walking Down the Aisle",
      description: "Every step you took toward me felt like a lifetime and an instant all at once. Your smile lit up the entire venue, and I knew I was the luckiest man alive.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      time: "4:00 PM"
    },
    {
      title: "Exchanging Vows",
      description: "When you spoke your vows, there wasn't a dry eye in the house. Your words were so beautiful, so heartfelt, and I felt our souls connecting even deeper.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
      time: "4:30 PM"
    },
    {
      title: "First Kiss as Married Couple",
      description: "The kiss that sealed our forever. Time stood still, and all I could think was 'she's my wife' – the most incredible feeling in the world.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop",
      time: "4:45 PM"
    },
    {
      title: "First Dance",
      description: "Dancing with you to our song, surrounded by everyone we love. You whispered 'I love you, husband' and I melted. This moment was pure magic.",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=300&fit=crop",
      time: "8:00 PM"
    }
  ];

  const weddingDetails = [
    {
      title: "The Venue",
      description: "Rosewood Garden Manor - where fairy tales come true",
      icon: FiStar,
      color: "from-gold-400 to-yellow-500"
    },
    {
      title: "The Weather",
      description: "Perfect 75°F with golden hour lighting",
      icon: FiSun,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "The Music",
      description: "Our song: 'At Last' by Etta James",
      icon: FiMusic,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "The Photographer",
      description: "Sarah Michelle Photography - captured every perfect moment",
      icon: FiCamera,
      color: "from-blue-400 to-indigo-500"
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
    hidden: { opacity: 0, y: 30 },
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
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
            Our Wedding Day
          </h1>
          <p className="text-xl text-charcoal-600 dark:text-charcoal-300 font-inter">
            June 18th, 2022 - The most beautiful day of our lives
          </p>
        </div>

        {/* Wedding Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingDetails.map((detail, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${detail.color} flex items-center justify-center mx-auto mb-4`}>
                    <SafeIcon icon={detail.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-charcoal-700 dark:text-charcoal-200 font-inter text-sm">
                    {detail.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Wedding Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-8 text-center">
            Our Perfect Day Timeline
          </h2>
          <div className="space-y-8">
            {weddingMoments.map((moment, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}
              >
                <div className="lg:w-1/2">
                  <Card className="h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 flex items-center justify-center">
                        <SafeIcon icon={FiHeart} className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100">
                          {moment.title}
                        </h3>
                        <span className="text-gold-600 dark:text-gold-400 font-medium">
                          {moment.time}
                        </span>
                      </div>
                    </div>
                    <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
                      {moment.description}
                    </p>
                  </Card>
                </div>
                
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-xl shadow-lg h-64 lg:h-80"
                  >
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Wedding Vows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-gold-50 to-rose-50 dark:from-gold-900/20 dark:to-rose-900/20 border-2 border-gold-200 dark:border-gold-700">
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiHeart} className="w-8 h-8 text-rose-500" />
            </div>
            <h2 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-6">
              Our Wedding Vows
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
                  My Vows to You
                </h3>
                <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed mb-4">
                  "My darling, from the moment I met you, I knew my life would never be the same. 
                  You brought light into my world and showed me what true love really means."
                </p>
                <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed mb-4">
                  "I promise to love you through every season of life, to support your dreams, 
                  to laugh with you in joy and hold you in sorrow. I promise to be your partner, 
                  your best friend, and your biggest supporter."
                </p>
                <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
                  "Today I give you my heart, my soul, and my forever. I love you more than words can express."
                </p>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
                  Your Vows to Me
                </h3>
                <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed mb-4">
                  "My love, you are my safe harbor in every storm, my greatest adventure, 
                  and my sweetest home. You've shown me what it means to be truly cherished."
                </p>
                <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed mb-4">
                  "I promise to love you with all that I am and all that I will become. 
                  I promise to grow with you, to dream with you, and to build a beautiful life together."
                </p>
                <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
                  "You are my forever person, and I choose you today and every day for the rest of my life."
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Wedding;
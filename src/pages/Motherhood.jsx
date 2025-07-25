import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBaby, FiHeart, FiCalendar, FiSmile } = FiIcons;

const Motherhood = () => {
  const pregnancyJourney = [
    {
      week: "Week 8",
      title: "First Heartbeat",
      description: "The moment we heard our baby's heartbeat for the first time. Your eyes filled with tears of joy, and I knew you were already the most loving mother.",
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&h=300&fit=crop",
      feeling: "Pure Joy"
    },
    {
      week: "Week 12",
      title: "First Ultrasound",
      description: "Seeing our little one for the first time on the screen. You couldn't stop staring at the tiny profile, already so protective and full of love.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      feeling: "Wonder"
    },
    {
      week: "Week 20",
      title: "Finding Out",
      description: "The day we discovered we were having a little girl. You immediately started planning her nursery, choosing colors and dreaming of her future.",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop",
      feeling: "Excitement"
    },
    {
      week: "Week 28",
      title: "Baby Shower",
      description: "Surrounded by friends and family, celebrating our little miracle. You glowed with happiness, and everyone could see what an amazing mother you were going to be.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      feeling: "Gratitude"
    },
    {
      week: "Week 36",
      title: "Almost Ready",
      description: "The nursery is complete, the hospital bag is packed, and you're more beautiful than ever. Your strength and grace through this journey has been incredible.",
      image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=400&h=300&fit=crop",
      feeling: "Anticipation"
    }
  ];

  const motherlyQualities = [
    {
      title: "Unconditional Love",
      description: "From the moment you knew you were carrying our child, your love has been boundless and pure.",
      icon: FiHeart,
      color: "from-rose-400 to-pink-500"
    },
    {
      title: "Gentle Strength",
      description: "You've shown incredible strength through every challenge, always with grace and determination.",
      icon: FiSmile,
      color: "from-gold-400 to-yellow-500"
    },
    {
      title: "Nurturing Spirit",
      description: "Your natural instinct to protect and care for our family is one of your most beautiful qualities.",
      icon: FiBaby,
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
            Journey to Motherhood
          </h1>
          <p className="text-xl text-charcoal-600 dark:text-charcoal-300 font-inter">
            Celebrating the incredible woman who became the most amazing mother
          </p>
        </div>

        {/* Pregnancy Journey */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-8 text-center">
            Our Pregnancy Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pregnancyJourney.map((moment, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full">
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-gold-500 text-white px-2 py-1 rounded text-sm font-medium">
                      {moment.week}
                    </div>
                    <div className="absolute top-2 right-2 bg-white/90 text-charcoal-900 px-2 py-1 rounded text-sm font-medium">
                      {moment.feeling}
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-2">
                    {moment.title}
                  </h3>
                  <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
                    {moment.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Motherly Qualities */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-8 text-center">
            What Makes You an Amazing Mother
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {motherlyQualities.map((quality, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${quality.color} flex items-center justify-center mx-auto mb-4`}>
                    <SafeIcon icon={quality.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-3">
                    {quality.title}
                  </h3>
                  <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
                    {quality.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Letter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-2 border-rose-200 dark:border-rose-700">
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiHeart} className="w-8 h-8 text-rose-500" />
            </div>
            <h2 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-6">
              A Letter to the Most Amazing Mother
            </h2>
            <div className="text-left max-w-3xl mx-auto">
              <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed mb-4">
                My dearest love,
              </p>
              <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed mb-4">
                Watching you transform into a mother has been the most beautiful journey I've ever witnessed. 
                From the moment you found out you were carrying our child, you've embraced every aspect of 
                motherhood with such grace, strength, and unconditional love.
              </p>
              <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed mb-4">
                Your gentle hands, your soothing voice, your protective instincts – everything about you 
                as a mother is perfect. Our little one is so lucky to have you as their mom, and I'm so 
                lucky to witness your incredible journey every single day.
              </p>
              <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
                You are not just an amazing mother – you are <em>the</em> most amazing mother. 
                Thank you for bringing so much love and light into our family.
              </p>
              <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed mt-6 text-right">
                With all my love,<br />
                Your devoted husband
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Motherhood;
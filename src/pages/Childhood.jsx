import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiStar, FiSun, FiBook, FiMusic, FiSmile } = FiIcons;

const Childhood = () => {
  const childhoodMemories = [
    {
      age: "Age 3",
      title: "First Ballet Class",
      description: "You were the tiniest dancer in your pink tutu, spinning around the room with pure joy. Your mom said you never stopped moving to music.",
      image: "https://images.unsplash.com/photo-1594736797933-d0cc4e0c4b16?w=400&h=300&fit=crop",
      trait: "Graceful"
    },
    {
      age: "Age 5",
      title: "First Day of School",
      description: "Nervous but excited, you walked into kindergarten with your favorite backpack. You made friends instantly with your kind heart and bright smile.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      trait: "Brave"
    },
    {
      age: "Age 7",
      title: "The Lost Tooth",
      description: "You lost your first tooth and were so excited about the tooth fairy. You wrote her a letter and drew a picture of yourself with the gap-toothed grin.",
      image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=400&h=300&fit=crop",
      trait: "Imaginative"
    },
    {
      age: "Age 10",
      title: "Piano Recital",
      description: "Your first solo performance playing 'Für Elise.' You were so nervous, but when you sat at that piano, you played like an angel.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      trait: "Talented"
    },
    {
      age: "Age 12",
      title: "Summer Camp Adventures",
      description: "Three weeks at summer camp where you learned to canoe, made friendship bracelets, and sang songs around the campfire every night.",
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=300&fit=crop",
      trait: "Adventurous"
    },
    {
      age: "Age 15",
      title: "High School Theater",
      description: "Your starring role in the school play. You memorized everyone's lines, not just your own, and helped the younger students with their parts.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      trait: "Caring"
    }
  ];

  const personalityTraits = [
    {
      title: "Always Curious",
      description: "You asked 'why' about everything and read every book you could get your hands on.",
      icon: FiBook,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Naturally Kind",
      description: "You were the child who befriended the shy kids and always shared your snacks.",
      icon: FiHeart,
      color: "from-rose-400 to-pink-500"
    },
    {
      title: "Creative Spirit",
      description: "From drawing to singing to making up stories, your imagination knew no bounds.",
      icon: FiStar,
      color: "from-gold-400 to-yellow-500"
    },
    {
      title: "Bright Smile",
      description: "Your smile could light up any room and made everyone around you feel happy.",
      icon: FiSun,
      color: "from-orange-400 to-red-500"
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
            Her Childhood Garden
          </h1>
          <p className="text-xl text-charcoal-600 dark:text-charcoal-300 font-inter">
            Stories from the early years that shaped the amazing woman you became
          </p>
        </div>

        {/* Personality Traits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-8 text-center">
            The Little Girl Who Became My Everything
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalityTraits.map((trait, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${trait.color} flex items-center justify-center mx-auto mb-4`}>
                    <SafeIcon icon={trait.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-2">
                    {trait.title}
                  </h3>
                  <p className="text-charcoal-700 dark:text-charcoal-200 font-inter text-sm leading-relaxed">
                    {trait.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Childhood Memories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-8 text-center">
            Precious Memories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {childhoodMemories.map((memory, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full">
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-gold-500 text-white px-2 py-1 rounded text-sm font-medium">
                      {memory.age}
                    </div>
                    <div className="absolute top-2 right-2 bg-white/90 text-charcoal-900 px-2 py-1 rounded text-sm font-medium">
                      {memory.trait}
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-2">
                    {memory.title}
                  </h3>
                  <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
                    {memory.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Family Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-cream-50 to-gold-50 dark:from-cream-900/20 dark:to-gold-900/20 border-2 border-cream-200 dark:border-cream-700">
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiSmile} className="w-8 h-8 text-gold-500" />
            </div>
            <h2 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-6">
              What Your Family Says About You
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
                  From Your Mom
                </h3>
                <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed mb-4">
                  "She was always my little helper, wanting to be involved in everything. 
                  When she was four, she insisted on 'helping' me bake cookies by adding 
                  extra chocolate chips when I wasn't looking."
                </p>
                <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
                  "She had the biggest heart and would cry if she saw any animal hurt. 
                  She once tried to 'adopt' every stray cat in the neighborhood."
                </p>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
                  From Your Dad
                </h3>
                <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed mb-4">
                  "She was fearless on the playground but gentle with her dolls. 
                  She would climb the highest monkey bars and then carefully tuck 
                  her baby doll in for a nap."
                </p>
                <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed">
                  "Every bedtime story had to have a happy ending, and if it didn't, 
                  she would make up her own ending where everyone lived happily ever after."
                </p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-gold-100 dark:bg-gold-900/30 rounded-lg">
              <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed italic">
                "Looking at these childhood memories, I can see exactly where your incredible 
                compassion, creativity, and strength came from. The little girl who shared her 
                snacks and made up happy endings grew up to be the woman who makes every day 
                of my life feel like a fairy tale."
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Childhood;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGift, FiLock, FiUnlock, FiCalendar, FiHeart, FiPlus, FiX } = FiIcons;

const TimeCapsules = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [newCapsule, setNewCapsule] = useState({
    title: '',
    message: '',
    openDate: '',
    isPrivate: false
  });

  const timeCapsules = [
    {
      id: 1,
      title: "First Anniversary Letter",
      message: "My dearest love, as I write this on our first anniversary, I want you to know that this year has been the most incredible journey of my life. Every day with you feels like a gift, and I can't wait to see what our future holds. When you read this in five years, I hope we're surrounded by even more love, laughter, and maybe little feet running around our home. I love you more than words can express, and I promise to love you even more tomorrow than I do today.",
      createdDate: "2023-06-18",
      openDate: "2028-06-18",
      isLocked: true,
      isPrivate: false,
      daysUntilOpen: 1825,
      color: "from-rose-400 to-pink-500"
    },
    {
      id: 2,
      title: "Pregnancy Dreams",
      message: "Today we found out we're having a baby! I'm writing this to our future selves to remember this moment of pure joy and excitement. I can't wait to meet our little one and watch you become the amazing mother I know you'll be. By the time we open this, our baby will be walking and talking, and we'll probably be exhausted but so incredibly happy. I love you and our growing family so much.",
      createdDate: "2023-03-05",
      openDate: "2025-03-05",
      isLocked: false,
      isPrivate: false,
      daysUntilOpen: 0,
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 3,
      title: "Our Wedding Day Thoughts",
      message: "I'm writing this on the morning of our wedding day, and I can barely contain my excitement. In a few hours, you'll be walking down the aisle toward me, and I'll be the luckiest man alive. I want to remember every detail of this day - the way you look in your dress, the tears of joy, the laughter with our families, and the moment we become husband and wife. Future us: I hope we're still as madly in love as we are today.",
      createdDate: "2022-06-18",
      openDate: "2027-06-18",
      isLocked: true,
      isPrivate: false,
      daysUntilOpen: 1095,
      color: "from-gold-400 to-yellow-500"
    },
    {
      id: 4,
      title: "Secret Love Note",
      message: "This is just between us, my darling. Sometimes I catch myself just staring at you while you're reading or cooking, and I'm overwhelmed by how much I love you. You probably don't even notice these moments, but they're my favorite. The way you scrunch your nose when you concentrate, the way you hum while you work, the way you always make room for me on the couch even when you're comfortable. These little things make up the big love I have for you.",
      createdDate: "2023-02-14",
      openDate: "2024-02-14",
      isLocked: false,
      isPrivate: true,
      daysUntilOpen: 0,
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const handleCreateCapsule = () => {
    // In a real app, this would save to the database
    console.log('Creating new capsule:', newCapsule);
    setShowCreateModal(false);
    setNewCapsule({ title: '', message: '', openDate: '', isPrivate: false });
  };

  const openCapsule = (capsule) => {
    setSelectedCapsule(capsule);
  };

  const closeCapsule = () => {
    setSelectedCapsule(null);
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
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
            Time Capsules & Letters
          </h1>
          <p className="text-xl text-charcoal-600 dark:text-charcoal-300 font-inter">
            Messages from our past selves to our future selves
          </p>
        </div>

        {/* Create New Capsule Button */}
        <div className="text-center mb-8">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setShowCreateModal(true)}
            className="group"
          >
            <SafeIcon icon={FiPlus} className="w-5 h-5 mr-2" />
            Create New Time Capsule
          </Button>
        </div>

        {/* Time Capsules Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {timeCapsules.map((capsule) => (
            <motion.div key={capsule.id} variants={itemVariants}>
              <Card className="h-full cursor-pointer" onClick={() => openCapsule(capsule)}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${capsule.color} flex items-center justify-center`}>
                    <SafeIcon 
                      icon={capsule.isLocked ? FiLock : FiUnlock} 
                      className="w-6 h-6 text-white" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100">
                      {capsule.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-charcoal-600 dark:text-charcoal-300">
                      <span className="flex items-center space-x-1">
                        <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                        <span>Opens: {new Date(capsule.openDate).toLocaleDateString()}</span>
                      </span>
                      {capsule.isPrivate && (
                        <span className="flex items-center space-x-1 text-rose-500">
                          <SafeIcon icon={FiHeart} className="w-4 h-4" />
                          <span>Private</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {capsule.isLocked ? (
                  <div className="text-center py-8 text-charcoal-500 dark:text-charcoal-400">
                    <SafeIcon icon={FiLock} className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="font-medium">This capsule is locked</p>
                    <p className="text-sm">
                      {capsule.daysUntilOpen} days until it opens
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed line-clamp-3">
                      {capsule.message}
                    </p>
                    <div className="mt-4 text-center">
                      <Button variant="outline" size="sm">
                        Read Full Message
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Create Capsule Modal */}
        <AnimatePresence>
          {showCreateModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setShowCreateModal(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-charcoal-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100">
                    Create New Time Capsule
                  </h2>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="text-charcoal-500 hover:text-charcoal-700 dark:text-charcoal-400 dark:hover:text-charcoal-200"
                  >
                    <SafeIcon icon={FiX} className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={newCapsule.title}
                      onChange={(e) => setNewCapsule({...newCapsule, title: e.target.value})}
                      className="w-full px-3 py-2 border border-cream-300 dark:border-charcoal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-charcoal-700 dark:text-cream-100"
                      placeholder="Give your time capsule a title..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-2">
                      Message
                    </label>
                    <textarea
                      value={newCapsule.message}
                      onChange={(e) => setNewCapsule({...newCapsule, message: e.target.value})}
                      rows={6}
                      className="w-full px-3 py-2 border border-cream-300 dark:border-charcoal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-charcoal-700 dark:text-cream-100"
                      placeholder="Write your message to the future..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-2">
                      Open Date
                    </label>
                    <input
                      type="date"
                      value={newCapsule.openDate}
                      onChange={(e) => setNewCapsule({...newCapsule, openDate: e.target.value})}
                      className="w-full px-3 py-2 border border-cream-300 dark:border-charcoal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-charcoal-700 dark:text-cream-100"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="private"
                      checked={newCapsule.isPrivate}
                      onChange={(e) => setNewCapsule({...newCapsule, isPrivate: e.target.checked})}
                      className="w-4 h-4 text-gold-600 focus:ring-gold-500 border-cream-300 rounded"
                    />
                    <label htmlFor="private" className="text-sm text-charcoal-700 dark:text-charcoal-300">
                      Make this capsule private
                    </label>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleCreateCapsule}
                    className="flex-1"
                  >
                    Create Capsule
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read Capsule Modal */}
        <AnimatePresence>
          {selectedCapsule && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={closeCapsule}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-charcoal-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${selectedCapsule.color} flex items-center justify-center`}>
                      <SafeIcon icon={FiGift} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100">
                        {selectedCapsule.title}
                      </h2>
                      <p className="text-sm text-charcoal-600 dark:text-charcoal-300">
                        Created: {new Date(selectedCapsule.createdDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeCapsule}
                    className="text-charcoal-500 hover:text-charcoal-700 dark:text-charcoal-400 dark:hover:text-charcoal-200"
                  >
                    <SafeIcon icon={FiX} className="w-6 h-6" />
                  </button>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-charcoal-700 dark:text-charcoal-200 font-inter leading-relaxed whitespace-pre-wrap">
                    {selectedCapsule.message}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-cream-200 dark:border-charcoal-600">
                  <div className="flex items-center justify-between text-sm text-charcoal-600 dark:text-charcoal-300">
                    <span>
                      Opened: {new Date(selectedCapsule.openDate).toLocaleDateString()}
                    </span>
                    {selectedCapsule.isPrivate && (
                      <span className="flex items-center space-x-1 text-rose-500">
                        <SafeIcon icon={FiHeart} className="w-4 h-4" />
                        <span>Private</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TimeCapsules;
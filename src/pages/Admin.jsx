import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUpload, FiEdit, FiSave, FiImage, FiVideo, FiFileText, FiSettings } = FiIcons;

const Admin = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('content');
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');

  const tabs = [
    { id: 'content', label: 'Content Management', icon: FiEdit },
    { id: 'media', label: 'Media Upload', icon: FiUpload },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  const contentSections = [
    { id: 'hero', title: 'Hero Section', content: 'A Love Story Still Being Written — Her Universe Digital Sanctuary' },
    { id: 'about', title: 'About Message', content: 'Welcome to Her Universe — a digital sanctuary celebrating...' },
    { id: 'story', title: 'Our Story', content: 'The journey of our love story begins...' },
  ];

  const handleSaveContent = () => {
    // In a real app, this would save to Supabase
    console.log('Saving content:', editContent);
    setIsEditing(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // In a real app, this would upload to Supabase storage
      console.log('Uploading file:', file.name);
    }
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

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center">
          <h1 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
            Admin Access Required
          </h1>
          <p className="text-charcoal-700 dark:text-charcoal-200 font-inter mb-6">
            Please log in to access the admin panel.
          </p>
          <Button variant="primary" onClick={() => window.location.href = '/login'}>
            Go to Login
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
            Admin Panel
          </h1>
          <p className="text-xl text-charcoal-600 dark:text-charcoal-300 font-inter">
            Manage your digital sanctuary
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center space-x-2"
            >
              <SafeIcon icon={tab.icon} className="w-4 h-4" />
              <span>{tab.label}</span>
            </Button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {activeTab === 'content' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
                Content Management
              </h2>
              {contentSections.map((section) => (
                <motion.div key={section.id} variants={itemVariants}>
                  <Card>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100">
                        {section.title}
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setIsEditing(section.id);
                          setEditContent(section.content);
                        }}
                      >
                        <SafeIcon icon={FiEdit} className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                    {isEditing === section.id ? (
                      <div className="space-y-4">
                        <textarea
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          rows={4}
                          className="w-full px-3 py-2 border border-cream-300 dark:border-charcoal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-charcoal-700 dark:text-cream-100"
                        />
                        <div className="flex space-x-2">
                          <Button variant="primary" size="sm" onClick={handleSaveContent}>
                            <SafeIcon icon={FiSave} className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-charcoal-700 dark:text-charcoal-200 font-inter">
                        {section.content}
                      </p>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'media' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
                Media Upload
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div variants={itemVariants}>
                  <Card className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                      <SafeIcon icon={FiImage} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-2">
                      Upload Photos
                    </h3>
                    <p className="text-charcoal-700 dark:text-charcoal-200 font-inter text-sm mb-4">
                      Add new photos to your gallery
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="photo-upload"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById('photo-upload').click()}
                    >
                      Choose Photos
                    </Button>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                      <SafeIcon icon={FiVideo} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-2">
                      Upload Videos
                    </h3>
                    <p className="text-charcoal-700 dark:text-charcoal-200 font-inter text-sm mb-4">
                      Add video memories
                    </p>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="video-upload"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById('video-upload').click()}
                    >
                      Choose Videos
                    </Button>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-4">
                      <SafeIcon icon={FiFileText} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-2">
                      Upload Documents
                    </h3>
                    <p className="text-charcoal-700 dark:text-charcoal-200 font-inter text-sm mb-4">
                      Add letters, notes, or documents
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="document-upload"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById('document-upload').click()}
                    >
                      Choose Documents
                    </Button>
                  </Card>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <Card>
                  <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
                    Recent Uploads
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-cream-50 dark:bg-charcoal-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <SafeIcon icon={FiImage} className="w-5 h-5 text-blue-500" />
                        <span className="text-charcoal-700 dark:text-charcoal-200">wedding-photo-1.jpg</span>
                      </div>
                      <span className="text-sm text-charcoal-500 dark:text-charcoal-400">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-cream-50 dark:bg-charcoal-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <SafeIcon icon={FiVideo} className="w-5 h-5 text-green-500" />
                        <span className="text-charcoal-700 dark:text-charcoal-200">pregnancy-video.mp4</span>
                      </div>
                      <span className="text-sm text-charcoal-500 dark:text-charcoal-400">1 day ago</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
                Settings
              </h2>
              
              <motion.div variants={itemVariants}>
                <Card>
                  <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
                    Site Configuration
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-2">
                        Site Title
                      </label>
                      <input
                        type="text"
                        defaultValue="Her Universe"
                        className="w-full px-3 py-2 border border-cream-300 dark:border-charcoal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-charcoal-700 dark:text-cream-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-2">
                        Site Description
                      </label>
                      <textarea
                        rows={3}
                        defaultValue="A digital sanctuary celebrating our love story, her life, and our journey together"
                        className="w-full px-3 py-2 border border-cream-300 dark:border-charcoal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-charcoal-700 dark:text-cream-100"
                      />
                    </div>
                    <Button variant="primary" size="sm">
                      Save Settings
                    </Button>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
                    Privacy Settings
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-charcoal-900 dark:text-cream-100">Private Mode</h4>
                        <p className="text-sm text-charcoal-600 dark:text-charcoal-300">
                          Require login to view content
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-cream-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold-300 dark:peer-focus:ring-gold-800 rounded-full peer dark:bg-charcoal-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gold-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-charcoal-900 dark:text-cream-100">Public Gallery</h4>
                        <p className="text-sm text-charcoal-600 dark:text-charcoal-300">
                          Allow public viewing of gallery
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-cream-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold-300 dark:peer-focus:ring-gold-800 rounded-full peer dark:bg-charcoal-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gold-600"></div>
                      </label>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <h3 className="text-xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-4">
                    Backup & Export
                  </h3>
                  <div className="space-y-4">
                    <p className="text-charcoal-700 dark:text-charcoal-200 font-inter">
                      Create a backup of all your content and media files.
                    </p>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm">
                        Download Backup
                      </Button>
                      <Button variant="outline" size="sm">
                        Export Data
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Admin;
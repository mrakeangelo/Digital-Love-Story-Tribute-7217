import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLock, FiMail, FiEye, FiEyeOff } = FiIcons;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message);
      } else {
        navigate('/admin');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-cream-100 via-gold-50 to-rose-100 dark:from-charcoal-900 dark:via-charcoal-800 dark:to-charcoal-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white/90 dark:bg-charcoal-800/90 backdrop-blur-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gold-400 to-rose-400 flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiLock} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-playfair font-bold text-charcoal-900 dark:text-cream-100 mb-2">
              Admin Login
            </h1>
            <p className="text-charcoal-600 dark:text-charcoal-300 font-inter">
              Enter your credentials to access the admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SafeIcon icon={FiMail} className="w-5 h-5 text-charcoal-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-3 border border-cream-300 dark:border-charcoal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-charcoal-700 dark:text-cream-100"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SafeIcon icon={FiLock} className="w-5 h-5 text-charcoal-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-10 py-3 border border-cream-300 dark:border-charcoal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-charcoal-700 dark:text-cream-100"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <SafeIcon 
                    icon={showPassword ? FiEyeOff : FiEye} 
                    className="w-5 h-5 text-charcoal-400 hover:text-charcoal-600 dark:hover:text-charcoal-200" 
                  />
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
                <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-gold-600 hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300 font-medium transition-colors"
            >
              Back to Home
            </button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
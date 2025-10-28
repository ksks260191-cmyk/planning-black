import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Always show on each load/refresh; auto-hide after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowSplash(false);
  };

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 max-w-md mx-4 text-center shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Close splash screen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Logo with Animation */}
            <motion.div
              initial={{ scale: 0.8, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="mb-6"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 shadow-2xl">
                <img
                  src="/team/pp.jpg"
                  alt="Planning Pros & Consultants"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-white mb-2"
            >
              Planning Pros
            </motion.h1>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg md:text-xl font-semibold gradient-text mb-4"
            >
              & Consultants
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-sm md:text-base text-slate-200 leading-relaxed"
            >
              Your trusted partner for IT staff augmentation and professional consulting services
            </motion.p>

            {/* Loading Animation */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1.8, ease: "easeInOut" }}
              className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
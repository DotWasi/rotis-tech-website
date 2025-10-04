// ========================================================================
// START OF FILE: src/components/Layout.tsx (UPDATED)
// ========================================================================

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AnimatePresence, motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton'; // <-- 1. IMPORT THE NEW COMPONENT

const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton /> {/* <-- 2. ADD THE COMPONENT HERE */}
    </div>
  );
};

export default Layout;

// ========================================================================
// END OF FILE
// ========================================================================
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'My Story', href: '/my-story' },
  { name: 'Case Study', href: '/case-study' },
];

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Name */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              Muhammad Subhan
            </span>
            <span className="text-sm text-slate-600 font-medium -mt-1">
              Software Engineer
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-blue-700 bg-blue-50 shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"
                    style={{ x: '-50%' }}
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile toggle button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </motion.button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden absolute left-4 right-4 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="py-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-6 py-3 font-medium text-sm transition-all duration-200 ${
                      pathname === link.href
                        ? 'text-blue-700 bg-blue-50 border-r-2 border-blue-600'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {pathname === link.href && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"
                        transition={{ type: 'spring', bounce: 0.3 }}
                      />
                    )}
                    <span className={pathname !== link.href ? 'ml-4' : ''}>
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

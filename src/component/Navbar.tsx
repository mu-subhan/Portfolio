'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
  { name: 'Footer', href: '#footer' },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-6xl z-[999] rounded-2xl px-6 py-3 transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 backdrop-blur-lg shadow-xl border border-white/20'
          : 'bg-white/5 backdrop-blur-md'
      }`}
    >
      <div className="flex justify-between items-center text-white">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('#home');
          }}
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Muhammad Subhan
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
              className="relative text-white/90 hover:text-white transition duration-300 font-medium group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 flex flex-col space-y-4 text-white bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.href);
                }}
                className="block font-medium hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

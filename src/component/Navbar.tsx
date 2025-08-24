'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' }, 
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(`#${section}`);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
    
    const element = document.querySelector(href);
    if (element && element instanceof HTMLElement) {
      const offsetTop = element.offsetTop - 90; // Slightly more space for professional look
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Professional Logo/Name */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col"
          >
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              Muhammad Subhan
            </span>
            <span className="text-sm text-slate-600 font-medium -mt-1">
              Software Engineer
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 ${
                  activeSection === item.href
                    ? 'text-blue-700 bg-blue-50 shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"
                    style={{ x: '-50%' }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden absolute left-4 right-4 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="py-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`flex items-center px-6 py-3 font-medium text-sm transition-all duration-200 ${
                      activeSection === item.href
                        ? 'text-blue-700 bg-blue-50 border-r-2 border-blue-600'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {activeSection === item.href && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"
                        transition={{ type: "spring", bounce: 0.3 }}
                      />
                    )}
                    <span className={activeSection !== item.href ? 'ml-4' : ''}>
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
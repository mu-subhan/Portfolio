'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: 'https://github.com/mu-subhan',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/in/muhammad-subhan-321821231/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: <FaEnvelope />, 
      url: 'mailto:muhammadsubhan8934@gmail.com',
      label: 'Email',
      color: 'hover:text-green-400'
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'muhammadsubhan8934@gmail.com',
      link: 'mailto:muhammadsubhan8934@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Lahore, Pakistan',
      link: null
    },
    {
      icon: <FaPhone />,
      label: 'Available for',
      value: 'Remote Opportunities',
      link: null
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1),transparent)] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          
          {/* Main Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Muhammad Subhan
              </h3>
              <p className="text-xl text-slate-300 font-medium mb-4">
                Software Engineer
              </p>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Passionate about building scalable web applications with modern technologies. 
                Specializing in full-stack development with focus on performance and user experience.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <div className="text-blue-400 text-sm">
                    {contact.icon}
                  </div>
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      className="hover:text-white transition-colors text-sm"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-sm">{contact.value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  whileHover={{ x: 5 }}
                  className="block text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links & CTA */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Let&apos;s Connect</h4>
              
              {/* Social Media */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all duration-300 text-slate-400 ${link.color} shadow-lg hover:shadow-xl`}
                  >
                    <span className="text-lg">{link.icon}</span>
                  </motion.a>
                ))}
              </div>

              {/* Call to Action */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h5 className="text-white font-semibold mb-2">Ready to collaborate?</h5>
                <p className="text-slate-400 text-sm mb-4">
                  I&apos;m always open to discussing new opportunities and interesting projects.
                </p>
                <motion.a
                  href="mailto:muhammadsubhan8934@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors shadow-lg hover:shadow-xl"
                >
                  <FaEnvelope className="text-xs" />
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-12 mt-12 border-t border-slate-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <span>© {currentYear} Muhammad Subhan</span>
              <span className="hidden md:block">•</span>
              <span className="hidden md:block">All rights reserved</span>
            </div>
            
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new projects
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
}
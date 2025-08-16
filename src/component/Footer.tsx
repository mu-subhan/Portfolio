'use client';

import { FaGithub, FaLinkedin, , FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/mu-subhan' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/muhammad-subhan-321821231/' },
    // { icon: <FaTwitter />, url: 'https://twitter.com/yourhandle' }, FaTwitter
    { icon: <FaEnvelope />, url: 'mailto:muhammadsubhan8934@.com' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
              Muhammad Subhan
            </h3>
            <p className="mt-1 text-gray-400">
              Building digital experiences that matter 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6 text-2xl"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="transition text-gray-300 hover:text-blue-400"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-gray-700 text-center"
        >
          <p className="text-sm text-gray-500">
            © {currentYear} Muhammad Subhan. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Built with <span className="text-sky-400">Next.js</span>, <span className="text-sky-400">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

'use client';

import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-24 sm:py-28 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* 👈 Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white">
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Muhammad Subhan
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Software Engineer specialized in <span className="text-blue-500">MERN Stack</span> development.
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            Passionate about building full-stack web applications that are fast, scalable, and user-friendly. With a strong foundation in JavaScript, React, and Node.js, I love turning ideas into reality.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:shadow-blue-500"
            >
              View My Work
            </a>

            <a
              href="/Muhammad _Subhan_Resume.pdf"
              download
              className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-200 font-medium shadow-lg hover:shadow-2xl hover:shadow-green-500"
            >
              <FiDownload /> Resume
            </a>
          </div>
        </motion.div>

        {/* 👉 Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500 transition-all duration-300 ease-in-out border-4 border-blue-500/50">
            <Image
              src="/my.jpeg" 
              alt="Muhammad Subhan"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

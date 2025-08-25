'use client';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <motion.div
            className="lg:col-span-7 xl:col-span-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 text-slate-900"
            >
              Building Scalable{' '}
              <span className="relative">
                <span className="text-blue-600">Software Solutions</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200/60 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <h2 className="text-xl md:text-2xl text-slate-700 font-semibold">
                Muhammad Subhan
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Software Engineer specializing in full-stack web development with the MERN stack. 
                I design and build robust, scalable applications with clean architecture and 
                optimal performance.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  React & Next.js
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Node.js & Express
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  MongoDB & PostgreSQL
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Cloud Architecture
                </span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.button
                onClick={handleScrollToProjects}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                View My Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="/Muhammad_Subhan_Resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-slate-900 px-8 py-4 rounded-lg transition-all duration-300 text-slate-700 hover:text-slate-900 font-semibold hover:bg-slate-50"
              >
                <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-slate-500 font-medium">Connect:</span>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-all duration-200"
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-all duration-200"
                >
                  <FiLinkedin size={20} />
                </motion.a>
               
              
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
           <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96">


              {/* Main Image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-slate-600/20 rounded-2xl transform rotate-3"
                  animate={{ rotate: [3, -2, 3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white transform -rotate-2">
                  <Image
                    src="/my.jpeg"
                    alt="Muhammad Subhan - Software Engineer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-200"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-2xl">⚡</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-200"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xl">💻</div>
              </motion.div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
   <Link
   href='/experience'
   className='bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2'>
     View Experience
   </Link>
    <Link
    href='my-story'
    className='group flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-slate-900 px-8 py-4 rounded-lg transition-all duration-300 text-slate-700 hover:text-slate-900 font-semibold hover:bg-slate-50'
    >
      About My Journey
    </Link>
  </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
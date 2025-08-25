'use client';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  githubLink: string;
  imageUrl: string;
  type: string;
  highlights: string[];
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  link, 
  githubLink,
  imageUrl, 
  type,
  highlights,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-slate-300 transition-all duration-500 relative"
    >
      {/* Project Type Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">
          {type}
        </span>
      </div>

      {/* Image Section */}
      <div className="relative h-48 md:h-52 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Live Demo Button */}
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 p-2 rounded-lg shadow-lg"
        >
          <FiExternalLink size={16} />
        </motion.a>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title & Highlights */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          
          {/* Key Highlights */}
          <div className="flex flex-wrap gap-1 mb-3">
            {highlights.map((highlight, i) => (
              <span
                key={i}
                className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium border border-blue-200"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 mb-6 leading-relaxed text-sm line-clamp-4">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-default border border-slate-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-200 group/link"
          >
            <span>View Live Demo</span>
            <FiArrowUpRight 
              size={16} 
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" 
            />
          </motion.a>

          {/* Additional action - GitHub link would go here if available */}
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-50"
            title="Source code"
          >
            <FiGithub size={16} />
          </motion.a>
        </div>
      </div>

      {/* Subtle gradient border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/5 to-slate-500/5" />
      </div>
    </motion.div>
  );
}
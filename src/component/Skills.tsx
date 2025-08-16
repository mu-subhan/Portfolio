'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase,
  FaReact,
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql,
  SiExpress, SiCplusplus, SiFramer, SiShadcnui,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 text-2xl" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-2xl" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-2xl" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-500 text-2xl" /> },
       { name: 'C', icon: <SiCplusplus className="text-gray-500 text-2xl" /> },
    ],
  },
  {
    title: 'Styling Tools',
    skills: [
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-2xl" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-pink-500 text-2xl" /> },
      { name: 'shadcn/ui', icon: <SiShadcnui className="text-purple-500 text-2xl" /> },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white text-2xl" /> },
           { name: 'React.js', icon: <FaReact className="text-cyan-400 text-2xl" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-2xl" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-gray-200 text-2xl" /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700 text-2xl" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-700 text-2xl" /> },
    ],
  },
];

export default function SkillsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
  <div className="container mx-auto px-6 max-w-3xl">
    <h2 className="text-4xl font-extrabold mb-12 text-center text-white">
      My <span className="text-blue-500">Skills</span>
    </h2>

    <div className="space-y-6">
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`rounded-xl overflow-hidden shadow-lg transition duration-300 bg-white/5 border border-white/10 backdrop-blur-sm hover:shadow-blue-500/30 ${
            openIndex === index ? 'ring-2 ring-blue-500/40' : ''
          }`}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-5 text-left font-semibold text-white hover:bg-white/10 transition"
          >
            <span className="text-lg">{category.title}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <ul className="grid grid-cols-2 gap-4 mt-2">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-gray-100 text-base hover:text-blue-400 transition"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}

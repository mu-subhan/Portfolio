'use client';

import { motion } from 'framer-motion';
import {
  FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt, FaReact, FaAws, FaDocker, FaGitAlt
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql,
  SiExpress, SiCplusplus, SiFramer, SiShadcnui, SiRedis, SiGraphql, SiJest,
  SiKubernetes, SiLinux
} from 'react-icons/si';

const skills = [
  // Core Languages & Technologies
  { 
    name: 'JavaScript', 
    icon: <FaJsSquare className="text-yellow-500" />, 
    category: 'Core Technologies',
    proficiency: 95,
    years: '3+'
  },
  { 
    name: 'TypeScript', 
    icon: <SiTypescript className="text-blue-600" />, 
    category: 'Core Technologies',
    proficiency: 90,
    years: '2+'
  },
  { 
    name: 'C++', 
    icon: <SiCplusplus className="text-blue-500" />, 
    category: 'Core Technologies',
    proficiency: 85,
    years: '2+'
  },
  { 
    name: 'HTML5', 
    icon: <FaHtml5 className="text-orange-600" />, 
    category: 'Core Technologies',
    proficiency: 95,
    years: '3+'
  },

  // Frontend Development
  { 
    name: 'React.js', 
    icon: <FaReact className="text-cyan-400" />, 
    category: 'Frontend Development',
    proficiency: 92,
    years: '2+'
  },
  { 
    name: 'Next.js', 
    icon: <SiNextdotjs className="text-slate-900" />, 
    category: 'Frontend Development',
    proficiency: 90,
    years: '2+'
  },
  { 
    name: 'Tailwind CSS', 
    icon: <SiTailwindcss className="text-sky-400" />, 
    category: 'Frontend Development',
    proficiency: 95,
    years: '2+'
  },
  { 
    name: 'Framer Motion', 
    icon: <SiFramer className="text-pink-500" />, 
    category: 'Frontend Development',
    proficiency: 85,
    years: '1+'
  },

  // Backend & APIs
  { 
    name: 'Node.js', 
    icon: <FaNodeJs className="text-green-600" />, 
    category: 'Backend & APIs',
    proficiency: 90,
    years: '2+'
  },
  { 
    name: 'Express.js', 
    icon: <SiExpress className="text-slate-800" />, 
    category: 'Backend & APIs',
    proficiency: 88,
    years: '2+'
  },
  { 
    name: 'GraphQL', 
    icon: <SiGraphql className="text-pink-600" />, 
    category: 'Backend & APIs',
    proficiency: 75,
    years: '1+'
  },
  { 
    name: 'REST APIs', 
    icon: <FaNodeJs className="text-blue-500" />, 
    category: 'Backend & APIs',
    proficiency: 92,
    years: '2+'
  },

  // Database & Storage
  { 
    name: 'MongoDB', 
    icon: <SiMongodb className="text-green-700" />, 
    category: 'Database & Storage',
    proficiency: 90,
    years: '2+'
  },
  { 
    name: 'PostgreSQL', 
    icon: <SiPostgresql className="text-blue-700" />, 
    category: 'Database & Storage',
    proficiency: 85,
    years: '1+'
  },
  { 
    name: 'MySQL', 
    icon: <SiMysql className="text-blue-700" />, 
    category: 'Database & Storage',
    proficiency: 88,
    years: '2+'
  },
  { 
    name: 'Redis', 
    icon: <SiRedis className="text-red-600" />, 
    category: 'Database & Storage',
    proficiency: 80,
    years: '1+'
  },

  // Cloud & DevOps
  { 
    name: 'AWS', 
    icon: <FaAws className="text-orange-500" />, 
    category: 'Cloud & DevOps',
    proficiency: 80,
    years: '1+'
  },
  { 
    name: 'Docker', 
    icon: <FaDocker className="text-blue-500" />, 
    category: 'Cloud & DevOps',
    proficiency: 82,
    years: '1+'
  },
  { 
    name: 'Git', 
    icon: <FaGitAlt className="text-orange-600" />, 
    category: 'Cloud & DevOps',
    proficiency: 90,
    years: '3+'
  },
  { 
    name: 'Linux', 
    icon: <SiLinux className="text-yellow-600" />, 
    category: 'Cloud & DevOps',
    proficiency: 85,
    years: '2+'
  },
];

const categories = [
  { 
    name: 'Core Technologies', 
    color: 'bg-blue-50 text-blue-800 border-blue-200',
    icon: '💻',
    description: 'Foundation languages and core development skills'
  },
  { 
    name: 'Frontend Development', 
    color: 'bg-green-50 text-green-800 border-green-200',
    icon: '🎨',
    description: 'User interface and experience technologies'
  },
  { 
    name: 'Backend & APIs', 
    color: 'bg-purple-50 text-purple-800 border-purple-200',
    icon: '⚡',
    description: 'Server-side development and API design'
  },
  { 
    name: 'Database & Storage', 
    color: 'bg-orange-50 text-orange-800 border-orange-200',
    icon: '🗄️',
    description: 'Data management and storage solutions'
  },
  { 
    name: 'Cloud & DevOps', 
    color: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    icon: '☁️',
    description: 'Infrastructure, deployment, and operations'
  },
];

export default function Skills() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const}
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium">
              Technical Expertise
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Technology
            <span className="relative mx-3">
              <span className="text-blue-600">Stack</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200/60 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical proficiencies spanning full-stack development, 
            cloud architecture, and modern software engineering practices.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-16"
        >
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category.name);
            
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className={`inline-flex items-center px-6 py-3 rounded-xl text-base font-semibold border ${category.color}`}>
                    <span className="mr-3 text-lg">{category.icon}</span>
                    {category.name}
                  </div>
                  <div className="hidden md:flex flex-1 items-center gap-4">
                    <div className="flex-1 h-px bg-slate-200"></div>
                    <span className="text-sm text-slate-500 font-medium">
                      {category.description}
                    </span>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="group relative bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-6 hover:shadow-lg transition-all duration-300"
                    >
                      {/* Proficiency Indicator */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>

                      {/* Skill Icon */}
                      <div className="text-4xl mb-4 flex justify-center">
                        {skill.icon}
                      </div>

                      {/* Skill Name */}
                      <div className="text-center">
                        <h3 className="text-sm font-bold text-slate-900 mb-1">
                          {skill.name}
                        </h3>
                        <div className="text-xs text-slate-500">
                          {skill.years} experience
                        </div>
                      </div>

                      {/* Proficiency Bar */}
                      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: skillIndex * 0.1, duration: 1 }}
                          />
                        </div>
                      </div>

                      {/* Hover Effect Gradient */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-tr from-blue-500 to-purple-500" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-6 bg-slate-900 text-white rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">20+</div>
              <div className="text-sm text-slate-300">Technologies</div>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-300">3+</div>
              <div className="text-sm text-slate-300">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300">10+</div>
              <div className="text-sm text-slate-300">Projects Built</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
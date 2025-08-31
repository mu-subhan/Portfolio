'use client';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiTrendingUp, FiAward, FiBriefcase, FiCode } from 'react-icons/fi';

const experiences = [
  {
    title: 'Junior Software Engineer',
    company: 'DigiU',
    type: 'Contract',
    duration: 'April 2024 – July 2024',
    location: 'Remote',
    status: 'Recent',
   description: 'Contributed to the development and maintenance of Digi Collect, a production-level data collection platform serving enterprise clients. Worked on API integrations, cron job automation, and bug fixing, ensuring system reliability and scalability while enhancing overall product performance.',

    responsibilities: [
      'Architected and implemented RESTful API integrations for third-party services',
      'Designed and deployed automated cron job systems for data processing workflows',
      'Resolved critical production bugs and implemented performance optimizations',
      'Led feature development initiatives that improved system reliability by 25%',
      'Gained expertise in Python ecosystem and production-level system architecture'
    ],
    technologies: ['Python', 'REST APIs', 'Cron Jobs', 'System Architecture', 'Production Systems'],
    achievements: [
      'Successfully delivered 5+ feature enhancements under tight deadlines',
      'Improved system performance and reduced processing time by 20%',
      'Collaborated effectively in cross-functional team environment'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600'
  },
  {
    title: 'MERN Stack Developer',
    company: 'Wanile Technology',
    type: 'Internship',
    duration: 'June 2023 – March 2024',
    location: 'Hybrid',
    status: 'Long-term',
    description: 'Developed and optimized key components of a Hotel Management System (HMS), focusing on building a scalable and maintainable frontend architecture with React.js and Next.js. Collaborated with the backend team to ensure seamless integration, resulting in improved user workflows and a smoother customer experience.',
    responsibilities: [
      'Engineered responsive React.js components for complex hotel workflows',
      'Built full-stack applications using Next.js with server-side rendering optimization',
      'Implemented MongoDB database schemas for efficient hotel data management',
      'Collaborated on live production applications serving real hotel institutions',
      'Enhanced MERN stack expertise through hands-on enterprise application development'
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Express.js', 'ShadCN'],
    achievements: [
      'Delivered 7+ responsive frontend components for HMS platform',
      'Contributed to live applications used by hotel professionals',
      'Mastered full-stack development in production environment'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600'
  },
  {
    title: 'AI/ML Fellowship',
    company: 'HeadStarter AI',
    type: 'Fellowship',
    duration: 'June 2024 – July 2024',
    location: 'Remote',
    status: 'Achievement',
    description: 'Intensive 6-week fellowship program focusing on artificial intelligence and machine learning integration with modern web technologies.',
    responsibilities: [
      'Explored cutting-edge AI and Machine Learning concepts in structured curriculum',
      'Developed React-based component library integrating ML models with MERN stack',
      'Led frontend development for innovative AI-powered applications',
      'Collaborated in cross-functional teams on complex technical challenges',
      'Participated in competitive hackathon environment with industry professionals'
    ],
    technologies: ['AI/ML', 'React.js', 'Node.js', 'MERN Stack', 'Component Libraries'],
    achievements: [
      ' Achieved 3rd place in competitive hackathon among 100+ participants',
      'Successfully integrated ML models with React frontend applications',
      'Completed intensive 6-week technical fellowship program'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600'
  }
];

export default function Experience() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" as const }
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,transparent,white,transparent)] -z-10" />
      
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
              Professional Journey
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Work
            <span className="relative mx-3">
              <span className="text-blue-600">Experience</span>
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
            My professional journey in software engineering, from internships to contract roles, 
            showcasing growth in full-stack development and emerging technologies.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-400 via-green-400 to-purple-400 rounded-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="group relative"
              >
                {/* Timeline Dot */}
                <div className={`hidden lg:block absolute left-6 top-8 w-5 h-5 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg z-10`}></div>

                {/* Experience Card */}
                <div className="lg:ml-20 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 overflow-hidden">
                  
                  {/* Header */}
                  <div className={`p-6 lg:p-8 border-l-4 border-gradient-to-b ${exp.bgColor.replace('bg-', 'border-').split(' ')[0]}`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg ${exp.bgColor}`}>
                            <FiBriefcase className={`${exp.iconColor} text-lg`} />
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${exp.bgColor} ${exp.iconColor}`}>
                            {exp.status}
                          </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-slate-600">
                          <span className="font-semibold text-lg">{exp.company}</span>
                          <span className="text-sm px-2 py-1 bg-slate-100 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col lg:items-end gap-2 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <FiCalendar size={14} />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 pt-0">
                    
                    {/* Key Responsibilities */}
                    <div className="mb-8">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
                        <FiCode className={exp.iconColor} />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm font-medium transition-colors cursor-default border border-slate-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
                        <FiAward className={exp.iconColor} />
                        Key Achievements
                      </h4>
                      <div className="grid gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className={`p-4 rounded-xl ${exp.bgColor} border`}>
                            <div className="flex items-start gap-3">
                              <FiTrendingUp className={`${exp.iconColor} mt-0.5`} size={16} />
                              <span className="text-sm text-slate-700 font-medium leading-relaxed">
                                {achievement}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Gradient */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr ${exp.color}`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Summary */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-slate-900 text-white rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">1.5+</div>
              <div className="text-sm text-slate-300">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-300">3</div>
              <div className="text-sm text-slate-300">Companies</div>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300">15+</div>
              <div className="text-sm text-slate-300">Projects Delivered</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
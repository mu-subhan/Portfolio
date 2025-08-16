import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, link, index }) => {
  return (
    <motion.a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(59, 130, 246, 0.4)" }}
      transition={{ duration: 0.3, delay: index * 0.15 }}
      className="block bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between transform transition-transform cursor-pointer"
    >
      <div>
        <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
       <p className="text-gray-700 dark:text-gray-300 mb-5 line-clamp-3">
  {description}
</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <span className="mt-auto text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-1">
        View Project →
      </span>
    </motion.a>
  );
};

export default ProjectCard;

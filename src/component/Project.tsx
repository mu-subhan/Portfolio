'use client';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard'; 

const projects = [
  {
    title: "Match-Volunteer using ML",
    description: "A system that uses Machine Learning to match volunteers to roles based on their skills and experience. Admins can easily select volunteers for specific tasks, and the system continuously improves matching accuracy over time. The platform enhances efficiency, ensuring better role assignments and a more satisfying volunteer experience.",
    tags: ["React", "Node.js", "MYSQL", "Tailwindcss", "ML"],
    link: "https://event-management-system-9qnx.vercel.app/"
  },
  {
    title: "Cloudly Store",
    description: "Cloudly Store is a real-time cloud storage platform that allows users to upload, store, and manage their files with seamless synchronization across devices. Cloudly Store provides secure, efficient, and accessible cloud storage for both personal and team use.",
    tags: ["Nextjs", "Typescript", "Shadcn", "Appwrite"],
    link: "https://cloudly-store.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    tags: ["Next.js", "Tailwind CSS", "React"],
    link: "#"
  },
  {
    title: "Task Manager",
    description: "Task management app with user authentication",
    tags: ["React", "Express", "MongoDB"],
    link: "#"
  },
  {
    title: "Blog Platform",
    description: "Full-stack blogging platform with markdown support",
    tags: ["React", "Node.js", "Express"],
    link: "#"
  },
];

export default function Projects() {
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 });
// inView
  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-b from-white dark:from-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with cart functionality, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app with drag-and-drop functionality, real-time updates, and team collaboration features.",
    technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather information with 5-day forecast, location search, and interactive maps.",
    technologies: ["JavaScript", "Weather API", "CSS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1561484930-974554019ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "Web application that generates marketing content using OpenAI's GPT-3 API.",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile-first application for tracking workouts, nutrition, and progress analytics.",
    technologies: ["React Native", "Firebase", "D3.js", "Expo"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Portfolio Template",
    description: "Modern, responsive portfolio template for creatives and developers.",
    technologies: ["Gatsby", "GraphQL", "GSAP", "SCSS"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h6 className="text-lg font-medium text-cyan-400 mb-2">My Work</h6>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative h-full bg-gray-800 rounded-xl overflow-hidden shadow-xl z-10">
                <div className="overflow-hidden h-64">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    whileHover={{ scale: 1.05 }}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="flex space-x-3">
                      <a 
                        href={project.github} 
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        aria-label="GitHub repository"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.link} 
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        aria-label="Live project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="bg-gray-700 text-cyan-400 text-xs px-3 py-1 rounded-full"
                        whileHover={{ y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group"
              >
                <div className="overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                          aria-label="GitHub repository"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                      )}
                      <a 
                        href={project.link} 
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        aria-label="Live project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-gray-700 text-cyan-400 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-700 text-gray-400 text-xs px-2 py-1 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors"
          >
            View All Projects
            <FiExternalLink className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
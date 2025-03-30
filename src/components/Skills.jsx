import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCpu, FiDatabase, FiSmartphone } from 'react-icons/fi';

const skills = [
  { 
    name: "Frontend Development", 
    level: 95,
    icon: <FiLayers className="w-6 h-6" />,
    subskills: ["React", "Next.js", "Vue", "Tailwind CSS", "GSAP"]
  },
  { 
    name: "JavaScript/TypeScript", 
    level: 90,
    icon: <FiCode className="w-6 h-6" />,
    subskills: ["ES6+", "TypeScript", "jQuery", "Webpack", "Babel"]
  },
  { 
    name: "Backend Development", 
    level: 80,
    icon: <FiCpu className="w-6 h-6" />,
    subskills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"]
  },
  { 
    name: "UI/UX Design", 
    level: 85,
    icon: <FiSmartphone className="w-6 h-6" />,
    subskills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"]
  },
  { 
    name: "DevOps & Tools", 
    level: 75,
    icon: <FiDatabase className="w-6 h-6" />,
    subskills: ["Git", "Docker", "CI/CD", "AWS", "Netlify"]
  }
];

const techStack = [
  { 
    name: "React", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    color: "#61DAFB"
  },
  { 
    name: "TypeScript", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png",
    color: "#3178C6"
  },
  { 
    name: "Node.js", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    color: "#339933"
  },
  { 
    name: "GraphQL", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1280px-GraphQL_Logo.svg.png",
    color: "#E10098"
  },
  { 
    name: "Tailwind CSS", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png",
    color: "#38B2AC"
  },
  { 
    name: "MongoDB", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1280px-MongoDB_Logo.svg.png",
    color: "#47A248"
  },
  { 
    name: "Firebase", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png",
    color: "#FFCA28"
  },
  { 
    name: "Docker", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1280px-Docker_%28container_engine%29_logo.svg.png",
    color: "#2496ED"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h6 className="text-lg font-medium text-cyan-400 mb-2">My Capabilities</h6>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Skills progress */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="text-cyan-400 mr-3">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <span className="ml-auto text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 1, type: 'spring' }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {skill.subskills.map((subskill, i) => (
                      <motion.span
                        key={i}
                        className="text-xs bg-gray-700 text-cyan-400 px-3 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 + 0.4, duration: 0.3 }}
                      >
                        {subskill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech stack visualization */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div 
                      className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center p-3 mb-2"
                      style={{ backgroundColor: tech.color + '20' }} // Add opacity to the color
                    >
                      <img 
                        src={tech.image} 
                        alt={tech.name} 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Additional skills */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold text-white mb-4">Also Experienced With</h4>
                <div className="flex flex-wrap gap-3">
                  {['Jest', 'Cypress', 'SASS', 'Redux', 'GraphQL', 'PostgreSQL', 'Python', 'Java'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.6, duration: 0.3 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
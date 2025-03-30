import { motion } from 'framer-motion';
import { FiAward, FiCode, FiUser } from 'react-icons/fi';
import profileImage from '../assets/images/profile.jpeg';

// Option 1: Using public folder (place image in public/images/profile.jpg)
// const profileImage = "./assets/images/profile.jpeg";
 // Update path to match your image

// Option 2: Using direct import (place image in src/assets/images)
// import profileImage from './assets/images/profile.jpg';

export default function About() {
  const stats = [
    { value: "3+", label: "Years Experience", icon: <FiAward className="w-6 h-6" /> },
    { value: "50+", label: "Projects Completed", icon: <FiCode className="w-6 h-6" /> },
    { value: "100%", label: "Client Satisfaction", icon: <FiUser className="w-6 h-6" /> }
  ];

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "UI/UX Design", level: 80 },
    { name: "Backend Integration", level: 75 },
    { name: "Mobile Responsiveness", level: 95 }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h6 className="text-lg font-medium text-cyan-400 mb-2">Get To Know More</h6>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile image section */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200 animate-tilt"></div>
              
              {/* Your profile image - update src to your image path */}
              <img 
                src={profileImage}
                alt="Profile picture"
                className="relative rounded-2xl w-full max-w-md mx-auto object-cover z-10 transform transition duration-300 group-hover:-translate-y-2"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
              <p className="text-lg text-gray-300 mb-4">
                I'm a passionate <span className="text-cyan-400">Frontend Developer</span> with expertise in React, JavaScript, and modern web technologies. I specialize in creating beautiful, responsive, and user-friendly web applications that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                With <span className="text-cyan-400">3+ years</span> of professional experience, I've had the privilege of working on diverse projects ranging from small business websites to complex enterprise web applications for clients across various industries.
              </p>
              <p className="text-lg text-gray-300">
                When I'm not coding, you can find me <span className="text-cyan-400">hiking in nature</span>, reading the latest tech blogs, or experimenting with new frameworks and design trends to expand my skill set.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                >
                  <div className="flex items-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Skills progress bars */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-2">My Skills</h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.6, duration: 1, type: 'spring' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function Hero() {
  const techIcons = [
    { icon: <FaReact className="w-8 h-8" />, name: 'React' },
    { icon: <SiTypescript className="w-8 h-8" />, name: 'TypeScript' },
    { icon: <SiTailwindcss className="w-8 h-8" />, name: 'Tailwind CSS' },
    { icon: <FaNodeJs className="w-8 h-8" />, name: 'Node.js' },
    { icon: <FaFigma className="w-8 h-8" />, name: 'Figma' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com' },
    { icon: <FiTwitter />, url: 'https://twitter.com' },
  ];

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 z-0">
        {/* Floating animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="text-lg md:text-xl font-medium text-cyan-400 mb-4">
                Hello, I'm
              </h6>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                [Your Name]
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                <span className="inline-block mr-2">I build</span>
                <span className="relative inline-block">
                  <span className="relative z-10">exceptional digital experiences</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400/30"
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
                A passionate frontend developer specializing in modern JavaScript frameworks,
                creating beautiful, responsive, and user-friendly web applications.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#projects"
                  className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-8 py-3 rounded-lg font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right content - Tech stack */}
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              My Tech Stack
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-4 bg-white/5 rounded-full mb-2">
                    {tech.icon}
                  </div>
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <FiArrowDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
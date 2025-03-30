import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target;
      if (target.closest('a, button, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          x: position.x - (isHovering ? 12 : 8),
          y: position.y - (isHovering ? 12 : 8),
        }}
        transition={{ type: 'spring', mass: 0.1 }}
      >
        <div className={`rounded-full transition-all duration-300 ${
          isHovering 
            ? 'w-6 h-6 bg-white/80' 
            : 'w-4 h-4 bg-white'
        }`} />
      </motion.div>
      
      {/* Circle follower */}
      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.2 : 0.1,
        }}
        transition={{ type: 'spring', mass: 0.5 }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-cyan-400" />
      </motion.div>
    </>
  );
}
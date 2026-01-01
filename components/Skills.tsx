'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'React', icon: FaReact, level: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'Next.js', icon: SiNextdotjs, level: 85, color: 'from-gray-100 to-gray-400' },
    { name: 'TypeScript', icon: SiTypescript, level: 88, color: 'from-blue-500 to-blue-700' },
    { name: 'Node.js', icon: FaNodeJs, level: 82, color: 'from-green-400 to-green-600' },
    { name: 'Python', icon: FaPython, level: 80, color: 'from-yellow-400 to-blue-500' },
    { name: 'JavaScript', icon: FaJs, level: 92, color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML5', icon: FaHtml5, level: 95, color: 'from-orange-400 to-orange-600' },
    { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88, color: 'from-cyan-400 to-blue-600' },
    { name: 'MongoDB', icon: SiMongodb, level: 75, color: 'from-green-400 to-green-600' },
    { name: 'Git', icon: FaGitAlt, level: 85, color: 'from-orange-400 to-red-600' },
    { name: 'Docker', icon: FaDocker, level: 70, color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', icon: FaAws, level: 68, color: 'from-orange-400 to-orange-600' },
    { name: 'Java', icon: FaJava, level: 75, color: 'from-red-400 to-red-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      <skill.icon />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  <span className="text-gray-400 font-medium">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-400 text-lg">
                Technology is constantly evolving, and so am I. I'm always exploring new frameworks,
                libraries, and best practices to stay at the forefront of web development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills



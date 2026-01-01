'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUser, FaGraduationCap, FaAward, FaLightbulb } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const stats = [
    { icon: FaUser, number: '5+', label: 'Years Experience' },
    { icon: FaGraduationCap, number: '50+', label: 'Projects Completed' },
    { icon: FaAward, number: '20+', label: 'Happy Clients' },
    { icon: FaLightbulb, number: '100+', label: 'Ideas Realized' },
  ]

  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image & Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  className="w-full max-w-md mx-auto"
                >
                  <div className="relative rounded-2xl overflow-hidden border-4 border-blue-500/50">
                    <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-8xl text-blue-400">👨‍💻</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                  />
                </motion.div>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg leading-relaxed"
              >
                I'm a passionate developer with a love for creating beautiful, functional, and
                user-friendly web applications. With expertise in modern web technologies, I bring
                ideas to life through clean code and innovative solutions.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg leading-relaxed"
              >
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source
                projects, and continuously learning to stay ahead of the curve in this ever-evolving
                industry.
              </motion.p>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all text-center"
                  >
                    <stat.icon className="text-4xl text-blue-400 mb-3 mx-auto" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Personal Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Personal Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white font-medium">Parmar Yash</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white font-medium">yashparmar2208@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white font-medium">Surat, Gujarat, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-green-400 font-medium">Available</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


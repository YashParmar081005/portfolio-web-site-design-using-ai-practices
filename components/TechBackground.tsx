'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws
} from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss } from 'react-icons/si'

const TechBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [clicks, setClicks] = useState<Array<{ x: number; y: number; id: number }>>([])
  const [clickId, setClickId] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [isMounted, setIsMounted] = useState(false)

  const techIcons = [
    { Icon: FaReact, color: 'text-cyan-400', size: 40 },
    { Icon: FaJs, color: 'text-yellow-400', size: 36 },
    { Icon: SiNextdotjs, color: 'text-white', size: 38 },
    { Icon: SiTypescript, color: 'text-blue-500', size: 36 },
    { Icon: FaHtml5, color: 'text-orange-500', size: 40 },
    { Icon: FaCss3Alt, color: 'text-blue-400', size: 38 },
    { Icon: FaNodeJs, color: 'text-green-500', size: 40 },
    { Icon: FaPython, color: 'text-blue-400', size: 36 },
    { Icon: SiMongodb, color: 'text-green-500', size: 40 },
    { Icon: SiTailwindcss, color: 'text-cyan-400', size: 38 },
    { Icon: FaGitAlt, color: 'text-orange-500', size: 36 },
    { Icon: FaDocker, color: 'text-blue-400', size: 40 },
    { Icon: FaAws, color: 'text-orange-400', size: 36 },
  ]

  const codeSnippets = [
    '{ code }',
    'const dev = true',
    '<div />',
    'function()',
    'async await',
    'import React',
    'export default',
    'useState()',
    'npm install',
    'git commit',
  ]

  useEffect(() => {
    setIsMounted(true)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleClick = (e: MouseEvent) => {
      const newId = clickId + 1
      setClicks((prev) => [...prev, { x: e.clientX, y: e.clientY, id: newId }])
      setClickId(newId)
      
      // Remove click after animation
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== newId))
      }, 1000)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [clickId])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Tech Icons */}
      {techIcons.map((tech, index) => {
        const startX = Math.random() * dimensions.width
        const startY = Math.random() * dimensions.height
        return (
          <motion.div
            key={index}
            className="absolute opacity-10 hover:opacity-20 transition-opacity"
            initial={{
              x: startX,
              y: startY,
            }}
            animate={{
              x: [
                startX,
                (startX + Math.random() * dimensions.width) % dimensions.width,
                (startX + Math.random() * dimensions.width) % dimensions.width,
              ],
              y: [
                startY,
                (startY + Math.random() * dimensions.height) % dimensions.height,
                (startY + Math.random() * dimensions.height) % dimensions.height,
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.5,
            }}
          >
            <tech.Icon className={tech.color} size={tech.size} />
          </motion.div>
        )
      })}

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => {
        const startX = Math.random() * dimensions.width
        const startY = Math.random() * dimensions.height
        return (
          <motion.div
            key={index}
            className="absolute text-xs font-mono text-blue-400/20"
            initial={{
              x: startX,
              y: startY,
            }}
            animate={{
              x: [
                startX,
                (startX + Math.random() * dimensions.width) % dimensions.width,
              ],
              y: [
                startY,
                (startY + Math.random() * dimensions.height) % dimensions.height,
              ],
            }}
            transition={{
              duration: 30 + Math.random() * 20,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.8,
            }}
          >
            {snippet}
          </motion.div>
        )
      })}

      {/* Mouse Cursor Tracker - Glowing Dot */}
      <motion.div
        className="fixed w-12 h-12 rounded-full bg-blue-500/20 blur-2xl pointer-events-none z-[9996]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
        }}
      />

      {/* Mouse Cursor Inner Glow */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-cyan-400/40 blur-lg pointer-events-none z-[9996]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
        }}
      />

      {/* Mouse Cursor Particles */}
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-purple-400/60 blur-sm pointer-events-none z-[9996]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 35,
        }}
      />

      {/* Click Ripple Effects */}
      {clicks.map((click) => (
        <div key={click.id}>
          {/* Outer Ripple */}
          <motion.div
            className="fixed rounded-full border-2 border-blue-400 pointer-events-none z-[9997]"
            initial={{
              x: click.x - 20,
              y: click.y - 20,
              width: 40,
              height: 40,
              opacity: 0.9,
            }}
            animate={{
              width: 300,
              height: 300,
              x: click.x - 150,
              y: click.y - 150,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          />
          {/* Inner Ripple */}
          <motion.div
            className="fixed rounded-full border border-purple-400 pointer-events-none z-[9997]"
            initial={{
              x: click.x - 15,
              y: click.y - 15,
              width: 30,
              height: 30,
              opacity: 0.7,
            }}
            animate={{
              width: 200,
              height: 200,
              x: click.x - 100,
              y: click.y - 100,
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
          />
          {/* Center Flash */}
          <motion.div
            className="fixed rounded-full bg-blue-400 pointer-events-none z-[9997]"
            initial={{
              x: click.x - 8,
              y: click.y - 8,
              width: 16,
              height: 16,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              scale: 3,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
            }}
          />
        </div>
      ))}

      {/* Click Particles */}
      {clicks.map((click) => (
        <div key={`particles-${click.id}`}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed w-2 h-2 rounded-full pointer-events-none z-[9997]"
              style={{
                background: `hsl(${(i * 30) % 360}, 70%, 60%)`,
              }}
              initial={{
                x: click.x,
                y: click.y,
                opacity: 1,
                scale: 1,
              }}
              animate={{
                x: click.x + Math.cos((i * Math.PI * 2) / 12) * 150,
                y: click.y + Math.sin((i * Math.PI * 2) / 12) * 150,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: i * 0.03,
              }}
            />
          ))}
        </div>
      ))}

      {/* Animated Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => {
        const startX = Math.random() * dimensions.width
        const startY = Math.random() * dimensions.height
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-blue-400/30"
            initial={{
              x: startX,
              y: startY,
              opacity: Math.random(),
            }}
            animate={{
              y: [
                startY,
                (startY + Math.random() * dimensions.height) % dimensions.height,
              ],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.2,
            }}
          />
        )
      })}
    </div>
  )
}

export default TechBackground


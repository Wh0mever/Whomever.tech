'use client'

import { motion } from 'framer-motion'
import { fadeIn, textContainer, textVariant } from '../utils/animations'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/language-context'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { language, translations } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Ensure all required translations are available
  const fullStackDev = translations.fullStackDev?.[language] || 'Full-Stack Developer'
  const aiIntegrator = translations.aiIntegrator?.[language] || 'AI Integrator'
  const experienceDescription = translations.experienceDescription?.[language] || '4+ years of experience in backend and frontend development'
  const viewProjects = translations.viewProjects?.[language] || 'View Projects'

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <motion.div
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        variants={textContainer}
        className="relative z-10 container flex flex-col items-center text-center"
      >
        <motion.div
          className="relative"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-[12rem] font-bold tracking-tighter text-zinc-300 leading-none mb-6"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.2)",
                "0 0 40px rgba(255,255,255,0.2)",
                "0 0 20px rgba(255,255,255,0.2)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Whomever
          </motion.h1>
        </motion.div>

        <motion.div 
          className="space-y-4"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold tracking-tight"
            variants={textVariant}
          >
            {fullStackDev}
            <motion.span 
              className="block text-amber-500"
              animate={{
                color: ["#f59e0b", "#fbbf24", "#f59e0b"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {aiIntegrator}
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-zinc-400 text-sm md:text-base"
            variants={textVariant}
          >
            {experienceDescription}
          </motion.p>
          <motion.button 
            className="px-6 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10">{viewProjects}</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}


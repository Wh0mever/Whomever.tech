'use client'

import { Code, Globe, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/language-context'

export default function Features() {
  const { language, translations } = useLanguage()
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript / TypeScript', level: 85 },
    { name: 'C / C++', level: 80 },
    { name: 'Node.js', level: 85 },
    { name: 'React', level: 90 },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="py-16 md:py-24 space-y-16 md:space-y-32 bg-[#0D0D0D] text-white">
      {/* About Me */}
      <section id="about" className="container px-4">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {translations.about[language]}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            className="relative aspect-square rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image 
              src="https://i.imgur.com/O1GJX6r.png"
              alt="Whomever at Digital Engineering School"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              className="text-base md:text-xl text-zinc-300"
              variants={itemVariants}
            >
              {translations.aboutMeDescription[language]}
            </motion.p>
            <motion.div 
              className="mt-8 space-y-4"
              ref={ref}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-zinc-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-amber-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="container px-4">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {translations.expertise[language]}
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 space-y-4">
              <Code className="w-8 h-8 text-amber-500" />
              <h3 className="text-xl font-semibold">{translations.fullStackDev[language]}</h3>
              <p className="text-zinc-400">{translations.fullStackDesc[language]}</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 space-y-4">
              <Globe className="w-8 h-8 text-amber-500" />
              <h3 className="text-xl font-semibold">{translations.browserExtension[language]}</h3>
              <p className="text-zinc-400">{translations.browserExtensionDesc[language]}</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 space-y-4">
              <Zap className="w-8 h-8 text-amber-500" />
              <h3 className="text-xl font-semibold">{translations.workOptimization[language]}</h3>
              <p className="text-zinc-400">{translations.workOptimizationDesc[language]}</p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Current Projects */}
      <section id="projects" className="container px-4">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {translations.currentProjects[language]}
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">{translations.commPlatform[language]}</h3>
            <p className="text-zinc-400 mb-8">{translations.commPlatformDesc[language]}</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">{translations.telegramBot[language]}</h3>
            <p className="text-zinc-400 mb-8">{translations.telegramBotDesc[language]}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Team */}
      <section id="team" className="container px-4">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {translations.team[language]}
        </motion.h2>
        <motion.p 
          className="text-base md:text-xl text-center text-zinc-300 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {translations.teamDescription[language]}
        </motion.p>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="container px-4">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {translations.roadmap[language]}
        </motion.h2>
        <motion.div 
          className="max-w-2xl mx-auto space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {[
            { number: 1, text: translations.roadmapStep1[language], status: 'active' },
            { number: 2, text: translations.roadmapStep2[language], status: 'pending' },
            { number: 3, text: translations.roadmapStep3[language], status: 'pending' },
            { number: 4, text: translations.roadmapStep4[language], status: 'pending' },
          ].map((step) => (
            <motion.div 
              key={step.number} 
              className="flex items-start gap-4"
              variants={itemVariants}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                step.status === 'active' ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-white'
              }`}>
                {step.number}
              </div>
              <p className="text-lg">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}


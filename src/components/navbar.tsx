'use client'

import Link from 'next/link'
import { ChevronDown, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/language-context'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, translations } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = ['about', 'expertise', 'projects', 'team', 'roadmap'] as const

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
        isScrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-zinc-800' : 'bg-transparent border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container flex items-center justify-between h-16 px-4">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <motion.span
              className="text-amber-500 text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔥
            </motion.span>
            <motion.span 
              className="font-semibold text-xl text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Whomever
            </motion.span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-6">
          <AnimatePresence>
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link 
                  href={`#${item}`} 
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${item}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {translations[item][language]}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div 
                className="flex items-center gap-1 text-zinc-400 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm">
                  {language === 'GB' ? '🇬🇧' : language === 'RU' ? '🇷🇺' : language === 'UZ' ? '🇺🇿' : language === 'UA' ? '🇺🇦' : language === 'ES' ? '🇪🇸' : '🇰🇷'}
                </span>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('GB')}>
                🇬🇧 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('RU')}>
                🇷🇺 Русский
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('UZ')}>
                🇺🇿 O'zbek
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('UA')}>
                🇺🇦 Українська
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ES')}>
                🇪🇸 Español
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('KR')}>
                🇰🇷 한국어
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link href="https://t.me/ctrltg" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="bg-zinc-800 text-white hover:bg-zinc-700">
                <span>{translations.contactMe[language]}</span>
              </Button>
            </Link>
          </motion.div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-zinc-800">
          <div className="container py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="block text-sm text-zinc-400 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${item}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {translations[item][language]}
              </Link>
            ))}
            <Link
              href="https://t.me/ctrltg"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-amber-500 hover:text-amber-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {translations.contactMe[language]}
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  )
}


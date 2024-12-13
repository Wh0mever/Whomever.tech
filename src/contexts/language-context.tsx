'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'GB' | 'RU' | 'UZ' | 'UA' | 'ES' | 'KR'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Record<string, Record<Language, string>>
}

const translations = {
  about: {
    GB: 'About Me',
    RU: 'Обо мне',
    UZ: 'Men haqimda'
  },
  expertise: {
    GB: 'Expertise',
    RU: 'Опыт',
    UZ: 'Tajriba'
  },
  projects: {
    GB: 'Projects',
    RU: 'Проекты',
    UZ: 'Loyihalar'
  },
  team: {
    GB: 'Team',
    RU: 'Команда',
    UZ: 'Jamoa'
  },
  roadmap: {
    GB: 'Roadmap',
    RU: 'План',
    UZ: 'Yo\'l xaritasi'
  },
  contactMe: {
    GB: 'Contact Me',
    RU: 'Связаться',
    UZ: 'Bog\'lanish'
  },
  aboutMeDescription: {
    GB: 'I am a skilled full-stack developer with over 4 years of experience in backend and frontend development. I have a strong background in optimizing workflows with scripts, developing websites, and integrating complex APIs.',
    RU: 'Я опытный full-stack разработчик с более чем 4-летним опытом работы в backend и frontend разработке. У меня сильный опыт в оптимизации рабочих процессов с помощью скриптов, разработке веб-сайтов и интеграции сложных API.',
    UZ: 'Men 4 yildan ortiq backend va frontend ishlab chiqish tajribasiga ega bo\'lgan malakali full-stack dasturchiman. Skriptlar yordamida ish jarayonlarini optimallashtirishda, veb-saytlarni ishlab chiqishda va murakkab API larni integratsiya qilishda kuchli tajribaga egaman.'
  },
  fullStackDev: {
    GB: 'Full-Stack Development',
    RU: 'Full-Stack Разработка',
    UZ: 'Full-Stack Dasturlash'
  },
  browserExtension: {
    GB: 'Browser Extension Development',
    RU: 'Разработка Расширений для Браузера',
    UZ: 'Brauzer Kengaytmalarini Ishlab Chiqish'
  },
  workOptimization: {
    GB: 'Work Optimization',
    RU: 'Оптимизация Работы',
    UZ: 'Ish Optimizatsiyasi'
  },
  fullStackDesc: {
    GB: 'Proficient in both backend and frontend technologies, creating seamless web applications.',
    RU: 'Опыт работы с backend и frontend технологиями, создание современных веб-приложений.',
    UZ: 'Backend va frontend texnologiyalarida tajribali, zamonaviy veb-ilovalarni yaratish.'
  },
  browserExtensionDesc: {
    GB: 'Skilled in creating scripts for browser extensions to enhance and optimize web browsing experiences.',
    RU: 'Опыт создания скриптов для расширений браузера для улучшения и оптимизации работы в интернете.',
    UZ: 'Veb-brauzing tajribasini yaxshilash va optimallashtirishga mo\'ljallangan brauzer kengaytmalari uchun skriptlar yaratish bo\'yicha tajribaga ega.'
  },
  workOptimizationDesc: {
    GB: 'Successfully optimized a company\'s workflow by up to 80% through the implementation of custom scripts and automation tools.',
    RU: 'Успешно оптимизировал рабочий процесс компании до 80% с помощью внедрения пользовательских скриптов и инструментов автоматизации.',
    UZ: 'Maxsus skriptlar va avtomatlashtirish vositalarini joriy etish orqali kompaniyaning ish jarayonini 80% gacha muvaffaqiyatli optimallashtirildi.'
  },
  currentProjects: {
    GB: 'Current Projects',
    RU: 'Текущие Проекты',
    UZ: 'Joriy Loyihalar'
  },
  commPlatform: {
    GB: 'Communication Platform',
    RU: 'Коммуникационная Платформа',
    UZ: 'Aloqa Platformasi'
  },
  commPlatformDesc: {
    GB: 'Developing a site combining Discord and RocketChat functionality with real-time text, voice, and video communications.',
    RU: 'Разработка сайта, объединяющего функционал Discord и RocketChat с поддержкой текстового, голосового и видео общения в реальном времени.',
    UZ: 'Discord va RocketChat funksionalligini birlashtirgan, real vaqtda matn, ovoz va video aloqalarni qo\'llab-quvvatlaydigan sayt ishlab chiqish.'
  },
  telegramBot: {
    GB: 'Telegram Bot for Payments',
    RU: 'Telegram Бот для Платежей',
    UZ: 'To\'lovlar uchun Telegram Bot'
  },
  telegramBotDesc: {
    GB: 'Creating a payment solution that accepts manual and automated transactions via Uzcard, Stripe, Binance, and more.',
    RU: 'Создание платежного решения, принимающего ручные и автоматические транзакции через Uzcard, Stripe, Binance и другие системы.',
    UZ: 'Uzcard, Stripe, Binance va boshqa tizimlar orqali qo\'lda va avtomatik tranzaksiyalarni qabul qiladigan to\'lov yechimini yaratish.'
  },
  teamDescription: {
    GB: 'Whomever has assembled a team of developers to ensure efficient and high-quality project delivery, leveraging each member\'s expertise in React.js, Web3, and server management. They are committed to delivering innovative and secure solutions for users.',
    RU: 'Whomever собрал команду разработчиков для обеспечения эффективной и качественной реализации проектов, используя опыт каждого члена команды в React.js, Web3 и управлении серверами. Они стремятся предоставлять инновационные и безопасные решения для пользователей.',
    UZ: 'Whomever React.js, Web3 va server boshqaruvida har bir a\'zoning tajribasidan foydalanib, samarali va yuqori sifatli loyihalarni amalga oshirish uchun dasturchillar jamoasini tuzdi. Ular foydalanuvchilar uchun innovatsion va xavfsiz yechimlarni taqdim etishga intiladilar.'
  },
  roadmapStep1: {
    GB: 'System Architecture and Initial Prototypes',
    RU: 'Системная архитектура и начальные прототипы',
    UZ: 'Tizim arxitekturasi va dastlabki prototiplar'
  },
  roadmapStep2: {
    GB: 'Full Development of Features (chat, video calls, notifications)',
    RU: 'Полная разработка функций (чат, видеозвонки, уведомления)',
    UZ: 'Xususiyatlarni to\'liq ishlab chiqish (chat, video qo\'ng\'iroqlar, bildirishnomalar)'
  },
  roadmapStep3: {
    GB: 'Beta Testing and Security Enhancements',
    RU: 'Бета-тестирование и улучшение безопасности',
    UZ: 'Beta-sinov va xavfsizlikni kuchaytirish'
  },
  roadmapStep4: {
    GB: 'Launch and Post-launch Support',
    RU: 'Запуск и поддержка после запуска',
    UZ: 'Ishga tushirish va ishga tushirishdan keyingi qo\'llab-quvvatlash'
  },
  aiIntegrator: {
    GB: 'AI Integrator',
    RU: 'Интегратор ИИ',
    UZ: 'AI Integratori',
    UA: 'Інтегратор ШІ',
    ES: 'Integrador de IA',
    KR: 'AI 통합 전문가'
  },
  experienceDescription: {
    GB: '4+ years of experience in backend and frontend development',
    RU: 'Более 4 лет опыта в backend и frontend разработке',
    UZ: 'Backend va frontend ishlab chiqishda 4+ yillik tajriba',
    UA: 'Понад 4 роки досвіду в розробці backend та frontend',
    ES: 'Más de 4 años de experiencia en desarrollo backend y frontend',
    KR: '백엔드 및 프론트엔드 개발 4년 이상의 경험'
  },
  viewProjects: {
    GB: 'View Projects',
    RU: 'Посмотреть проекты',
    UZ: 'Loyihalarni ko\'rish',
    UA: 'Переглянути проекти',
    ES: 'Ver proyectos',
    KR: '프로젝트 보기'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('GB')

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}


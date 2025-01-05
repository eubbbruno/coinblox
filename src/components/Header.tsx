'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { mainNavigation, quickLinks } from '@/config/navigation'

const Header = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('common')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const changeLanguage = (lng: string) => {
    router.push(pathname?.replace(/^\/[a-z]{2}/, `/${lng}`) || '/')
    setIsLanguageMenuOpen(false)
  }

  if (!isMounted) {
    return null
  }

  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-primary font-display">
            CoinBlox
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((section) => (
              <div
                key={section.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(section.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className={`flex items-center space-x-1 py-2 text-sm font-medium ${
                    activeMenu === section.title ? 'text-primary' : 'text-gray-300 hover:text-primary'
                  } transition-colors`}
                >
                  <span>{t(`header.${section.title.toLowerCase()}`)}</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {activeMenu === section.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 mt-2"
                    >
                      <div className="bg-gray-900 rounded-lg shadow-xl border border-gray-800 p-4">
                        {section.items.map((item) => (
                          <div key={item.href} className="py-2">
                            <Link
                              href={item.href}
                              className={`block text-sm font-medium ${
                                pathname === item.href ? 'text-primary' : 'text-gray-300 hover:text-primary'
                              } transition-colors`}
                            >
                              {t(`header.${item.title.toLowerCase()}`)}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="text-gray-400 hover:text-primary transition-colors flex items-center"
              >
                <GlobeAltIcon className="h-5 w-5 mr-1" />
                <span>{t('header.language')}</span>
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-800 p-2">
                  <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">
                    English
                  </button>
                  <button onClick={() => changeLanguage('pt')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">
                    Português
                  </button>
                  <button onClick={() => changeLanguage('es')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">
                    Español
                  </button>
                </div>
              )}
            </div>
            <Link
              href="/register"
              className="bg-primary text-background px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {t('header.getStarted')}
            </Link>
            <Link
              href="/login"
              className="text-primary border border-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              {t('header.logIn')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GiftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const WelcomeBonus = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 border border-gray-800 rounded-2xl p-8 mb-12">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <GiftIcon className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary">Welcome Bonus</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Get up to <span className="text-primary">10,055 USDT</span> in rewards
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Start your crypto journey with CoinBlox and receive exclusive bonuses, including trading fee discounts and rewards.
          </p>
          <Link
            href="/register"
            className="group inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Claim Your Bonus
            <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative w-full md:w-80 h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20" />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10,055</div>
              <div className="text-2xl font-medium text-primary">USDT</div>
              <div className="text-sm text-gray-400 mt-2">Welcome Package</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeBonus


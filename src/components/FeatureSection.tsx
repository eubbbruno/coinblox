'use client'

import { useEffect, useState } from 'react'
import { BoltIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Lightning Fast Trades',
    description: 'Execute trades in milliseconds. Our high-performance engine ensures you never miss an opportunity.',
    icon: BoltIcon,
  },
  {
    title: 'Bank-Grade Security',
    description: 'Sleep soundly knowing your assets are protected by military-grade encryption and multi-sig cold storage.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Competitive Fees',
    description: 'Keep more of your profits with our industry-leading low fees. Big trades or small, your wallet stays fuller.',
    icon: CurrencyDollarIcon,
  },
]

const FeatureSection = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-display text-primary">Why Smart Investors Choose CoinBlox</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
              <div key={index} className="glassmorphism p-6 animate-fade-in hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 font-display text-secondary">{feature.title}</h3>
                <p className="text-foreground">{feature.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection


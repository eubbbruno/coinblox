'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, LockClosedIcon, CogIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Advanced Security',
    description: 'Multi-layer protection with 2FA, anti-phishing codes, and advanced encryption.'
  },
  {
    icon: LockClosedIcon,
    title: 'Cold Storage',
    description: '95% of user funds are stored in offline, multi-signature cold wallets.'
  },
  {
    icon: CogIcon,
    title: 'Regular Audits',
    description: 'Frequent security audits by leading cybersecurity firms ensure your assets are safe.'
  }
]

const SecurityFeatures = () => {
  return (
    <section className="py-16 bg-gray-900 rounded-3xl overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 font-display">
          Your Security is Our <span className="text-primary">Top Priority</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          We employ industry-leading security measures to ensure your funds and personal information are always protected.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="/security"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            Learn more about our security measures →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default SecurityFeatures


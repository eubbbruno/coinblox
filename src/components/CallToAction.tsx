'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Start Your Crypto Journey Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Join thousands of traders who have already discovered the power of CoinBlox. 
            Trade with confidence, security, and ease.
          </p>
          <motion.a
            href="/register"
            className="inline-flex items-center bg-primary text-background px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Create Your Free Account
            <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <p className="mt-4 text-sm text-gray-400">
            No credit card required. Start trading in minutes.
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30" />
    </section>
  )
}

export default CallToAction


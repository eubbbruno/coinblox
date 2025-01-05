'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChartBarIcon, CurrencyDollarIcon, UserGroupIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const products = [
  {
    id: 'spot',
    title: 'Spot Trading',
    description: 'Buy and sell 100+ cryptocurrencies with multiple payment options',
    icon: ChartBarIcon,
    image: '/placeholder.svg?height=300&width=500',
    link: '/spot',
  },
  {
    id: 'futures',
    title: 'Futures Trading',
    description: 'Trade with up to 100x leverage on our advanced futures platform',
    icon: CurrencyDollarIcon,
    image: '/placeholder.svg?height=300&width=500',
    link: '/futures',
  },
  {
    id: 'copy',
    title: 'Copy Trading',
    description: 'Follow top traders and automatically copy their trading strategies',
    icon: UserGroupIcon,
    image: '/placeholder.svg?height=300&width=500',
    link: '/copy-trading',
  },
  {
    id: 'launchpad',
    title: 'Launchpad',
    description: 'Be the first to invest in promising crypto projects',
    icon: RocketLaunchIcon,
    image: '/placeholder.svg?height=300&width=500',
    link: '/launchpad',
  },
]

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(products[0])

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 font-display">
        Explore Our <span className="text-primary">Products</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          {products.map((product) => (
            <button
              key={product.id}
              className={`w-full text-left p-6 rounded-xl transition-all ${
                activeProduct.id === product.id
                  ? 'bg-primary/10 border-primary'
                  : 'bg-gray-900 border-gray-800 hover:bg-gray-800'
              } border`}
              onClick={() => setActiveProduct(product)}
            >
              <div className="flex items-start space-x-4">
                <product.icon
                  className={`h-6 w-6 mt-1 ${
                    activeProduct.id === product.id ? 'text-primary' : 'text-gray-400'
                  }`}
                />
                <div>
                  <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-400 text-sm">{product.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="relative aspect-video">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-3xl" />
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={activeProduct.image}
              alt={activeProduct.title}
              width={500}
              height={300}
              className="rounded-xl shadow-2xl"
            />
            <Link
              href={activeProduct.link}
              className="absolute bottom-4 right-4 bg-primary text-background px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase


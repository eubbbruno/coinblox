'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const newsItems = [
  {
    id: 1,
    title: 'CoinBlox Launches New Staking Platform',
    excerpt: 'Earn passive income with our new high-yield staking options for popular cryptocurrencies.',
    image: '/placeholder.svg?height=200&width=300',
    date: '2023-05-01',
    category: 'Product Update'
  },
  {
    id: 2,
    title: 'Market Analysis: Bitcoin Surges Past $50,000',
    excerpt: 'Experts weigh in on the factors driving the latest bull run in the crypto market.',
    image: '/placeholder.svg?height=200&width=300',
    date: '2023-04-28',
    category: 'Market News'
  },
  {
    id: 3,
    title: 'CoinBlox Partners with Major Payment Provider',
    excerpt: 'New partnership enables easier fiat on-ramps for users in over 30 countries.',
    image: '/placeholder.svg?height=200&width=300',
    date: '2023-04-25',
    category: 'Partnership'
  }
]

const NewsSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 font-display">
          Latest <span className="text-primary">News</span> and Updates
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Stay informed with the latest developments in the crypto world and CoinBlox platform updates.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-shadow"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out"
                  style={{
                    transform: hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute top-2 left-2 bg-primary text-background text-xs font-bold px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <a
                    href={`/news/${item.id}`}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/news"
            className="inline-flex items-center bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  )
}

export default NewsSection


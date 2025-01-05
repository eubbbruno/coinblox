'use client'

import { useState } from 'react'
import { StarIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

interface MarketData {
  pair: string
  price: string
  change: string
  volume: string
  chart: 'up' | 'down'
  favorite?: boolean
}

const marketData: MarketData[] = [
  { pair: 'BTC/USDT', price: '43,562.80', change: '+2.34%', volume: '867.5M', chart: 'up' },
  { pair: 'ETH/USDT', price: '2,284.15', change: '+1.89%', volume: '542.3M', chart: 'up' },
  { pair: 'SOL/USDT', price: '98.45', change: '-0.75%', volume: '324.1M', chart: 'down' },
  { pair: 'XRP/USDT', price: '0.6234', change: '+3.12%', volume: '156.8M', chart: 'up' },
  { pair: 'DOT/USDT', price: '15.78', change: '-1.23%', volume: '89.4M', chart: 'down' },
  { pair: 'DOGE/USDT', price: '0.0856', change: '+5.67%', volume: '234.6M', chart: 'up' },
]

const MarketOverview = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [activeTab, setActiveTab] = useState('all')

  const toggleFavorite = (pair: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(pair)) {
      newFavorites.delete(pair)
    } else {
      newFavorites.add(pair)
    }
    setFavorites(newFavorites)
  }

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-display">Market Overview</h2>
        <div className="flex items-center space-x-4">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'all' ? 'bg-primary text-background' : 'text-gray-400 hover:text-primary'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'favorites' ? 'bg-primary text-background' : 'text-gray-400 hover:text-primary'
            }`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites
          </button>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-800 text-sm font-medium text-gray-400">
          <div className="col-span-3">Pair</div>
          <div className="col-span-3 text-right">Price</div>
          <div className="col-span-2 text-right">24h Change</div>
          <div className="col-span-3 text-right">24h Volume</div>
          <div className="col-span-1 text-right">Trade</div>
        </div>

        <div className="divide-y divide-gray-800">
          {marketData
            .filter((item) => activeTab === 'all' || favorites.has(item.pair))
            .map((item) => (
              <div key={item.pair} className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-800/50 transition-colors">
                <div className="col-span-3 flex items-center space-x-2">
                  <button onClick={() => toggleFavorite(item.pair)}>
                    {favorites.has(item.pair) ? (
                      <StarIconSolid className="h-5 w-5 text-primary" />
                    ) : (
                      <StarIcon className="h-5 w-5 text-gray-500 hover:text-primary" />
                    )}
                  </button>
                  <span className="font-medium">{item.pair}</span>
                </div>
                <div className="col-span-3 text-right font-medium">${item.price}</div>
                <div
                  className={`col-span-2 text-right flex items-center justify-end ${
                    item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {item.chart === 'up' ? (
                    <ArrowTrendingUpIcon className="h-5 w-5 mr-1" />
                  ) : (
                    <ArrowTrendingDownIcon className="h-5 w-5 mr-1" />
                  )}
                  {item.change}
                </div>
                <div className="col-span-3 text-right text-gray-400">${item.volume}</div>
                <div className="col-span-1 text-right">
                  <button className="text-primary hover:text-primary/80 font-medium">Trade</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default MarketOverview


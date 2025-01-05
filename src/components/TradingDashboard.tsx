'use client'

import { useState } from 'react'
import TradingViewWidget from './TradingViewWidget'

interface TradingDashboardProps {
  type: 'spot' | 'futures'
}

const TradingDashboard: React.FC<TradingDashboardProps> = ({ type }) => {
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement order submission logic here
    console.log(`Submitting ${orderType} order for ${amount} at ${price}`)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-gray-800 p-4 rounded-lg" style={{ height: '500px' }}>
          <TradingViewWidget />
        </div>
      </div>
      <div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Place Order</h2>
          <div className="flex mb-4">
            <button
              className={`flex-1 py-2 ${
                orderType === 'buy'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setOrderType('buy')}
            >
              Buy
            </button>
            <button
              className={`flex-1 py-2 ${
                orderType === 'sell'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setOrderType('sell')}
            >
              Sell
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="price" className="block mb-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-gray-700 text-white p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="amount" className="block mb-2">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-gray-700 text-white p-2 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-400 text-gray-900 py-2 rounded font-semibold hover:bg-cyan-300 transition-colors"
            >
              Place {orderType.charAt(0).toUpperCase() + orderType.slice(1)} Order
            </button>
          </form>
        </div>
        {type === 'futures' && (
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <h2 className="text-xl font-semibold mb-4">Leverage</h2>
            {/* Add leverage controls here */}
          </div>
        )}
      </div>
    </div>
  )
}

export default TradingDashboard


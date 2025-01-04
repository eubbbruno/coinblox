import { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'

export default function TradingDashboard() {
  const { t } = useTranslation('common')
  const [price, setPrice] = useState(0)

  useEffect(() => {
    // Simulating real-time price updates
    const interval = setInterval(() => {
      setPrice(prevPrice => prevPrice + Math.random() * 100 - 50)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-2 bg-darker p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{t('priceChart')}</h2>
        {/* TradingView widget would go here */}
        <div className="bg-dark h-96 flex items-center justify-center">
          <p>{t('tradingViewChart')}</p>
        </div>
      </div>
      <div className="bg-darker p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{t('orderBook')}</h2>
        <div className="space-y-2">
          <p>{t('currentPrice')}: <span className="text-neon">${price.toFixed(2)}</span></p>
          <button className="w-full bg-green-500 text-white py-2 rounded">{t('buy')}</button>
          <button className="w-full bg-red-500 text-white py-2 rounded">{t('sell')}</button>
        </div>
      </div>
    </div>
  )
}


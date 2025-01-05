import { useTranslations } from 'next-intl'
import WelcomeBonus from '@/components/WelcomeBonus'
import MarketOverview from '@/components/MarketOverview'
import ProductShowcase from '@/components/ProductShowcase'
import TradingViewSection from '@/components/TradingViewSection'
import GetStartedGuide from '@/components/GetStartedGuide'
import SecurityFeatures from '@/components/SecurityFeatures'
import NewsSection from '@/components/NewsSection'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  const t = useTranslations('common')

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <WelcomeBonus />
        <MarketOverview />
        <ProductShowcase />
        <TradingViewSection />
        <GetStartedGuide />
        <SecurityFeatures />
        <NewsSection />
        <CallToAction />
      </div>
    </div>
  )
}


import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-4 text-glow">
        {t('welcome')} <span className="text-neon">CoinBlox</span>
      </h1>
      <p className="text-xl mb-8">{t('heroSubtitle')}</p>
      <Link href="/dashboard" className="bg-neon text-dark px-6 py-3 rounded-full font-bold hover:bg-opacity-80 transition-all duration-300 neon-border">
        {t('startTrading')}
      </Link>
    </div>
  )
}


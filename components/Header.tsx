import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Header() {
  const t = useTranslations('Header')

  return (
    <header className="bg-darker py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-neon text-glow">
          CoinBlox
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/dashboard" className="hover:text-neon transition-colors">{t('dashboard')}</Link></li>
            <li><Link href="/spot" className="hover:text-neon transition-colors">{t('spot')}</Link></li>
            <li><Link href="/futures" className="hover:text-neon transition-colors">{t('futures')}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
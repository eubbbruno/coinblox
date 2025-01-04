import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="bg-darker py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 CoinBlox. {t('allRightsReserved')}</p>
      </div>
    </footer>
  )
}


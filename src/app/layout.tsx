import './globals.css'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CoinBlox - Decentralized Crypto Exchange',
  description: 'Trade cryptocurrencies with ease on CoinBlox',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }, { locale: 'es' }]
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`./locales/${locale}/common.json`)).default
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error)
    messages = {}
  }

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-background text-foreground`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}


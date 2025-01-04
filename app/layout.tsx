import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CoinBlox - Decentralized Crypto Exchange',
  description: 'Trade cryptocurrencies with ease on CoinBlox, a decentralized exchange for spot and futures trading.',
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale?: string }
}) {
  const locale = params.locale || 'en' // Default to 'en' if locale is undefined
  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    messages = {}; // Fallback to empty messages
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="container mx-auto py-8">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}


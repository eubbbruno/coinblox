import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2023 CoinBlox. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4">
          <Link href="/about" className="hover:text-cyan-400 transition-colors">
            About
          </Link>
          <Link href="/terms" className="hover:text-cyan-400 transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
            Privacy
          </Link>
          <a
            href="https://twitter.com/coinblox"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://t.me/coinblox"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            Telegram
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in font-display text-primary">
          Unlock Your <span className="text-secondary">Financial Freedom</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in max-w-2xl mx-auto text-foreground">
          Experience the future of crypto trading with CoinBlox. Secure, fast, and user-friendly.
        </p>
        <Link
          href="/spot"
          className="bg-primary text-background px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-all duration-300 animate-glow inline-block"
        >
          Start Trading Now
        </Link>
        <p className="mt-4 text-sm text-foreground opacity-75">New users get 0% trading fees for 30 days!</p>
      </div>
    </section>
  )
}

export default HeroSection


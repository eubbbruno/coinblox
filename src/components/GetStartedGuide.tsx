const steps = [
    {
      number: '01',
      title: 'Create Account',
      description: 'Sign up in minutes with just your email and get instant access to all features',
      action: 'Register Now',
      link: '/register'
    },
    {
      number: '02',
      title: 'Fund Your Account',
      description: 'Deposit crypto or buy with credit card, bank transfer, and other payment methods',
      action: 'Deposit',
      link: '/wallet/deposit'
    },
    {
      number: '03',
      title: 'Start Trading',
      description: 'Trade spot or futures markets with our user-friendly interface',
      action: 'Trade Now',
      link: '/spot'
    }
  ]
  
  const GetStartedGuide = () => {
    return (
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4 font-display">How to Get Started</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Begin your crypto journey with CoinBlox in three simple steps. Our platform makes it easy for both beginners and experienced traders.
        </p>
  
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-primary/50 transition-colors group"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                <span className="text-primary font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 mb-4">{step.description}</p>
              <a
                href={step.link}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:underline"
              >
                {step.action} →
              </a>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default GetStartedGuide
  
  
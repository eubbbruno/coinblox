import { LockClosedIcon, ShieldCheckIcon, CreditCardIcon } from '@heroicons/react/24/outline'

const securityFeatures = [
  {
    title: '256-bit Encryption',
    description: 'Your data is protected with the same level of security used by major financial institutions.',
    icon: LockClosedIcon,
  },
  {
    title: 'Regulatory Compliance',
    description: 'We adhere to strict AML and KYC policies, ensuring a safe and compliant trading environment.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Insured Funds',
    description: 'Your digital assets are covered by our comprehensive insurance policy, giving you peace of mind.',
    icon: CreditCardIcon,
  },
]

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your Security is Our Top Priority</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center p-6 bg-gray-700 rounded-lg animate-fade-in">
                <Icon className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SecuritySection


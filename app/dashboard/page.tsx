import TradingDashboard from '../../components/TradingDashboard'
import WalletIntegration from '../../components/WalletIntegration'
import { useTranslation } from 'next-i18next'

export default function Dashboard() {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{t('tradingDashboard')}</h1>
      <TradingDashboard />
      <WalletIntegration />
    </div>
  )
}
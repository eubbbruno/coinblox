import TradingDashboard from '../../components/TradingDashboard'

export default function SpotPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Spot Trading</h1>
      <TradingDashboard type="spot" />
    </div>
  )
}


import { NavigationSection } from '@/types/navigation'

export const mainNavigation: NavigationSection[] = [
  {
    title: "Trade",
    items: [
      {
        title: "Spot Trading",
        href: "/spot",
        submenu: [
          {
            title: "Basic Trading",
            href: "/spot/basic",
            description: "Simple buy and sell interface for beginners"
          },
          {
            title: "Advanced Trading",
            href: "/spot/advanced",
            description: "Professional trading tools and charts"
          },
          {
            title: "Market Overview",
            href: "/spot/markets",
            description: "Complete market analysis and statistics"
          }
        ]
      },
      {
        title: "Futures",
        href: "/futures",
        submenu: [
          {
            title: "USDT-M Futures",
            href: "/futures/usdt",
            description: "Trade perpetual futures with USDT margin"
          },
          {
            title: "Coin-M Futures",
            href: "/futures/coin",
            description: "Trade perpetual futures with coin margin"
          },
          {
            title: "Trading Guide",
            href: "/futures/guide",
            description: "Learn futures trading strategies"
          }
        ]
      },
      {
        title: "Copy Trading",
        href: "/copy-trading",
        submenu: [
          {
            title: "Top Traders",
            href: "/copy-trading/traders",
            description: "Follow and copy successful traders"
          },
          {
            title: "My Copies",
            href: "/copy-trading/my-copies",
            description: "Manage your copy trading positions"
          }
        ]
      }
    ]
  },
  {
    title: "Earn",
    items: [
      {
        title: "Staking",
        href: "/earn/staking",
        submenu: [
          {
            title: "Flexible Staking",
            href: "/earn/staking/flexible",
            description: "Earn rewards with no lock-up period"
          },
          {
            title: "Fixed Staking",
            href: "/earn/staking/fixed",
            description: "Higher APY with fixed terms"
          }
        ]
      },
      {
        title: "Launchpad",
        href: "/earn/launchpad",
        description: "Participate in new token launches"
      }
    ]
  },
  {
    title: "NFTs",
    items: [
      {
        title: "Marketplace",
        href: "/nfts/marketplace"
      },
      {
        title: "My NFTs",
        href: "/nfts/my-collections"
      }
    ]
  }
]

export const quickLinks = [
  {
    title: "Register",
    href: "/register",
    badge: "Get 100 USDT"
  },
  {
    title: "Deposit",
    href: "/wallet/deposit"
  },
  {
    title: "Withdraw",
    href: "/wallet/withdraw"
  },
  {
    title: "Support",
    href: "/support"
  }
]


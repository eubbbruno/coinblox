'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

declare global {
  interface Window {
    ethereum?: any;
  }
}

const WalletDashboard = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        if (accounts.length > 0) {
          setIsConnected(true)
          setAddress(accounts[0])
          await getBalance(accounts[0])
        }
      } catch (error) {
        console.error('Failed to check connection:', error)
      }
    }
  }

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setIsConnected(true)
        setAddress(accounts[0])
        await getBalance(accounts[0])
      } catch (error) {
        console.error('Failed to connect wallet:', error)
      }
    }
  }

  const getBalance = async (address: string) => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const balance = await provider.getBalance(address)
      setBalance(ethers.utils.formatEther(balance))
    }
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      {isConnected ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Connected Wallet</h2>
          <p className="mb-2">Address: {address}</p>
          <p className="mb-4">Balance: {balance} ETH</p>
          <button
            className="bg-cyan-400 text-gray-900 px-4 py-2 rounded font-semibold hover:bg-cyan-300 transition-colors"
            onClick={() => getBalance(address)}
          >
            Refresh Balance
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect Your Wallet</h2>
          <button
            className="bg-cyan-400 text-gray-900 px-4 py-2 rounded font-semibold hover:bg-cyan-300 transition-colors"
            onClick={connectWallet}
          >
            Connect MetaMask
          </button>
        </div>
      )}
    </div>
  )
}

export default WalletDashboard


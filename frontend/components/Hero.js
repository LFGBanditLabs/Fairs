import { Shield, Users, Zap, CheckCircle } from 'lucide-react'
import { useAccount } from 'wagmi'

export default function Hero() {
  const { isConnected } = useAccount()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
          Decentralized Voting
          <span className="block text-blue-600 mt-2">On Base Network</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Create proposals and vote securely on-chain with transparent, tamper-proof voting powered by blockchain technology.
        </p>
        
        {!isConnected && (
          <div className="mt-10">
            <appkit-button size="lg" />
            <p className="mt-4 text-sm text-gray-500">
              Connect your wallet to get started
            </p>
          </div>
        )}
      </div>

      {/* Features Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Shield className="w-8 h-8" />}
          title="Secure"
          description="Votes are recorded immutably on the blockchain"
        />
        <FeatureCard
          icon={<Users className="w-8 h-8" />}
          title="Transparent"
          description="All votes are publicly verifiable on-chain"
        />
        <FeatureCard
          icon={<Zap className="w-8 h-8" />}
          title="Fast"
          description="Instant voting on Base L2 with low gas fees"
        />
        <FeatureCard
          icon={<CheckCircle className="w-8 h-8" />}
          title="Fair"
          description="One vote per address, no double voting"
        />
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

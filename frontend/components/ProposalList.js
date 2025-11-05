import { useState } from 'react'
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { ThumbsUp, ThumbsDown, Plus, Clock } from 'lucide-react'
import { VOTING_CONTRACT_ADDRESS, VOTING_ABI } from '../config/contract'

export default function ProposalList() {
  const { address, isConnected } = useAccount()
  const [showCreateModal, setShowCreateModal] = useState(false)

  if (!isConnected) {
    return null
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Active Proposals</h2>
          <p className="text-gray-600 mt-2">Vote on proposals or create your own</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          <span>Create Proposal</span>
        </button>
      </div>

      {/* Sample Proposals - Replace with actual contract data */}
      <div className="grid gap-6">
        <ProposalCard
          id={1}
          description="Implement weighted voting based on token holdings"
          forVotes={150}
          againstVotes={45}
          creator="0x1234...5678"
          createdAt="2 days ago"
        />
        <ProposalCard
          id={2}
          description="Add proposal expiration time feature"
          forVotes={89}
          againstVotes={12}
          creator="0xabcd...ef01"
          createdAt="1 day ago"
        />
        <ProposalCard
          id={3}
          description="Enable multi-chain support for voting"
          forVotes={203}
          againstVotes={78}
          creator="0x9876...4321"
          createdAt="5 hours ago"
        />
      </div>

      {showCreateModal && (
        <CreateProposalModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  )
}

function ProposalCard({ id, description, forVotes, againstVotes, creator, createdAt }) {
  const totalVotes = forVotes + againstVotes
  const forPercentage = totalVotes > 0 ? (forVotes / totalVotes) * 100 : 0
  const againstPercentage = totalVotes > 0 ? (againstVotes / totalVotes) * 100 : 0

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{description}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {createdAt}
            </span>
            <span>By {creator}</span>
          </div>
        </div>
        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          #{id}
        </span>
      </div>

      {/* Vote Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-green-600 font-medium">For: {forVotes} ({forPercentage.toFixed(1)}%)</span>
          <span className="text-red-600 font-medium">Against: {againstVotes} ({againstPercentage.toFixed(1)}%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div className="flex h-full">
            <div
              className="bg-green-500"
              style={{ width: `${forPercentage}%` }}
            />
            <div
              className="bg-red-500"
              style={{ width: `${againstPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Vote Buttons */}
      <div className="flex space-x-4">
        <button className="flex-1 flex items-center justify-center space-x-2 bg-green-50 hover:bg-green-100 text-green-700 px-4 py-3 rounded-lg font-medium transition-colors duration-200 border border-green-200">
          <ThumbsUp className="w-5 h-5" />
          <span>Vote For</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 bg-red-50 hover:bg-red-100 text-red-700 px-4 py-3 rounded-lg font-medium transition-colors duration-200 border border-red-200">
          <ThumbsDown className="w-5 h-5" />
          <span>Vote Against</span>
        </button>
      </div>
    </div>
  )
}

function CreateProposalModal({ onClose }) {
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement contract interaction
    console.log('Creating proposal:', description)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Create New Proposal</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proposal Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows="4"
              placeholder="Describe your proposal..."
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Create Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

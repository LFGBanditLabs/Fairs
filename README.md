A decentralized voting platform that enables users to create proposals and vote securely on-chain using blockchain technology, powered by Base (an Ethereum Layer 2 network).

🚀 Overview
The On-Chain Voting dApp demonstrates how blockchain can be used to create transparent, tamper-proof voting systems. Built on Base L2, this application provides a seamless and cost-effective voting experience.
Key Features
Users can:

🔐 Connect their MetaMask wallet (Base network)
📋 View active proposals in real-time
✅ Cast votes directly on-chain (For/Against)
📊 See live results updated from blockchain events
🆕 Create new proposals for community voting


🏗️ Tech Stack
LayerTechnologySmart ContractSolidity, Hardhat, OpenZeppelinFrontendReact (Vite), Tailwind CSSWeb3 LibrariesWagmi + ViemBlockchainBase Sepolia Testnet / Base MainnetDeploymentVercel (frontend), Base (smart contract)

📦 Project Structure
on-chain-voting-dapp/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── config/          # Wagmi & contract config
│   │   └── App.jsx          # Main application
│   ├── package.json
│   └── vite.config.js
│
├── smart-contracts/         # Hardhat smart contract project
│   ├── contracts/
│   │   └── Voting.sol       # Main voting contract
│   ├── scripts/
│   │   └── deploy.js        # Deployment script
│   ├── test/
│   │   └── Voting.test.js   # Contract tests
│   ├── hardhat.config.js
│   └── package.json
│
└── README.md

⚙️ Smart Contract
Contract Structure
File: contracts/Voting.sol
Key Functions
FunctionDescriptioncreateProposal(string memory description)Create a new voting proposalvote(uint proposalId, bool support)Vote on a proposal (true = For, false = Against)getProposal(uint proposalId)Retrieve proposal detailsgetAllProposals()Get all proposalshasVoted(uint proposalId, address voter)Check if address has voted
Proposal Struct
soliditystruct Proposal {
    uint id;
    string description;
    uint forVotes;
    uint againstVotes;
    bool executed;
    address creator;
    uint createdAt;
}
Events
solidityevent ProposalCreated(uint indexed proposalId, string description, address creator);
event Voted(uint indexed proposalId, address indexed voter, bool support);

🛠️ Installation & Setup
Prerequisites

Node.js v18+ and npm/yarn
MetaMask wallet extension
Base Sepolia testnet ETH (faucet)

1️⃣ Clone the Repository
bashgit clone https://github.com/yourusername/on-chain-voting-dapp.git
cd on-chain-voting-dapp

📜 Smart Contract Setup
Install Dependencies
bashcd smart-contracts
npm install
Configure Environment
Create .env file:
envPRIVATE_KEY=your_wallet_private_key
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
BASESCAN_API_KEY=your_basescan_api_key (optional)
Compile Contract
bashnpx hardhat compile
Run Tests
bashnpx hardhat test
Deploy to Base Sepolia
bashnpx hardhat run scripts/deploy.js --network baseSepolia
Save the deployed contract address! You'll need it for the frontend.
Verify Contract (Optional)
bashnpx hardhat verify --network baseSepolia DEPLOYED_CONTRACT_ADDRESS

🎨 Frontend Setup
Install Dependencies
bashcd frontend
npm install
Configure Environment
Create .env file:
envVITE_CONTRACT_ADDRESS=0x_your_deployed_contract_address
VITE_BASE_SEPOLIA_RPC=https://sepolia.base.org
Update Contract Configuration
Edit src/config/contract.js:
javascriptexport const VOTING_CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
export const VOTING_ABI = [...]; // Paste ABI from artifacts
Run Development Server
bashnpm run dev
Visit http://localhost:5173
Build for Production
bashnpm run build

🌐 Deployment
Frontend Deployment (Vercel)

Push code to GitHub
Connect repository to Vercel
Add environment variables in Vercel dashboard
Deploy automatically on push

Smart Contract Deployment
Deployed on Base Sepolia Testnet:

Contract Address: 0x... (update after deployment)
Explorer: BaseScan Sepolia

For mainnet:
bashnpx hardhat run scripts/deploy.js --network base

🧪 Testing
Smart Contract Tests
bashcd smart-contracts
npx hardhat test
Test coverage includes:

✅ Proposal creation
✅ Voting functionality
✅ Double-voting prevention
✅ Vote counting accuracy
✅ Event emissions

Frontend Testing
bashcd frontend
npm run test

📱 Usage Guide
1. Connect Wallet

Click "Connect Wallet" button
Approve MetaMask connection
Switch to Base Sepolia network if prompted

2. View Proposals

Browse active proposals on the homepage
See current vote counts (For/Against)

3. Create Proposal

Click "Create Proposal"
Enter proposal description
Confirm transaction in MetaMask
Wait for confirmation

4. Vote on Proposals

Select a proposal
Click "Vote For" or "Vote Against"
Confirm transaction
Vote is recorded on-chain


🔒 Security Considerations

✅ ReentrancyGuard protection (OpenZeppelin)
✅ One vote per address per proposal
✅ Input validation on all functions
✅ Event logging for transparency
⚠️ Note: This is a demo project. Conduct thorough audits before production use


🌟 Key Smart Contract Features
Anti-Double Voting
soliditymapping(uint => mapping(address => bool)) public hasVoted;

modifier hasNotVoted(uint proposalId) {
    require(!hasVoted[proposalId][msg.sender], "Already voted");
    _;
}
Gas Optimization

Uses uint256 instead of smaller types
Batched storage operations
Efficient event indexing


🛣️ Roadmap

 Add proposal expiration time
 Implement weighted voting (token-based)
 Add proposal categories/tags
 Implement delegation
 Create admin dashboard
 Multi-chain support
 IPFS integration for proposal metadata


🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit changes (git commit -m 'Add AmazingFeature')
Push to branch (git push origin feature/AmazingFeature)
Open a Pull Request


📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

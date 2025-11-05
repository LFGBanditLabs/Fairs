# Fairs Frontend - On-Chain Voting dApp

Modern, responsive frontend for the decentralized voting platform built with Next.js, TailwindCSS, and Reown AppKit.

## 🚀 Features

- **Wallet Connection**: Seamless wallet integration using Reown AppKit (formerly WalletConnect)
- **Multi-Network Support**: Base Mainnet and Base Sepolia testnet
- **Modern UI**: Beautiful, responsive design with TailwindCSS
- **Real-time Updates**: Live proposal data and voting results
- **Mobile Responsive**: Works perfectly on all devices

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Web3**: Wagmi v2 + Viem
- **Wallet**: Reown AppKit
- **Icons**: Lucide React

## 🛠️ Installation

1. **Install dependencies**:
```bash
cd frontend
npm install
```

2. **Set up environment variables**:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add:
- `NEXT_PUBLIC_PROJECT_ID`: Get from [Reown Cloud](https://cloud.reown.com)
- `NEXT_PUBLIC_CONTRACT_ADDRESS`: Your deployed contract address

3. **Run development server**:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Reown AppKit Setup

1. Go to [https://cloud.reown.com](https://cloud.reown.com)
2. Create a new project
3. Copy your Project ID
4. Add it to `.env.local` as `NEXT_PUBLIC_PROJECT_ID`

### Network Configuration

The app is configured for Base networks. Edit `config/web3.js` to add more networks:

```javascript
import { base, baseSepolia, mainnet } from '@reown/appkit/networks'

export const networks = [base, baseSepolia, mainnet]
```

### Contract Configuration

Update `config/contract.js` with your deployed contract ABI and address:

```javascript
export const VOTING_CONTRACT_ADDRESS = '0xYourContractAddress'
export const VOTING_ABI = [/* Your contract ABI */]
```

## 📁 Project Structure

```
frontend/
├── components/
│   ├── Header.js          # Navigation with wallet connect
│   ├── Hero.js            # Landing page hero section
│   ├── ProposalList.js    # Proposals display and voting
│   └── Footer.js          # Footer component
├── config/
│   ├── web3.js            # Wagmi & AppKit configuration
│   └── contract.js        # Contract ABI and address
├── pages/
│   ├── _app.js            # App wrapper with providers
│   └── index.js           # Main landing page
└── styles/
    └── globals.css        # Global styles
```

## 🎨 Components

### Header
- Displays app logo and name
- Integrated AppKit wallet button
- Responsive navigation

### Hero
- Eye-catching landing section
- Feature highlights
- Wallet connection prompt
- Responsive grid layout

### ProposalList
- Displays active proposals
- Vote for/against functionality
- Create new proposals
- Real-time vote counting
- Progress bars for vote visualization

### Footer
- Links to resources
- Social media connections
- Copyright information

## 🔗 Wallet Integration

The app uses Reown AppKit for wallet connections, supporting:
- MetaMask
- Coinbase Wallet
- WalletConnect compatible wallets
- And many more...

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_PROJECT_ID`
   - `NEXT_PUBLIC_CONTRACT_ADDRESS`
4. Deploy

### Other Platforms

Build the production bundle:
```bash
npm run build
npm start
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_PROJECT_ID` | Reown AppKit Project ID | Yes |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | Deployed contract address | Yes |

## 🧪 Development

### Adding New Features

1. Create components in `components/` directory
2. Update contract interactions in `config/contract.js`
3. Use Wagmi hooks for blockchain interactions

### Styling

The app uses TailwindCSS. Customize in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add custom colors
      }
    }
  }
}
```

## 🔐 Security Notes

- Never commit `.env.local` file
- Keep private keys secure
- Validate all user inputs
- Test on testnet before mainnet deployment

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Reown AppKit Docs](https://docs.reown.com/appkit)
- [Wagmi Documentation](https://wagmi.sh)
- [Base Network](https://base.org)
- [TailwindCSS](https://tailwindcss.com)

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and test thoroughly.

## 📄 License

MIT License

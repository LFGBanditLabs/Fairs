# Quick Setup Guide

## Prerequisites

- Node.js v18+ installed
- MetaMask or compatible wallet
- Base Sepolia testnet ETH (get from [Base Sepolia Faucet](https://www.coinbase.com/faucets/base-ethereum-goerli-faucet))

## Step-by-Step Setup

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Get Reown Project ID

1. Visit [https://cloud.reown.com](https://cloud.reown.com)
2. Sign up or log in
3. Click "Create New Project"
4. Give it a name (e.g., "Fairs Voting dApp")
5. Copy the **Project ID**

### 3. Configure Environment

Create `.env.local` file in the frontend directory:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_PROJECT_ID=your_reown_project_id_here
NEXT_PUBLIC_CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
```

Replace `your_reown_project_id_here` with your actual Project ID from step 2.

### 4. Deploy Smart Contract (Optional)

If you want to connect to a real contract:

```bash
cd ../contracts
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network baseSepolia
```

Copy the deployed contract address and update `NEXT_PUBLIC_CONTRACT_ADDRESS` in `.env.local`.

### 5. Run Development Server

```bash
cd ../frontend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Connect Your Wallet

1. Click the "Connect Wallet" button in the header
2. Select your wallet (MetaMask, Coinbase Wallet, etc.)
3. Approve the connection
4. Switch to Base Sepolia network if prompted

## Troubleshooting

### "Project ID is not defined" Error

Make sure you've created `.env.local` and added your `NEXT_PUBLIC_PROJECT_ID`.

### Wallet Won't Connect

1. Make sure MetaMask is installed
2. Try refreshing the page
3. Check that you're on a supported network (Base or Base Sepolia)

### Network Issues

Add Base Sepolia to MetaMask manually:
- **Network Name**: Base Sepolia
- **RPC URL**: https://sepolia.base.org
- **Chain ID**: 84532
- **Currency Symbol**: ETH
- **Block Explorer**: https://sepolia.basescan.org

### Build Errors

If you encounter build errors:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. **Deploy Contract**: Deploy your voting contract to Base Sepolia
2. **Update ABI**: Copy contract ABI to `config/contract.js`
3. **Test Voting**: Create proposals and test voting functionality
4. **Customize UI**: Modify components to match your brand
5. **Deploy Frontend**: Deploy to Vercel or your preferred hosting

## Useful Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Resources

- [Reown AppKit Documentation](https://docs.reown.com/appkit)
- [Wagmi Documentation](https://wagmi.sh)
- [Base Network Docs](https://docs.base.org)
- [Next.js Documentation](https://nextjs.org/docs)

## Support

If you encounter issues:
1. Check the console for error messages
2. Verify environment variables are set correctly
3. Ensure wallet is connected to the correct network
4. Check that contract address is valid

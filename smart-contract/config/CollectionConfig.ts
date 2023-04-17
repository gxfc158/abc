import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PiAPEClub',
  tokenName: 'Pi Ape Club',
  tokenSymbol: 'Pi NFT',
  hiddenMetadataUri: 'ipfs://bafybeidt4amrboa67gk5wqaewbeyrtdfpkyevjzhz3ltjei4sarp2z65ay/1.json',
  maxSupply: 5000,
  whitelistSale: {
    price: 0.1,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.3,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.5,
    maxMintAmountPerTx: 5000,
  },
  contractAddress:'0xDd782323bF8ef538A317F1bC0Af88687AB37656D',
  marketplaceIdentifier:'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;

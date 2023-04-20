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
  contractName: 'TrumpDigital',
  tokenName: 'Trump Digital Trading Cards Series.2',
  tokenSymbol: 'Trump',
  hiddenMetadataUri: 'ipfs://bafybeibxcoboxlwngcscrf2l3xpku2nd5pdxtkb2hfb2xp2ionkxlxumx4/1.json',
  maxSupply: 47000,
  whitelistSale: {
    price: 0.1,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.3,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 2,
    maxMintAmountPerTx: 5000,
  },
  contractAddress:'0x9b5E48d85632c8606c16f3A74f09DD45fF71916D',
  marketplaceIdentifier:'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;

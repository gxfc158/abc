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
  contractName: 'PiDAOClub1',
  tokenName: 'Pi DAO Club',
  tokenSymbol: 'Pi NFT',
  hiddenMetadataUri: 'ipfs://Qme4cZU1QZsLgvqhZhyoB19Z7zJydBKrTp9tNSGatf3Lwc/1.json',
  maxSupply: 8888,
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
    maxMintAmountPerTx: 1000,
  },
  contractAddress:'0xd14dBa13A56Ba0bB454BF256E7207f8e0B2376E6',
  marketplaceIdentifier:'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;

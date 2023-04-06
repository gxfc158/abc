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
  contractName: 'PiCoreNFT',
  tokenName: 'Pi Core NFT',
  tokenSymbol: 'PiNFT',
  hiddenMetadataUri: 'https://3dnft.s3.filebase.com/PunkJson/1.json',
  maxSupply: 9999,
  whitelistSale: {
    price: 0.1,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.3,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.2,
    maxMintAmountPerTx: 500,
  },
  contractAddress: '0xdE470d86e69e8Ef5715B12c860f7f49863a7c4A7',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;

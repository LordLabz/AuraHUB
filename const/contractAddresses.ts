/** Replace the values below with the addresses of your smart contracts. */
import { ChainId } from "@thirdweb-dev/sdk";
// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
//import { Mumbai } from "@thirdweb-dev/chains";
//export const NETWORK = Mumbai;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x6604bd9D7770035f26B4ACeab2C746fdCE166473";
export const NETWORK_ID = ChainId.Mainnet;

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "";
export const NFT_DROP_ADDRESS = "0xAe4DdA8528D2976898E6E7E469FFEc2981fd6F82";
export const KATNIP_NFT_ADDRESS = "0x767DFb1e584b426916D78C19a27f179B7bA35c9B";
export const KATNIP_ADDRESS = "0x88cCC5cdE30a98804a5b8002Bff55367DDd5b30D";
export const KATNIP_STAKING_VAULT = "0xaA5c665A9abcb780aF18627DB3cF835fFCA1dbe9";
export const STAKING_CONTRACT_ADDRESS = "0xB143aBd4c4417c3c937201aDB8d43398F15eD5f1";
export const ZOE_TOKEN_ADDRESS = "0xE166c801A0cCb838ACeFFCdd9F4C813574A8E6A4";
export const ZOE_ERC1155_ADDRESS = "0xbD6ED32a4DDbc03aCc4ad1F988A92b7804fded46";
export const ZOE_EDITION_STAKING_ADDRESS = "0xe65301C3D4a66E5683eA4a9Cc12345D20174aD21";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://etherscan.io";
export const NFT_COLLECTION_ABI = []
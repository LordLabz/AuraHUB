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
  "0xc875CE0c715EeBE8795037d6fE06a2802d6cEbE1";
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
export const NFT_COLLECTION_ABI = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_symbol",
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "_royaltyRecipient",
        "internalType": "address"
      },
      {
        "type": "uint128",
        "name": "_royaltyBps",
        "internalType": "uint128"
      },
      {
        "type": "address",
        "name": "_primarySaleRecipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "error",
    "name": "ApprovalCallerNotOwnerNorApproved",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ApprovalQueryForNonexistentToken",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ApprovalToCurrentOwner",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ApproveToCaller",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "BalanceQueryForZeroAddress",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "MintToZeroAddress",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "MintZeroQuantity",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "OwnerQueryForNonexistentToken",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "TransferCallerNotOwnerNorApproved",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "TransferFromIncorrectOwner",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "TransferToNonERC721ReceiverImplementer",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "TransferToZeroAddress",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "URIQueryForNonexistentToken",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "approved",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "approved",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ClaimConditionUpdated",
    "inputs": [
      {
        "type": "tuple",
        "name": "condition",
        "components": [
          {
            "type": "uint256",
            "name": "startTimestamp",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "maxClaimableSupply",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "supplyClaimed",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "quantityLimitPerWallet",
            "internalType": "uint256"
          },
          {
            "type": "bytes32",
            "name": "merkleRoot",
            "internalType": "bytes32"
          },
          {
            "type": "uint256",
            "name": "pricePerToken",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "currency",
            "internalType": "address"
          },
          {
            "type": "string",
            "name": "metadata",
            "internalType": "string"
          }
        ],
        "indexed": false,
        "internalType": "struct IClaimCondition.ClaimCondition"
      },
      {
        "type": "bool",
        "name": "resetEligibility",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ContractURIUpdated",
    "inputs": [
      {
        "type": "string",
        "name": "prevURI",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "newURI",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DefaultRoyalty",
    "inputs": [
      {
        "type": "address",
        "name": "newRoyaltyRecipient",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "newRoyaltyBps",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnerUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "prevOwner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PrimarySaleRecipientUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RoyaltyForToken",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "royaltyRecipient",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "royaltyBps",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokenURIRevealed",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "revealedURI",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensClaimed",
    "inputs": [
      {
        "type": "address",
        "name": "claimer",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "receiver",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "startTokenId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "quantityClaimed",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensLazyMinted",
    "inputs": [
      {
        "type": "uint256",
        "name": "startTokenId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "endTokenId",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "baseURI",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "bytes",
        "name": "encryptedBaseURI",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "approve",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "burn",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claim",
    "inputs": [
      {
        "type": "address",
        "name": "_receiver",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_quantity",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_currency",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_pricePerToken",
        "internalType": "uint256"
      },
      {
        "type": "tuple",
        "name": "_allowlistProof",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof",
            "internalType": "bytes32[]"
          },
          {
            "type": "uint256",
            "name": "quantityLimitPerWallet",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "pricePerToken",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "currency",
            "internalType": "address"
          }
        ],
        "internalType": "struct IDropSinglePhase.AllowlistProof"
      },
      {
        "type": "bytes",
        "name": "_data",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "claimCondition",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "startTimestamp",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "maxClaimableSupply",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "supplyClaimed",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "quantityLimitPerWallet",
        "internalType": "uint256"
      },
      {
        "type": "bytes32",
        "name": "merkleRoot",
        "internalType": "bytes32"
      },
      {
        "type": "uint256",
        "name": "pricePerToken",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "currency",
        "internalType": "address"
      },
      {
        "type": "string",
        "name": "metadata",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "contractURI",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "encryptDecrypt",
    "inputs": [
      {
        "type": "bytes",
        "name": "data",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "key",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "result",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "encryptedData",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getApproved",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBaseURICount",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBatchIdAtIndex",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDefaultRoyaltyInfo",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "uint16",
        "name": "",
        "internalType": "uint16"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRevealURI",
    "inputs": [
      {
        "type": "uint256",
        "name": "_batchId",
        "internalType": "uint256"
      },
      {
        "type": "bytes",
        "name": "_key",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "revealedURI",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRoyaltyInfoForToken",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "uint16",
        "name": "",
        "internalType": "uint16"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSupplyClaimedByWallet",
    "inputs": [
      {
        "type": "address",
        "name": "_claimer",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isApprovedForAll",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "operator",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isEncryptedBatch",
    "inputs": [
      {
        "type": "uint256",
        "name": "_batchId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "lazyMint",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "_baseURIForTokens",
        "internalType": "string"
      },
      {
        "type": "bytes",
        "name": "_data",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "batchId",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "multicall",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data",
        "internalType": "bytes[]"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "results",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nextTokenIdToClaim",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nextTokenIdToMint",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ownerOf",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "primarySaleRecipient",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "reveal",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index",
        "internalType": "uint256"
      },
      {
        "type": "bytes",
        "name": "_key",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "revealedURI",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "royaltyInfo",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "salePrice",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "receiver",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "royaltyAmount",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "safeTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "safeTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      },
      {
        "type": "bytes",
        "name": "_data",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "approved",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setClaimConditions",
    "inputs": [
      {
        "type": "tuple",
        "name": "_condition",
        "components": [
          {
            "type": "uint256",
            "name": "startTimestamp",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "maxClaimableSupply",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "supplyClaimed",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "quantityLimitPerWallet",
            "internalType": "uint256"
          },
          {
            "type": "bytes32",
            "name": "merkleRoot",
            "internalType": "bytes32"
          },
          {
            "type": "uint256",
            "name": "pricePerToken",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "currency",
            "internalType": "address"
          },
          {
            "type": "string",
            "name": "metadata",
            "internalType": "string"
          }
        ],
        "internalType": "struct IClaimCondition.ClaimCondition"
      },
      {
        "type": "bool",
        "name": "_resetClaimEligibility",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setContractURI",
    "inputs": [
      {
        "type": "string",
        "name": "_uri",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setDefaultRoyaltyInfo",
    "inputs": [
      {
        "type": "address",
        "name": "_royaltyRecipient",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_royaltyBps",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setOwner",
    "inputs": [
      {
        "type": "address",
        "name": "_newOwner",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPrimarySaleRecipient",
    "inputs": [
      {
        "type": "address",
        "name": "_saleRecipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setRoyaltyInfoForToken",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_bps",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supportsInterface",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "teamMint",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "teamMinted",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenURI",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalSupply",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "verifyClaim",
    "inputs": [
      {
        "type": "address",
        "name": "_claimer",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_quantity",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_currency",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_pricePerToken",
        "internalType": "uint256"
      },
      {
        "type": "tuple",
        "name": "_allowlistProof",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof",
            "internalType": "bytes32[]"
          },
          {
            "type": "uint256",
            "name": "quantityLimitPerWallet",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "pricePerToken",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "currency",
            "internalType": "address"
          }
        ],
        "internalType": "struct IDropSinglePhase.AllowlistProof"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isOverride",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  }
]

const contractInfo = {
	NFT: {
		address: "0xD68aCd89774829dFbdCC82A9Aa92a946c061Ad38",
		abi: [
			{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
			},
			{
			"anonymous": false,
			"inputs": [
				{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
				},
				{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
				},
				{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
			},
			{
			"anonymous": false,
			"inputs": [
				{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
				},
				{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
				},
				{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
				}
			],
			"name": "ApprovalForAll",
			"type": "event"
			},
			{
			"anonymous": false,
			"inputs": [
				{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
				},
				{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
			},
			{
			"anonymous": false,
			"inputs": [
				{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
				},
				{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
				},
				{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
			},
			{
			"inputs": [],
			"name": "MAX_PER_MINT",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "MAX_TOKENS",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "address",
				"name": "to",
				"type": "address"
				},
				{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "address",
				"name": "owner",
				"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "baseURI",
			"outputs": [
				{
				"internalType": "string",
				"name": "",
				"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
				}
			],
			"name": "getApproved",
			"outputs": [
				{
				"internalType": "address",
				"name": "",
				"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "address",
				"name": "owner",
				"type": "address"
				},
				{
				"internalType": "address",
				"name": "operator",
				"type": "address"
				}
			],
			"name": "isApprovedForAll",
			"outputs": [
				{
				"internalType": "bool",
				"name": "",
				"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "bytes32[]",
				"name": "merkleProof",
				"type": "bytes32[]"
				}
			],
			"name": "isInWhitelist",
			"outputs": [
				{
				"internalType": "bool",
				"name": "",
				"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "isRevealed",
			"outputs": [
				{
				"internalType": "bool",
				"name": "",
				"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "maxBatchSize",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "merkleRoot",
			"outputs": [
				{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
				},
				{
				"internalType": "bytes32[]",
				"name": "merkleProof",
				"type": "bytes32[]"
				}
			],
			"name": "mintPresale",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
				"internalType": "string",
				"name": "",
				"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "nextOwnerToExplicitlySet",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
				"internalType": "address",
				"name": "",
				"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
				}
			],
			"name": "ownerOf",
			"outputs": [
				{
				"internalType": "address",
				"name": "",
				"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "percentW1",
			"outputs": [
				{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "percentW2",
			"outputs": [
				{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "percentW3",
			"outputs": [
				{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "presaleMaxPerWallet",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "presaleStarted",
			"outputs": [
				{
				"internalType": "bool",
				"name": "",
				"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "price",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "publicSaleStarted",
			"outputs": [
				{
				"internalType": "bool",
				"name": "",
				"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
				},
				{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
				}
			],
			"name": "reserve",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "reserveAmount",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "address",
				"name": "from",
				"type": "address"
				},
				{
				"internalType": "address",
				"name": "to",
				"type": "address"
				},
				{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "address",
				"name": "from",
				"type": "address"
				},
				{
				"internalType": "address",
				"name": "to",
				"type": "address"
				},
				{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
				},
				{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "address",
				"name": "operator",
				"type": "address"
				},
				{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
				}
			],
			"name": "setApprovalForAll",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
				}
			],
			"name": "setBaseURI",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "bytes32",
				"name": "_merkleRoot",
				"type": "bytes32"
				}
			],
			"name": "setMerkleRoot",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "uint256",
				"name": "_newPresaleMaxPerWallet",
				"type": "uint256"
				}
			],
			"name": "setPresaleMaxPerWallet",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "uint256",
				"name": "_newPrice",
				"type": "uint256"
				}
			],
			"name": "setPrice",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
				}
			],
			"name": "setReserveAmount",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
				}
			],
			"name": "supportsInterface",
			"outputs": [
				{
				"internalType": "bool",
				"name": "",
				"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
				"internalType": "string",
				"name": "",
				"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "togglePresaleStarted",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "togglePublicSaleStarted",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "toggleReveal",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
				}
			],
			"name": "tokenByIndex",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"name": "tokenIdTime",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "address",
				"name": "owner",
				"type": "address"
				},
				{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
				}
			],
			"name": "tokenOfOwnerByIndex",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
				}
			],
			"name": "tokenURI",
			"outputs": [
				{
				"internalType": "string",
				"name": "",
				"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "tokensReserved",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "address",
				"name": "from",
				"type": "address"
				},
				{
				"internalType": "address",
				"name": "to",
				"type": "address"
				},
				{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [
				{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "w1",
			"outputs": [
				{
				"internalType": "address",
				"name": "",
				"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "w2",
			"outputs": [
				{
				"internalType": "address",
				"name": "",
				"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "w3",
			"outputs": [
				{
				"internalType": "address",
				"name": "",
				"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
			},
			{
			"inputs": [],
			"name": "withdrawAll",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
			}
		]
	},
	Staking: {
		address: "0x08264b53F18a6BD963283Bf60b45227582535d91",
		abi: [
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "_NFT",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "_token",
				  "type": "address"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "previousOwner",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "newOwner",
				  "type": "address"
				}
			  ],
			  "name": "OwnershipTransferred",
			  "type": "event"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "tokenID",
				  "type": "uint256"
				}
			  ],
			  "name": "Deposit",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "DepositAll",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "LOCK_TIME",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "NFT",
			  "outputs": [
				{
				  "internalType": "contract IERC721Enumerable",
				  "name": "",
				  "type": "address"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "REWARD_AMOUNT",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "TotalShares",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "WithdrawAll",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "WithdrawDividents",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "tokenId",
				  "type": "uint256"
				}
			  ],
			  "name": "WithdrawNFT",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "recipient",
				  "type": "address"
				}
			  ],
			  "name": "getDividents",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "dividents",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "_addr",
				  "type": "address"
				}
			  ],
			  "name": "getLengthOfStakedNFTs",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "_addr",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "id",
				  "type": "uint256"
				}
			  ],
			  "name": "getStakedNFTByIndex",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "owner",
			  "outputs": [
				{
				  "internalType": "address",
				  "name": "",
				  "type": "address"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "renounceOwnership",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_locktime",
				  "type": "uint256"
				}
			  ],
			  "name": "setLockTime",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "_NFT",
				  "type": "address"
				}
			  ],
			  "name": "setNFTAddress",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "_token",
				  "type": "address"
				}
			  ],
			  "name": "setTokenAddress",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "token",
			  "outputs": [
				{
				  "internalType": "contract IBEP20",
				  "name": "",
				  "type": "address"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "newOwner",
				  "type": "address"
				}
			  ],
			  "name": "transferOwnership",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			}
		]
	}
}

export default contractInfo
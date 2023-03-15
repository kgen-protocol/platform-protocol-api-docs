---
sidebar_position: 2
---

# Shadow Wallet

The Shadow Wallet is a minimal, upgradeable on-chain wallet representation of a user for receiving and sending ERC20, ERC721, and ERC1155 tokens. This wallet is designed to offer a secure and seamless user experience while ensuring the possibility of extending its functionalities in the future.

```text
+--------------+     +--------------+       +-------------+
|   Deployer   |-----| Shadow Wallet|-------|    Owner    |
+--------------+     +--------------+       +-------------+
                          |  |
                          |  +-------------> ERC20 Tokens
                          |  +-------------> ERC721 Tokens
                          |  +-------------> ERC1155 Tokens
                          |
                          +-> Upgradability (EIP-897 DelegateProxy)
```

This chart illustrates the two primary actors, the Deployer and the Owner, interacting with the Shadow Wallet. The wallet supports receiving and transferring ERC20, ERC721, and ERC1155 tokens, and it is designed to be upgradeable using the EIP-897 DelegateProxy standard.

## Features

- **Upgradability**: The Shadow Wallet is designed to be upgradeable using the EIP-897 DelegateProxy standard, allowing for future functionality extensions.
- **Receive and Transfer**: The wallet supports receiving and transferring of ERC20, ERC721, and ERC1155 tokens.
- **Access Control**: The wallet is initially controlled by a deployer and can be handed over to the user (owner) for full control over its transfer functionalities.

## Actors

- **Deployer**: The entity that deploys the Shadow Wallet smart contract. Initially, the deployer has control over the wallet and its functionalities.
- **Owner**: An externally owned account (EOA) that will have full control over the wallet once the deployer grants access. The owner can execute all transfer functionalities.

## Functionality

### Initialization

The wallet is initialized with the deployer and owner addresses:

```solidity
function initialize(address _deployer, address _owner) public initializer
```

### Token Transfers

The wallet supports transferring ERC20, ERC721, and ERC1155 tokens:

- Transfer ERC20 tokens:

```solidity
function transferERC20Token(address _token, address _to, uint256 _amount) external onlyOwner isActive
```

- Transfer ERC721 tokens:

```solidity
function transferERC721Token(address _token, address _to, uint256 _tokenId) external onlyOwner isActive
```

- Transfer ERC1155 tokens:

```solidity
function transferERC1155Token(address _token, address _to, uint256 _id, uint256 _amount, bytes calldata _data) external onlyOwner isActive
```

### Native Token (Ether and Matic) Management

- Receive native tokens: The wallet can receive native tokens (Ether and Matic) through its `receive()` and `fallback()` functions.
- Withdraw native tokens: The owner can withdraw native tokens held by the wallet:

```solidity
function claimNativeToken() external onlyOwner nonReentrant()
```

## Future Improvements

In future versions of the Shadow Wallet, support for meta-transactions will be implemented. Meta-transactions allow users to interact with smart contracts without having to hold Ether for gas fees, providing a more user-friendly experience.

## Summary

The Shadow Wallet offers a secure and upgradeable on-chain wallet solution for users to interact with ERC20, ERC721, and ERC1155 tokens. With built-in access control and the capability to extend its functionalities in the future, the wallet is well-suited for developers and product owners looking for a flexible and scalable wallet solution.

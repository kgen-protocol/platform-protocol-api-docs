---
sidebar_position: 1
---

# Seamless Web2 and Web3 Onboarding with Shadow Wallet

The Shadow Wallet provides a powerful solution for seamless user onboarding and asset attribution in web3 applications such as games. By creating an on-chain representation for each user, it enables a smooth transition from web2 to web3 experiences without any upfront technical barriers. This document provides an overview of the concept and implementation details for developers and product owners interested in integrating this functionality into their applications.

```text
+----------------+      +----------------+      +----------------+
|   User Signup  |----->| Shadow Wallet  |<-----| User Achievements|
+----------------+      +----------------+      +----------------+
          |                    |  |                   |
          |                    |  +---> Tokens        |
          |                    |  +---> NFTs (ERC721) |
          |                    |  +---> ERC1155 Assets|
          |                    |
          +-------> Wallet Connection
                               |
                               V
                     +----------------+
                     | Connected Wallet|
                     +----------------+
```

This chart illustrates the seamless onboarding and asset attribution process. When a user signs up, a Shadow Wallet is created as their on-chain representation. As the user achieves milestones in the application, web3 assets (tokens, NFTs, and ERC1155 assets) are attributed to their Shadow Wallet. When the user connects their wallet, the attributed assets are transferred from the Shadow Wallet to the user's connected wallet, granting them full control and access to their web3 assets.

## Concept

The primary goal of this approach is to offer users a seamless web2 experience while attributing web3 assets, such as tokens or NFTs, to their achievements in games or other applications. Users are not required to connect their wallets initially, allowing them to enjoy a familiar web2-like experience. Once users decide to take full control of their assets, they can connect their wallets and gain full access to their attributed web3 assets.

## Benefits

- **Ease of Adoption**: Lowering the entry barriers to the web3 ecosystem by providing a familiar web2-like experience.
- **User-Friendly**: Users can enjoy the application without any upfront technical requirements or wallet management.
- **Web3 Attribution**: Users receive web3-based rewards and assets for their achievements in the application, even before connecting their wallets.
- **Seamless Transition**: Users can easily transition from web2 to web3 experiences by connecting their wallets when they are ready.

## Implementation

The Shadow Wallet serves as the foundation for this seamless onboarding and asset attribution process. The following steps outline the implementation process:

1. **User Onboarding**: When a new user joins the platform, create a Shadow Wallet as their on-chain representation.
2. **Asset Attribution**: As users achieve milestones or complete tasks in the application, attribute web3 assets (tokens, NFTs, etc.) to their respective Shadow Wallets.
3. **Wallet Connection**: When users decide to take full control of their assets, allow them to connect their wallets.
4. **Asset Transfer**: Transfer the assets from the user's Shadow Wallet to their connected wallet, granting them full access and control over their web3 assets.

## Integration

Integrating this seamless onboarding process into an application involves the following components:

- **Backend**: Manage user accounts, create Shadow Wallets upon user registration, and handle web3 asset attribution.
- **Smart Contracts**: Deploy and manage the Shadow Wallet smart contracts on the blockchain.
- **Frontend**: Provide a user interface for connecting wallets and transferring assets from the Shadow Wallet to the user's connected wallet.

## Future Considerations

While the current implementation of the Shadow Wallet does not support meta-transactions, they can be added in future releases. Meta-transactions enable users to interact with smart contracts without having to hold Ether for gas fees, further improving the user experience and encouraging mainstream adoption of web3 applications.

## Summary

The Shadow Wallet offers a seamless solution for bridging the gap between web2 and web3 experiences in applications like games. By creating on-chain representations for users, it enables asset attribution without any upfront technical barriers, enhancing user adoption and retention. This approach provides a flexible and scalable solution for developers and product owners looking to integrate web3 capabilities while maintaining a user-friendly web2 experience.

---
sidebar_position: 3
---

# Platform Onboarding API

The IndiGG Platform Onboarding API is a comprehensive solution for managing user onboarding and creating Shadow Wallets for users. This technical documentation is aimed at developers who intend to integrate with the API and product owners who want to understand the high-level capabilities of the service.

```text
+------------------+         +--------------------+        +---------------------+
|   User Onboarding| ------> | Shadow Wallet      | -----> | Custodian EOA Wallet|
|  (Identity token |         | (by user ID or     |        |                     |
|   or phone no.)  |         |  public wallet)    |        |                     |
+------------------+         +--------------------+        +---------------------+
```

This ASCII chart represents the flow of user onboarding (using identity token or phone number), followed by the creation of a Shadow Wallet (either by user ID or public wallet), and finally, the creation of a Custodian EOA Wallet.

## Introduction

The Onboarding API provides a seamless experience for users by allowing them to be onboarded either by their identity token or phone number. Additionally, the API manages the creation and management of Shadow Wallets and custodian EOAs.

In this document, we will cover the endpoints for onboarding users and creating Shadow Wallets. The funding and web3Auth-related API endpoints are excluded from this documentation.

### Onboarding by Phone Number

- **Endpoint**: `/api/v1/onboarding/_by_phone_number`
- **Method**: `POST`

This endpoint allows users to be onboarded by providing their phone number. The request payload should include the phone number in the `phone_number` field.

Request payload example:

```json
{
  "phone_number": "+919843576966"
}
```

Response payload:

Upon successful onboarding, the response payload will include the `userId` and `idToken`.

```json
{
  "userId": "83ebaba5-73f5-4663-87b0-8c0b5c9a1dbe",
  "idToken": "example_id_token",
  "accessToken": "example_access_token",
  "refreshToken": "example_refresh_token"
}
```

### Creating Custodian EOA Wallet

- **Endpoint**: `/api/v1/wallets/custodian_eoa`
- **Method**: `POST`

This endpoint creates a custodian Externally Owned Account (EOA) for a user. The request payload should include the `userId`.

Request payload example:

```json
{
  "userId": "83ebaba5-73f5-4663-87b0-8c0b5c9a1dbe"
}
```

Response payload:

Upon successful creation of the custodian EOA, the response payload will include the wallet address.

```json
{
  "address": "0xED363B4d2829a480001171e14C06B76B1fd40D5a"
}
```

### Creating Shadow Wallet by User ID

- **Endpoint**: `/api/v1/wallets/shadow_wallet/_by_user_id`
- **Method**: `POST`

This endpoint creates a Shadow Wallet for a user with a custodian EOA. The request payload should include the `userId`.

Request payload example:

```json
{
  "userId": "83ebaba5-73f5-4663-87b0-8c0b5c9a1dbe"
}
```

Response payload:

Upon successful creation of the Shadow Wallet, the response payload will include the wallet `address`.

```json
{
  "address": "0x1234567890abcdef1234567890abcdef12345678"
}
```

### Creating Shadow Wallet by Public Wallet

- **Endpoint**: `/api/v1/wallets/shadow_wallet/_by_public_wallet`
- **Method**: `POST`

This endpoint creates a Shadow Wallet for a public wallet. The request payload should include the `address`.

Request payload example:

```json
{
  "address": "0x1234567890abcdef1234567890abcdef12345678"
}
```

## Summary

The IndiGG Platform Onboarding API enables developers to onboard users by their identity token or phone number and provides functionality for creating and managing Shadow Wallets and custodian EOAs. With the exclusion of funding and web3Auth-related API endpoints, the technical documentation covers the primary onboarding and wallet management capabilities of the service, catering to the needs of both developers and product owners.

By integrating with the IndiGG Platform Onboarding API, developers can offer a seamless web2 experience while providing web3 attribution for user achievements in games.

## How to access

In order to access the IndiGG Platform Onboarding API, please note that it is exclusively available to our partners through an invitation-only process. To request access to this API, you must first contact our team to express your interest in becoming a partner. Our team will then evaluate your application and, upon approval, provide you with the necessary API keys and documentation for seamless integration. To get in touch with our team, please reach out to us at support@indi.gg, and we will be more than happy to assist you in exploring the partnership opportunities and utilizing the API.

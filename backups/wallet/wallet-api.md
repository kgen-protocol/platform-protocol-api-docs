---
sidebar_position: 4
---

# Wallet API Middleware

This document outlines the API middleware endpoints for the wallet service.

```text
+-----------------------+               +-----------------------+                 +-----------------------+
|   Client Application  |               | Wallet API Middleware |                 |    Web3Auth Wallet    |
+-----------------------+               +-----------------------+                 +-----------------------+
        |                                    |                                    |
        |   /api/v1/wallet/_by_phone_number  |                                    |
        |----------------------------------->|                                    |
        |                                    |                                    |
        |         Non-custodian EOA          |                                    |
        |<-----------------------------------|                                    |
        |                                    |                                    |
        |   /api/v1/wallet/_approve          |                                    |
        |----------------------------------->|                                    |
        |                                    |   Approve USDT using Web3Auth      |
        |                                    |<-----------------------------------|
        |                                    |                                    |
        |   /api/v1/wallet/_transfer         |                                    |
        |----------------------------------->|                                    |
        |                                    |   Transfer USDT using Web3Auth     |
        |                                    |<-----------------------------------|
        |                                    |                                    |
        |   /api/v1/wallet/_checkAllowance   |                                    |
        |----------------------------------->|                                    |
        |                                    |  Fetch Token Allowance Balances    |
        |                                    |<-----------------------------------|
        |                                    |                                    |
        |   /api/v1/wallet/_gasFee           |                                    |
        |----------------------------------->|                                    |
        |                                    | Calculate Transfer Gas Fee         |
        |                                    |<-----------------------------------|
        |                                    |                                    |
        |   /api/v1/wallet/_balances         |                                    |
        |----------------------------------->|                                    |
        |                                    |    Fetch Wallet Balances           |
        |                                    |<-----------------------------------|
        |                                    |                                    |
        |   /api/v1/wallet/_transaction      |                                    |
        |----------------------------------->|                                    |
        |                                    |    Fetch Transaction Status        |
        |                                    |<-----------------------------------|
        |                                    |                                    |
        |   /api/v1/wallet/_nfts             |                                    |
        |----------------------------------->|                                    |
        |                                    |    Fetch Wallet NFTs               |
        |                                    |<-----------------------------------|
        |                                    |                                    |
        |   /api/v1/wallet/_transactions     |                                    |
        |----------------------------------->|                                    |
        |                                    |     Fetch Transactions Data        |
        |                                    |<-----------------------------------|
        |                                    |                                    |
```

## POST

### /api/v1/wallet/\_by_phone_number

Get a non-custodian EOA for a user, based on a phone number.

### Parameters

1. apiKey \*: string (query) - the auth apiKey token
2. Request body: application/json

   - Example Value:

   ```json
   {
     "phone_number": "+919123456789",
     "source": "" // enum : ["app", "website" , default: "wallet-service"] : not required
   }
   ```

### Responses

- 201: The non-custodian EOA of the user

  - Media type: application/json
  - Example Value:

  ```json
  {
    "address": "string",
    "phone_number": "string",
    "created_at": 1687274277582
  }
  ```

## **Transactions**

## POST

### /api/v1/wallet/\_approve

Approves USDT using Web3Auth Wallet.

### Parameters

1. apiKey \*: string (query) - the auth apiKey token
2. Request body: application/json

   - Example Value:

   ```json
   {
     "jwt_token": "",
     "phone_number": "+919871882719"
   }
   ```

### Responses

- 201: The approve of USDT from Web3auth Wallet

  - Media type: application/json
  - Example Value:

  ```json
  {
    "code": 0,
    "flag": 0,
    "log": "string",
    "message": "string",
    "retryDuration": 0,
    "txHash": "string"
  }
  ```

## POST

### /api/v1/wallet/\_transfer

Transfers USDT using Web3Auth Wallet.

### Parameters

1. apiKey \*: string (query) - the auth apiKey token
2. Request body: application/json

   - Example Value:

   ```json
   {
     "jwt_token": "",
     "phone_number": "",
     "amount": 1000,
     "toAddress": ""
   }
   ```

### Responses

- 201: The Transfer of USDT from Web3auth Wallet

  - Media type: application/json
  - Example Value:

  ```json
  {
    "code": 0,
    "flag": 0,
    "log": "string",
    "message": "string",
    "retryDuration": 0,
    "txHash": "string"
  }
  ```

- 422: Transfer Failed

## GET

### /api/v1/wallet/\_checkAllowance

Fetches Token Allowance balances using Address.

### Parameters

1. apiKey \*: string (query) - the auth apiKey token
2. tokenAddress \*: string (query) - the token address
3. ownerAddress \*: string (query) - the owner address
4. spenderAddress \*: string (query) - the spender address

### Responses

- 200: Allowance balances response

  - Media type: application/json
  - Example Value:

  ```json
  {
    "isApproved": true,
    "allowance": "string"
  }
  ```

## POST

### /api/v1/wallet/\_gasFee

TransferUSDT using Web3Auth Wallet GasFee

### Parameters

1. apiKey \*: string (query) - the auth apiKey token
2. Request body: application/json

   - Example Value:

   ```json
   {
     "jwt_token": "",
     "userAddress": "",
     "toAddress": ""
   }
   ```

### Responses

- 201: The GasFee to Transfer of USDT from Web3auth Wallet

  - Media type: application/json
  - Example Value:

  ```json
  {
    "gasFee": 0
  }
  ```

- 422: Failed To Fetch

# Wallet Additional Endpoints

## GET

### /api/v1/wallet/\_balances

Fetch Wallet balances using Address

### Parameters

1. apiKey \*: string (query) - the auth apiKey token
2. address \*: string (query) - the user wallet address

### Responses

- 200: Wallet balances response

  - Media type: application/json
  - Example Value:

  ```json
  {
    "chainName": "string",
    "native": {
      "tokenName": "string",
      "tokenBalance": "string",
      "tokenSymbol": "string"
    },
    "balances": [
      {
        "tokenAddress": "string",
        "tokenName": "string",
        "tokenBalance": "string",
        "tokenSymbol": "string"
      }
    ]
  }
  ```

## GET

### /api/v1/wallet/\_transaction

Fetch transcation status using hash.

### Parameters

1. apiKey \*: string (query) - the auth apiKey token
2. hash \*: string (query) - the transaction hash

### Responses

- 200: Transaction hash status

  - Media type: application/json
  - Example Value:

  ```json
  {
    "status": "string"
  }
  ```

## GET

### /api/v1/wallet/\_nfts

Fetch wallet NFTs using address.

### Parameters

1. apiKey \*: string (query) - the auth apiKey token
2. address \*: string (query) - the user wallet address
3. pageKey: string (query) - pageKey

### Responses

- 200: Wallet NFTs response

  - Media type: application/json
  - Example Value:

  ```json
  {
    "ownedNfts": [
      {
        "contract": {
          "address": "string",
          "isSpam": true,
          "spamClassifications": ["string"]
        },
        "tokenId": "string",
        "tokenType": "string",
        "name": "string",
        "symbol": "string",
        "description": "string",
        "balance": "string",
        "nftUri": "string"
      }
    ],
    "totalCount": 0,
    "pageKey": "string",
    "chainName": "string",
    "chainSymbol": "string"
  }
  ```

## GET

### /api/v1/wallet/\_transactions

Fetch Transactions data

### Parameters

1. apiKey \*: string (query) - the auth apiKey token
2. walletAddress \*: string (query) - the Wallet Address
3. toWalletPageKey: string (query) - toWalletPageKey
4. fromWalletPageKey: string (query) - fromWalletPageKey
5. size: number (query) - size
6. category: array[string] (query) - contractAddresses

### Responses

- 200: Transactions Data
  - Media type: application/json
  - Example Value:

## Here's a summary of the API endpoints :

### Wallet API Middleware Endpoints:

- **/api/v1/wallet/\_by_phone_number:** This endpoint retrieves a non-custodian EOA for a user based on their phone number.
- **/api/v1/wallet/\_approve:** This endpoint approves the transfer of USDT using Web3Auth Wallet.
- **/api/v1/wallet/\_transfer:** This endpoint transfers USDT using Web3Auth Wallet.
- **/api/v1/wallet/\_checkAllowance:** This endpoint fetches Token Allowance balances using the address.
- **/api/v1/wallet/\_gasFee:** This endpoint calculates the gas fee for transferring USDT using Web3Auth Wallet.

### Transactions:

- **/api/v1/wallet/\_approve:** This endpoint approves the transfer of USDT using Web3Auth Wallet.
- **/api/v1/wallet/\_transfer:** This endpoint transfers USDT using Web3Auth Wallet.
- **/api/v1/wallet/\_checkAllowance:** This endpoint fetches Token Allowance balances using the address.
- **/api/v1/wallet/\_gasFee:** This endpoint calculates the gas fee for transferring USDT using Web3Auth Wallet.

### Wallet Additional Endpoints:

- **/api/v1/wallet/\_balances:** This endpoint fetches the balances of a wallet using the address.
- **/api/v1/wallet/\_transaction:** This endpoint fetches the status of a transaction using its hash.
- **/api/v1/wallet/\_nfts:** This endpoint fetches the NFTs associated with a wallet using the address.
- **/api/v1/wallet/\_transactions:** This endpoint fetches transaction data.

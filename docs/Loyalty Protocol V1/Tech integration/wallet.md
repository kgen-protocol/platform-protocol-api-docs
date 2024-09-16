---
sidebar_position: 5
---

# Wallet Endpoints

To access and utilize their earned rewards, gamers can initiate a process where the rewards collected in their KGeN custodian wallet are transferred to their non-custodian wallet. This allows users to freely use or spend their rewards across various purposes. To initiate this process, the gamer must transition to an KGeN user, which involves setting up a non-custodian wallet through OTP validation. Below are the steps to follow for this withdrawal process

## Wallet Balance Retrieval
This endpoint retrieves the balance details from the user's wallet.

### Endpoint: GET `/fe/wallet/balance`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/fe/wallet/balance' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBSyIsImNsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImlhdCI6MTcwNzM3NTUwMCwiaXNzIjoiZDViMmU3NjAtMWI2Yy00Mjk2LWE4OWYtMWRhMGZmZThjNDE0IiwiZXhwIjoxNzA3NDYxOTAwLCJ1c2VyX2lkIjoiQUsiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfbmFtZSI6Ikx1ZG8iLCJuYW1lc3BhY2VkX3RoaXJkX3BhcnR5X3VzZXJfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTRfX19BSyIsIndhbGxldF9hZGRyZXNzIjoiMHg0ZWNDMTNlRkMyZEU2NjI5NjEzNTUyNjY0NjNDNjExNjEyZjRiRTA3IiwiaXNfbmV3X3VzZXIiOmZhbHNlfQ.miqUD-oaY2os1Lnffr9Mykk4H9FEUHUDQTeqTtkZG_g'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Response
Response Status Code:
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

Example response:
```json
  {
    "wallet_address": "0x4ecc13efc2de662961355266463c611612f4be07",
    "earned_balance": 40,
    "bought_balance": 0,
    "bonus_balance": 0,
    "lazy_balance": 40,
    "on_chain_balance": 40,
    "wallet_transaction_error": false,
    "lazy_balance_delta": 0,
    "is_lazy_balance_updated": true,
    "created_at": "2024-02-08T12:30:56.599657",
    "modified_at": "2024-02-08T17:58:43.732507",
    "minWalletBalToWithdraw": 300
  }
```
Explanation:
- `wallet_address` (string): The wallet address associated with the user.
- `earned_balance` (number): The earned balance in the wallet.
- `bought_balance` (number): The bought balance in the wallet.
- `bonus_balance` (number): The bonus balance in the wallet.
- `lazy_balance` (number): The lazy balance in the wallet.
- `on_chain_balance` (number): The total balance on the blockchain.
- `wallet_transaction_error` (boolean): Indicates if there was any error during wallet transactions.
- `lazy_balance_delta` (number): The change in lazy balance.
- `is_lazy_balance_updated` (boolean): Indicates if the lazy balance was updated.
- `created_at` (string): The timestamp when the wallet was created.
- `modified_at` (string): The timestamp when the wallet was last modified.
- `minWalletBalToWithdraw` (number): The minimum wallet balance required for withdrawal.

## Wallet Transactions List
This endpoint retrieves a list of transactions associated with the user's wallet.

### Endpoint: GET `/fe/wallet/transactions`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/fe/wallet/transactions' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBSyIsImNsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImlhdCI6MTcwNzM3NTUwMCwiaXNzIjoiZDViMmU3NjAtMWI2Yy00Mjk2LWE4OWYtMWRhMGZmZThjNDE0IiwiZXhwIjoxNzA3NDYxOTAwLCJ1c2VyX2lkIjoiQUsiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfbmFtZSI6Ikx1ZG8iLCJuYW1lc3BhY2VkX3RoaXJkX3BhcnR5X3VzZXJfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTRfX19BSyIsIndhbGxldF9hZGRyZXNzIjoiMHg0ZWNDMTNlRkMyZEU2NjI5NjEzNTUyNjY0NjNDNjExNjEyZjRiRTA3IiwiaXNfbmV3X3VzZXIiOmZhbHNlfQ.miqUD-oaY2os1Lnffr9Mykk4H9FEUHUDQTeqTtkZG_g'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Response
Response Status Code:
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

Example response:
```json
{
  "fromTransactions": [
    {
      "uid": "b6c88b12-373e-4cc7-8fd4-2e083273e35e",
      "from_wallet": "0x7d*****f0a2",
      "to_wallet": "0x3c*****f040",
      "amount": 50,
      "sync_status": "COMPLETED",
      "description": { 
        "platformProtocolsTxnAmount": 50,
        "platformProtocolsTxnDescription": "Tournament fee deduct",
        "platformProtocolsTxnName": "Tournament fee deduct",
        "type": "JOIN",
        "platformProtocolsTxnType": "DEBIT"
      },
      "created_at": "2024-01-20T08:06:36.568965",
      ...
    }
  ],
  "toTransactions": [
    {
      "uid": "d7f88b13-374e-4cc7-8fd4-2e083273e36f",
      "from_wallet": "0x4d*****f1a3",
      "to_wallet": "0x3c*****f040",
      "amount": 75,
      "sync_status": "PENDING",
      "description": { 
        "platformProtocolsTxnAmount": 75,
        "platformProtocolsTxnDescription": "Tournament fee deduct",
        "platformProtocolsTxnName": "Tournament fee deduct",
        "type": "JOIN",
        "platformProtocolsTxnType": "DEBIT"
      },
      "created_at": "2024-01-22T09:15:20.568965",
      ...
    }
  ],
  "toTransactions": [
    {
      "uid": "5abeabc6-f6bb-448d-bd40-89c11d8dc2e0",
      "from_wallet": "0xb6*****75d6",
      "to_wallet": "0xce*****55ff",
      "amount": 50,
      "sync_status": "PENDING",
      "description": { 
        "platformProtocolsTxnAmount": 50,
        "platformProtocolsTxnDescription": "Tournament fee deduct",
        "platformProtocolsTxnName": "Tournament fee deduct",
        "type": "JOIN",
        "platformProtocolsTxnType": "DEBIT"
      },
      "created_at": "2024-08-19T21:57:48.694297+05:30",
      ...
    }
  ],
  "last_evaluated_key": ""
}
```
Explanation:
The response is a JSON object with `last_evaluated_key` for pagination and three key arrays: `fromTransactions`, `toTransactions` and `transactions`. Each array contains transaction objects detailing the history of transactions.

- `fromTransactions`: Transactions sent from the specified user.
- `toTransactions`: Transactions received by the specified user.
- `transactions`: Transactions by the specified user.

Each transaction object includes fields such as:
- `uid`: Unique identifier of the transaction.
- `from_wallet`: Sender's masked wallet address.
- `to_wallet`: Receiver's masked wallet address.
- `amount`: Amount of the transaction.
- `description`: An object which contains following feilds:
  - `platformProtocolsTxnAmount`: Amount of the transaction.
  - `platformProtocolsTxnDescription`: Description of the transaction.
  - `platformProtocolsTxnName`: Name of the transaction.
  - `type`: Purpose of the transaction.
  - `platformProtocolsTxnType`: Indicates the type of transaction, such as CREDIT or DEBIT.
- `sync_status`: Status of the transaction synchronization.
- Additional transaction details (timestamps, gas fees, block number, etc.).

## Wallet: Withdraw
This operation enables users to transfer funds from their custodian wallet to their non-custodian wallet, which has been created as part of the OTP (One-Time Password) verification process. The funds can then be utilized for various purposes, including spending on Kratos Store and more.

### Endpoint: POST `/fe/wallet/withdraw`

### cURL Example
```bash
curl --location --request POST 'https://stage-platform-protocols.kgen.io/fe/wallet/withdraw' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBSyIsImNsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImlhdCI6MTcwNzM3NTUwMCwiaXNzIjoiZDViMmU3NjAtMWI2Yy00Mjk2LWE4OWYtMWRhMGZmZThjNDE0IiwiZXhwIjoxNzA3NDYxOTAwLCJ1c2VyX2lkIjoiQUsiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfbmFtZSI6Ikx1ZG8iLCJuYW1lc3BhY2VkX3RoaXJkX3BhcnR5X3VzZXJfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTRfX19BSyIsIndhbGxldF9hZGRyZXNzIjoiMHg0ZWNDMTNlRkMyZEU2NjI5NjEzNTUyNjY0NjNDNjExNjEyZjRiRTA3IiwiaXNfbmV3X3VzZXIiOmZhbHNlfQ.miqUD-oaY2os1Lnffr9Mykk4H9FEUHUDQTeqTtkZG_g'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Response
Response Status Code:
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

Example response:
```json
{
  "msg": "wallet withdrawal successful"
}
```
The status code 200 indicates a successful withdrawal.
The message provides information about the withdrawal, including the gamer ID (gamer_id), the bonus amount withdrawn (bonus), and a confirmation message (message).






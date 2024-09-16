---
sidebar_position: 5
---

# Wallet Endpoints

The Wallet Endpoints enable users to manage their wallet transactions on the platform. They offer functionality for checking wallet balances, retrieving transaction history, and initiating withdrawals.

## Wallet Balance API

### Endpoint: GET `/fe/wallet/balance`
This endpoint is used to retrieve the balance details of a user's wallet, particularly in the context of a gaming platform or service that involves financial transactions or token exchanges.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Response Structure
The response is a JSON object containing various details about the wallet's balance and related attributes.

- `wallet_address`: The blockchain address of the wallet.
- `earned_balance`: The balance amount earned through gameplay or rewards.
- `bought_balance`: The balance amount that has been purchased or deposited into the wallet.
- `bonus_balance`: Any bonus amounts added to the wallet.
- `lazy_balance`: The current balance in the wallet that hasn't been committed to the chain.
- `on_chain_balance`: The balance that is recorded on the blockchain.
- `wallet_transaction_error`: A Boolean flag indicating if there was an error in the wallet transactions.
- `lazy_balance_delta`: The change in balance that hasn't been updated on the chain yet.
- `is_lazy_balance_updated`: A Boolean indicating whether the lazy balance has been updated.
- `created_at`: Timestamp for when the wallet record was created.
- `modified_at`: Timestamp for the last modification to the wallet record.
- `minWalletBalToWithdraw`: The minimum balance amount that is required to withdraw. 

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

##### Example Response
```json
{
    "wallet_address": "0x84b6f41fb37d0f7293c6cf405fcfb4b8c7a2c5b9",
    "earned_balance": 0,
    "bought_balance": 0,
    "bonus_balance": 50,
    "lazy_balance": 50,
    "on_chain_balance": 0,
    "wallet_transaction_error": false,
    "lazy_balance_delta": 50,
    "is_lazy_balance_updated": false,
    "created_at": "",
    "modified_at": "",
    "minWalletBalToWithdraw": 0
}
```

## Wallet Transaction History API

### Endpoint: GET `/fe/wallet/transactions`
This endpoint retrieves the transaction history of a specific user, providing a detailed view of all transactions associated with it.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Response Structure
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

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

##### Example Response
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
        "type": "JOIN"
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
        "type": "JOIN"
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
        "type": "JOIN"
        "platformProtocolsTxnType": "DEBIT"
      },
      "created_at": "2024-08-19T21:57:48.694297+05:30",
      ...
    }
  ],
  "last_evaluated_key": ""
}
```

## Wallet Withdrawal API

### Endpoint: POST `/fe/wallet/withdraw`
This endpoint facilitates the transfer of a user's earned balance from a custodial wallet to their KGeN wallet. It is designed to handle transactions within the platform without requiring additional information from the user in the request body.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Response Structure
Upon successful completion of the withdrawal process, the server responds with a JSON object containing:

- `msg`: A confirmation message, usually indicating successful withdrawal.

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

##### Example Response
```json
{
  "msg": "wallet withdrawl successful"
}
```

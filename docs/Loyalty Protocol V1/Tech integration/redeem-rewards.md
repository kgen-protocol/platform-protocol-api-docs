---
sidebar_position: 3
---

# Redeem Rewards

To access and utilize their earned rewards, gamers can initiate a process where the rewards collected in their KGeN custodian wallet are transferred to their non-custodian wallet. This allows users to freely use or spend their rewards across various purposes. To initiate this process, the gamer must transition to an KGeN user, which involves setting up a non-custodian wallet through OTP validation. Below are the steps to follow for this withdrawal process

## Auth: OTP Registration

This operation focuses on registering a user for authentication purposes using a one-time password (OTP). Below are the details outlining the implementation of this user registration process.
```text
POST - {{rewards_system_url}}/api/proxy/auth/otp/register
```
### cURL Example
```text
curl --location 'https://stage-platform-rewards.devKGeN.com/api/proxy/auth/otp/register' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZmtoZWlraHdpaGV3aWhlZml3YWFhYWEiLCJjbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJpYXQiOjE3MDA0NjY2MzQsImlzcyI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImV4cCI6MTcwMDU1MzAzNCwidXNlcl9pZCI6ImVma2hlaWtod2loZXdpaGVmaXdhYWFhYSIsInRoaXJkX3BhcnR5X2NsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsIm5hbWVzcGFjZWRfdGhpcmRfcGFydHlfdXNlcl9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNF9fX2Vma2hlaWtod2loZXdpaGVmaXdhYWFhYSIsIndhbGxldF9hZGRyZXNzIjoiMHg3ODg5RmRGNTQ4RkMxNzEzYzYxMUZCNTJlQTY0QUNDYmZmMWIwMzIyIn0.PeCYQvVPuzjMgJ4NFqpqvtnHHKBWIZFbKIEkSnmgnjw' \
--header 'Content-Type: application/json' \
--data '{
    "phone_number": "9876543219",
    "countryCode": "+91"
}'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Request Body
Parameters:
- `phone_number`: The phone number to which the OTP will be sent for registration.
- `countryCode`: The country code for the phone number.
Example:
```text
  {
    "phone_number": "[GAMER_PHONE_NO.]",
    "countryCode": "+91"
  }
```
### Response
Example Response:
```text
  {
    "authCode": "2735",
    "isNewUser": true
  }
```
## Auth: OTP Resend
This operation is dedicated to resending the one-time password (OTP) to the user for authentication purposes. Below are the details outlining how to implement this OTP resending process.
```text
POST - {{rewards_system_url}}/api/proxy/auth/otp/resend
```
### cURL Example
```text
curl --location 'https://stage-platform-rewards.devKGeN.com/api/proxy/auth/otp/resend' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJxd2VydHkiLCJjbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJpYXQiOjE3MDcwNDE1OTIsImlzcyI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImV4cCI6MTcwNzEyNzk5MiwidXNlcl9pZCI6InF3ZXJ0eSIsInRoaXJkX3BhcnR5X2NsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsInRoaXJkX3BhcnR5X2NsaWVudF9uYW1lIjoiTHVkbyIsIm5hbWVzcGFjZWRfdGhpcmRfcGFydHlfdXNlcl9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNF9fX3F3ZXJ0eSIsIndhbGxldF9hZGRyZXNzIjoiMHg0QzU4NzQ5OThiRTM5OEJEN0VBMjliQmIyMUZGZjc1MDZhRGY2MzlEIiwiaXNfbmV3X3VzZXIiOnRydWV9.__jPqcFvnQxrH1wmf20yle1Ffj5hJHmIuSE-HiRG8eE' \
--header 'Content-Type: application/json' \
--data '{
    "phone_number": "8220024048",
    "countryCode": "+91"
}'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Request Body
Parameters:
- `phone_number`: The phone number to which the OTP will be sent for registration.
- `countryCode`: The country code for the phone number.
Example:
```text
  {
    "phone_number": "[GAMER_PHONE_NO.]",
    "countryCode": "+91"
  }

```
### Response
Example Response:
```text
  {
    "authCode": "2735",
    "isNewUser": true
  }
```
## Auth: OTP Verification
This operation is focused on verifying the one-time password (OTP) submitted by the user for authentication purposes. Below are the details for implementing this OTP verification proces.
```text
POST - {{rewards_system_url}}/api/proxy/auth/otp/verify
```
### cURL Example
```text
curl --location 'https://stage-platform-rewards.devKGeN.com/api/proxy/auth/otp/verify' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZmtoZWlraHdpaGV3aWhlZml3YWFhYWEiLCJjbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJpYXQiOjE3MDA0NjY2MzQsImlzcyI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImV4cCI6MTcwMDU1MzAzNCwidXNlcl9pZCI6ImVma2hlaWtod2loZXdpaGVmaXdhYWFhYSIsInRoaXJkX3BhcnR5X2NsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsIm5hbWVzcGFjZWRfdGhpcmRfcGFydHlfdXNlcl9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNF9fX2Vma2hlaWtod2loZXdpaGVmaXdhYWFhYSIsIndhbGxldF9hZGRyZXNzIjoiMHg3ODg5RmRGNTQ4RkMxNzEzYzYxMUZCNTJlQTY0QUNDYmZmMWIwMzIyIn0.PeCYQvVPuzjMgJ4NFqpqvtnHHKBWIZFbKIEkSnmgnjw' \
--header 'Content-Type: application/json' \
--data '{
    "phone_number": "9876543219",
    "countryCode": "+91",
    "authCode": 5496,
    "otp": 964160
}'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Request Body
Parameters:
- `phone_number`: The phone number for which the OTP needs to be verified.
- `countryCode`: The country code for the phone number.
- `authCode`: The OTP sent for registration.
- `otp`: The one-time password submitted by the user.

Example:
```text
  {
    "phone_number": "90248xx921",
    "countryCode": "+91",
    "authCode": 2735,
    "otp": 596097
  }
```
### Response
```text
  {
    "message": "successfully verified OTP & identity-associated"
  }
```
Status : 201 Created

## Wallet Balance Retrieval
This endpoint retrieves the balance details from the user's wallet.
```text
GET {{rewards_system_url}}/api/wallet/balance
```

### cURL Example
```text
curl --location 'https://stage-platform-rewards.devKGeN.com/api/wallet/balance' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBSyIsImNsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImlhdCI6MTcwNzM3NTUwMCwiaXNzIjoiZDViMmU3NjAtMWI2Yy00Mjk2LWE4OWYtMWRhMGZmZThjNDE0IiwiZXhwIjoxNzA3NDYxOTAwLCJ1c2VyX2lkIjoiQUsiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfbmFtZSI6Ikx1ZG8iLCJuYW1lc3BhY2VkX3RoaXJkX3BhcnR5X3VzZXJfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTRfX19BSyIsIndhbGxldF9hZGRyZXNzIjoiMHg0ZWNDMTNlRkMyZEU2NjI5NjEzNTUyNjY0NjNDNjExNjEyZjRiRTA3IiwiaXNfbmV3X3VzZXIiOmZhbHNlfQ.miqUD-oaY2os1Lnffr9Mykk4H9FEUHUDQTeqTtkZG_g'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Response
Example response:
```text
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
```text
GET {{rewards_system_url}}/api/wallet/transactions/list
```

### cURL Example
```text
curl --location 'https://stage-platform-rewards.devKGeN.com/api/wallet/transactions/list' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBSyIsImNsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImlhdCI6MTcwNzM3NTUwMCwiaXNzIjoiZDViMmU3NjAtMWI2Yy00Mjk2LWE4OWYtMWRhMGZmZThjNDE0IiwiZXhwIjoxNzA3NDYxOTAwLCJ1c2VyX2lkIjoiQUsiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfbmFtZSI6Ikx1ZG8iLCJuYW1lc3BhY2VkX3RoaXJkX3BhcnR5X3VzZXJfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTRfX19BSyIsIndhbGxldF9hZGRyZXNzIjoiMHg0ZWNDMTNlRkMyZEU2NjI5NjEzNTUyNjY0NjNDNjExNjEyZjRiRTA3IiwiaXNfbmV3X3VzZXIiOmZhbHNlfQ.miqUD-oaY2os1Lnffr9Mykk4H9FEUHUDQTeqTtkZG_g'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Response
Example response:
```text
  {
    "transactions": [
        {
            "uid": "130474e4-0dd4-429b-afb3-e5dcffe02f52",
            "from_wallet": "0x746ff551e1c43baa0181bb8aee61a75260470516",
            "to_wallet": "0x4ecc13efc2de662961355266463c611612f4be07",
            "amount": 40,
            "sync_status": "COMPLETED",
            "requesting_system": "Loyalty",
            "gas_fee_payer": "SYSTEM",
            "webhook_url": "",
            "description": {
                "eventDescription": "TestEvtForWalletWithdraw updated",
                "eventID": "743e6976-1624-49a8-a44c-28a0e6be8078",
                "eventName": "Daily Chest Open - 2 ",
                "eventRewardCategory": "EARNED",
                "rewardAmount": 40,
                "rewardCreatedAt": "2024-02-08T07:00:53.024177411Z",
                "rewardID": "1189466b-205c-4842-8794-a02da8ae2f79"
            },
            "created_at": "2024-02-08T12:30:56.605356",
            "modified_at": "2024-02-08T17:58:34.742217"
        }
    ],
    "last_evaluated_key": ""
}
```
Explanation:
- `transactions` (array): An array containing details of each transaction.
- `uid` (string): The unique identifier for the transaction.
- `from_wallet` (string): The wallet address from which the amount was transferred.
- `to_wallet` (string): The wallet address to which the amount was transferred.
- `amount` (number): The amount transferred in the transaction.
- `sync_status` (string): The synchronization status of the transaction.
- `requesting_system` (string): The system that initiated the transaction.
- `gas_fee_payer` (string): The entity responsible for paying the gas fee.
- `webhook_url` (string): The webhook URL associated with the transaction.
- `description` (object): Additional description of the transaction.
  - `eventDescription` (string): Description of the event associated with the transaction.
  - `eventID` (string): The ID of the event associated with the transaction.
  - `eventName` (string): The name of the event associated with the transaction.
  - `eventRewardCategory` (string): The reward category of the event associated with the transaction.
  - `rewardAmount` (number): The amount of reward associated with the transaction.
  - `rewardCreatedAt` (string): The timestamp when the reward was created.
  - `rewardID` (string): The ID of the reward associated with the transaction.
- `created_at` (string): The timestamp when the transaction was created.
- `modified_at` (string): The timestamp when the transaction was last modified.
- `last_evaluated_key` (string): The last evaluated key for pagination, if applicable.


## Wallet: Withdraw
This operation enables users to transfer funds from their custodian wallet to their non-custodian wallet, which has been created as part of the OTP (One-Time Password) verification process. The funds can then be utilized for various purposes, including spending on Kstore and more.
```text
POST - {{rewards_system_url}}/api/wallet/withdraw
```
### cURL Example
```text
curl --location --request POST 'https://stage-platform-rewards.devKGeN.com/api/wallet/withdraw' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBSyIsImNsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImlhdCI6MTcwNzM3NTUwMCwiaXNzIjoiZDViMmU3NjAtMWI2Yy00Mjk2LWE4OWYtMWRhMGZmZThjNDE0IiwiZXhwIjoxNzA3NDYxOTAwLCJ1c2VyX2lkIjoiQUsiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJ0aGlyZF9wYXJ0eV9jbGllbnRfbmFtZSI6Ikx1ZG8iLCJuYW1lc3BhY2VkX3RoaXJkX3BhcnR5X3VzZXJfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTRfX19BSyIsIndhbGxldF9hZGRyZXNzIjoiMHg0ZWNDMTNlRkMyZEU2NjI5NjEzNTUyNjY0NjNDNjExNjEyZjRiRTA3IiwiaXNfbmV3X3VzZXIiOmZhbHNlfQ.miqUD-oaY2os1Lnffr9Mykk4H9FEUHUDQTeqTtkZG_g'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Response
Example response:
```text
  {
    "gamer_id": "20aa954e-52d5-4298-b44c-d84a64ddbb97",
    "bonus": 100,
    "message": "Withdrawn Successfully"
  }
```
The status code 200 indicates a successful withdrawal.
The message provides information about the withdrawal, including the gamer ID (gamer_id), the bonus amount withdrawn (bonus), and a confirmation message (message).






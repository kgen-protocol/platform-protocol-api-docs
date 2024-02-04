---
sidebar_position: 3
---

# Redeem Rewards

To access and utilize their earned rewards, gamers can initiate a process where the rewards collected in their Indigg custodian wallet are transferred to their non-custodian wallet. This allows users to freely use or spend their rewards across various purposes. To initiate this process, the gamer must transition to an Indigg user, which involves setting up a non-custodian wallet through OTP validation. Below are the steps to follow for this withdrawal process

## Auth: OTP Registration

This operation focuses on registering a user for authentication purposes using a one-time password (OTP). Below are the details outlining the implementation of this user registration process.
```text
POST - {{rewards_system_url}}/api/proxy/auth/otp/register
```
### cURL Example
```text
curl --location 'https://stage-platform-rewards.devindigg.com/api/proxy/auth/otp/register' \
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
curl --location 'https://stage-platform-rewards.devindigg.com/api/proxy/auth/otp/resend' \
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
curl --location 'https://stage-platform-rewards.devindigg.com/api/proxy/auth/otp/verify' \
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

## Wallet: Withdraw
This operation enables users to transfer funds from their custodian wallet to their non-custodian wallet, which has been created as part of the OTP (One-Time Password) verification process. The funds can then be utilized for various purposes, including spending on Kstore and more.
```text
POST - {{rewards_system_url}}/api/proxy/wallet/withdraw
```
### cURL Example
```text
curl --location --request POST 'https://stage-platform-rewards.devindigg.com/api/proxy/wallet/withdraw' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhdmluYXNoIiwiY2xpZW50X2lkIjoiZDViMmU3NjAtMWI2Yy00Mjk2LWE4OWYtMWRhMGZmZThjNDE0IiwiaWF0IjoxNzAwODEyMDYwLCJpc3MiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJleHAiOjE3MDA4OTg0NjAsInVzZXJfaWQiOiJhdmluYXNoIiwidGhpcmRfcGFydHlfY2xpZW50X2lkIjoiZDViMmU3NjAtMWI2Yy00Mjk2LWE4OWYtMWRhMGZmZThjNDE0IiwidGhpcmRfcGFydHlfY2xpZW50X25hbWUiOiJMdWRvIiwibmFtZXNwYWNlZF90aGlyZF9wYXJ0eV91c2VyX2lkIjoiZDViMmU3NjAtMWI2Yy00Mjk2LWE4OWYtMWRhMGZmZThjNDE0X19fYXZpbmFzaCIsIndhbGxldF9hZGRyZXNzIjoiMHgwNTIyOTM3RkI0NjA4ZDJGYjUxNEY3NjkyMEMyZUJlMjgyNzMzNTcxIn0.FLitvlcmOiuoDtVbbZUz_NT1wIcYrJhLCRNwhndtIx4'
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

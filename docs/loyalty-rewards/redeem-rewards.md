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
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]
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
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]
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
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]
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

### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]
- `user-jwt-token`: [User JWT Token]

### Response
Example response:
```text
  {
    "gamer_id": "gamer12345",
    "bonus": 100,
    "message": "Withdrawn Successfully"
  }
```
The status code 200 indicates a successful withdrawal.
The message provides information about the withdrawal, including the gamer ID (gamer_id), the bonus amount withdrawn (bonus), and a confirmation message (message).

---
sidebar_position: 3
---

# Authentication and Wallet Withdrawl


## Authentication OTP Registration

This operation involves registering a user for authentication using a one-time password (OTP). Below are the details for implementing this operation:
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
    "phone_number": "[YOUR_PHONE_NO.]",
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
## Authentication OTP Resend
This operation involves resending the OTP to the user for authentication. Below are the details for implementing this operation:
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
    "phone_number": "[YOUR_PHONE_NO.]",
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
## Authentication OTP Verification
This operation involves verifying the OTP submitted by the user for authentication. Below are the details for implementing this operation:
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
The status code 201 Created indicates that the OTP verification was successful, and the user is authenticated.
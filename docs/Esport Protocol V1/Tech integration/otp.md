---
sidebar_position: 6
---

# OTP Endpoints

The OTP Endpoints facilitates secure user authentication and verification through One Time Passwords (OTPs). This API allows to request, verify, and resend OTPs, enhancing security during account registration and login processes.

## OTP Request API

### Endpoint: POST `/fe/users/auth/otp/register`
This endpoint is used for generating a One Time Password (OTP) for user verification purposes, commonly in authentication or user confirmation processes.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Request Body
The client needs to send a JSON object with the following information to request an OTP:

- `phone_number`: The user's phone number for which the OTP is to be generated.
- `countryCode`: The country code associated with the phone number.

##### Example Request Body
```json
{
  "phone_number": "1234567890",
  "countryCode": "XX"
}
```

#### Request Body
The client get a JSON object with the following information in response:

- `authCode`: The authentication code which is required for verification along with OTP.
- `isNewUser`: Bool value whether the user is new user or not.

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

##### Example Response
```json
{
  "authCode": "5255",
  "isNewUser": false
}
```

## OTP Verification API

### Endpoint: POST `/fe/users/auth/otp/verify`
This endpoint is used for verifying the One Time Password (OTP) sent to a user's phone number. It is a critical step in the user authentication or verification process, especially in systems that use OTPs for enhanced security.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Request Body
To verify an OTP, the client must send a JSON object containing the following information:

- `phone_number`: The phone number to which the OTP was sent.
- `countryCode`: The country code associated with the phone number.
- `authCode`: The authorization code for verification (if applicable).
- `otp`: The One Time Password that the user received.

##### Example Request Body
```json
{
  "phone_number": "1234567890",
  "countryCode": "XX",
  "authCode": 1234,
  "otp": 5678
}
```

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

##### Example Response
```json
{
  "message": "Phone number verified successfully"
}
```

## OTP Resend API

#### Endpoint: POST `/fe/users/auth/otp/resend`
This endpoint is used to resend the one-time password (OTP) to the user for authentication purposes.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

#### Request Body
Parameters:
- `phone_number`: The phone number to which the OTP will be sent for registration.
- `countryCode`: The country code for the phone number.

##### Example Request Body
```json
  {
    "phone_number": "9876543219",
    "countryCode": "+91"
  }

```

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

##### Example Response
```json
  {
    "authCode": "2735",
    "isNewUser": true
  }
```

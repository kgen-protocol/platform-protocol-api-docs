---
sidebar_position: 6
---

# OTP Endpoints

The OTP Endpoints facilitates secure user authentication and verification through One Time Passwords (OTPs). This API allows to request, verify, and resend OTPs, enhancing security during account registration and login processes.

## Auth: OTP Registration

This operation focuses on registering a user for authentication purposes using a one-time password (OTP). Below are the details outlining the implementation of this user registration process.

### Endpoint: POST `/fe/users/auth/otp/register`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/fe/users/auth/otp/register' \
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
```json
  {
    "phone_number": "9876543219",
    "countryCode": "+91"
  }
```
### Response
Response Status Code:
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

Example Response:
```json
  {
    "authCode": "2735",
    "isNewUser": true
  }
```

## Auth: OTP Resend
This operation is dedicated to resending the one-time password (OTP) to the user for authentication purposes. Below are the details outlining how to implement this OTP resending process.

### Endpoint: POST `/fe/users/auth/otp/resend`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/fe/users/auth/otp/resend' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJxd2VydHkiLCJjbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJpYXQiOjE3MDcwNDE1OTIsImlzcyI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImV4cCI6MTcwNzEyNzk5MiwidXNlcl9pZCI6InF3ZXJ0eSIsInRoaXJkX3BhcnR5X2NsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsInRoaXJkX3BhcnR5X2NsaWVudF9uYW1lIjoiTHVkbyIsIm5hbWVzcGFjZWRfdGhpcmRfcGFydHlfdXNlcl9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNF9fX3F3ZXJ0eSIsIndhbGxldF9hZGRyZXNzIjoiMHg0QzU4NzQ5OThiRTM5OEJEN0VBMjliQmIyMUZGZjc1MDZhRGY2MzlEIiwiaXNfbmV3X3VzZXIiOnRydWV9.__jPqcFvnQxrH1wmf20yle1Ffj5hJHmIuSE-HiRG8eE' \
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
```json
  {
    "phone_number": "9876543219",
    "countryCode": "+91"
  }

```
### Response
Response Status Code:
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

Example Response:
```json
  {
    "authCode": "2735",
    "isNewUser": true
  }
```

## Auth: OTP Verification
This operation is focused on verifying the one-time password (OTP) submitted by the user for authentication purposes. Below are the details for implementing this OTP verification proces.

### Endpoint: POST `/fe/users/auth/otp/verify`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/fe/users/auth/otp/verify' \
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
```json
  {
    "phone_number": "9876543219",
    "countryCode": "+91",
    "authCode": 2735,
    "otp": 596097
  }
```
### Response
Response Status Code:
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

Example response:
```json
  {
    "message": "Users linked successfully"
  }
```

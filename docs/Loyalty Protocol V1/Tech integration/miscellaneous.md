---
sidebar_position: 7
---

# Miscellaneous Endpoints

The Miscellaneous Endpoints provides various functionalities that enhance user experience and system analytics. These endpoints include retrieving historical participation statistics, getting linked mobile number, tracking event drops for analytics, and generating redirect URIs.

## Auth: Linked Mobile Number 
This operation is focused on retrieving the linked mobile number associated with the user for authentication purposes. Below are the details for implementing this mobile number retrieval process.

### Endpoint: GET `/fe/users/account/linked-mobile-number`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/fe/users/k-store/generate-redirect-uri' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZmtoZWlraHdpaGV3aWhlZml3YWFhYWEiLCJjbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJpYXQiOjE3MDA0NjY2MzQsImlzcyI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImV4cCI6MTcwMDU1MzAzNCwidXNlcl9pZCI6ImVma2hlaWtod2loZXdpaGVmaXdhYWFhYSIsInRoaXJkX3BhcnR5X2NsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsIm5hbWVzcGFjZWRfdGhpcmRfcGFydHlfdXNlcl9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNF9fX2Vma2hlaWtod2loZXdpaGVmaXdhYWFhYSIsIndhbGxldF9hZGRyZXNzIjoiMHg3ODg5RmRGNTQ4RkMxNzEzYzYxMUZCNTJlQTY0QUNDYmZmMWIwMzIyIn0.PeCYQvVPuzjMgJ4NFqpqvtnHHKBWIZFbKIEkSnmgnjw' \
--header 'Content-Type: application/json' 
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Response
Response Status Code:
- `Success`: 200 OK
- `Failure`: 
  - `500 Internal Server Error`
    - "RECORD_NOT_FOUND"

Example response:
```json
  {
    "UserID": "1234",
		"NameSpacedThirdPartyUserID": "",
		"WalletAddress": "",
		"IndiggWalletAddress": "",
		"LinkedPhone": "1234567890",
		"KGenID": ""
  }
```

## Analytics: Event Drop Tracker
This operation is focused on droping the specific event. Below are the details for implementing the event drop tracking process.

### Endpoint: POST `/fe/analytics/px-tracker/events/{eventID}/drop`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/fe/analytics/px-tracker/events/testEventID/drop' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJDYXJyb21OZXdVc2VyRm9yVGVzdGluZ1RoZU5ld0NhY2hlQWRkaXRpb25Gb3JDb3VudGluZ1dhbGxCYWxDYWxsIiwiY2xpZW50X2lkIjoiOTEyNDY0MzQ2MCIsImlhdCI6MTcyNjE0NTg2MCwiaXNzIjoiOTEyNDY0MzQ2MCIsImV4cCI6MTcyNjIzMjI2MCwidXNlcl9pZCI6IkNhcnJvbU5ld1VzZXJGb3JUZXN0aW5nVGhlTmV3Q2FjaGVBZGRpdGlvbkZvckNvdW50aW5nV2FsbEJhbENhbGwiLCJnYW1lcl9pZCI6IiIsInRoaXJkX3BhcnR5X2NsaWVudF9pZCI6IeV9jbGllbnRfbmFtZSI6IkVTUE9SVFNfUFJPVE9DT0xfQ0FMTEJSRUFLIiwibmFtZXNwYWNlZF90aGlyZF9wYXJ0eV91c2VyX2lkIjoiOTEyNDY0MzQ2MCNDYXJyb21OZXdVc2VyRm9yVGVzdGluZ1RoZU5ld0NhY2hlQWRkaXRpb25Gb3JDb3VudGluZ1dhbGxCYWxDYWxsIiwid2FsbGV0X2FkZHJlc3MiOiIweGViYTNlNzg0NDljOTE4MTRjMzhkMDNlNDNhMWYxNTI0NWQ2NzUyMDAiLCJpc19uZXdfdXNlciI6dHJ1ZX0.WxpXr3OH79uX3i2EHrgW9jKPmRjoEBarbo9_PMr2HK8' \
--header 'Content-Type: application/json' \
--data '{
  "attr1": "attr1Value",
  "attr3": "attr3Value",
  "attr4": "attr4Value"
}'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Request Body
Parameters:
- It consists of flexible attributes and their values, where attributes can be of type string, float, or int.

Example:
```json
  {
    "attr1": "attr1Value",
    "attr3": "attr3Value",
    "attr4": "attr4Value"
  }
```
### Response
Response Status Code:
- `Success`: 200 OK
- `Failure`: 
  - `400 Bad Request`
    - "BAD_REQUEST"

Example response:
```json
  {
    "msg": "event dropped successfully"
  }
```

## K-Store: Generate Redirect URI
This operation is focused on generating a redirect URI for a specific user to the k-store. Below are the details for implementing this redirect URI generation process.

### Endpoint: POST `/fe/users/k-store/generate-redirect-uri`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/fe/users/k-store/generate-redirect-uri' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZmtoZWlraHdpaGV3aWhlZml3YWFhYWEiLCJjbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJpYXQiOjE3MDA0NjY2MzQsImlzcyI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImV4cCI6MTcwMDU1MzAzNCwidXNlcl9pZCI6ImVma2hlaWtod2loZXdpaGVmaXdhYWFhYSIsInRoaXJkX3BhcnR5X2NsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsIm5hbWVzcGFjZWRfdGhpcmRfcGFydHlfdXNlcl9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNF9fX2Vma2hlaWtod2loZXdpaGVmaXdhYWFhYSIsIndhbGxldF9hZGRyZXNzIjoiMHg3ODg5RmRGNTQ4RkMxNzEzYzYxMUZCNTJlQTY0QUNDYmZmMWIwMzIyIn0.PeCYQvVPuzjMgJ4NFqpqvtnHHKBWIZFbKIEkSnmgnjw' \
--header 'Content-Type: application/json'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Response
Response Status Code:
- `Success`: 200 OK

Example response:
```json
  {
    "url": "https://indigg-uat.reciproci.com/store"
  }
```

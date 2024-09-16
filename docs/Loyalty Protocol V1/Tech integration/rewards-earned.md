---
sidebar_position: 4
---

# Rewards Earned Endpoints

Within the context of participants immersed in the game crafted by the developer, their interactions encompass several key actions, including the creation of KGeN-specific sessions, the establishment of custodian wallets, and the management of rewards for specific in-game events. This section provides a detailed overview of the operations involved in rewarding these dedicated participants and showcasing the valuable rewards they have earned throughout their gaming journey.

## Creating Rewards for Achieved Events

This operation entails the creation of a reward when a user achieves a milestone during specific events. Below are the details for implementing this process.

### Endpoint: POST `/fe/loyalty/event-reward-user-claims/events/{eventID}`

### cURL Example
```bash
curl --location --request POST 'https://stage-platform-protocols.kgen.io/fe/loyalty/event-reward-user-claims/events/81368ea8-b10f-4efa-a5d6-98d0059a0a18' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJxd2VydHkiLCJjbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJpYXQiOjE3MDcwNDE1OTIsImlzcyI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImV4cCI6MTcwNzEyNzk5MiwidXNlcl9pZCI6InF3ZXJ0eSIsInRoaXJkX3BhcnR5X2NsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsInRoaXJkX3BhcnR5X2NsaWVudF9uYW1lIjoiTHVkbyIsIm5hbWVzcGFjZWRfdGhpcmRfcGFydHlfdXNlcl9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNF9fX3F3ZXJ0eSIsIndhbGxldF9hZGRyZXNzIjoiMHg0QzU4NzQ5OThiRTM5OEJEN0VBMjliQmIyMUZGZjc1MDZhRGY2MzlEIiwiaXNfbmV3X3VzZXIiOnRydWV9.__jPqcFvnQxrH1wmf20yle1Ffj5hJHmIuSE-HiRG8eE'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Path Parameter
- `eventID`: Unique identifier for the specific event.

### Response
Response Status Code:
- `Success`: 201 Created
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

Example Response:
```json
{
    "userID": "FTC_User1",
    "rewardID": "e4e6aa47-9cbc-9b69-4881d54767aa",
    "eventID": "580b7055-a4db6-8e65-631833698934",
    "rewardStatus": "REWARDED",
    "createdAt": "2024-08-20T08:49:34.353794371Z",
    "updatedAt": "2024-08-20T08:49:34.353794371Z",
    "rewardAmount": 100
}
```
This operation records rewards for specific events when users achieve corresponding milestones. The response includes comprehensive details about the created rewards, such as their status, creation timestamps, and associated amounts. The assigned reward ID can be used as a reference point for subsequent interactions or for tracking reward history.

## Showcase All Rewards Earned by the Gamer

This operation involves retrieving and showcasing all the rewards that a gamer has earned throughout their gaming journey. Below are the details for implementing this operation.

### Endpoint: GET `/fe/loyalty/event-reward-user-claims/user`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/fe/loyalty/event-reward-user-claims/user' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJxd2VydHkiLCJjbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJpYXQiOjE3MDcwNDE1OTIsImlzcyI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImV4cCI6MTcwNzEyNzk5MiwidXNlcl9pZCI6InF3ZXJ0eSIsInRoaXJkX3BhcnR5X2NsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsInRoaXJkX3BhcnR5X2NsaWVudF9uYW1lIjoiTHVkbyIsIm5hbWVzcGFjZWRfdGhpcmRfcGFydHlfdXNlcl9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNF9fX3F3ZXJ0eSIsIndhbGxldF9hZGRyZXNzIjoiMHg0QzU4NzQ5OThiRTM5OEJEN0VBMjliQmIyMUZGZjc1MDZhRGY2MzlEIiwiaXNfbmV3X3VzZXIiOnRydWV9.__jPqcFvnQxrH1wmf20yle1Ffj5hJHmIuSE-HiRG8eE'
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

Example Response:
```json
{
  "rewards": [
    {
      "userID": "FTC_User1",
      "rewardID": "e4e6aa47-9cbc-5b69-4881d54767aa",
      "eventID": "580b7055-a77a-4e65-631833698934",
      "rewardStatus": "REWARDED",
      "createdAt": "2024-08-20T08:49:34.353794371Z",
      "updatedAt": "2024-08-20T08:49:34.353794371Z",
      "rewardAmount": 100
    }
  ],
  "offset": ""
}
```
This operation offers a comprehensive list of rewards earned by a gamer, complete with detailed information about each reward's status, creation timestamp, and associated amounts.

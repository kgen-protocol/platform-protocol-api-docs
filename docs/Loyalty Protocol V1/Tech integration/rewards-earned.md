---
sidebar_position: 2
---

# Rewards Earned

Within the context of participants immersed in the game crafted by the developer, their interactions encompass several key actions, including the creation of KGeN-specific sessions, the establishment of custodian wallets, and the management of rewards for specific in-game events. This section provides a detailed overview of the operations involved in rewarding these dedicated participants and showcasing the valuable rewards they have earned throughout their gaming journey.

## Create KGeN specific session for the gamer

This operation involves creating an KGeN-specific session for a gamer within the gaming application, ensuring secure interaction between the game server and the KGeN platform. The session is crucial for facilitating personalized and protected interactions. Below are the details for implementing this operation.
```text
POST - {{plat-protocols-base-url}}/s2s/session/
```
### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/s2s/session/' \
--header 'x-client-id: [example]' \
--header 'x-client-secret: [example]' \
--header 'Content-Type: application/json' \
--data '{
    "user_id": "FTC_User1"
}'
```
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]

### Request Body
```json
{
  "user_id": "FTC_User1"
}
```
Explanation :
- `user_id`: Unique identifier for the game in the gaming application.

### Response
Example Response:
```json
{
    "session_id": "3ab35108-1902-4a1f-4382998f305d",
    "user_id": "FTC_User1",
    "name": "",
    "username": "",
    "email": "",
    "device_id": "",
    "phonenumber": "",
    "level": 0,
    "rank": 0,
    "date_joined": "",
    "playertag": "",
    "location": "",
    "location_name": "",
    "device_model": "",
    "screen_height": "",
    "screen_width": "",
    "os_name": "",
    "os_version": "",
    "browser_name": "",
    "indigg_id": null,
    "indigg_wallet_address": "",
    "third_party_client_id": "20798813",
    "third_party_client_name": "ESPORTS_PROTOCOL_CALLBREAK",
    "namespaced_third_party_user_id": "20798813#FTC_User1",
    "wallet_address": "0xexamplewallet",
    "is_new_user": false,
    "access_token": "exampleToken1",
    "refresh_token": "exampleToken2",
    "linked_phone": "",
    "session_start_time": "2024-08-20 08:32:13.025599965 +0000 UTC",
    "appId": "20798813",
    "gamer_id": "FTC_User1",
    "token": "exampleToken1",
    "linkedMobileNumber": ""
}
```
Explanation:
- `session_id`: The unique identifier for the gamer's session.
- `user_id`: The unique identifier for the gamer with respect to the game, as provided on the request payload.
- `third_party_client_id`: The unique client ID of the game, which is provided during the registration process with KGeN.
- `third_party_client_name`: The name of the client, in this case, the game (if provided).
- `namespaced_third_party_user_id`: An identifier that combines the third-party client ID for user namespace. This ID is used for internal purposes within KGeN.
- `wallet_address`: A custodian Web3 wallet address generated for the user.
- `is_new_user`: Boolean indicating whether the user is new or existing.
- `access_token`: JWT Token for authentication and authorization.
- `refresh_token`: Token for refreshing the access token.
- Additionally it contains the info of user (name,email,etc) and it's device (os,model,etc).

This operation establishes a session for the user, enabling secure and personalized interactions within the KGeN system. The generated tokens can be used for subsequent API requests requiring authentication.


## Creating Rewards for Achieved Events

This operation entails the creation of a reward when a user achieves a milestone during specific events. Below are the details for implementing this process.
```text
POST - {{plat-protocols-base-url}}/fe/loyalty/event-reward-user-claims/events/{eventID}
```
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
```text
GET - {{plat-protocols-base-url}}/fe/loyalty/event-reward-user-claims/user
```
### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/fe/loyalty/event-reward-user-claims/user' \
--header 'user-jwt-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJxd2VydHkiLCJjbGllbnRfaWQiOiJkNWIyZTc2MC0xYjZjLTQyOTYtYTg5Zi0xZGEwZmZlOGM0MTQiLCJpYXQiOjE3MDcwNDE1OTIsImlzcyI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsImV4cCI6MTcwNzEyNzk5MiwidXNlcl9pZCI6InF3ZXJ0eSIsInRoaXJkX3BhcnR5X2NsaWVudF9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNCIsInRoaXJkX3BhcnR5X2NsaWVudF9uYW1lIjoiTHVkbyIsIm5hbWVzcGFjZWRfdGhpcmRfcGFydHlfdXNlcl9pZCI6ImQ1YjJlNzYwLTFiNmMtNDI5Ni1hODlmLTFkYTBmZmU4YzQxNF9fX3F3ZXJ0eSIsIndhbGxldF9hZGRyZXNzIjoiMHg0QzU4NzQ5OThiRTM5OEJEN0VBMjliQmIyMUZGZjc1MDZhRGY2MzlEIiwiaXNfbmV3X3VzZXIiOnRydWV9.__jPqcFvnQxrH1wmf20yle1Ffj5hJHmIuSE-HiRG8eE'
```
### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

### Response
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


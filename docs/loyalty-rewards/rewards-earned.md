---
sidebar_position: 2
---

# Rewards Earned

Within the context of participants immersed in the game crafted by the developer, their interactions encompass several key actions, including the creation of Indigg-specific sessions, the establishment of custodian wallets, and the management of rewards for specific in-game events. This section provides a detailed overview of the operations involved in rewarding these dedicated participants and showcasing the valuable rewards they have earned throughout their gaming journey.

## Create Indigg specific session for the gamer

This operation involves creating an Indigg-specific session for a gamer within the gaming application, ensuring secure interaction between the game server and the Indigg platform. The session is crucial for facilitating personalized and protected interactions. Below are the details for implementing this operation.
```text
POST - {{rewards_system_url}}/api/proxy/auth/user/session
```
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]

### Request Body
```text
  {
    "user_id": "20aa954e-52d5-4298-b44c-d84a64ddbb97"
  }
```
Explanation :
- `user_id`: Unique identifier for the game in the gaming application.

### Response
Example Response:
```text
  {
    "user_id": "20aa954e-52d5-4298-b44c-d84a64ddbb97",
    "third_party_client_id": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414",
    "third_party_client_name": "clientNameProvided",
    "namespaced_third_party_user_id": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414___20aa954e-52d5-4298-b44c-d84a64ddbb97",
    "wallet_address": "0x8Dxxxxxxxxxxxxxxxx0",
    "is_new_user": false,
    "access_token": "[Access Token]",
    "refresh_token": "[Refresh Token]"
  }
```
Explanation:
- `user_id`: The unique identifier for the gamer with respect to the game, as provided on the request payload.
- `third_party_client_id`: The unique client ID of the game, which is provided during the registration process with Indigg.
- `third_party_client_name`: The name of the client, in this case, the game (if provided).
- `namespaced_third_party_user_id`: An identifier that combines the third-party client ID for user namespace. This ID is used for internal purposes within Indigg.
- `wallet_address`: A custodian Web3 wallet address generated for the user.
- `is_new_user`: Boolean indicating whether the user is new or existing.
- `access_token`: JWT Token for authentication and authorization.
- `refresh_token`: Token for refreshing the access token.

This operation establishes a session for the user, enabling secure and personalized interactions within the Indigg system. The generated tokens can be used for subsequent API requests requiring authentication.


## Creating Rewards for Achieved Events

This operation entails the creation of a reward when a user achieves a milestone during specific events. Below are the details for implementing this process.
```text
POST - {{rewards_system_url}}/api/event-reward-user-claims/events/{{eventID}}
```
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]
- `user-jwt-token`: [User JWT Token]

### Path Parameter
- `eventID`: Unique identifier for the specific event.

### Response
Example Response:
```text
  {
    "userID": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414___20aa954e-52d5-4298-b44c-d84a64ddbb97",
    "rewardID": "69e39cef-6325-4e48-ba05-b0c394d132f5",
    "eventID": "082aca7d-d0b8-4179-ba81-5eb64df247f5",
    "rewardStatus": "REWARDED",
    "createdAt": "2024-01-19T19:30:53.375439151Z",
    "updatedAt": "2024-01-19T19:30:53.375439151Z",
    "rewardAmount": 10
  }
```
This operation records rewards for specific events when users achieve corresponding milestones. The response includes comprehensive details about the created rewards, such as their status, creation timestamps, and associated amounts. The assigned reward ID can be used as a reference point for subsequent interactions or for tracking reward history.

## Showcase All Rewards Earned by the Gamer

This operation involves retrieving and showcasing all the rewards that a gamer has earned throughout their gaming journey. Below are the details for implementing this operation.
```text
GET - {{rewards_system_url}}/api/event-reward-user-claims/user
```
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]
- `user-jwt-token`: [User JWT Token]

### Response
Example Response:
```text
  {
    "rewards": [
      {
        "userID": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414___20aa954e-52d5-4298-b44c-d84a64ddbb97",
        "rewardID": "9226e317-cf3e-44f2-9f40-65fa771d9a3d",
        "eventID": "082aca7d-d0b8-4179-ba81-5eb64df247f5",
        "rewardStatus": "REWARDED",
        "createdAt": "2024-01-19T06:10:56.242850682Z",
        "updatedAt": "2024-01-19T06:10:56.242850682Z",
        "rewardAmount": 10
      }
    ]
  }
```
This operation offers a comprehensive list of rewards earned by a gamer, complete with detailed information about each reward's status, creation timestamp, and associated amounts.


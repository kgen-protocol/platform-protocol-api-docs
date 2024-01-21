---
sidebar_position: 2
---

# Rewarded Events

In the integration flow, once rewardable events are registered and managed, the next steps involve interacting with third-party gamers and the GameApplication to create Indigg-specific sessions, generate custodian wallets, and handle rewards for specific events. This section outlines the operations involved in rewarding gamers and showcasing their earned rewards.

## Create Indigg-Specific Session for the User

This operation involves creating an Indigg-specific session for a user within the gaming application. The session is crucial for secure and personalized interactions. Below are the details for implementing this operation:
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
    "user_id": "zxzxcaqaaaa"
}
```
Explanation :
- `user_id`: Unique identifier for the user in the gaming application.

### Response
Example Response:
```text
    {
    "user_id": "zxzxcaqaaaa",
    "third_party_client_id": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414",
    "third_party_client_name": "Ludo",
    "namespaced_third_party_user_id": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414___zxzxcaqaaaa",
    "wallet_address": "0x8D2Da06cAa8CB2bC03cc8f32e7B9Aa29FaD68CE0",
    "is_new_user": false,
    "access_token": "[Access Token]",
    "refresh_token": "[Refresh Token]"
}
```
Explanation:
- `user_id`: The unique identifier for the user.
- `third_party_client_id`: ID of the third-party client (Ludo).
- `third_party_client_name`: Name of the third-party client (Ludo).
- `namespaced_third_party_user_id`: Combined identifier with third-party client ID for user namespace.
- `wallet_address`: A custodian Web3 wallet address generated for the user.
- `is_new_user`: Boolean indicating whether the user is new or existing.
- `access_token`: JWT Token for authentication and authorization.
- `refresh_token`: Token for refreshing the access token.

This operation establishes a session for the user, enabling secure and personalized interactions within the Indigg system. The generated tokens can be used for subsequent API requests requiring authentication.


## Create a Reward for a Specific Event

This operation involves creating a reward for a specific event when a user achieves a milestone. Below are the details for implementing this operation:
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
    "userID": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414___zxzxcaqaaaa",
    "rewardID": "69e39cef-6325-4e48-ba05-b0c394d132f5",
    "eventID": "c1103232-6ff1-4a6f-9c8f-5dbfba9ea4c7",
    "rewardStatus": "REWARDED",
    "createdAt": "2024-01-19T19:30:53.375439151Z",
    "updatedAt": "2024-01-19T19:30:53.375439151Z",
    "rewardAmount": 12342
}
```
This operation records the reward for a specific event when a user achieves the corresponding milestone. The response provides details about the created reward, including its status, creation time, and associated amounts. The rewardID can be used for reference in subsequent interactions or tracking reward history.

## Showcase All Rewards Earned by the Gamer

This operation involves fetching and showcasing all the rewards that a gamer has earned. Below are the details for implementing this operation:
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
            "userID": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414___test_user_c_ooooooo",
            "rewardID": "9226e317-cf3e-44f2-9f40-65fa771d9a3d",
            "eventID": "082aca7d-d0b8-4179-ba81-5eb64df247f5",
            "rewardStatus": "REWARDED",
            "createdAt": "2024-01-19T06:10:56.242850682Z",
            "updatedAt": "2024-01-19T06:10:56.242850682Z",
            "rewardAmount": 12342
        }
    ]
}
```
This operation provides a comprehensive list of rewards that a gamer has earned, including details about each reward's status, creation time, and associated amounts. 


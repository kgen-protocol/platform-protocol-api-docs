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


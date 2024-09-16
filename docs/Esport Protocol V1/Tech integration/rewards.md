---
sidebar_position: 4
---

# Rewards Endpoints

The Rewards Endpoints facilitates the management of user rewards within the platform. This API allows users to retrieve information about their claimable rewards and to claim those rewards as they achieve various milestones.

## Claimable Rewards Information API

### Endpoint: GET `/fe/esports/rewards/claim`
This endpoint is designed to provide users with information about the claimable rewards they have earned. It's a key feature for platforms that offer reward-based incentives or achievements.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Response Structure
The server responds with a JSON object that includes details about the user's total claimable rewards and specific information about each claimable reward.

- `total_claimable_rewards`: An integer value representing the total amount of rewards that the user can claim.
- `claimable_rewards_info`: An array of objects (`reward_info`), each containing detailed information about individual claimable rewards.

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

##### Example Response
```json
{
  "total_claimable_rewards": 1,
  "claimable_rewards_info": [
    {
      
      "user_id":"test1",
      "tournament_id":"testTournament5",
      "claim_status":"UNCLAIMED",
      "reward":50,
      "wallet_address":"0x84b6f41fb37d0f7293c6cf405fcfb4b8c7a2c5b9",
      "created_at":"2024-08-19T21:57:48.694297+05:30",
      "updated_at":"2024-08-19T21:57:48.694297+05:30",
    }
  ]
}
```

## Claim Rewards API

### Endpoint: POST `/fe/esports/rewards/claim`
This endpoint is used by users to claim their earned rewards. It's an important feature for platforms that offer rewards or incentives based on user activities or achievements.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Request
To claim rewards, the user typically needs to make a POST request to this endpoint. The specifics of the request payload (if any) depend on the implementation. It may include user identification, specific reward IDs to claim, or other relevant information.

#### Response Structure
Upon successful claim of rewards, the server responds with a JSON object containing a confirmation message.

- `message`: A string indicating the successful claim of rewards.

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

##### Example Response
```json
{
  "message": "Rewards claimed successfully"
}
```

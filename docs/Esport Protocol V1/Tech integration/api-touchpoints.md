---
sidebar_position: 2
---

# API Touchpoints

The following is a list of API touchpoints that the game developer will need to use to integrate with the KGeN ESports Protocol:


- Prod Environment Swagger API Explorer [click here >>](https://platform-api.indi.gg/docs)
- Stage Environment Swagger API Explorer [click here >>](https://platform-api.devindigg.com/docs)

Contact the admin to get your clientID and clientSecret.

# API Descriptions for Gamer Session Management

## Creating Gamer Sessions

### Endpoint: POST `/api/v1/session`
This endpoint is used to create or retrieve the current session context for a user (gamer).

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

#### Request Body
A JSON object containing the following fields:
- `gamer_id`: [GAMER_ID] – The unique identifier of the gamer.
- `device_id`: [DEVICE_ID] – Identifier of the device being used.
- `email`: [EMAIL] – Gamer's email address.
- `username`: [USERNAME] – Gamer's username.
- `level`: [LEVEL] – The current level of the gamer in the game.
- `rank`: [RANK] – The gamer's rank.
- `date_joined`: [DATE_JOINED] – The date the gamer joined.
- `phonenumber`: [PHONE_NUMBER] – Gamer's phone number.
- `name`: [NAME] – The real name of the gamer.
- `playertag`: [PLAYERTAG] – Gamer's tag within the game.
- `location_name`: [LOCATION_NAME] – Name of the gamer's location.
- `location`: [LOCATION] – Geographical location details.

#### Response
The response returns a JSON object with session details:
- `gamer_id`: [GAMER_ID] – Echoes back the gamer's ID.
- `appId`: [APP_ID] – Application ID where the session is created.
- `accountId`: [ACCOUNT_ID] – Account ID associated with the gamer.
- `session_id`: [SESSION_ID] – Unique ID for the current session.
- `wallet_address`: [WALLET_ADDRESS] – Gamer's wallet address, if applicable.
- `session_start_time`: [SESSION_START_TIME] – Timestamp marking the start of the session.
- `token`: [TOKEN] – A token for session validation or further API calls.

### Use Case
This endpoint is primarily used for initializing a session when a gamer starts a game or logs into a system. It helps in tracking and managing gamer activity and can be crucial for features like saved game progress, customization, and in-game purchases.

# API Documentation: Eventing API

## Endpoint: POST `/api/v1/eventing?token={token}`
This endpoint is used for submitting various game-related events, capturing key data about player actions and achievements within a game.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Request Structure

#### `timestamp`
   - **Type:** Integer
   - **Description:** Represents the time at which the event is recorded, typically in a Unix timestamp format.

#### `metadata`
   - **Type:** Object
   - **Description:** Contains key information related to the gaming context.
   - **Fields:**
     - `playerId` (String): Unique identifier for the player.
     - `tournamentId` (String): Identifier for the tournament.
     - `gameId` (String): Identifier for the game.
     - `matchId` (String): Identifier for the match.
     - `lobbyId` (String): Identifier for the lobby.
     - `level` (Integer): Numeric level in the game or tournament.
     - `areaCode` (Integer): Geographical area code.
     - `difficulty` (Integer): Difficulty level of the game or match.

#### `payload`
   - **Type:** Object
   - **Description:** Contains the specific details of the event.
   - **Fields:**
     - `achievement`:
       - `value` (Integer): Numeric value representing the achievement.
     - `levelup`:
       - `value` (String): Description or identifier for the level-up event.
     - `score`:
       - `value` (Integer): Numeric score value.
     - `progress`:
       - `value` (String): Description or state of progress.
     - `matchResult`:
       - `value` (Array of Strings): Outcomes or results of the match.
     - `matchJoined`:
       - `value` (Array of Strings): Information about the match joined.
     - `tournamentJoined`:
       - `value` (Array of Strings): Details about the tournament joined.
     - `lobbyJoined`:
       - `value` (Array of Strings): Information about the lobby joined.

### Response
- **`response`:** 
  - **Type:** Boolean
  - **Description:** Indicates if the operation was successful. Returns `true` for a successful operation.

### Use Cases

- **Achievement Tracking:** Record when a player achieves a specific milestone in the game.
- **Level Progression:** Log details of a player's level-up events.
- **Score Updates:** Send updates about player scores.
- **Match Tracking:** Record the outcomes of matches, information about joined matches, tournaments, and lobbies.

### Description
The `/api/v1/eventing` endpoint is crucial for real-time event tracking in gaming contexts. It captures detailed information about players' actions, progress, and achievements, enabling a dynamic and responsive gaming experience. This data can be used for analytics, personalized player experiences, and maintaining the integrity of the gaming environment.

# API Documentation: Active Tournaments API

## Endpoint: GET `/api/v1/tournaments/_active?token={token}`
This endpoint retrieves a list of active tournaments. It's designed to provide up-to-date information about ongoing tournaments within a gaming platform or service.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Response Structure
The response is a JSON array, with each element representing an active tournament. Each tournament object includes the following fields:

- `ends_at_date`: The date when the tournament ends.
- `min_registration_start_limit`: Minimum registration start limit.
- `participants_count`: Current count of participants in the tournament.
- `game_uid`: Unique identifier for the game associated with the tournament.
- `tournament_uid`: Unique identifier for the tournament.
- `starts_at_timestamp`: Timestamp for when the tournament starts.
- `theme`: Theme of the tournament, if any.
- `created_at`: Timestamp for when the tournament was created.
- `buy_in_price`: The entry fee or buy-in price for the tournament.
- `ends_at_timestamp`: Timestamp for when the tournament ends.
- `entry_type`: Type of entry, e.g., 'TeamBased'.
- `total_players_rewarded`: Total number of players who will be rewarded in the tournament.
- `updated_at`: Timestamp for the last update made to the tournament.
- `schedules_at_date`: The scheduled date for the tournament.
- `moves_to_lobby_at_date`: The date when participants move to the lobby.
- `locks_at_timestamp`: Timestamp indicating when the tournament locks.
- `schedules_at_timestamp`: Timestamp for when the tournament is scheduled.
- `lock_type`: Type of lock used for the tournament, e.g., 'Duration'.
- `locks_at_date`: The date when the tournament locks

# API Documentation: Tournaments Session API

## Endpoint: GET `/api/v1/tournaments/_session?token={token}`
This endpoint is designed to list the tournaments in which a user has participated. It's a useful tool for players to keep track of their tournament activities and histories.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Response Structure
The response is a JSON array containing the unique identifiers (UIDs) of the tournaments the user has participated in. Each element in the array is a tournament UID.

#### Example Response
```json
[
    "818796d3-7c33-44dd-a130-d2593a2eca53"
]

```

# API Documentation: Tournament Details API

## Endpoint: GET `/api/v1/tournaments/{tournamentId}?token={token}`
This endpoint is used to retrieve detailed information about a specific tournament, identified by its unique tournament ID.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Path Parameters
- `tournamentId`: The unique identifier of the tournament whose details are to be retrieved.

### Response Structure
The response is a JSON object containing comprehensive details about the tournament. The fields included in the response are:

- `ends_at_date`: The date when the tournament ends.
- `min_registration_start_limit`: Minimum registration start limit.
- `participants_count`: Current count of participants in the tournament.
- `game_uid`: Unique identifier for the game associated with the tournament.
- `tournament_uid`: Unique identifier for the tournament.
- `starts_at_timestamp`: Timestamp for when the tournament starts.
- `theme`: Theme of the tournament, if any.
- `created_at`: Timestamp for when the tournament was created.
- `buy_in_price`: The entry fee or buy-in price for the tournament.
- `ends_at_timestamp`: Timestamp for when the tournament ends.
- `entry_type`: Type of entry, e.g., 'TeamBased'.
- `total_players_rewarded`: Total number of players who will be rewarded in the tournament.
- `updated_at`: Timestamp for the last update made to the tournament.
- `schedules_at_date`: The scheduled date for the tournament.
- `moves_to_lobby_at_date`: The date when participants move to the lobby

# API Documentation: Tournament Leaderboard API

## Endpoint: GET `/api/v1/leaderboards/_byTournament/{tournamentId}?token={token}`
This endpoint provides the leaderboard details for a specific tournament. It's crucial for displaying player standings and scores within a tournament context.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Path Parameters
- `tournamentId`: The unique identifier of the tournament for which the leaderboard information is requested.

### Response Structure
The response is a JSON object containing details about the tournament's leaderboard, prize pool, and winners.

- `leaderboard`: An array of objects, each representing a participant in the tournament.
  - `user_id`: The unique identifier of the user.
  - `score`: The score of the user in the tournament.
- `price_pool`: The total prize pool available in the tournament.
- `winners`: An array of winners, if available. Each entry in the array is an object containing details about the winning users.

#### Example Response
```json
{
  "leaderboard": [
    {
      "user_id": "user",
      "score": 30
    }
  ],
  "price_pool": 40,
  "winners": []
}
```

# API Documentation: Wallet Balance API

## Endpoint: GET `/api/v1/wallet/lazyChain/balance?token={token}`
This endpoint is used to retrieve the balance details of a user's wallet, particularly in the context of a gaming platform or service that involves financial transactions or token exchanges.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Response Structure
The response is a JSON object containing various details about the wallet's balance and related attributes.

- `wallet_address`: The blockchain address of the wallet.
- `earned_balance`: The balance amount earned through gameplay or rewards.
- `bought_balance`: The balance amount that has been purchased or deposited into the wallet.
- `bonus_balance`: Any bonus amounts added to the wallet.
- `wallet_transaction_error`: A Boolean flag indicating if there was an error in the wallet transactions.
- `created_at`: Timestamp for when the wallet record was created.
- `modified_at`: Timestamp for the last modification to the wallet record.
- `lazy_balance_delta`: The change in balance that hasn't been updated on the chain yet.
- `is_lazy_balance_updated`: A Boolean indicating whether the lazy balance has been updated.
- `lazy_balance`: The current balance in the wallet that hasn't been committed to the chain.
- `on_chain_balance`: The balance that is recorded on the blockchain.

#### Example Response
```json
{
    "wallet_address": "[WALLET_ADDRESS]",
    "earned_balance": 0,
    "bought_balance": 0,
    "bonus_balance": 0,
    "wallet_transaction_error": false,
    "created_at": "2024-01-29T17:53:26.934052",
    "modified_at": "2024-01-29T17:53:26.934052",
    "lazy_balance_delta": 0,
    "is_lazy_balance_updated": true,
    "lazy_balance": 0,
    "on_chain_balance": 0
}


```

# API Documentation: Wallet Transaction History API

## Endpoint: GET `/api/v1/wallet/lazyChain/transactions/:wallet_address?token={token}`
This endpoint retrieves the transaction history of a specific wallet address, providing a detailed view of all transactions associated with it.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Path Parameters
- `wallet_address`: The unique blockchain address of the wallet whose transaction history is being requested.

### Response Structure
The response is a JSON object with two key arrays: `fromTransactions` and `toTransactions`. Each array contains transaction objects detailing the history of transactions.

- `fromTransactions`: Transactions sent from the specified wallet.
- `toTransactions`: Transactions received by the specified wallet.

Each transaction object includes fields such as:
- `uid`: Unique identifier of the transaction.
- `from_wallet`: Sender's masked wallet address.
- `to_wallet`: Receiver's masked wallet address.
- `amount`: Amount of the transaction.
- `sync_status`: Status of the transaction synchronization.
- `sync_error`: Any errors during synchronization.
- Additional transaction details (timestamps, gas fees, block number, etc.).

#### Example Response
```json
{
  "fromTransactions": [
    {
      "uid": "b6c88b12-373e-4cc7-8fd4-2e083273e35e",
      "from_wallet": "0x7d*****f0a2",
      "to_wallet": "0x3c*****f040",
      "amount": 50,
      "sync_status": "COMPLETED",
      "sync_error": null,
      "created_at": "2024-01-20T08:06:36.568965",
      ...
    }
  ],
  "toTransactions": [
    {
      "uid": "d7f88b13-374e-4cc7-8fd4-2e083273e36f",
      "from_wallet": "0x4d*****f1a3",
      "to_wallet": "0x3c*****f040",
      "amount": 75,
      "sync_status": "PENDING",
      "sync_error": "Network Delay",
      "created_at": "2024-01-22T09:15:20.568965",
      ...
    }
  ]
}
```

# API Documentation: OTP Request API

## Endpoint: POST `/api/v1/verification/otp/_request?token={token}`
This endpoint is used for generating a One Time Password (OTP) for user verification purposes, commonly in authentication or user confirmation processes.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Request Body
The client needs to send a JSON object with the following information to request an OTP:

- `phone_number`: The user's phone number for which the OTP is to be generated.
- `countryCode`: The country code associated with the phone number.

#### Example Request Body
```json
{
  "phone_number": "1234567890",
  "countryCode": "XX"
}
```
#### Example Response
```json
{
  "authCode": "5255",
  "isNewUser": false
}
```

# API Documentation: OTP Verification API

## Endpoint: POST `/api/v1/verification/otp/_verify?token={token}`
This endpoint is used for verifying the One Time Password (OTP) sent to a user's phone number. It is a critical step in the user authentication or verification process, especially in systems that use OTPs for enhanced security.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Request Body
To verify an OTP, the client must send a JSON object containing the following information:

- `phone_number`: The phone number to which the OTP was sent.
- `countryCode`: The country code associated with the phone number.
- `authCode`: The authorization code for verification (if applicable).
- `otp`: The One Time Password that the user received.

#### Example Request Body
```json
{
  "phone_number": "1234567890",
  "countryCode": "XX",
  "authCode": 1234,
  "otp": 5678
}

#### Example Response
```json
{
  "message": "Phone number verified successfully"
}
```

# API Documentation: Rewards Information API

## Endpoint: GET `/api/v1/rewards?token={token}`
This endpoint is designed to provide users with information about the rewards they have earned. It's a key feature for platforms that offer reward-based incentives or achievements.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Response Structure
The server responds with a JSON object that includes details about the user's total claimable rewards and specific information about each claimable reward.

- `total_claimable_rewards`: An integer value representing the total amount of rewards that the user can claim.
- `claimable_rewards_info`: An array of objects (`reward_info`), each containing detailed information about individual claimable rewards.

#### Example Response
```json
{
  "total_claimable_rewards": 100,
  "claimable_rewards_info": [
    {
      // Detailed information about each reward
    },
    // Additional reward objects
  ]
}
```

# API Documentation: Claim Rewards API

## Endpoint: POST `/api/v1/rewards/_claim?token={token}`
This endpoint is used by users to claim their earned rewards. It's an important feature for platforms that offer rewards or incentives based on user activities or achievements.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Request
To claim rewards, the user typically needs to make a POST request to this endpoint. The specifics of the request payload (if any) depend on the implementation. It may include user identification, specific reward IDs to claim, or other relevant information.

### Response Structure
Upon successful claim of rewards, the server responds with a JSON object containing a confirmation message.

- `message`: A string indicating the successful claim of rewards.

#### Example Response
```json
{
  "message": "Rewards claimed successfully"
}
```

# API Documentation: Wallet Withdrawal API

## Endpoint: POST `/api/v1/wallet/_withdraw?token={token}`
This endpoint facilitates the transfer of a user's earned balance from a custodial wallet to their KGeN wallet. It is designed to handle transactions within the platform without requiring additional information from the user in the request body.

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

### Request
This endpoint does not require a request body. The necessary information for the withdrawal is presumably derived from the user's session or authentication context.

### Response Structure
Upon successful completion of the withdrawal process, the server responds with a JSON object containing key details of the transaction:

- `userKGeNWalletAddr`: The address of the user's KGeN wallet.
- `earnedBalance`: The amount of earned balance that was transferred.
- `status`: The status of the transaction, typically 'SUCCESS'.
- `message`: A confirmation message, usually indicating successful withdrawal.

#### Example Response
```json
{
  "userKGeNWalletAddr": "user_KGeN_wallet_address",
  "earnedBalance": 100,
  "status": "SUCCESS",
  "message": "Withdrawn Successfully"
}
```

# API Touchpoints for lndiGG ESports Protocol

## API Descriptions

### Historic Participation and Statistics

#### Endpoint: GET `/api/v1/statistics/_historic?token={token}`
This endpoint provides historical data regarding a user's participation in gaming activities, specifically within the context of tournaments.

##### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

##### Query Parameters
- `token`: The authentication token for the user session.

##### Response Structure
The response is a JSON array, where each element is an object containing historical statistics and participation details of the user. Each object includes:

- `type`: The type of participation (e.g., "Tournament").
- `typeValue`: A value associated with the type, such as the number of participations.
- `result`: Outcome of the participation (e.g., won or lost).
- `occurredAtText`: A textual representation of when the event occurred.
- `mode`: The mode of the game or tournament (e.g., "Quick").
- `buyInStake`: The stake or buy-in amount for the participation.
- `amountWon`: The amount won in the event.

#### Example Response
```json
[
  {
    "type": "Tournament",
    "typeValue": 5,
    "result": "Won",
    "occurredAtText": "2021-06-01T12:00:00Z",
    "mode": "Quick",
    "buyInStake": 100,
    "amountWon": 500
  },
  // Additional historical event objects
]
```
![tournaments-flow](/img/tournaments-flow.png)

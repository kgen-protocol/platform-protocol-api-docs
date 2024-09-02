---
sidebar_position: 2
---

# API Descriptions for Gamer Session Management

## Creating Gamer Sessions

### Endpoint: POST `/s2s/session`
This endpoint is used to create or retrieve the current session context for a user (gamer).

#### Request Header
- `Content-Type`: application/json
- `x-clientID`: [Your Client ID] – Your unique client identifier.
- `x-clientSecret`: [Your Client Secret] – Your client secret for authentication.

#### Request Body
A JSON object containing the following fields:
- `user_id`: The unique identifier of the user.
- `gamer_id`: The unique identifier of the gamer.
- `name`: The real name of the gamer.
- `username`: Gamer's username.
- `email`: Gamer's email address.
- `device_id`: Identifier of the device being used.
- `phonenumber`: Gamer's phone number.
- `level`: The current level of the gamer in the game.
- `rank`: The gamer's rank.
- `date_joined`: The date the gamer joined.
- `playertag`: Gamer's tag within the game.
- `location`: Geographical location details.
- `location_name`: Name of the gamer's location.
- `device_model`: Device model of the gamer's device.
- `screen_height`: Screen height of the gamer's device.
- `screen_width`: Screen width of the gamer's device.
- `os_name`: Name  of the gamer's OS.
- `os_version`: Version of the gamer's OS.
- `browser_name`: Name of the gamer's browser.
- `fb_login`: FB Login of the gamer.
- `google_login`: Google Login of the gamer.
- `app_version`: App Version of the gamer.

#### Response
The response returns a JSON object with session details:
- `gamer_id`: Echoes back the gamer's ID.
- `appId`: Application ID where the session is created.
- `token`: A token for session validation or further API calls.
- `linkedMobileNumber`: Gamer's linked mobile number.
- `session_id`: Unique ID for the current session.
- `user_id`: The unique identifier of the user.
- `name`: The real name of the gamer.
- `username`: Gamer's username.
- `email`: Gamer's email address.
- `device_id`: Identifier of the device being used.
- `phonenumber`: Gamer's phone number.
- `level`: The current level of the gamer in the game.
- `rank`: The gamer's rank.
- `date_joined`: The date the gamer joined.
- `playertag`: Gamer's tag within the game.
- `location`: Geographical location details.
- `location_name`: Name of the gamer's location.
- `device_model`: Device model of the gamer's device.
- `screen_height`: Screen height of the gamer's device.
- `screen_width`: Screen width of the gamer's device.
- `os_name`: Name  of the gamer's OS.
- `os_version`: Version of the gamer's OS.
- `browser_name`: Name of the gamer's browser.
- `fb_login`: FB Login of the gamer.
- `google_login`: Google Login of the gamer.
- `app_version`: App Version of the gamer.
- `indigg_id`: IndiggID provided by KGeN.
- `indigg_wallet_address`: Gamer's wallet address in KGeN.
- `third_party_client_id`: Gamer's third party clientID.
- `third_party_client_name`: Gamer's third party clientName.
- `namespaced_third_party_user_id`: Gamer's third party userID.
- `wallet_address`: Gamer's wallet address, if applicable.
- `is_new_user`: Is the gamer new to KGeN or not.
- `access_token`: Access Token provided by KGeN.
- `refresh_token`: Refresh Token provided by KGeN.
- `linked_phone`: Gamer's linked phone number.
- `session_start_time`: Timestamp marking the start of the session.

### Use Case
This endpoint is primarily used for initializing a session when a gamer starts a game or logs into a system. It helps in tracking and managing gamer activity and can be crucial for features like saved game progress, customization, and in-game purchases.

# API Documentation: Eventing API

## Endpoint: POST `/fe/esports/tournaments/{tournamentId}/score`
This endpoint is used for submitting various game-related events, capturing key data about player actions and achievements within a game.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

### Request Structure

#### `metadata`
   - **Type:** Object
   - **Description:** Contains key information related to the gaming context.
   - **Fields:**
     - `playerId` (String): Unique identifier for the player.
     - `tournamentId` (String): Identifier for the tournament.
     - `gameId` (String): Identifier for the game.

#### `payload`
   - **Type:** Object
   - **Description:** Contains the specific details of the event.
   - **Fields:**
     - `score`:
       - `value` (Integer): Numeric score value.

### Response
- **`response`:** 
  - **Type:** Object
  - **Description:** Indicates if the operation was successful.
  - **Field:** `"message"`
  - **Value:** `"leaderboard score update successful"`

### Use Case

- **Score Update:** Updates the scores of the player in tournament.

# API Documentation: Active Tournaments API

## Endpoint: GET `/fe/esports/tournaments/active`
This endpoint retrieves a list of active tournaments. It's designed to provide up-to-date information about ongoing tournaments within a gaming platform or service.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

### Response Structure
The response is a JSON array, with each element representing an active tournament. Each tournament object includes the following fields:

- `tournament_uid`: Unique identifier for the tournament.
- `game_uid`: Unique identifier for the game associated with the tournament.
- `tournament_status`: Tournament's status.
- `title`: Tournament's title.
- `description`: Tournament's description.
- `buy_in_price`: The entry fee or buy-in price for the tournament.
- `tournament_size`: The size of the tournament.
- `participants_count`: Current count of participants in the tournament.
- `schedules_at_timestamp`: Timestamp for when the tournament is scheduled.
- `starts_at_timestamp`: Timestamp for when the tournament starts.
- `moves_to_lobby_at_timestamp`: The timestamp when participants move to the lobby.
- `locks_at_timestamp`: Timestamp indicating when the tournament locks.
- `ends_at_timestamp`: Timestamp for when the tournament ends.
- `created_at`: Timestamp for when the tournament was created.
- `updated_at`: Timestamp for the last update made to the tournament.

# API Documentation: Tournaments Session API

## Endpoint: GET `/fe/esports/tournaments/participated`
This endpoint is designed to list the tournaments in which a user has participated. It's a useful tool for players to keep track of their tournament activities and histories.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

### Response Structure
The response is a JSON array containing the unique identifiers (UIDs) of the tournaments the user has participated in. Each element in the array is a tournament UID.

#### Example Response
```json
[
    "818796d3-7c33-44dd-a130-d2593a2eca53"
]
```

# API Documentation: Tournament Details API

## Endpoint: GET `/fe/esports/tournaments/{tournamentUID}`
This endpoint is used to retrieve detailed information about a specific tournament, identified by its unique tournament ID.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

### Path Parameters
- `tournamentUID`: The unique identifier of the tournament whose details are to be retrieved.

### Response Structure
The response is a JSON object containing comprehensive details about the tournament. The fields included in the response are:

- `tournament_uid`: Unique identifier for the tournament.
- `game_uid`: Unique identifier for the game associated with the tournament.
- `tournament_status`: Tournament's status.
- `title`: Tournament's title.
- `description`: Tournament's description.
- `buy_in_price`: The entry fee or buy-in price for the tournament.
- `tournament_size`: The size of the tournament.
- `participants_count`: Current count of participants in the tournament.
- `schedules_at_timestamp`: Timestamp for when the tournament is scheduled.
- `starts_at_timestamp`: Timestamp for when the tournament starts.
- `moves_to_lobby_at_timestamp`: The timestamp when participants move to the lobby.
- `locks_at_timestamp`: Timestamp indicating when the tournament locks.
- `ends_at_timestamp`: Timestamp for when the tournament ends.
- `created_at`: Timestamp for when the tournament was created.
- `updated_at`: Timestamp for the last update made to the tournament.

# API Documentation: Tournament Leaderboard API

## Endpoint: GET `/fe/esports/tournaments/{tournamentUID}/leaderboard`
This endpoint provides the leaderboard details for a specific tournament. It's crucial for displaying player standings and scores within a tournament context.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

### Path Parameters
- `tournamentUID`: The unique identifier of the tournament for which the leaderboard information is requested.

### Response Structure
The response is a JSON object containing details about the tournament's leaderboard, prize pool, and winners.

- `leaderboard`: An array of objects, each representing a participant in the tournament.
  - `user_id`: The unique identifier of the user.
  - `score`: The score of the user in the tournament.
- `price_pool`: The total prize pool available in the tournament.
- `winners`: An array of winners, if available. Each entry in the array is an object containing details about the winning users.
  - `user_id`: The unique identifier of the winning user.
  - `reward`: The reward of the winning user in the tournament.

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
  "winners": [
    {
      "user_id": "user",
      "score": 1
    }
  ]
}
```

# API Documentation: Wallet Balance API

## Endpoint: GET `/fe/wallet/balance`
This endpoint is used to retrieve the balance details of a user's wallet, particularly in the context of a gaming platform or service that involves financial transactions or token exchanges.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

### Response Structure
The response is a JSON object containing various details about the wallet's balance and related attributes.

- `wallet_address`: The blockchain address of the wallet.
- `earned_balance`: The balance amount earned through gameplay or rewards.
- `bought_balance`: The balance amount that has been purchased or deposited into the wallet.
- `bonus_balance`: Any bonus amounts added to the wallet.
- `lazy_balance`: The current balance in the wallet that hasn't been committed to the chain.
- `on_chain_balance`: The balance that is recorded on the blockchain.
- `wallet_transaction_error`: A Boolean flag indicating if there was an error in the wallet transactions.
- `lazy_balance_delta`: The change in balance that hasn't been updated on the chain yet.
- `is_lazy_balance_updated`: A Boolean indicating whether the lazy balance has been updated.
- `created_at`: Timestamp for when the wallet record was created.
- `modified_at`: Timestamp for the last modification to the wallet record.
- `minWalletBalToWithdraw`: The minimum balance amount that is required to withdraw. 

#### Example Response
```json
{
    "wallet_address": "[WALLET_ADDRESS]",
    "earned_balance": 0,
    "bought_balance": 0,
    "bonus_balance": 50,
    "lazy_balance": 50,
    "on_chain_balance": 0,
    "wallet_transaction_error": false,
    "lazy_balance_delta": 50,
    "is_lazy_balance_updated": false,
    "created_at": "",
    "modified_at": "",
    "minWalletBalToWithdraw": 0
}
```

# API Documentation: Wallet Transaction History API

## Endpoint: GET `/fe/wallet/transactions`
This endpoint retrieves the transaction history of a specific user, providing a detailed view of all transactions associated with it.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

### Response Structure
The response is a JSON object with `last_evaluated_key` for pagination and three key arrays: `fromTransactions`, `toTransactions` and `transactions`. Each array contains transaction objects detailing the history of transactions.

- `fromTransactions`: Transactions sent from the specified user.
- `toTransactions`: Transactions received by the specified user.
- `transactions`: Transactions by the specified user.

Each transaction object includes fields such as:
- `uid`: Unique identifier of the transaction.
- `from_wallet`: Sender's masked wallet address.
- `to_wallet`: Receiver's masked wallet address.
- `amount`: Amount of the transaction.
- `description`: An object which contains following feilds:
  - `platformProtocolsTxnAmount`: Amount of the transaction.
  - `platformProtocolsTxnDescription`: Description of the transaction.
  - `platformProtocolsTxnName`: Name of the transaction.
  - `type`: Type of the transaction.
- `sync_status`: Status of the transaction synchronization.
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
      "description": { 
        "platformProtocolsTxnAmount": 50,
        "platformProtocolsTxnDescription": "Tournament fee deduct",
        "platformProtocolsTxnName": "Tournament fee deduct",
        "type": "JOIN"
      },
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
      "description": { 
        "platformProtocolsTxnAmount": 75,
        "platformProtocolsTxnDescription": "Tournament fee deduct",
        "platformProtocolsTxnName": "Tournament fee deduct",
        "type": "JOIN"
      },
      "created_at": "2024-01-22T09:15:20.568965",
      ...
    }
  ],
  "toTransactions": [
    {
      "uid": "5abeabc6-f6bb-448d-bd40-89c11d8dc2e0",
      "from_wallet": "0xb6*****75d6",
      "to_wallet": "0xce*****55ff",
      "amount": 50,
      "sync_status": "PENDING",
      "description": { 
        "platformProtocolsTxnAmount": 50,
        "platformProtocolsTxnDescription": "Tournament fee deduct",
        "platformProtocolsTxnName": "Tournament fee deduct",
        "type": "JOIN"
      },
      "created_at": "2024-08-19T21:57:48.694297+05:30",
      ...
    }
  ],
  "last_evaluated_key": ""
}
```

# API Documentation: OTP Request API

## Endpoint: POST `/fe/users/auth/otp/register`
This endpoint is used for generating a One Time Password (OTP) for user verification purposes, commonly in authentication or user confirmation processes.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

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

### Request Body
The client get a JSON object with the following information in response:

- `authCode`: The authentication code which is required for verification along with OTP.
- `isNewUser`: Bool value whether the user is new user or not.

#### Example Response
```json
{
  "authCode": "5255",
  "isNewUser": false
}
```

# API Documentation: OTP Verification API

## Endpoint: POST `/fe/users/auth/otp/verify`
This endpoint is used for verifying the One Time Password (OTP) sent to a user's phone number. It is a critical step in the user authentication or verification process, especially in systems that use OTPs for enhanced security.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

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
```

#### Example Response
```json
{
  "message": "Phone number verified successfully"
}
```

# API Documentation: Rewards Information API

## Endpoint: GET `/fe/esports/rewards/claim`
This endpoint is designed to provide users with information about the claimable rewards they have earned. It's a key feature for platforms that offer reward-based incentives or achievements.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

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

## Endpoint: POST `/fe/esports/rewards/claim`
This endpoint is used by users to claim their earned rewards. It's an important feature for platforms that offer rewards or incentives based on user activities or achievements.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

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

## Endpoint: POST `/fe/wallet/withdraw`
This endpoint facilitates the transfer of a user's earned balance from a custodial wallet to their KGeN wallet. It is designed to handle transactions within the platform without requiring additional information from the user in the request body.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

### Request
This endpoint does not require a request body. The necessary information for the withdrawal is presumably derived from the user's session or authentication context.

### Response Structure
Upon successful completion of the withdrawal process, the server responds with a JSON object containing:

- `msg`: A confirmation message, usually indicating successful withdrawal.

#### Example Response
```json
{
  "msg": "wallet withdrawl successful"
}
```

# API Touchpoints for lndiGG ESports Protocol

## API Descriptions

### Historic Participation and Statistics

#### Endpoint: GET `/fe/esports/statistics/historic`
This endpoint provides historical data regarding a user's participation in gaming activities, specifically within the context of tournaments.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

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

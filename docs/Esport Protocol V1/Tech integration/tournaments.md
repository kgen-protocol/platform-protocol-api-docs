---
sidebar_position: 3
---

# Tournaments Endpoints

The Tournaments Endpoints provides a comprehensive suite of functions for managing and participating in esports tournaments. This API allows players to join or leave tournaments, update scores, retrieve tournament details, and access leaderboards.

## Join Tournament API

### Endpoint: POST `/fe/esports/tournaments/{tournamentId}/join`
This endpoint is used for registering a player to participate in a specific tournament, capturing their entry into the competitive event.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Request Structure

##### `joiningStake`
   - **Type:** int
   - **Description:** Entry fee of the tournament.

#### Response
- **`response`:** 
  - **Type:** Object
  - **Description:** Indicates if the operation was successful.
  - **Field:** `"message"`
  - **Value:** `"user successfully joined the tournament"`

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `400 Bad Request`
    - "TOURNAMENT_INVALID_JOINING_STAKE"
    - "TOURNAMENT_IS_NOT_LIVE"
  - `404 Not Found`
    - "TOURNAMENT_NOT_FOUND"
  - `409 Conflict`
    - "EXISTING_PARTICIPATION_FOUND"
    - "TOURNAMENT_IS_FULL"

##### Example Response
```json
{
  "message": "user successfully joined the tournament"
}
```

## Leave Tournament API

### Endpoint: POST `/fe/esports/tournaments/{tournamentId}/leave`
This endpoint is used for withdrawing a player from a specific tournament, recording their exit from the competitive event.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Response
- **`response`:** 
  - **Type:** Object
  - **Description:** Indicates if the operation was successful.
  - **Field:** `"message"`
  - **Value:** `"user left the tournament successfully"`

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `400 Bad Request`
    - "TOURNAMENT_IS_NOT_LIVE"
  - `404 Not Found`
    - "TOURNAMENT_NOT_FOUND"
    - "TOURNAMENT_PARTICIPATION_NOT_FOUND"

##### Example Response
```json
{
  "message": "user left the tournament successfully"
}
```

## Tournament Score Update API

### Endpoint: POST `/fe/esports/tournaments/{tournamentId}/score`
This endpoint is used for submitting various game-related events, capturing key data about player actions and achievements within a game.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Request Structure

##### `metadata`
   - **Type:** Object
   - **Description:** Contains key information related to the gaming context.
   - **Fields:**
     - `tournamentId` (String): Identifier for the tournament.

##### `payload`
   - **Type:** Object
   - **Description:** Contains the specific details of the event.
   - **Fields:**
     - `score`:
       - `value` (Integer): Numeric score value.

#### Response
- **`response`:** 
  - **Type:** Object
  - **Description:** Indicates if the operation was successful.
  - **Field:** `"message"`
  - **Value:** `"leaderboard score update successful"`

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `404 Not Found`
    - "TOURNAMENT_NOT_FOUND"
    - "TOURNAMENT_PARTICIPATION_NOT_FOUND"

##### Example Response
```json
{
  "message": "leaderboard score update successful"
}
```

#### Use Case

- **Score Update:** Updates the scores of the player in tournament.

## Active Tournaments API

### Endpoint: GET `/fe/esports/tournaments/active`
This endpoint retrieves a list of active tournaments. It's designed to provide up-to-date information about ongoing tournaments within a gaming platform or service.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Response Structure
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

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `404 Not Found`
    - "TOURNAMENT_NOT_FOUND"
    - "TOURNAMENT_PARTICIPATION_NOT_FOUND"

##### Example Response
```json
{
[
  {
    "tournament_uid": "0ce87683-541e-4f5c-9599-89337d3907ed",
    "game_uid": "2079857813",
    "tournament_status": "STARTED",
    "title": "Callbreak_Tournament",
    "description": "A thrilling tournament to determine the champion TTT",
    "buy_in_price": 50,
    "tournament_size": 40000,
    "participants_count": 0,
    "schedules_at_timestamp": "2024-09-05T08:02:00Z",
    "starts_at_timestamp": "2024-09-05T08:05:00Z",
    "moves_to_lobby_at_timestamp": "2024-09-05T08:04:00Z",
    "locks_at_timestamp": "2024-09-06T08:03:00Z",
    "ends_at_timestamp": "2024-09-06T08:05:00Z",
    "created_at": "2024-09-05T08:01:03.731196991Z",
    "updated_at": "2024-09-05T08:01:03.731196991Z"
  }
]
}
```

## Tournaments Session API

### Endpoint: GET `/fe/esports/tournaments/participated`
This endpoint is designed to list the tournaments in which a user has participated. It's a useful tool for players to keep track of their tournament activities and histories.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Response Structure
The response is a JSON array containing the unique identifiers (UIDs) of the tournaments the user has participated in. Each element in the array is a tournament UID.

##### Response Status Code
- `Success`: 200 OK

##### Example Response
```json
[
    "818796d3-7c33-44dd-a130-d2593a2eca53",
    "882c473e-481a-4c68-bad3-936cac966a6b",
    "f1c28ca8-b409-4bd4-a7aa-4dac22589deb"
]
```

## Tournament Details API

### Endpoint: GET `/fe/esports/tournaments/{tournamentUID}`
This endpoint is used to retrieve detailed information about a specific tournament, identified by its unique tournament ID.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Path Parameters
- `tournamentUID`: The unique identifier of the tournament whose details are to be retrieved.

#### Response Structure
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

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `404 Not Found`
    - "TOURNAMENT_NOT_FOUND"

##### Example Response
```json
{
    "tournament_uid": "14198021-47da-464c-9d9d-cab6e5e32f4a",
    "game_uid": "2079857813",
    "tournament_status": "COMPLETED",
    "title": "Callbreak_Tournament",
    "description": "A thrilling tournament to determine the champion TTT",
    "buy_in_price": 50,
    "tournament_size": 40000,
    "participants_count": 14,
    "schedules_at_timestamp": "2024-08-30T06:42:00Z",
    "starts_at_timestamp": "2024-08-30T06:45:00Z",
    "moves_to_lobby_at_timestamp": "2024-08-30T06:44:00Z",
    "locks_at_timestamp": "2024-08-31T06:38:00Z",
    "ends_at_timestamp": "2024-08-31T06:40:00Z",
    "created_at": "2024-08-30T06:41:49.445310147Z",
    "updated_at": "2024-08-30T06:41:49.445310147Z"
}
```

## Tournament Leaderboard API

### Endpoint: GET `/fe/esports/tournaments/{tournamentUID}/leaderboard`
This endpoint provides the leaderboard details for a specific tournament. It's crucial for displaying player standings and scores within a tournament context.

##### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Path Parameters
- `tournamentUID`: The unique identifier of the tournament for which the leaderboard information is requested.

#### Response Structure
The response is a JSON object containing details about the tournament's leaderboard, prize pool, and winners.

- `leaderboard`: An array of objects, each representing a participant in the tournament.
  - `user_id`: The unique identifier of the user.
  - `score`: The score of the user in the tournament.
- `price_pool`: The total prize pool available in the tournament.
- `winners`: An array of winners, if available. Each entry in the array is an object containing details about the winning users.
  - `user_id`: The unique identifier of the winning user.
  - `reward`: The reward of the winning user in the tournament.

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `404 Not Found`
    - "TOURNAMENT_NOT_FOUND"

##### Example Response
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
![tournaments-flow](/img/tournaments-flow.png)

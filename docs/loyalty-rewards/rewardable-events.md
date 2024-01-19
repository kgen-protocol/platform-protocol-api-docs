---
sidebar_position: 1
---

# Rewardable Events

Third-party clients communicate with Indigg to register and retrieve information about rewardable events, including their status and details. This involves utilizing various HTTP methods, such as PUT, GET, and DELETE, on the specified URLs within the rewards system.

## Register the event

In the process of server-to-server integration, third-party game developers can register rewardable events on the Indigg platform. This registration is initiated by making a PUT request to the following endpoint: 
```text
PUT - {{rewards_system_url}}/admin/rewardable-events
```
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]

### Request Body
```text
{
    "eventType": "DailyBonus",
    "eventName": "Unlocking the daily gift",
    "eventDescription": "Reward gamer on successfully opening a daily free gift chest",
    "rewardAmount": 10,
    "entityType": "GAME"
}
```
Explanation:
- `eventType`: The type of the event, for example, "DailyBonus."
- `eventName`: A descriptive name for the event, such as "Unlocking the daily gift."
- `eventDescription`: A brief description of the event, providing additional context. In this case, "Reward gamer on successfully opening a daily free gift chest."
- `rewardAmount`: The amount of the reward associated with the event. In this example, it is set to 10.
- `entityType`: Specifies the type of entity related to the event. In this context, it is set to "GAME."

### Response
Succesfull response for the above request
```text
{
    "eventID": "dc3806e6-e56b-4da7-90e3-6b8e57307482",
    "eventType": "DailyBonus",
    "eventName": "Unlocking the daily gift",
    "eventDescription": "Reward gamer on succesfully opening a daily free gift chest",
    "rewardAmount": 10,
    "entityType": "GAME",
    "entityID": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414",
    "isActive": false,
    "createdAt": "2024-01-19T12:18:47.623568881Z",
    "updatedAt": "2024-01-19T12:18:47.623568881Z"
}
```

## Get all the Rewardable events
After successfully registering rewardable events, game developers can retrieve a list of active events through a GET request to the following endpoint:
```text
GET - {{rewards_system_url}}/admin/rewardable-events?isActive=true
```
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]

### Query Paramter
- `isActive`: true

### Response 
The system will respond with a list of active rewardable events created by the game developer. Each event will contain details such as event type, name, description, reward amount, and any other relevant information.
```text
{
    "rewardableEvents": [
        {
            "eventID": "082aca7d-d0b8-4179-ba81-5eb64df247f5",
            "eventType": "RightNowJustAIdentifierStringUpdated",
            "eventName": "Summer Challenge",
            "eventDescription": "A challenge for all players to compete over the summer.",
            "rewardAmount": 12342,
            "entityType": "GAME",
            "entityID": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414",
            "isActive": true,
            "createdAt": "2023-11-20T05:44:18.672625689Z",
            "updatedAt": "2023-11-20T05:44:18.672625689Z"
        },
        {
            "eventID": "51a8a58c-e8ec-4b16-b512-d42b3b078fef",
            "eventType": "RightNowJustAIdentifierStringUpdated",
            "eventName": "Summer Challenge",
            "eventDescription": "A challenge for all players to compete over the summer.",
            "rewardAmount": 12342,
            "entityType": "GAME",
            "entityID": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414",
            "isActive": true,
            "createdAt": "2023-11-21T05:47:30.519517028Z",
            "updatedAt": "2023-11-21T05:47:30.519517028Z"
        },
        //Additional events
    ]
}
```

## Get a specific Rewardable event
To retrieve details about a specific rewardable event created by the game developer, a GET request can be made to the following endpoint:
```text
GET - {{rewards_system_url}}/admin/rewardable-events/{eventID}
```
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]

### Request paramter
- `eventID`: The unique identifier of the specific rewardable event.
Example:
```text
GET - {{rewards_system_url}}/admin/rewardable-events/a4ded2a5-6f7a-4116-874c-435af9831cda
```

### Response
The system will respond with detailed information about the specified rewardable event.
```text
{
    "eventID": "082aca7d-d0b8-4179-ba81-5eb64df247f5",
    "eventType": "RightNowJustAIdentifierStringUpdated",
    "eventName": "Summer Challenge",
    "eventDescription": "A challenge for all players to compete over the summer.",
    "rewardAmount": 12342,
    "entityType": "GAME",
    "entityID": "d5b2e760-1b6c-4296-a89f-1da0ffe8c414",
    "isActive": true,
    "createdAt": "2023-11-20T05:44:18.672625689Z",
    "updatedAt": "2023-11-20T05:44:18.672625689Z"
}
```

## Delete a specific Rewardable event
To remove a specific rewardable event created by the game developer, a DELETE request can be made to the following endpoint:
```text
DELETE - {{rewards_system_url}}/admin/rewardable-events/{eventID}
```
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]


### Request paramter
- `eventID`: The unique identifier of the specific rewardable event.
Example:
```text
DELETE - {{rewards_system_url}}/admin/rewardable-events/c93ff468-7d7b-44f0-9cd9-74d
```
### Response
The system will respond to confirm the successful deletion of the specified rewardable event with the status of 204 with no content.



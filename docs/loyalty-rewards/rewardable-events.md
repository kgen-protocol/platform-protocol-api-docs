---
sidebar_position: 1
---

# Rewardable Events

Game developers can utilize dedicated APIs to effortlessly register, update, and delete rewardable events in their games. These integrations offer precise control over the reward system, enabling developers to adapt and enhance the gaming experience, keeping players engaged and motivated through dynamic challenges and rewards.

## Register or Update the event

Game developers can manage rewardable events on the Indigg platform by using a PUT request at the designated endpoint to create or update events.
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
    // "isActive": true
}
```
Explanation:
- `eventType`: The type of the event, for example, "DailyBonus."
- `eventName`: A descriptive name for the event, such as "Unlocking the daily gift."
- `eventDescription`: A brief description of the event, providing additional context. In this case, "Reward gamer on successfully opening a daily free gift chest."
- `rewardAmount`: The amount of the reward associated with the event. In this example, it is set to 10.
- `entityType`: Specifies the type of entity related to the event. In this context, it is set to "GAME."
- `isActive` : The isActive field in the provided payload is a boolean attribute that can be used to temporarily set the status of the rewardable event. 
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
- `eventID`: The unique identifier of the specific rewardable event.

### Request Body (Update Event):
To update an existing event, include the eventID in the payload along with other parameters you want to change. The system will replace the existing event with the updated details.
```text
    {
    "eventID": "dc3806e6-e56b-4da7-90e3-6b8e57307482",
    "eventType": "UpdatedEventType",
    "eventName": "UpdatedEventName",
    "eventDescription": "UpdatedEventDescription",
    "rewardAmount": 20,
    "entityType": "UPDATED_ENTITY_TYPE"
}
```
This will update the existing event with the specified eventID, modifying the specified parameters accordingly.

Use this API to create new events or update existing ones.
When updating, provide the eventID of an already existing event in the payload, and the system will replace the event with the updated details.


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
- `isActive`: A boolean parameter to filter events based on their activation status. If not set, it retrieves all events. If set to true, it retrieves only active events.


### Response
Upon making the request, the system will provide a comprehensive list of currently active rewardable events, offering essential information including event type, name, description, reward amount, and any other pertinent details, all created by the game developer.
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
For obtaining specific details about a rewardable event crafted, simply initiate a GET request to the designated endpoint.
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
The system will provide comprehensive details for the specified rewardable event.
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
To delete a particular rewardable event created, you can send a DELETE request to the following endpoint.
```text
DELETE - {{rewards_system_url}}/admin/rewardable-events/{eventID}
```
### Request Header
- `Content-Type`: application/json
- `clientID` : [Your Client ID]
- `clientSecret` : [Your Client Secret]


### Request paramter
- `eventID`: The unique identifier of the specific rewardable event.

```text
Example:
DELETE - {{rewards_system_url}}/admin/rewardable-events/c93ff468-7d7b-44f0-9cd9-74d
```
### Response
The system will confirm the successful deletion of the specified rewardable event with a status code of 204, indicating no content.




---
sidebar_position: 3
---

# Rewardable Events Endpoints

Game developers can utilize dedicated APIs to effortlessly register, update, and delete rewardable events in their games. These integrations offer precise control over the reward system, enabling developers to adapt and enhance the gaming experience, keeping players engaged and motivated through dynamic challenges and rewards.

## Register or Update the event

Game developers can manage rewardable events on the KGeN platform by using a PUT request at the designated endpoint to create or update events.

### Endpoint: PUT `/s2s/loyalty/rewardable-events`

### cURL Example
```bash
curl --location --request PUT 'https://stage-platform-protocols.kgen.io/s2s/loyalty/rewardable-events' \
--header 'x-client-id: [example]' \
--header 'x-client-secret: [example]' \
--header 'Content-Type: application/json' \
--data '{
    "eventType": "Adding Event",
    "eventName": "PlatformProtocols",
    "eventDescription": "PlatformProtocols",
    "entityType": "GAME",
    "rewardAmount": 100,
    "rewardCategory": "EARNED",
    "isActive": true,
    "isActivityTraceEnabled": false,
    "activityTraceActivityID": ""
}'
```
### Request Header
- `Content-Type`: application/json
- `x-client-id` : [Your Client ID]
- `x-client-secret` : [Your Client Secret]

### Request Body (Create Event)
```json
{
    "eventType": "Adding Event",
    "eventName": "PlatformProtocols",
    "eventDescription": "PlatformProtocols",
    "entityType": "GAME",
    "rewardAmount": 100,
    "rewardCategory": "EARNED",
    "isActive": true,
    "isActivityTraceEnabled": false,
    "activityTraceActivityID": ""
}
```
Explanation:
- `eventType`: The type of the event, for example, "DailyBonus."
- `eventName`: A descriptive name for the event (only for display purpose), such as "Unlocking the daily gift."
- `eventDescription`: A brief description of the event, providing additional context. In this case, "Reward gamer on successfully opening a daily free gift chest."
- `rewardAmount`: The amount of the reward associated with the event. In this example, it is set to 10.
- `rewardCategory`: The category of the reward e.g. "EARNED".
- `entityType`: Specifies the type of entity related to the event. In this context, it is set to "GAME."
- `isActive` : The isActive field in the provided payload is a boolean attribute that can be used to temporarily set the status of the rewardable event. 
- `isActivityTraceEnabled`: Whether activity trace enabled or not.
- `activityTraceActivityID`: Activity trace unique ID.

### Request Body (Update Event)
To update an existing event, include the eventID in the payload along with other parameters you want to change. The system will replace the existing event with the updated details.
```json
{
    "eventID": "dc3806e6-e56b-4da7-90e3-6b8e57307482",
    "eventType": "UpdatedEventType",
    "eventName": "UpdatedEventName",
    "eventDescription": "UpdatedEventDescription",
    "rewardAmount": 100,
    "rewardCategory": "EARNED",
    "entityType": "GAME",
    "entityID": "b6410c9d-21e1f3d-9b5fb6dd3fdf",
    "isActive": true,
    "isActivityTraceEnabled": false,
    "activityTraceActivityID": "",
}
```
This will update the existing event with the specified eventID, modifying the specified parameters accordingly.

Use this API to create new events or update existing ones.
When updating, provide the eventID of an already existing event in the payload, and the system will replace the event with the updated details.

### Response
Response Status Code:
- `Success`: 201 Created
- `Failure`:
  - `400 Bad Request`
    - "BAD_REQUEST"
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

Example response:
```json
{
    "eventID": "d6089e8f-2844-41d7-7bb2095f58e4",
    "eventType": "Adding Event",
    "eventName": "PlatformProtocols",
    "eventDescription": "PlatformProtocols",
    "rewardAmount": 100,
    "rewardCategory": "EARNED",
    "entityType": "GAME",
    "entityID": "b6410c9d-21e1f3d-9b5fb6dd3fdf",
    "isActive": true,
    "isActivityTraceEnabled": false,
    "activityTraceActivityID": "",
    "createdAt": "2024-08-20T07:52:35.660045104Z",
    "updatedAt": "2024-08-20T07:52:35.660045104Z"
}
```
- `eventID`: The unique identifier of the specific rewardable event.

## Get all the Rewardable events
After successfully registering rewardable events, game developers can retrieve a list of active events through a GET request to the following endpoint:

### Endpoint: GET `/s2s/loyalty/rewardable-events?isActive=true`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/s2s/loyalty/rewardable-events?isActive=true' \
--header 'x-client-id: [example]' \
--header 'x-client-secret: [example]'
```
### Request Header
- `Content-Type`: application/json
- `x-client-id` : [Your Client ID]
- `x-client-secret` : [Your Client Secret]

### Query Paramter
- `isActive`: A boolean parameter to filter events based on their activation status. If not set, it retrieves all events. If set to true, it retrieves only active events.


### Response
Upon making the request, the system will provide a comprehensive list of currently active rewardable events, offering essential information including event type, name, description, reward amount, and any other pertinent details, all created by the game developer.

Response Status Code:
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

Example response:
```json
{
    "rewardableEvents": [
        {
            "eventID": "d6089e8f-2844-83a3-7bb2095f58e4",
            "eventType": "Adding Event",
            "eventName": "PlatformProtocols",
            "eventDescription": "PlatformProtocols",
            "rewardAmount": 50,
            "rewardCategory": "EARNED",
            "entityType": "GAME",
            "entityID": "b6410c9d4-4da6-bf3d-9b5fb6dd3fdf",
            "isActive": true,
            "isActivityTraceEnabled": false,
            "activityTraceActivityID": "",
            "createdAt": "2024-08-20T07:52:35.660045104Z",
            "updatedAt": "2024-08-20T08:05:33.495815964Z"
        },
        {
            "eventID": "59fc9b45-222c-81fc-31160bfacb35",
            "eventType": "Adding Event",
            "eventName": "PlatformProtocols",
            "eventDescription": "PlatformProtocols",
            "rewardAmount": 100,
            "rewardCategory": "EARNED",
            "entityType": "GAME",
            "entityID": "b6410c9d-1da6-bf3d-9b5fb6dd3fdf",
            "isActive": true,
            "isActivityTraceEnabled": false,
            "activityTraceActivityID": "",
            "createdAt": "2024-07-30T12:40:13.207906773Z",
            "updatedAt": "2024-07-30T12:40:13.207906773Z"
        },
    ],
    "offset": ""
}
```

## Get a specific Rewardable event
For obtaining specific details about a rewardable event crafted, simply initiate a GET request to the designated endpoint.

### Endpoint: GET `/s2s/loyalty/rewardable-events/{eventID}`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/s2s/loyalty/rewardable-events/a4ded2a5-6f7a-4116-874c-435af9831cda' \
--header 'x-client-id: [example]' \
--header 'x-client-secret: [example]'
```
### Request Header
- `Content-Type`: application/json
- `x-client-id` : [Your Client ID]
- `x-client-secret` : [Your Client Secret]

### Request paramter
- `eventID`: The unique identifier of the specific rewardable event.
Example:

### Endpoint: GET `/s2s/loyalty/rewardable-events/a4ded2a5-6f7a-874c-435af9831cda`

### Response
The system will provide comprehensive details for the specified rewardable event.

Response Status Code:
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

Example response:
```json
{
    "eventID": "ee605722-a26c-42e7-3589273d8ce6",
    "eventType": "t5",
    "eventName": "Daily Chest Open - 2 ",
    "eventDescription": "adding event to a user_id",
    "rewardAmount": 1,
    "rewardCategory": "EARNED",
    "entityType": "GAME",
    "entityID": "91c8810c-d819-9707-f8537adbbe5d",
    "isActive": true,
    "isActivityTraceEnabled": false,
    "activityTraceActivityID": "",
    "createdAt": "2024-07-22T17:19:37.980966812Z",
    "updatedAt": "2024-07-22T17:19:37.980966812Z"
}
```

## Delete a specific Rewardable event
To delete a particular rewardable event created, you can send a DELETE request to the following endpoint.

### Endpoint: DELETE `/s2s/loyalty/rewardable-events/{eventID}`

### cURL Example
```bash
curl --location --request DELETE 'https://stage-platform-protocols.kgen.io/s2s/loyalty/rewardable-events/a4ded2a5-6f7a-4116-874c-435af9831cda' \
--header 'x-client-id: [example]' \
--header 'x-client-secret: [example]'
```
### Request Header
- `Content-Type`: application/json
- `x-client-id` : [Your Client ID]
- `x-client-secret` : [Your Client Secret]

### Request paramter
- `eventID`: The unique identifier of the specific rewardable event.

### Response
The system will confirm the successful deletion of the specified rewardable event with a status code of 204, indicating no content.
Response Status Code:
- `Success`: 204 No Content
- `Failure`:
  - `400 Bad Request`
    - "BAD_REQUEST"
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

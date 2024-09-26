---
sidebar_position: 7
---

# Miscellaneous Endpoints

The Miscellaneous Endpoints provides various functionalities that enhance user experience and system analytics. These endpoints include retrieving historical participation statistics, getting linked mobile number, tracking event drops for analytics, and generating redirect URIs.

## API Descriptions: Historic Participation and Statistics

### Endpoint: GET `/fe/esports/statistics/historic`
This endpoint provides historical data regarding a user's participation in gaming activities, specifically within the context of tournaments.

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: Users JWT token for authentication.

#### Response Structure
The response is a JSON array, where each element is an object containing historical statistics and participation details of the user. Each object includes:

- `type`: The type of participation (e.g., "Tournament").
- `typeValue`: A value associated with the type, such as the number of participations.
- `result`: Outcome of the participation (e.g., won or lost).
- `occurredAtText`: A textual representation of when the event occurred.
- `mode`: The mode of the game or tournament (e.g., "Quick").
- `buyInStake`: The stake or buy-in amount for the participation.
- `amountWon`: The amount won in the event.

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `401 Unauthorized`
    - "UN_AUTHORIZED"

##### Example Response
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
  {
    "amountWon": 0,
    "buyInStake": 10,
    "mode": "Quick",
    "occurredAtText": "",
    "result": "You Lost",
    "type": "Tournament",
    "typeValue": 0
  }
]
```

## Auth: Linked Mobile Number 
This operation is focused on retrieving the linked mobile number associated with the user for authentication purposes. Below are the details for implementing this mobile number retrieval process.

### Endpoint: GET `/fe/users/account/linked-mobile-number`

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
  - `500 Internal Server Error`
    - "RECORD_NOT_FOUND"

##### Example response
```json
  {
    "UserID": "1234",
		"NameSpacedThirdPartyUserID": "",
		"WalletAddress": "",
		"IndiggWalletAddress": "",
		"LinkedPhone": "1234567890",
		"KGenID": ""
  }
```

## Analytics: Event Drop Tracker
This operation is focused on tracking the drop event for a specific event. Below are the details for implementing the event drop tracking process.

### Endpoint: POST `/fe/analytics/px-tracker/events/{eventID}/drop`

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

#### Request Body
Parameters:
- It consists of flexible attributes and their values, where attributes can be of type string, float, or int.

##### Example Request Body
```json
  {
    "attr1": "attr1Value",
    "attr3": "attr3Value",
    "attr4": "attr4Value"
  }
```
#### Response
Response Status Code:
- `Success`: 200 OK
- `Failure`: 
  - `400 Bad Request`
    - "BAD_REQUEST"

##### Example Response Body
```json
  {
    "msg": "event dropped successfully"
  }
```

## K-Store: Generate Redirect URI
This operation is focused on generating a redirect URI for users who have already linked phone number to the k-store. Below are the details for implementing this redirect URI generation process.

### Endpoint: POST `/fe/users/k-store/generate-redirect-uri`

#### Request Header
- `Content-Type`: application/json
- `user-jwt-token`: [User JWT Token]

#### Response Status Code
- `Success`: 200 OK

##### Example Response Body
```json
  {
    "url": "https://indigg-uat.reciproci.com/store"
  }
```

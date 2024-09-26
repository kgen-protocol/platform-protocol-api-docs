---
sidebar_position: 2
---

# User Session Endpoints

## Create KGeN specific session for the gamer

This operation involves creating an KGeN-specific session for a gamer within the gaming application, ensuring secure interaction between the game server and the KGeN platform. The session is crucial for facilitating personalized and protected interactions. Below are the details for implementing this operation.

### Endpoint: POST `/s2s/session`

### cURL Example
```bash
curl --location 'https://stage-platform-protocols.kgen.io/s2s/session/' \
--header 'x-client-id: [example]' \
--header 'x-client-secret: [example]' \
--header 'Content-Type: application/json' \
--data '{
    "user_id": "FTC_User1"
}'
```
### Request Header
- `Content-Type`: application/json
- `x-client-id` : [Your Client ID]
- `x-client-secret` : [Your Client Secret]

### Request Body
```json
{
  "user_id": "FTC_User1"
}
```
Explanation :
- `user_id`: Unique identifier for the game in the gaming application.

### Response
Response Status Code:
- `Success`: 200 OK
- `Failure`: 
    - `500 Internal Server Error`

Example Response:
```json
{
    "session_id": "3ab35108-1902-4a1f-4382998f305d",
    "user_id": "FTC_User1",
    "name": "",
    "username": "",
    "email": "",
    "device_id": "",
    "phonenumber": "",
    "level": 0,
    "rank": 0,
    "date_joined": "",
    "playertag": "",
    "location": "",
    "location_name": "",
    "device_model": "",
    "screen_height": "",
    "screen_width": "",
    "os_name": "",
    "os_version": "",
    "browser_name": "",
    "indigg_id": null,
    "indigg_wallet_address": "",
    "third_party_client_id": "20798813",
    "third_party_client_name": "ESPORTS_PROTOCOL_CALLBREAK",
    "namespaced_third_party_user_id": "20798813#FTC_User1",
    "wallet_address": "0xexamplewallet",
    "is_new_user": false,
    "access_token": "exampleToken1",
    "refresh_token": "exampleToken2",
    "linked_phone": "",
    "session_start_time": "2024-08-20 08:32:13.025599965 +0000 UTC"
}
```
Explanation:
- `session_id`: The unique identifier for the gamer's session.
- `user_id`: The unique identifier for the gamer with respect to the game, as provided on the request payload.
- `third_party_client_id`: The unique client ID of the game, which is provided during the registration process with KGeN.
- `third_party_client_name`: The name of the client, in this case, the game (if provided).
- `namespaced_third_party_user_id`: An identifier that combines the third-party client ID for user namespace. This ID is used for internal purposes within KGeN.
- `wallet_address`: A custodian Web3 wallet address generated for the user.
- `is_new_user`: Boolean indicating whether the user is new or existing.
- `access_token`: JWT Token for authentication and authorization.
- `refresh_token`: Token for refreshing the access token.
- Additionally it contains the info of user (name,email,etc) and it's device (os,model,etc).

This operation establishes a session for the user, enabling secure and personalized interactions within the KGeN system. The generated tokens can be used for subsequent API requests requiring authentication.

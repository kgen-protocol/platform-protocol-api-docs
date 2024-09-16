---
sidebar_position: 2
---

# User Session Endpoints

The User Session Endpoint facilitates the management of gamer sessions within the system. This API allows developers to create or retrieve the session context for users, ensuring personalized and consistent experiences in gaming applications.

## API Descriptions for Gamer Session Management

### Creating Gamer Sessions

#### Endpoint: POST `/s2s/session`
This endpoint is used to create or retrieve the current session context for a user (gamer).

##### Request Header
- `Content-Type`: application/json
- `x-client-id`: [Your Client ID] – Your unique client identifier.
- `x-client-secret`: [Your Client Secret] – Your client secret for authentication.

##### Request Body
A JSON object containing the following fields:
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

##### Response
The response returns a JSON object with session details:
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

##### Response Status Code
- `Success`: 200 OK
- `Failure`: 
    - `500 Internal Server Error`

##### Example Response (Success)
```json
{
    "session_id": "4c6ffb9b-090f-4e09-bd3d-c8dab48c6581",
    "user_id": "38331972",
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
    "indigg_id": "6002f920-ba07-43c9-be71-22fdae35375b",
    "indigg_wallet_address": "0x99da56df5982ae9155cb9a914cfe3839e41351",
    "third_party_client_id": "2079857813",
    "third_party_client_name": "ESPORTS_PROTOCOL_CALLBREAK",
    "namespaced_third_party_user_id": "2079857813#38331972",
    "wallet_address": "0x84b6f41fb37d0f7293c6cf405fb4b8c7a2c5b9",
    "is_new_user": false,
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzODMzMTk3MiIsImNsaWVudF9pZCI6IjIwNzk4NTc4MTMiLCJpYXQiOjE3MjU1OTk0NTQsImlzcyI6IjIwNzk4NTc4MTMiLCJleHAiOjE3MjU2ODU4NTQsInVzZXJfaWQiOiIzODMzMTk3MiIsImdhbWVyX2lkIjoiIiwidGhpcmRfcGFydHlfY2xpZW50X2lkIjoiMjA3OTg1NzgxMyIsInRoaXJkX3BhcnR5X2NsaWVudF9uYW1lIjoiRVNQT1JUU19QUk9UT0NPTF9DQUxMQlJFQUsiLCJuYW1lc3BhY2VkX3RoaXJkX3BhcnR5X3VzZXJfaWQiOiIyMDc5ODU3ODEzIzM4MzMxOTcyIjZmNDFmYjM3ZDBmNzI5M2M2Y2Y0MDVmY2ZiNGI4YzdhMmM1YjkiLCJpc19uZXdfdXNlciI6ZmFsc2UsImluZGlnZ19pZCI6IjYwMDJmOTIwLWJhMDctNDNjOS1iZTcxLTIyZmRhZTM1Mzc1YiIsImluZGlnZ193YWxsZXRfYWRkcmVzcyI6IjB4OTlkYTU2ZGY1OTgyYWU5MTU1Y2I5YWNlOTE0Y2ZlMzgzOWU0MTM1MSIsImxpbmtlZF9waG9uZSI6Iis5MTgwMDAwMDAwMDEifQ.-InW-sn2pLhFIr-NRdvloPWFd39hGkLs2GTVzyW2sZc",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzODMzMTk3MiIsImNsaWVudF9pZCI6IjIwNzk4NTc4MTMiLCJpYXQiOjE3MjU1OTk0NTQsImlzcyI6IjIwNzk4NTc4MTMiLCJleHAiOjE3MjU2ODU4NTQsInVzZXJfaWQiOiIzODMzMTk3MiIsImdhbWVyX2lkIjoiIiwidGhpcmRfcGFydHlfY2xpZW50X2lkIjoiMjA3OTg1NzgxMyIsInRoaXJkX3BhcnR5X2NsaWVudF9uYW1lIjoiRVNQT1JUU19QUk9UT0NPTF9DQUxMQlJFQUsiLCJuYW1lc3BhY2VkX3RoaXJkX3BhcnR5X3VzZXJfaWQiOiIyMDc5ODU3ODEzIzM4MzMxOTcyIjZmNDFmYjM3ZDBmNzI5M2M2Y2Y0MDVmY2ZiNGI4YzdhMmM1YjkiLCJpc19uZXdfdXNlciI6ZmFsc2UsImluZGlnZ19pZCI6IjYwMDJmOTIwLWJhMDctNDNjOS1iZTcxLTIyZmRhZTM1Mzc1YiIsImluZGlnZ193YWxsZXRfYWRkcmVzcyI6IjB4OTlkYTU2ZGY1OTgyYWU5MTU1Y2I5YWNlOTE0Y2ZlMzgzOWU0MTM1MSIsImxpbmtlZF9waG9uZSI6Iis5MTgwMDAwMDAwMDEifQ.jBt8oZKE1Xtku_pN3Pj9K9Mw28JeiCKVhB8HU8jEjNA",
    "linked_phone": "+918000000001",
    "session_start_time": "2024-09-06 05:10:53.871198445 +0000 UTC"
}
```

#### Use Case
This endpoint is primarily used for initializing a session when a gamer starts a game or logs into a system. It helps in tracking and managing gamer activity and can be crucial for features like saved game progress, customization, and in-game purchases.

---
sidebar_position: 1
---

# API Key

To get started, game developers will need to connect to the lndiGG Tournament Protocol and receive an API key. The API key will be used to authenticate API requests and ensure that the game developer has permission to use the protocol.

## Obtaining an API Key

To obtain an API key, game developers must first connect to the lndiGG Tournament Protocol API using the POST /api/connect endpoint. The endpoint accepts a JSON payload with the following fields:

- `developer_id`: The unique identifier for the game developer.
- `game_id`: The unique identifier for the game.
- `signature`: A digital signature of the payload.

The `developer_id` and `game_id` fields are assigned by the lndiGG Tournament Protocol team upon registration. The `signature` field is generated using the developer's private key and the payload.

If the payload is valid and the `signature` is verified, the API key will be returned in the response. The API key should be kept secure and not shared with anyone outside of the game developer's organization.

## Using the API Key

Once the game developer has obtained an API key, they can use it to authenticate API requests to the lndiGG Tournament Protocol. The API key should be included in the `Authorization` header of all API requests using the following format:

```text
Authorization: Bearer <API Key>
```

If the API key is not included in the request or is invalid, the API will return an error.
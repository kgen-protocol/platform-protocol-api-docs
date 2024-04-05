---
sidebar_position: 1
---
# API Usage

| API Endpoint | Description | Usage |
|--------------|--------------|-------|
| POST `/api/v1/session` | Create or retrieve the current session context for a user (gamer). | When ever user open the app call this api  |
| POST `/api/v1/eventing?token={token}` | Submit various game-related events, capturing key data about player actions and achievements. |Whenever score update happens call this api|
| GET `/api/v1/tournaments/_active?token={token}` | Retrieve a list of active tournaments. |this will be used to get active tournaments|
| GET `/api/v1/tournaments/_session?token={token}` | List the tournaments a user has participated in. | this will be used to check whether user has participated in any tournament or not|
| GET `/api/v1/tournaments/{tournamentId}?token={token}` | Retrieve detailed information about a specific tournament. | Obtain comprehensive details about a tournament. |
| GET `/api/v1/leaderboards/_byTournament/{tournamentId}?token={token}` | Provide the leaderboard details for a specific tournament. | Display player standings and scores within a tournament context. |
| GET `/api/v1/wallet/lazyChain/balance?token={token}` | Retrieve the balance details of a user's wallet. | this will be used to get wallet balance of the user |
| GET `/api/v1/wallet/lazyChain/transactions/:wallet_address?token={token}` | Retrieve the transaction history of a specific wallet address. |this will be used to get the transaction history of the wallet of the specific user |
| POST `/api/v1/verification/otp/_request?token={token}` | Generate a One Time Password (OTP) for user verification. | Request an OTP for authentication or user confirmation processes. |
| POST `/api/v1/verification/otp/_verify?token={token}` | Verify the One Time Password (OTP) sent to a user's phone number. | this is used for link custodial wallet to KGeN wallet |
| GET `/api/v1/rewards?token={token}` | Provide information about the rewards a user has earned. | this is used to get what are all the unclaimed rewards for the user|
| POST `/api/v1/rewards/_claim?token={token}` | Allow users to claim their earned rewards. | this will be called when the user is claiming the rewards |
| POST `/api/v1/wallet/_withdraw?token={token}` | Transfer a user's earned balance from a custodial wallet to their KGeN wallet. | this will be called on withdraw cta |
| GET `/api/v1/statistics/_historic?token={token}` | Provide historical data regarding a user's participation in gaming activities, specifically within the context of tournaments. | Obtain historical statistics and participation details for a user. |
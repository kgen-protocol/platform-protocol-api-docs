---
sidebar_position: 1
---
# API Usage

| API Endpoint | Description | Usage |
|--------------|--------------|-------|
| POST `/s2s/session` | Create or retrieve the current session context for a user (gamer). | When ever user open the app call this api  |
| POST `/fe/esports/tournaments/{tournamentUID}/join` | Adds the user (gamer) to a tournament. | Call this API whenever a user joins the tournament.|
| POST `/fe/esports/tournaments/{tournamentUID}/leave` | Removes the user (gamer) from a tournament. |Call this API whenever a gamer leaves a tournament.|
| POST `/fe/esports/tournaments/{tournamentUID}/score` | Updates the score of the user (gamer) in a tournament. |Call this API whenever a score update occurs.|
| GET `/fe/esports/tournaments/active` | Retrieve a list of active tournaments. |Call this API  to get active tournaments|
| GET `/fe/esports/tournaments/participated` | List the tournaments a user has participated in. | Call this API  to check whether user has participated in any tournament or not|
| GET `/fe/esports/tournaments/{tournamentUID}` | Retrieve detailed information about a specific tournament. | Obtain comprehensive details about a tournament. |
| GET `/fe/esports/leaderboards/{tournamentUID}/leaderboard` | Provide the leaderboard details for a specific tournament. | Display player standings and scores within a tournament context. |
| GET `/fe/wallet/balance` | Retrieve the balance details of a user's wallet. | Call this API  to get wallet balance of the user |
| GET `/fe/wallet/transactions` | Retrieve the transaction history of a specific wallet address. |Call this API  to get the transaction history of the wallet of the specific user |
| POST `/fe/users/auth/otp/register` | Generate a One Time Password (OTP) for user verification. | Request an OTP for authentication or user confirmation processes. |
| POST `/fe/users/auth/otp/verify` | Verify the One Time Password (OTP) sent to a user's phone number. | this is used for link custodial wallet to KGeN wallet |
| GET `/fe/esports/rewards/claim` | Provide information about the rewards a user has earned. | this is used to get what are all the unclaimed rewards for the user|
| POST `/fe/esports/rewards/claim` | Allow users to claim their earned rewards. | this will be called when the user is claiming the rewards |
| POST `/fe/wallet/withdraw` | Transfer a user's earned balance from a custodial wallet to their KGeN wallet. | this will be called on withdraw cta |
| GET `/fe/esports/statistics/historic` | Provide historical data regarding a user's participation in gaming activities, specifically within the context of tournaments. | Obtain historical statistics and participation details for a user. |
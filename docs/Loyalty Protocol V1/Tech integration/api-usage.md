---
sidebar_position: 1
---
# API Usage

| API Endpoint | Description | Usage |
|--------------|--------------|-------|
| PUT `/admin/rewardable-events` | Register or update rewardable events in the game. | Create new events or update existing ones for the reward system. |
| GET `/admin/rewardable-events?isActive=true` | Retrieve a list of active rewardable events. | Get information about currently active rewardable events created by the game developer. |
| GET `/admin/rewardable-events/{eventID}` | Retrieve details of a specific rewardable event. | Obtain comprehensive details about a particular rewardable event. |
| DELETE `/admin/rewardable-events/{eventID}` | Delete a specific rewardable event. | Remove a rewardable event from the system. |
| POST `/api/proxy/auth/otp/register` | Register a user for authentication using a one-time password (OTP). | Initiate the user registration process for OTP-based authentication. |
| POST `/api/proxy/auth/otp/resend` | Resend the one-time password (OTP) for user authentication. | Resend the OTP to the user for authentication or verification purposes. |
| POST `/api/proxy/auth/otp/verify` | Verify the one-time password (OTP) submitted by the user. | Verify the OTP provided by the user for authentication or verification. |
| GET `/api/wallet/balance` | Retrieve the balance details from the user's wallet. | Obtain information about the user's wallet balance and related attributes. |
| GET `/api/wallet/transactions/list` | Retrieve a list of transactions associated with the user's wallet. | Get a detailed view of all transactions related to the user's wallet. |
| POST `/api/wallet/withdraw` | Transfer the user's earned balance from the custodian wallet to their non-custodian wallet. | Handle transactions within the platform for withdrawing earned balance. |
| POST `/api/proxy/auth/user/session` | Create an KGeN-specific session for a gamer. | Establish a secure session for the gamer within the gaming application. |
| POST `/api/event-reward-user-claims/events/{eventID}` | Create a reward for a user when they achieve a specific event. | Record rewards for specific events when users achieve corresponding milestones. |
| GET `/api/event-reward-user-claims/user` | Retrieve all rewards earned by a gamer. | Obtain a comprehensive list of rewards earned by the gamer throughout their gaming journey. |
| GET `/api/v1/statistics/_historic?token={token}` | Provide historical data regarding a user's participation in gaming activities, specifically within the context of tournaments. | Obtain historical statistics and participation details for a user. |
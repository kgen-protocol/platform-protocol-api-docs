---
sidebar_position: 1
---
# API Usage

The API Usage provides a comprehensive overview of various endpoints available for managing user interactions, authentication, wallet transactions, and reward systems within the platform. Each endpoint includes a description and usage details, enabling developers to effectively integrate and utilize these functionalities in their applications.

| API Endpoint | Description | Usage |
|--------------|--------------|-------|
| PUT `/s2s/loyalty/rewardable-events` | Register or update rewardable events in the game. | Create new events or update existing ones for the reward system. |
| GET `/s2s/loyalty/rewardable-events?isActive=true` | Retrieve a list of active rewardable events. | Get information about currently active rewardable events created by the game developer. |
| GET `/s2s/loyalty/rewardable-events/{eventID}` | Retrieve details of a specific rewardable event. | Obtain comprehensive details about a particular rewardable event. |
| DELETE `/s2s/loyalty/rewardable-events/{eventID}` | Delete a specific rewardable event. | Remove a rewardable event from the system. |
| POST `/fe/users/auth/otp/register` | Register a user for authentication using a one-time password (OTP). | Initiate the user registration process for OTP-based authentication. |
| POST `/fe/users/auth/otp/resend` | Resend the one-time password (OTP) for user authentication. | Resend the OTP to the user for authentication or verification purposes. |
| POST `/fe/users/auth/otp/verify` | Verify the one-time password (OTP) submitted by the user. | Verify the OTP provided by the user for authentication or verification. |
| GET `/fe/wallet/balance` | Retrieve the balance details from the user's wallet. | Obtain information about the user's wallet balance and related attributes. |
| GET `/fe/wallet/transactions` | Retrieve a list of transactions associated with the user's wallet. | Get a detailed view of all transactions related to the user's wallet. |
| POST `/fe/wallet/withdraw` | Transfer the user's earned balance from the custodian wallet to their non-custodian wallet. | Handle transactions within the platform for withdrawing earned balance. |
| POST `/s2s/session` | Create an KGeN-specific session for a gamer. | Establish a secure session for the gamer within the gaming application. |
| POST `/fe/loyalty/event-reward-user-claims/events/{eventID}` | Create a reward for a user when they achieve a specific event. | Record rewards for specific events when users achieve corresponding milestones. |
| GET `/fe/loyalty/event-reward-user-claims/user` | Retrieve all rewards earned by a gamer. | Obtain a comprehensive list of rewards earned by the gamer throughout their gaming journey. |
| POST `/fe/users/k-store/generate-redirect-uri` | Redirect URI for a specific user to the k-store. | Obtain a redirect URI for a specific user to k-store. |
| POST `/fe/analytics/px-tracker/events/{eventID}/drop` | Drop specific event. | Remove the specified event from the events. |
| GET `/fe/users/account/linked-mobile-number` | Retrieve linked mobile number of user. | Retrieves the linked mobile number associated with the user. |
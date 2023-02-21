---
sidebar_position: 1
---

# Introduction

Discover IndiGG Tournament Protocol **in less than 5 minutes**.

## About

The Tournament Protocol is a solution provided by IndiGG that enables game developers to integrate IndiGG's tournament functionality into
their games easily. Host on-chain tournaments for an existing Web2 or Web3 game with the IndiGG Tournament Protocol with easy API
Integrations to bring more Engagement to the game’s player base by leveraging the existing features and reward players via Leaderboard Smart
Contracts, Quests, SBTs or NFTs.

## Developer's Point of view

![engage-host-reward](/img/engage-host-reward.jpg)

The registration process for IndiGG Tournament Protocol is designed to be simple and user-friendly. The following are the five simple steps
for users to get started:

1. Access via the integrated icon to register: Users can easily access the IndiGG Tournament Protocol by clicking on the integrated icon
   from within the game.
2. Semi-Custodial Wallet Created on successful registration: A semi-custodial wallet is created to secure their assets on the blockchain, a
   Soul-bound token (SBT) is additionally created for each specific user
3. Initial Indi Coin amount assigned to experience the offering: Users will be rewarded an initial amount of Indi Coin to test the offering.
4. Indi Coin earned by users via quests and tournaments: Users can earn additional Indi Coin by participating in quests and tournaments.

The IndiGG Tournament Protocol enables game developers to increase player engagement by adding on-chain tournament functionality to games.
By integrating with the IndiGG Tournament Protocol API, game developers can easily manage user sessions, display the CTA button, implement
the WebView for the Interstitial flow, and trigger in-game events.

The IndiGG Tournament Protocol also allows game developers to incentivise players by offering rewards via leaderboard smart contracts,
quests, SBTs, or NFTs. These rewards can be customized to the theme and genre of the game, making the gameplay experience even more exciting
and immersive.

![Screens](/img/screens_1_1.jpg)] ![Screens](/img/screens_1_2.jpg)]

See more screens [here >>](/docs/showcase)

### Technical Concepts

In this documentation guide there are some architectural concepts and terms to get familiar with. For
[details read here](/docs/category/tech-integration).

#### API Key

To get started, game developers will need to connect to the lndiGG Tournament Protocol and receive an API key. The API key will be used to
authenticate API requests and ensure that the game developer has permission to use the protocol.

#### Session Service

Once the game developer has received an API key, they will need to integrate with the session service to initiate user sessions. User
sessions are required to manage the user's participation in tournaments and ensure that their progress is tracked accurately.

#### CTA Button

After the user session has been initiated, the game developer can use the user session to render the CTA button in their game. The CTA
button is the primary means for users to access tournament functionality within the game.

#### Interstitial Flow

When a user clicks the CTA button, the Interstitial flow is initiated. The Interstitial flow is a webview that provides additional
information about the tournament and allows the user to sign up. The game developer will need to implement the webview and provide
functional hooks to trigger when the user has signed up for a tournament.

#### In-Game Events

Finally, the game developer will need to send over in-game events to the lndiGG Tournament Protocol API to ensure that tournament progress
is tracked accurately. In-game events should be sent in a timely manner to ensure that tournament standings are updated in real-time.

#### API Touchpoints

The following is a list of API touchpoints that the game developer will need to use to integrate with the lndiGG Tournament Protocol:

```text
POST /api/connect - Connect to the lndiGG Tournament Protocol and receive an API key.
POST /api/session - Initiate a user session.
GET /api/ctabutton?session_id={session_id} - Retrieve the CTA button HTML to render in the game.
POST /api/interstitial - Implement the webview for the Interstitial flow.
POST /api/tournament_signup_hook - Provide a functional hook to trigger when the user has signed up for a tournament.
POST /api/in_game_events - Send over in-game events to the lndiGG Tournament Protocol API.
```

### Follow the guide

lndiGG Tournament Protocol provides game developers with an easy-to-use solution for integrating tournament functionality into their games.
By following the steps outlined in this documentation and using the provided API touchpoints, game developers can quickly and easily
implement tournament functionality and provide their users with an engaging and competitive gameplay experience.

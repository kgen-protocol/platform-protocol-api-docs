---
id: pixel-drop-integration
title: Tracker Integration
sidebar_label: Tracker Integration
---

## Introduction

The pixel drop integration allows you to incorporate a pixel tracker into your game to track events and gather valuable data. This documentation will guide you through the process of integrating the pixel drop into your game.

## Prerequisites

Before proceeding with the integration, make sure you have the following:

- Access to the game developer dashboard.
- The code snippet provided by the dashboard for the pixel drop. The code snippet will have the following format:

```html
<img src="https://platform-api.devindigg.com/
      ?gameAccountId=dac6087e-cedf-4b41-b271-1b7bc7c76dcf
      &gameId=8724801273
      &eventId=510280c8-3c6d-4ceb-985e-21126ead121d
      &questId=416289c8-3c6d-4ceb-985e-21126ead121d
      &userId={userId}
      &gamerId={gamerId}
      &walletId={walletId}
      &email={email}" />
```

## Integrating the Pixel Drop
To integrate the pixel drop into your game, follow these steps:

Obtain the code snippet provided by the game developer dashboard.

Replace the following placeholders in the code snippet with the actual values obtained from the query parameters when a player is redirected to their game from the indi.gg website:

- `{userId}`: The user ID of the player on IndiGG.
- `{gamerId}`: The ID of the game player specific to the respective game.
- `{email}`:(Optional) The email address associated with the user's IndiGG account.
- `{walletId}`:(Optional) The ID of the player's wallet within the IndiGG platform.

The game developers should ensure that these placeholders are substituted with the corresponding values from the query parameters.

Insert the modified code snippet into the appropriate location in their game's code.

Sample redirection url
```
https://sample-game.com?userId=IndiGGUserID&gamerId=gamePlayerUid&email=indiggUser@example.com
```


Below is a code example that demonstrates the integration process in Html.

```javascript
// Create a new image element
const img = document.createElement('img');

// get the parameters of questId and userId from the url
const urlParams = new URLSearchParams(window.location.search);


// Game Account ID, Game ID, Event ID values are provided by the gameDev dashboard, when creating a new event
// User ID, Email & wallet ID are the values that you will need to provide through the url quest parameters
const gameAccountId = 'dac6087e-cedf-4b41-b271-1b7bc7c76dcf';
const gameId = '8724801273';
const eventId = '510280c8-3c6d-4ceb-985e-21126ead121d';
const questId = '416289c8-3c6d-4ceb-985e-21126ead121d'
const userId = urlParams.get('userId'); // This is the user ID that you will need to provide
const email = urlParams.get('email'); // This is the email of the gamer that you will need to provide
const walletId = urlParams.get('walletId'); // This is the wallet ID of the user that you will need to provide
const url = `https://tracker.indi.gg/?gameAccountId=${gameAccountId}&gameId=${gameId}&eventId=${eventId}&questId=${questId}&userId=${userId}`;

// Set the image's source
img.src = url

// Set the image's size
img.width = 1;
img.height = 1;

// Add the image to the body of the document
document.body.appendChild(img);
```

## Testing the Integration
To ensure that the pixel drop integration is working correctly, follow these steps:

Run or deploy the game in a testing environment.

Perform the actions or trigger the events that should activate the pixel drop.

Use a network monitoring tool or inspect network requests to verify that the pixel drop request is being sent to the specified URL when the events occur.

Conclusion
By following the steps outlined in this documentation, game developers can successfully integrate the pixel drop into their games. They need to replace the placeholders in the provided code snippet with the actual values obtained from the query parameters, which are added during the player redirection from the indi.gg website. The pixel drop integration enables tracking of events and gathering valuable data for analysis and optimization.

Happy tracking and optimizing!

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
      &userId=indigg-user-id(query param value)
      &gamerId=player-id-in-context-of-respective-game(query param value)" />
```

## Integrating the Pixel Drop
To integrate the pixel drop into your game, follow these steps:

Obtain the code snippet provided by the game developer dashboard.

Replace the following placeholders in the code snippet with the actual values obtained from the query parameters when a player is redirected to their game from the indi.gg website:

- `{userId}`: The user ID of the player.
- `{gamerId}`: The ID of the game player.
- `{questId}`: The ID of the quest or mission associated with the event (if applicable).

The game developers should ensure that these placeholders are substituted with the corresponding values from the query parameters.

Insert the modified code snippet into the appropriate location in their game's code.

## Testing the Integration
To ensure that the pixel drop integration is working correctly, follow these steps:

Run or deploy the game in a testing environment.

Perform the actions or trigger the events that should activate the pixel drop.

Use a network monitoring tool or inspect network requests to verify that the pixel drop request is being sent to the specified URL when the events occur.

Conclusion
By following the steps outlined in this documentation, game developers can successfully integrate the pixel drop into their games. They need to replace the placeholders in the provided code snippet with the actual values obtained from the query parameters, which are added during the player redirection from the indi.gg website. The pixel drop integration enables tracking of events and gathering valuable data for analysis and optimization.

Happy tracking and optimizing!

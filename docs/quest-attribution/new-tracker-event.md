---
id: new-tracker-event
title: Creating a New Tracker Event
sidebar_label: New Tracker Event
---

## Introduction

The game developer dashboard allows you to create new tracker events for your game. Tracker events are used to track specific actions or milestones within the game. This documentation will guide you through the process of creating a new tracker event using the dashboard.

## Accessing the Dashboard

To access the game developer dashboard, follow these steps:

1. Navigate to the game developer portal at [https://gamedev.indi.gg/](https://gamedev.indi.gg/).
2. Log in to your account using your credentials. If you don't have an account, sign up for one.

## Creating a New Tracker Event

To create a new tracker event, follow these steps:

1. Once logged in, locate the **Games** tab in the sidebar. Click on it to navigate to the page where games are listed.
2. Select the game for which you want to create a new tracker event.
3. On the game page, you will find an **Events** tab. Click on it to access the events section for that game.
4. In the events section, you will find a **Create Event** button. Click on it to open the event creation form.
5. Fill in the required fields with the following information:

   - **Name**: Enter a name for the event.
   - **Description**: Provide a brief description of the event.
   - **Event Type**: Specify the type or category of the event.
   - **Quest ID**: If the event is related to a specific quest or mission, provide the quest ID (Kindly contact Indigg Community team).

6. Review the entered information to ensure its accuracy and completeness.
7. Click the "Submit" button to create the new tracker event.

## Code Snippet

After creating a tracker event, you will be provided with a code snippet to incorporate into your game code. This code snippet allows you to drop a pixel that will track the event during gameplay. The code snippet will have the following format:

```html
<img src="https://platform-api.devindigg.com/
      ?gameAccountId=dac6087e-cedf-4b41-b271-1b7bc7c76dcf
      &gameId=8724801273
      &eventId=510280c8-3c6d-4ceb-985e-21126ead121d
      &questId=416289c8-3c6d-4ceb-985e-21126ead121d
      &userId={userId}
      &gamerId={gamerId}" />
```

Make sure to replace the placeholder values in the code snippet with the actual values specific to your game and event.

## Conclusion

By following the steps outlined in this documentation, you can easily create a new tracker event for your game using the game developer dashboard. Incorporating the provided code snippet into your game code will enable the tracking of specific events during gameplay.

By effectively using tracker events, you can gain valuable insights into player behavior and improve your game based on the collected data. Happy tracking!

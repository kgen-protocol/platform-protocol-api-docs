---
sidebar_position: 2
---

# API Touchpoints

The following is a list of API touchpoints that the game developer will need to use to integrate with the lndiGG Tournament Protocol:

```text
POST /api/connect - Connect to the lndiGG Tournament Protocol and receive an API key.
POST /api/session - Initiate a user session.
GET /api/ctabutton?session_id={session_id} - Retrieve the CTA button HTML to render in the game.
POST /api/interstitial - Implement the webview for the Interstitial flow.
POST /api/tournament_signup_hook - Provide a functional hook to trigger when the user has signed up for a tournament.
POST /api/in_game_events - Send over in-game events to the lndiGG Tournament Protocol API.
```

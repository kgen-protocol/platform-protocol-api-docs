---
sidebar_position: 2
---

# API Touchpoints

The following is a list of API touchpoints that the game developer will need to use to integrate with the lndiGG Tournament Protocol:

for detailed OpenApi Specs, [click here >>](/openapi.yaml)

```text
POST `/api/v1/connect` - Connect to the lndiGG Tournament Protocol and receive an API key.
GET: `/api/v1/entrypoint/ctabtn` - Get the entrypoint of the CTA Button to render
GET: `/api/v1/entrypoint/interstitial` - Get the entrypoint of the Interstitial screen to render
GET: `/api/v1/entrypoint/takeover` - Get the entrypoint of the Takeover screen to render
POST: `/api/v1/eventing` - Submit progress events
GET: `/api/v1/session` - Get users' current session context
GET: `/api/v1/tournaments/_active` - Fetch active tournaments
GET: `/api/v1/tournaments/_session` - Fetch the active tournaments that user has joined
GET: `/api/v1/tournaments/{tournamentId}` - Fetch document tournament by Id
POST: `/api/v1/tournaments/{tournamentId}/_join` - Enrol/Join user to a tournament
GET: `/api/v1/leaderboards/_byTournament/{tournamentId}` - Fetch leaderboard of a tournament
GET: `/api/v1/leaderboards/_byDateRange` - Fetch leaderboard based on given date-range
GET: `/api/v1/tokens/_owned` - fetch owned tokens
GET: `/api/v1/tokens/_value` - fetch the sum-up value of the user's owned tokens
GET: `/api/v1/tokens/{id}` - fetch document token by Id
GET: `/api/v1/statistics/_summary` - fetch owned statistics
GET: `/api/v1/statistics/_session` - fetch statistics that user has from the latest tournament
GET: `/api/v1/statistics/_historic` - fetch statistics that user has from historic particiations tournament
GET: `/api/v1/achievements/_owned` - fetch owned achievements
GET: `/api/v1/achievements/_session` - fetch achievements that user has from the latest tournament
GET: `/api/v1/achievements/{id}` - fetch document achievement by Id
```

![tournaments-flow](/img/tournaments-flow.png)

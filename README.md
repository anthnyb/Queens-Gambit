# Queens-Gambit

## About
Queen's Gambit is a chess app that visualizes available moves against a bot, and saves board progress by `player_name`. 

## Setting up local project
Read DB backup file into your local environment using:
```bash
psql -d $(PG_DATABASE) -U $(PG_USER) -f backup.sql
```

Then update `/dbcreds.js` with your database credentials to finish setup:
```javascript
module.exports = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: "localhost",
    port: 5432,
    database: process.env.PG_DATABASE
};
```

### Running the app
To run app, use:
```bash
node app
```


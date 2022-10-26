# Queens-Gambit

## About
Queen's Gambit is a chess app that visualizes available moves against a bot, and saves board progress by `player_name`. 

## Setting up local project
Read DB backup file into your local environment using:
```bash
psql -d $(local database) -U $(local user) -f backup.sql
```

Then update `/dbcreds.js` with your database credentials to finish setup:
```javascript
module.exports = {
    user: $(local_user),
    password: $(local_password),
    host: "localhost",
    port: 5432,
    database: $(local_database)
};
```

### Running the app
To run app, use:
```bash
node app
```


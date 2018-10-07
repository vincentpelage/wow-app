const express = require('express');
const path = require('path');
require('dotenv').config();

const getDungeonAchievement = require("./controllers/getDungeonAchievement");
const getRaidAchievement = require("./controllers/getRaidAchievement");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.send('Express Server Launched')
});

app.get('/dungeonsAchievements', getDungeonAchievement);
app.get('/raidsAchievements', getRaidAchievement);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`WoW App listening on ${port}`);
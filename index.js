const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const getDungeonAchievement = require("./controllers/getDungeonAchievement");
const getRaidAchievement = require("./controllers/getRaidAchievement");

const app = express();

// allowing Access-Control-Allow-Origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

// Allow request parsing
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.send('Express Server Launched')
});

app.post('/dungeonsAchievements', getDungeonAchievement);
app.get('/raidsAchievements', getRaidAchievement);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`WoW App listening on ${port}`);
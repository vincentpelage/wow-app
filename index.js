const express = require("express");
const schedule = require("node-schedule");
const mongoose = require("mongoose");
const axios = require("axios");
const rateLimit = require("express-rate-limit");

const path = require("path");
const bodyParser = require("body-parser");

require("dotenv").config();

const dungeonsAchievements = require("./controllers/dungeonsAchievements");
const raidsAchievements = require("./controllers/raidsAchievements");
const pvpLeaderBoard = require("./controllers/pvpLeaderBoard");
const PvpLeaderboard = require("./models/pvpLeaderboard");

const getClassStats = require("./utils/getClass/getClassStats");
const classList = require("./utils/getClass/classList");
const getSpecStats = require("./utils/getSpec/getSpecStats");
const specList = require("./utils/getSpec/specList");

const app = express();

app.enable("trust proxy");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 50
});

app.use(limiter);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

// Allow request parsing
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.send("Express Server Launched");
});

const formValidator = (req, res, next) => {
  const isNoSqlInjected = item => {
    const contentFormat = /^((?!{).).*|((?!}).)$/;
    const itemFormatted = item.replace(/(\s+)/g, "");
    const find = itemFormatted.search(contentFormat);
    return find;
  };

  if (req.body.form) {
    const payLoad = Object.values(req.body.form);
    const result = payLoad.map(item => isNoSqlInjected(item));

    async function test() {
      try {
        const resultat = await result.indexOf(-1);
        return resultat;
      } catch (error) {
        console.log(error);
      }
    }

    test().then(result => {
      if (result > -1) {
        console.log("form was not validate");
        res.send({ message: "injection NoSQL" });
      } else {
        console.log("form was validate");
        next();
      }
    });
  } else {
    next();
  }
};

async function saveData(ladder, server, response, playersCount, dataToSave) {
  try {
    const arenaClassStats = await getClassStats(
      response,
      playersCount,
      classList
    );
    const arenaSpecStats = await getSpecStats(response, playersCount, specList);
    const arenaType = ladder;
    dataToSave[server] = {};
    dataToSave[server][arenaType] = {};
    dataToSave[server][arenaType]["class"] = arenaClassStats;
    dataToSave[server][arenaType]["spec"] = arenaSpecStats;
    const pvpLeaderBoard = new PvpLeaderboard(dataToSave);
    pvpLeaderBoard.save((err, data) => {
      if (err) {
        console.error(err);
        return err;
      } else {
        console.log("saved data " + ladder);
      }
    });
  } catch (e) {
    console.error(e);
  }
}

const getLeaderBoards = (ladder, server) => {
  let endpoint = "";
  if (server === "eu") {
    endpoint =
      "https://" +
      server +
      ".api.battle.net/wow/leaderboard/" +
      ladder +
      "?locale=en_GB&apikey=" +
      process.env.WOW_API_KEY;
  } else if (server === "us") {
    endpoint =
      "https://" +
      server +
      ".api.battle.net/wow/leaderboard/" +
      ladder +
      "?locale=en_US&apikey=" +
      process.env.WOW_API_KEY;
  }
  axios
    .get(endpoint)
    .then(function(response) {
      const playersCount = response.data.rows.length;
      const dataToSave = {};
      saveData(ladder, server, response, playersCount, dataToSave);
    })
    .catch(function(error) {
      console.log("error.data", error.data);
    })
    .then(function() {
      console.log("Axios request ended");
    });
};

const scheduled = schedule.scheduleJob("* 1 0 * * *", function() {
  console.log("Scheduled job started");
  const mongoDB = `mongodb://vincent:${
    process.env.DB_PASS
  }@ds125713.mlab.com:25713/wow-api`;
  mongoose.connect(
    mongoDB,
    { useNewUrlParser: true }
  );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "mongoDB connection error: "));
  db.once("open", () => {
    console.log("Connected to the DB");
    db.collection("pvpleaderboards").deleteMany({});
    console.log("Previous documents deleted");
    getLeaderBoards("2v2", "eu");
    getLeaderBoards("3v3", "eu");
    getLeaderBoards("rbg", "eu");
    getLeaderBoards("2v2", "us");
    getLeaderBoards("3v3", "us");
    getLeaderBoards("rbg", "us");
  });
});

app.use("/dungeonsAchievements", formValidator);
app.use("/raidsAchievements", formValidator);

app.post("/dungeonsAchievements", dungeonsAchievements);
app.post("/raidsAchievements", raidsAchievements);
app.get("/pvpLeaderBoard", pvpLeaderBoard);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`WoW App listening on ${port}`);

const express = require("express");
const schedule = require("node-schedule");
const mongoose = require("mongoose");
const axios = require("axios");

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

// allowing Access-Control-Allow-Origin
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

async function saveData(ladder, response, playersCount, dataToSave) {
  try {
    const arenaClassStats = await getClassStats(response, playersCount, classList);
    const arenaSpecStats = await getSpecStats(response, playersCount, specList);
    const arenaType = ladder + "stats";
    dataToSave[arenaType] = {};
    dataToSave[arenaType]["class"] = arenaClassStats;
    dataToSave[arenaType]["spec"] = arenaSpecStats;
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

const getLeaderBoards = ladder => {
  axios
    .get(
      "https://eu.api.battle.net/wow/leaderboard/" +
        ladder +
        "?locale=en_GB&apikey=" +
        process.env.WOW_API_KEY
    )
    .then(function(response) {
      const playersCount = response.data.rows.length;
      const dataToSave = {};
      // dataToSave[ladder] = response.data.rows;
      saveData(ladder, response, playersCount, dataToSave);
    })
    .catch(function(error) {
      console.log("error.data", error.data);
      // res.send({});
    })
    .then(function() {
      console.log("Axios request ended");
    });
};

// const scheduled = schedule.scheduleJob("55 * * * * *", function() {
//   console.log("Scheduled job started");
//   const mongoDB = `mongodb://vincent:${
//     process.env.DB_PASS
//   }@ds125713.mlab.com:25713/wow-api`;
//   mongoose.connect(
//     mongoDB,
//     { useNewUrlParser: true }
//   );
//   const db = mongoose.connection;
//   db.on("error", console.error.bind(console, "mongoDB connection error: "));
//   db.once("open", () => {
//     console.log("Connected to the DB");
//     db.collection("pvpleaderboards").deleteMany({});
//     console.log("Previous documents deleted");
//     getLeaderBoards("2v2");
//     getLeaderBoards("3v3");
//     getLeaderBoards("rbg");
//   });
// });

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

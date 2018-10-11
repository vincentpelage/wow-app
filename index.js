const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const dungeonsAchievements = require("./controllers/dungeonsAchievements");
const raidsAchievements = require("./controllers/raidsAchievements");

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
        res.send({ message: "false" });
      } else {
        console.log("form was validate");
        next();
      }
    });
  } else {
    next();
  }
};

app.use("/dungeonsAchievements", formValidator);
app.use("/raidsAchievements", formValidator);

app.post("/dungeonsAchievements", dungeonsAchievements);
app.post("/raidsAchievements", raidsAchievements);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`WoW App listening on ${port}`);

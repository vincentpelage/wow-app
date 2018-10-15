const mongoose = require("mongoose");

module.exports = function pvpLeaderBoard(req, res) {
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
    db.collection("pvpleaderboards")
      .find({})
      .toArray(function(err, data) {
        if (err) console.log(err);
        if (data) res.send({data: data});
      });
  });
};

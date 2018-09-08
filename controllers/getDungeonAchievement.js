const axios = require("axios");

module.exports = function getDungeonAchievement(req, res) {
  axios
    .get(
      "https://eu.api.battle.net/wow/character/Archimonde/Chouetteman?fields=achievements&locale=fr_FR&apikey=" + process.env.WOW_API_KEY
    )
    .then(function(response) {
      // handle success
      console.log("Got Achievements Datas from API");
      res.send(response.data.achievements.achievementsCompleted);
    })
    .catch(function(error) {
      // handle error
      console.log(error.data);
    })
    .then(function() {
      console.log("Axios request ended");
    });
};

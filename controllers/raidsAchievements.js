const axios = require("axios");

const endpointModifier = require("./utils/endpointModifier");
const pveAchievementsRaidsList = require("./utils/pveAchievementsRaidsList");

module.exports = function raidsAchievements(req, res) {
  const { characterRegion, characterKingdom, characterName } = req.body.form;
  const endpoint = endpointModifier(
    characterRegion,
    characterKingdom,
    characterName
  );
  axios
    .get(endpoint)
    .then(function(response) {
      // handle success
      const apiAchievementsList =
        response.data.achievements.achievementsCompleted;

      const result = pveAchievementsRaidsList.map(obj => {
        return apiAchievementsList.indexOf(obj.id) > -1
          ? { ...obj, done: true }
          : { ...obj, done: false };
      });
      res.send(result);
    })
    .catch(function(error) {
      // handle error
      console.log("error.data", error.data);
      res.send({ error: "Data not found" });
    })
    .then(function() {
      console.log("Axios request ended");
    });
};

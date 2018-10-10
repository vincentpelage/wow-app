const axios = require("axios");

const pveAchievementsRaidsList = [
  {
    name: "Halls of Containment",
    id: 12521,
    type: "heroicRaid",
    desc: "Defeat the following bosses in the first section of Uldir",
    bosses: ["Taloc", "MOTHER", "Zek'voz"]
  },
  {
    name: "Crimson Descent",
    id: 12522,
    type: "heroicRaid",
    desc: "Defeat the following bosses in the first section of Uldir",
    bosses: ["Vectis", "Fetid Devourer", "Zul"]
  },
  {
    name: "Heart of Corruption",
    id: 12523,
    type: "heroicRaid",
    desc:
      "Defeat the following bosses and extinguish the corruption in the lowest reaches of Uldir",
    bosses: ["Mythrax", "G'huun"]
  },
  {
    name: "Taloc",
    id: 12524,
    type: "mythicRaid",
    desc: "Defeat Taloc in Uldir on Mythic difficulty"
  },
  {
    name: "MOTHER",
    id: 12526,
    type: "mythicRaid",
    desc: "Defeat MOTHER in Uldir on Mythic difficulty"
  },
  {
    name: "Zek'voz",
    id: 12527,
    type: "mythicRaid",
    desc: "Defeat Zek'voz in Uldir on Mythic difficulty"
  },
  {
    name: "Vectis",
    id: 12529,
    type: "mythicRaid",
    desc: "Defeat Vectis in Uldir on Mythic difficulty"
  },
  {
    name: "Fetid Devourer",
    id: 12530,
    type: "mythicRaid",
    desc: "Defeat Fetid Devourer in Uldir on Mythic difficulty"
  },
  {
    name: "Zul",
    id: 12531,
    type: "mythicRaid",
    desc: "Defeat Zul Devourer in Uldir on Mythic difficulty"
  },
  {
    name: "Mythrax the Unraveler",
    id: 12532,
    type: "mythicRaid",
    desc: "Defeat Mythrax the Unraveler Devourer in Uldir on Mythic difficulty"
  },
  {
    name: "G'huun",
    id: 12533,
    type: "mythicRaid",
    desc: "Defeat G'huun in Uldir on Mythic difficulty"
  }
];

module.exports = function raidsAchievements(req, res) {
  axios
    .get(
      "https://eu.api.battle.net/wow/character/Archimonde/Ponceman?fields=achievements&locale=fr_FR&apikey=" +
        process.env.WOW_API_KEY
    )
    .then(function(response) {
      // handle success
      console.log("Got Achievements Datas from API");
      const apiAchievementsList =
        response.data.achievements.achievementsCompleted;

      const result = pveAchievementsRaidsList.map(obj => {
        return apiAchievementsList.indexOf(obj.id) > -1
          ? { ...obj, done: true }
          : { ...obj, done: false };
      });
      console.log(result);
      res.send(result);
    })
    .catch(function(error) {
      // handle error
      console.log(error.data);
    })
    .then(function() {
      console.log("Axios request ended");
    });
};

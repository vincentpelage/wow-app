const axios = require("axios");

const raceList = {
  1: "Human",
  2: "Orc",
  3: "Dwarf",
  4: "Night elf",
  5: "Undead",
  6: "Tauren",
  7: "Gnome",
  8: "Troll",
  9: "Goblin",
  10: "Blood elf",
  11: "Draenei",
  22: "Worgen",
  25: "Pandaren",
  26: "Pandaren",
  28: "Highmountain tauren",
  29: "Void-elf",
  30: "Lightforged draenei",
  36: "Maghar-orc"
};

const classList = {
  1: "Warrior",
  2: "Paladin",
  3: "Hunter",
  4: "Rogue",
  5: "Priest",
  6: "Deathknight",
  7: "Shaman",
  8: "Mage",
  9: "Warlock",
  10: "Monk",
  11: "Druid",
  12: "Demon hunter"
};

const genderList = {
  0: "Male",
  1: "Female"
};

const specList = {
  62: "Arcane",
  63: "Fire",
  64: "Frost",
  65: "Holy",
  66: "Protection",
  70: "Retribution",
  102: "Balance",
  103: "Feral",
  104: "Guardian",
  105: "Restoration",
  71: "Arms",
  72: "Fury",
  73: "Protection",
  250: "Blood",
  251: "Frost",
  252: "Unholy",
  253: "Beast Mastery",
  254: "Marksmanship",
  255: "Survival",
  256: "Discipline",
  257: "Holy",
  258: "Shadow",
  259: "Assassination",
  260: "Outlaw",
  261: "Subtlety",
  262: "Elemental",
  263: "Enhancement",
  264: "Restoration",
  265: "Affliction",
  266: "Demonology",
  267: "Destruction",
  268: "Brewmaster",
  269: "Windwalker",
  270: "Mistweaver",
  577: "Havoc",
  581: "Vengeance"
};

module.exports = function pvpLeaderBoard(req, res) {
  axios
    .get(
      "https://eu.api.battle.net/wow/leaderboard/2v2?locale=en_GB&apikey=" +
        process.env.WOW_API_KEY
    )
    .then(function(response) {
      // handle success
      let warriorCount = 0,
        paladinCount = 0;
      response.data.rows.map(obj => {
        if (obj.classId === 1) {
          warriorCount++;
        }
        if (obj.classId === 2) {
          paladinCount++;
        }
      });
      console.log(response.data.rows);
      console.log(warriorCount);
      console.log(paladinCount);
      res.send(response.data.rows);
    })
    .catch(function(error) {
      // handle error
      console.log("error.data", error.data);
      res.send({});
    })
    .then(function() {
      console.log("Axios request ended");
    });
};

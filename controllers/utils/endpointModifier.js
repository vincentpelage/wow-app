module.exports = function(characterRegion, characterKingdom, characterName) {
  return characterRegion === "eu"
    ? "https://" +
        characterRegion +
        ".api.battle.net/wow/character/" +
        characterKingdom +
        "/" +
        characterName +
        "?fields=achievements&locale=fr_FR&apikey=" +
        process.env.WOW_API_KEY
    : "https://" +
        characterRegion +
        ".api.battle.net/wow/character/" +
        characterKingdom +
        "/" +
        characterName +
        "?fields=achievements&locale=en_US&apikey=" +
        process.env.WOW_API_KEY;
};

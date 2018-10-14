// module.exports = specList = {
//     62: "arcane",
//     63: "fire",
//     64: "frostM",
//     65: "holyPal",
//     66: "protection",
//     70: "retribution",
//     102: "balance",
//     103: "feral",
//     104: "guardian",
//     105: "restorationDruid",
//     71: "arms",
//     72: "fury",
//     73: "protectionWar",
//     250: "blood",
//     251: "frostDK",
//     252: "unholy",
//     253: "beastmastery",
//     254: "marksmanship",
//     255: "survival",
//     256: "discipline",
//     257: "holyPri",
//     258: "shadow",
//     259: "assassination",
//     260: "outlaw",
//     261: "subtlety",
//     262: "elemental",
//     263: "enhancement",
//     264: "restorationSham",
//     265: "affliction",
//     266: "demonology",
//     267: "destruction",
//     268: "brewmaster",
//     269: "windwalker",
//     270: "mistweaver",
//     577: "havoc",
//     581: "vengeance"
// };

module.exports = specList = {
  62: ["arcane", "mage"],
  63: ["fire", "mage"],
  64: ["frostMage", "mage"],
  65: ["holy", "paladin"],
  66: ["protection", "paladin"],
  70: ["retribution", "paladin"],
  102: ["balance", "druid"],
  103: ["feral", "druid"],
  104: ["guardian", "druid"],
  105: ["restorationDruid", "druid"],
  71: ["arms", "warrior"],
  72: ["fury", "warrior"],
  73: ["protectionWarrior", "warrior"],
  250: ["blood", "deathknight"],
  251: ["frost", "deathknight"],
  252: ["unholy", "deathknight"],
  253: ["beastmastery", "hunter"],
  254: ["marksmanship", "hunter"],
  255: ["survival", "hunter"],
  256: ["discipline", "priest"],
  257: ["holyPriest", "priest"],
  258: ["shadow", "priest"],
  259: ["assassination", "rogue"],
  260: ["outlaw", "rogue"],
  261: ["subtlety", "rogue"],
  262: ["elemental", "shaman"],
  263: ["enhancement", "shaman"],
  264: ["restoration", "shaman"],
  265: ["affliction", "demonist"],
  266: ["demonology", "demonist"],
  267: ["destruction", "demonist"],
  268: ["brewmaster", "monk"],
  269: ["windwalker", "monk"],
  270: ["mistweaver", "monk"],
  577: ["havoc", "demonhunter"],
  581: ["vengeance", "demonhunter"]
};

const resultFromBDD = [
  {
    discipline: ["priest", "11.69"]
  },
  {
    assassination: ["rogue", "9.87"]
  },
  {
    frostMage: ["mage", "9.21"]
  },
  {
    arms: ["warrior", "6.53"]
  },
  {
    holy: ["paladin", "5.11"]
  },
  {
    balance: ["druid", "5.05"]
  },
  {
    restorationDruid: ["druid", "4.88"]
  }
];

// function renameSpecFn(resultFromBDD) {
//   const newObj = resultFromBDD.map(obj => {
//     let renameSpec = "";
//     switch (Object.keys(obj)[0]) {
//       case "frostMage":
//         renameSpec = "frost";
//         break;
//
//       case "restorationDruid":
//         renameSpec = "restauration";
//         break;
//
//       case "protectionWarrior":
//         renameSpec = "protection";
//         break;
//
//       case "holyPriest":
//         renameSpec = "holy";
//         break;
//
//       default:
//         renameSpec = Object.keys(obj)[0];
//     }
//
//     return {
//       spec: renameSpec,
//       classe: obj[Object.keys(obj)[0]][0],
//       stat: obj[Object.keys(obj)[0]][1]
//     };
//   });
//   return newObj;
// }
//
// const resultFromBDDUpdated = renameSpecFn(resultFromBDD);
// console.log(resultFromBDDUpdated);

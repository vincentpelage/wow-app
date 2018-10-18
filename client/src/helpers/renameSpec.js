// const resultFromBDD = [
//   {
//     discipline: ["priest", "11.69"]
//   },
//   {
//     assassination: ["rogue", "9.87"]
//   },
//   {
//     frostMage: ["mage", "9.21"]
//   },
//   {
//     arms: ["warrior", "6.53"]
//   },
//   {
//     holy: ["paladin", "5.11"]
//   },
//   {
//     balance: ["druid", "5.05"]
//   },
//   {
//     restorationDruid: ["druid", "4.88"]
//   }
// ];

export const renameSpec = resultFromBDD => {
  const newObj = resultFromBDD.map(obj => {
    let renameSpec = "";
    switch (Object.keys(obj)[0]) {
      case "frostMage":
        renameSpec = "frost";
        break;

      case "restorationDruid":
        renameSpec = "restoration";
        break;

      case "protectionWarrior":
        renameSpec = "protection";
        break;

      case "holyPriest":
        renameSpec = "holy";
        break;

      default:
        renameSpec = Object.keys(obj)[0];
    }

    return {
      spec: renameSpec,
      class: obj[Object.keys(obj)[0]][0],
      stat: obj[Object.keys(obj)[0]][1]
    };
  });
  return newObj;
};

const getClassAverage = require("./getClassAverage");

module.exports = async function(response, playersCount, classList) {
  try {
    function getAllClassAverage() {
      return new Promise(resolve => {
        const arrPromises = {};
        Object.entries(classList).map(async (arr, key) => {
          const className = arr[1];
          arrPromises[className] = await getClassAverage(
            key + 1,
            response,
            playersCount
          );
          if (
            Object.keys(arrPromises).length === Object.keys(classList).length
          ) {
            resolve(arrPromises);
          }
        });
      });
    }

    async function sortResult() {
      try {
        const result = await getAllClassAverage();
        function sort(obj) {
          return Object.keys(obj).sort(function(a, b) {
            return obj[b] - obj[a];
          });
        }
        const sorted = sort(result);
        return sorted.map(function(key) {
          return { [key]: result[key] };
        });
      } catch (e) {
        console.log(e);
      }
    }
    return sortResult();
    // const warriorAveragePromise = getClassCount(1, response, playersCount);
    // const paladinAveragePromise = getClassCount(2, response, playersCount);
    // const hunterAveragePromise = getClassCount(3, response, playersCount);
    // const rogueAveragePromise = getClassCount(4, response, playersCount);
    // const priestAveragePromise = getClassCount(5, response, playersCount);
    // const deathknightAveragePromise = getClassCount(6, response, playersCount);
    // const shamanAveragePromise = getClassCount(7, response, playersCount);
    // const mageAveragePromise = getClassCount(8, response, playersCount);
    // const warlockAveragePromise = getClassCount(9, response, playersCount);
    // const monkAveragePromise = getClassCount(10, response, playersCount);
    // const druidAveragePromise = getClassCount(11, response, playersCount);
    // const demonHunterAveragePromise = getClassCount(12, response, playersCount);
    // // console.log(test)
    // const result = {};
    // result["warrior"] = await warriorAveragePromise;
    // result["paladin"] = await paladinAveragePromise;
    // result["hunter"] = await hunterAveragePromise;
    // result["rogue"] = await rogueAveragePromise;
    // result["priest"] = await priestAveragePromise;
    // result["deathknight"] = await deathknightAveragePromise;
    // result["shaman"] = await shamanAveragePromise;
    // result["mage"] = await mageAveragePromise;
    // result["warlock"] = await warlockAveragePromise;
    // result["monk"] = await monkAveragePromise;
    // result["druid"] = await druidAveragePromise;
    // result["demonhunter"] = await demonHunterAveragePromise;
    // console.log("result", result);
    // function sort(obj) {
    //     return Object.keys(obj).sort(function(a, b) {
    //         return obj[b] - obj[a];
    //     });
    // }
    // const sorted = sort(result);
    // return sorted.map(function(key) {
    //     return {[key]: result[key]}
    // });
  } catch (e) {
    console.error(e);
  }
};

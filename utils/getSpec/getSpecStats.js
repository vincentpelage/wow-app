const getSpecAverage = require("./getSpecAverage");

module.exports = async function(response, playersCount, specList) {
  try {
    function getAllSpecAverage() {
      return new Promise(resolve => {
        const specPromises = {};
        Object.entries(specList).map(async (arr, key) => {
          const specName = arr[1];
          const newKey = arr[0];
          specPromises[specName] = await getSpecAverage(
            newKey,
            response,
            playersCount
          );
          if (
            Object.keys(specPromises).length === Object.keys(specList).length
          ) {
            resolve(specPromises);
          }
        });
      });
    }

    async function sortResult() {
      try {
        const result = await getAllSpecAverage();
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
  } catch (e) {
    console.error(e);
  }
};

const getSpecAverage = require("./getSpecAverage");

module.exports = async function(response, playersCount, specList) {
  try {
    function getAllSpecAverage() {
      return new Promise(resolve => {
        const specPromises = {};
        Object.entries(specList).map(async (arr, key) => {
          const specName = arr[1][0];
          const specClasse = arr[1][1];
          const newKey = arr[0];
          specPromises[specName] = [];
            specPromises[specName].push(specClasse);
            const result = await getSpecAverage(
                newKey,
                response,
                playersCount
            );
            specPromises[specName].push(result);
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
        // console.log(result)
        function sort(obj) {
          return Object.keys(obj).sort(function(a, b) {
            return obj[b][1] - obj[a][1];
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

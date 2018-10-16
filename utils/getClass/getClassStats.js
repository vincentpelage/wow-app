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
  } catch (e) {
    console.error(e);
  }
};

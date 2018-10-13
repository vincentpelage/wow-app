module.exports = function(id, response, playersCount) {
    return new Promise(resolve => {
        const classTypeCount = response.data.rows.filter(obj => Number(obj.classId) === Number(id))
            .length;
        const result = ((classTypeCount / playersCount) * 100).toFixed(2);
        resolve(result);
    });
}

// function getSpecCount(id, classType) {
//   return new Promise(resolve => {
//     const classTypeCount = response.data.rows.filter(
//       obj => obj.specId === id
//     ).length;
//     const result = ((classTypeCount / playersCount) * 100).toFixed(2);
//     resolve(result);
//   });
// }
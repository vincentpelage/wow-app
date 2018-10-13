module.exports = function(id, response, playersCount) {
    return new Promise(resolve => {
        const specTypeCount = response.data.rows.filter(obj => Number(obj.specId) === Number(id)).length;
        const result = ((specTypeCount / playersCount) * 100).toFixed(2);
        resolve(result);
    });
}
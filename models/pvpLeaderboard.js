const mongoose = require('mongoose');

const pvpLeaderboardSchema = mongoose.Schema({
    "2v2": Object,
    "3v3": Object,
    "rbg": Object,
    "2v2stats": Object,
    "3v3stats": Object,
    "rbgstats": Object,
});

module.exports = mongoose.model('pvpLeaderboard', pvpLeaderboardSchema);
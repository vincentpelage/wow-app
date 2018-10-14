const mongoose = require('mongoose');

const pvpLeaderboardSchema = mongoose.Schema({
    "eu": Object,
    "us": Object,
});

module.exports = mongoose.model('pvpLeaderboard', pvpLeaderboardSchema);
const Filecoin = require('../../../src')

module.exports = () => Filecoin({ apiAddr: process.env.FILECOIN_API_ADDR })

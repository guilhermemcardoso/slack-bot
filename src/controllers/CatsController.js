const SlackService = require('../services/slack');
const CatsService = require('../services/cats');

module.exports = {
    showCatsRandomFact: async function(channel) {

        const fact = await CatsService.getCatsRandomFact();
        SlackService.sendMessage(channel, fact);
    }
};
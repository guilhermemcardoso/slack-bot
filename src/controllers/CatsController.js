const SlackService = require('../services/slack');
const CatsService = require('../services/cats');

module.exports = {
    async showCatsRandomFact(channel) {

        const fact = await CatsService.getCatsRandomFact();
        SlackService.sendMessage(channel, fact);
    }
};
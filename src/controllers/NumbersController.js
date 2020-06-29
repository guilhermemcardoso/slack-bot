const SlackService = require('../services/slack');
const NumbersService = require('../services/numbers');

module.exports = {
	async showNumberRandomFact(channel, number) {
		const fact = await NumbersService.getNumberRandomFact(number);
		SlackService.sendMessage(channel, fact);
	},
};

const SlackService = require('../services/slack');
const NumbersService = require('../services/numbers');
const BobMarleyService = require('../services/bobMarley');

module.exports = {
	async showNumberRandomFact(channel, number) {
		const fact =
			number === '420'
				? await await BobMarleyService.getBobMarleyRandomSentence()
				: await NumbersService.getNumberRandomFact(number);
		SlackService.sendMessage(channel, fact);
	},
};

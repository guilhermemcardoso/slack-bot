const SlackService = require('../services/slack');
const NumbersService = require('../services/numbers');
const ReggaeService = require('../services/reggae');

module.exports = {
	async showNumberRandomFact(channel, number) {
		const fact =
			number === '420'
				? await await ReggaeService.getReggaeRandomSentence()
				: await NumbersService.getNumberRandomFact(number);
		SlackService.sendMessage(channel, fact);
	},
};

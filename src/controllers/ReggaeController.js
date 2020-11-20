const SlackService = require('../services/slack');
const ReggaeService = require('../services/reggae');

module.exports = {
	async showRandomReggaeSentence(channel) {
		const sentence = await await ReggaeService.getReggaeRandomSentence();
		SlackService.sendMessage(channel, sentence);
	},
};

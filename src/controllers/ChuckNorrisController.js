const SlackService = require('../services/slack');
const ChuckNorrisService = require('../services/chuckNorris');

module.exports = {
	showChuckNorrisRandomJoke: async function (channel) {
		const joke = await ChuckNorrisService.getChuckNorrisRandomJoke();
		SlackService.sendMessage(channel, joke);
	},
};

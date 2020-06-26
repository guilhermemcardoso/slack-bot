const HelpController = require('./HelpController');
const ChuckNorrisController = require('./ChuckNorrisController');
const NumbersController = require('./NumbersController');
const CatsController = require('./CatsController');
const MessageUtils = require('../utils/message');

module.exports = {
	handleMessage: function (message, channel) {
		const command = MessageUtils.getCommandFromMessage(message);
		switch (command.toUpperCase()) {
			case 'AJUDA':
			case 'HELP':
				HelpController.showHelp(channel);
				break;
			case 'CHUCK':
				if (
					MessageUtils.getFirstParamFromMessage(message) &&
					MessageUtils.getFirstParamFromMessage(message).toUpperCase() === 'NORRIS'
				)
				ChuckNorrisController.showChuckNorrisRandomJoke(channel);
				break;
			case 'NUMERO':
			case 'NUMBER':
				NumbersController.showNumberRandomFact(
					channel,
					MessageUtils.getFirstParamFromMessage(message)
				);
				break;
			case 'GATO':
			case 'CAT':
				CatsController.showCatsRandomFact(channel);
				break;
		}
	},
};

const HelpController = require('./HelpController');
const ChuckNorrisController = require('./ChuckNorrisController');
const NumbersController = require('./NumbersController');
const CatsController = require('./CatsController');
const DogsController = require('./DogsController');
const ReggaeController = require('./ReggaeController');
const BitcoinController = require('./BitcoinController');
const MessageUtils = require('../utils/message');

module.exports = {
	handleMessage(message, channel) {
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
			case 'CACHORRO':
			case 'DOG':
				DogsController.showDogsRandomImage(channel);
				break;
			case 'BITCOIN':
			case 'BTC':
				BitcoinController.showBitcoinCurrentPrice(channel);
				break;
			case 'REGGAE':
			case '420':
				ReggaeController.showRandomReggaeSentence(channel);
				break;
		}
	},
};

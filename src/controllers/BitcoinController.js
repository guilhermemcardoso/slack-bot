const SlackService = require('../services/slack');
const BitcoinService = require('../services/bitcoin');

module.exports = {
    async showBitcoinCurrentPrice(channel) {

        const message = await BitcoinService.getBitcoinCurrentPrice();
        SlackService.sendMessage(channel, message);
    }
};
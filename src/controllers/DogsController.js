const SlackService = require('../services/slack');
const DogsService = require('../services/dogs');

module.exports = {
    async showDogsRandomImage(channel) {

        const imageURL = await DogsService.getDogsRandomImage();
        SlackService.sendMessage(channel, imageURL);
    }
};
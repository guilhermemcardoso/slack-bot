const SlackService = require('../services/slack');

module.exports = {
	showHelp(channel) {
		const message = `
        Eu sou um bot meio lesado e só respondo se você me chamar. Ainda tô aprendendo os rolê, então só sei esses comandos aqui ó:\n
        - *ajuda ou help*: abro esse menu que você tá vendo agora, então num paga de loko denovo e pede isso denovo não hein.\n
        - *chuck norris*: te mando uma frase aleatória desse maluco fera aí.\n
        - *numero ou number*: digita esse comando seguido de um número, que eu te falo um fato aleatório sobre esse número.\n
        - *gato ou cat*: te mando um fato aleatório sobre gatos.\n
        - *cachorro ou dog*: te mando uma imagem aleatória de cachorros.\n
        - *btc ou bitcoin*: te mando a cotação atual do bitcoin em real e em dólar.\n
        - *reggae ou 420*: te mando uma frase fera pra melhorar seu dia.\n
    `;

		SlackService.sendMessage(channel, message);
	},
};

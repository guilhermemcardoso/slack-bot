const axios = require('axios').default;

module.exports = {
	async getBitcoinCurrentPrice() {
		try {
			const response = await axios.get(
				'https://api.coindesk.com/v1/bpi/currentprice/BRL.json'
			);
			const data = response.data;
			const bpi = data.bpi;
			const priceUSD = bpi.USD.rate;
			const priceBRL = bpi.BRL.rate;
			const message = 'De acordo com a CoinDesk, o bitcoin está valendo atualmente R$ ' + priceBRL + ' (US$ ' + priceUSD + ').';
			return message;
		} catch (err) {
			return null;
		}
	},
};

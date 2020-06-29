const axios = require('axios').default;

module.exports = {
	async getChuckNorrisRandomJoke() {
		try {
			const response = await axios.get(
				'https://api.chucknorris.io/jokes/random'
			);
			const data = response.data;
			return data.value;
		} catch (err) {
			return null;
		}
	},
};

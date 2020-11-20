const axios = require('axios').default;

module.exports = {
	async getDogsRandomImage() {
		try {
			const response = await axios.get(
				'https://dog.ceo/api/breeds/image/random'
			);
			const data = response.data;
			const image = data.message;
			return image;
		} catch (err) {
			return null;
		}
	},
};

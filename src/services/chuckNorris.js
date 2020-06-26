const axios = require('axios').default;

module.exports = {
getChuckNorrisRandomJoke: async function() {
	try {
		const response = await axios
		.get('https://api.chucknorris.io/jokes/random');
		const data = response.data;
		return data.value;
	} catch(err) {
		return null;
	}
}};

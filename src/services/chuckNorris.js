const axios = require('axios').default;

export const getChuckNorrisRandomJoke = async () => {
	try {
		const { data } = await axios
		.get('https://api.chucknorris.io/jokes/random');
		return data.value;
	} catch(err) {
		return null;
	}
};

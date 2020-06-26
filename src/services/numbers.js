const axios = require('axios').default;

module.exports = {
getNumberRandomFact: async function(number) {
	try {
		const response = await axios
		.get('http://numbersapi.com/' + number);

		return response.data;
	} catch(err) {
		return null;
	}
}};

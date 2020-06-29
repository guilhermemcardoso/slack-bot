const axios = require('axios').default;

module.exports = {
async getNumberRandomFact(number) {
	try {
		const response = await axios
		.get('http://numbersapi.com/' + number);

		return response.data;
	} catch(err) {
		return null;
	}
}};

const axios = require('axios').default;

export const getNumberRandomFact = async (number) => {
	console.log('ENTROU 3', number);
	try {
		const { data } = await axios
		.get('http://numbersapi.com/' + number);
		return data;
	} catch(err) {
		return null;
	}
};

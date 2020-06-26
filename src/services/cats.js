const axios = require('axios').default;

export const getCatsRandomFact = async () => {
	try {
		const { data } = await axios
		.get('https://cat-fact.herokuapp.com/facts');

		const facts = data.all;
		const size = facts.length;
		const randomIndex = Math.floor(Math.random() * size); 
		return facts[randomIndex].text;
	} catch(err) {
		return null;
	}
};

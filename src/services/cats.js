const axios = require('axios').default;

module.exports = {
getCatsRandomFact: async function() {
	try {
		const response = await axios
		.get('https://cat-fact.herokuapp.com/facts');
		const data = response.data;
		const facts = data.all;
		const size = facts.length;
		const randomIndex = Math.floor(Math.random() * size); 
		return facts[randomIndex].text;
	} catch(err) {
		return null;
	}
}};

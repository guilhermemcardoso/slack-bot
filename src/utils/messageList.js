const MAX_SIZE = 200;
let index = MAX_SIZE;
let order = 'desc';
const messageList = [];

module.exports = {
	wasAnswered(messageId) {
		const index = messageList.findIndex((id) => id === messageId);
		if (index >= 0) return true;
		return false;
	},

	add(messageId) {
		if (messageList.length < MAX_SIZE) {
			messageList.push(messageId);
			return;
		}

		if (index === MAX_SIZE) {
			index = MAX_SIZE - 1;
			order = 'desc';
		}

		if (index === -1) {
			index = 0;
			order = 'asc';
		}

		messageList[index] = messageId;
		order === 'desc' ? index-- : index++;
	},
};

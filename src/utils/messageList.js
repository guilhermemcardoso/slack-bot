module.exports = {

	wasAnswered: function (messageList, messageId) {
		const index = list.findIndex((id) => id === messageId);
		if (index >= 0) return true;
		return false;
	},

	add: function (messageList, messageId) {
		if (this.getSize() < MAX_SIZE) {
			list.push(messageId);
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

		list[index] = messageId;
		order === 'desc' ? index-- : index++;
	},
};

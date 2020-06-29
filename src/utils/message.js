module.exports = {
	removeUserIdFromMessage(message) {
		return message.replace(/<@U[A-Z0-9]+>/g, '').trim();
	},

	getFirstParamFromMessage(message) {
		const parts = message.trim().split(' ');
		return parts[1];
	},

	getCommandFromMessage(message) {
		const parts = message.trim().split(' ');
		return parts[0];
	}
};

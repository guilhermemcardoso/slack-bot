module.exports = {
	removeUserIdFromMessage: function (message) {
		return message.replace(/<@U[A-Z0-9]+>/g, '').trim();
	},

	getFirstParamFromMessage: function (message) {
		const parts = message.trim().split(' ');
		return parts[1];
	},

	getCommandFromMessage: function (message) {
		const parts = message.trim().split(' ');
		return parts[0];
	}
};

const axios = require('axios').default;

module.exports = {
sendMessage: function(channel, message) {
	axios
		.post(
			'https://slack.com/api/chat.postMessage',
			{
				text: message,
				channel: channel,
				username: process.env.SLACK_BOT_DISPLAY_NAME,
				icon_url: process.env.SLACK_BOT_AVATAR_URL
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.SLACK_BOT_USER_OAUTH_ACCESS_TOKEN}`,
				},
			}
		)
		.then(function (response) {
			console.log('Maicon Bot respondeu à mensagem');
		})
		.catch(function (error) {
			console.log('Erro ao enviar mensagem para o Slack');
		});
}};

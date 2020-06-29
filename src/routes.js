const express = require('express');
const routes = express.Router();

const MainController = require('./controllers/MainController');
const MessageUtils = require('./utils/message');
const MessageList = require('./utils/messageList');

routes.get('/', (req, res) => {
    res.send('Hello World');
});

routes.post('/', (req, res) => {
    
    const challenge = req.body.challenge;
    const event = req.body.event;

    if(challenge) res.send(challenge);
    res.sendStatus(200);

    if(event.type !== 'app_mention') return;

    const messageId = req.body.event_id;
    const channel = event.channel;
    const text = event.text;
    
    if(MessageList.wasAnswered(messageId)) return;
    const message = MessageUtils.removeUserIdFromMessage(text);

    MessageList.add(messageId);
    MainController.handleMessage(message, channel);
});

module.exports = routes;
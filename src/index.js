require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const MainController = require('./controllers/MainController');
const MessageUtils = require('./utils/message');
const MessageList = require('./utils/messageList');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const MAX_SIZE = 200;
let index = MAX_SIZE;
let order = 'desc';
const messageList = [];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    
    const challenge = req.body.challenge;
    if(challenge) res.send(challenge);

    const event_id = req.body.event_id;
    const event = req.body.event;
    const type = event.type;
    const channel = event.channel;
    const text = event.text;
    
    if(type !== 'app_mention') return;
    
    const messageIndex = messageList.findIndex(function(id) {return id === event_id});
    if (messageIndex >= 0) return;

    const message = MessageUtils.removeUserIdFromMessage(text);

    MainController.handleMessage(message, channel);
    
    if (messageList.length < MAX_SIZE) {
        messageList.push(event_id);
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

    messageList[index] = event_id;
    order === 'desc' ? index-- : index++;
    res.sendStatus(200);
});

app.listen(PORT);

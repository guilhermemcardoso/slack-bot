require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import { handleMessage } from './controllers/MainController';
import { removeUserIdFromMessage, MessageList } from './utils/message';

const PORT = process.env.APP_PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const messageList = new MessageList();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    const {event_id, event} = req.body;
    const {type, channel, text} = event;
    
    if(type !== 'app_mention') return;
    if(messageList.wasAnswered(event_id)) return;

    const message = removeUserIdFromMessage(text);

    handleMessage(message, channel);
    messageList.add(event_id);
});

app.listen(PORT, () => console.log(`Maicon Bot listening at port ${PORT}.`));

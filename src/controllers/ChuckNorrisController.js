import { sendMessage } from '../services/slack';
import { getChuckNorrisRandomJoke } from '../services/chuckNorris';

export const showChuckNorrisRandomJoke = async (channel) => {

    const joke = await getChuckNorrisRandomJoke();
    sendMessage(channel, joke);
}
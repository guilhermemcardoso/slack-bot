import { sendMessage } from '../services/slack';
import { getCatsRandomFact } from '../services/cats';

export const showCatsRandomFact = async (channel) => {

    const fact = await getCatsRandomFact();
    sendMessage(channel, fact);
}
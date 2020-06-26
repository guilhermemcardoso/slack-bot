import { sendMessage } from '../services/slack';
import { getNumberRandomFact } from '../services/numbers';

export const showNumberRandomFact = async (channel, number) => {
    console.log('ENTROU 2');
    const fact = await getNumberRandomFact(number);
    console.log('FACT', fact);
    sendMessage(channel, fact);
}
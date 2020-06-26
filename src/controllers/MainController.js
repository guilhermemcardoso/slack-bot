import { showHelp } from './HelpController';
import { showChuckNorrisRandomJoke } from './ChuckNorrisController';
import { showNumberRandomFact } from './NumbersController';
import { showCatsRandomFact } from './CatsController';
import {
	getCommandFromMessage,
	getFirstParamFromMessage,
} from '../utils/message';

export const handleMessage = (message, channel) => {
	const command = getCommandFromMessage(message);
	switch (command.toUpperCase()) {
		case 'AJUDA':
		case 'HELP':
            showHelp(channel);
            break;
		case 'CHUCK':
			if (
				getFirstParamFromMessage(message) &&
				getFirstParamFromMessage(message).toUpperCase() === 'NORRIS'
			)
                showChuckNorrisRandomJoke(channel);
            break;
		case 'NUMERO':
        case 'NUMBER':
            showNumberRandomFact(channel, getFirstParamFromMessage(message));
            break;
        case 'GATO':
        case 'CAT':
            showCatsRandomFact(channel);
            break;
	}
};

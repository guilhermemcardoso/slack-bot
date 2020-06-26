export const removeUserIdFromMessage = message => {
    return message.replace(/<@U[A-Z0-9]+>/g, '').trim();
}

export const getFirstParamFromMessage = (message) => {
    const parts = message.trim().split(' ');
    return parts[1];
}

export const getCommandFromMessage = (message) => {
    const parts = message.trim().split(' ');
    return parts[0];
}

export class MessageList {
    constructor() {
        const MAX_SIZE = 200;

        let list = [];
        let index = MAX_SIZE;
        let order = 'desc'; 

        this.getSize = function() {
            return list.length;
        }

        this.wasAnswered = function(messageId) {
            const index = list.findIndex(id => id === messageId);
            if(index >= 0) return true;
            return false;
        }

        this.add = function(messageId) {
            if(this.getSize() < MAX_SIZE) {
                list.push(messageId);
                return;
            }

            if(index === MAX_SIZE) {
                index = MAX_SIZE - 1;
                order = 'desc';
            }

            if(index === -1) {
                index = 0;
                order = 'asc';
            }

            list[index] = messageId;
            order === 'desc' ? index-- : index++;
        }
    }
}
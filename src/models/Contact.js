

export default class Contact {

    /**
     * 
     * @param {number} userId 
     * @param {number} contactId 
     * @param {string} lastMessage 
     * @param {Date} lastMessageDate 
     */
    constructor(userId, contactId, lastMessage, lastMessageDate, ) {
        this.userId = userId;
        this.contactId = contactId;
        this.lastMessage = lastMessage;
        this.lastMessageDate = lastMessageDate;
    }

    getUserId() {
        return this.userId;
    }

    getContactId() {
        return this.contactId;
    }

    getLastMessage() {
        return this.lastMessage;
    }

    getLastMessageDate() {
        return this.lastMessageDate;
    }
    
}
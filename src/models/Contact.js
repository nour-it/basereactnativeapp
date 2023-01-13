

export default class Contact {

    /**
     * 
     * @param {number} number 
     * @param {number} name 
     * @param {string} lastMessageContent 
     * @param {Date} lastMessageDate 
     * @param {number} id 
     */
    constructor(number, name, lastMessageContent, lastMessageDate, id) {
        this.number = number;
        this.name = name;
        this.lastMessageContent = lastMessageContent;
        this.lastMessageDate = lastMessageDate;
        this.id = id
    }

    static fromObject (contact) {
        return new Contact(contact.number, contact.name, contact.lastMessageContent, contact.lastMessageDate, contact.id)
    }
    
} 
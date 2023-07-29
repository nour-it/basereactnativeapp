

export default class Contact {

    /**
     * 
     * @param {number} number 
     * @param {number} name 
     * @param {string} lastMessageContent 
     * @param {Date} lastMessageDate 
     * @param {number} id 
     */
    constructor(number, name, lastMessageContent, lastMessageDate, id, selected) {
        this.number = number;
        this.name = name;
        this.lastMessageContent = lastMessageContent;
        this.lastMessageDate = lastMessageDate;
        this.id = id
        this.selected = selected || false
    }

    static fromObject (contact) {
        return new Contact(contact.number, contact.name, contact.lastMessageContent, contact.lastMessageDate, contact.id, contact.selected)
    }
    
} 
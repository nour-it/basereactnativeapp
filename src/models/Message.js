import Contact from "./Contact";


export default class Message {

    /**
     * 
     * @param {number} fromId 
     * @param {number} toId 
     * @param {string} content 
     * @param {Date} date 
     * @param {string} file 
     */
    constructor(fromId, toId, content, date, file, id) {
        this.fromId = fromId;
        this.toId = toId;
        this.content = content;
        this.date = date;
        this.file = file;
        this.id = id
    }

    /**
     * 
     * @param {Contact} contact 
     * @param {string} message 
     * @return {Message}
     */
    static fromContact (contact, message) {
        // return new Message("me", contact.user_id, message.content, (new Date()).getTime(), message.uri);
        return {
            fromId: "me",
            toId: contact.user_id,
            content: message.content,
            date: (new Date()).getTime(),
            file: message.uri,
            type: message.type
        }
    }

    
}
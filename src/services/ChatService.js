import axios from "axios";
import Message from "../models/Message";
import Service from "./Service";

export default class ChatService extends Service {

    static CONTACT_URL = "/handledata.php";

    /**
     * 
     * @param {String} from_id 
     * @param {String} to_id 
     * @returns {Promise}
     */
    static async getMessagesByAxios (from_id = 4, to_id = 3) {
        let messages = [];
        const post = new FormData();
        post.append("from_id", from_id);
        post.append("command", "loadChatData");
        post.append("to_id", to_id);
        try {
            let res = await axios({
                url: this.ENTRY_POINT + this.CONTACT_URL,
                method: "POST",
                data: post,
                headers: {
                    'content-type': "multipart/form-data"
                }
            })
            // return res.data.messages;
            messages = res.data.messages.map((m, index) => new Message(m.from_id, m.to_id, m.text, m.date, m.file_url, m.id));
            return messages;
        } catch(e) {
            console.error(" erreur axios ", e)
        }

    }


    static async getContactByFecth () {

    }

}


import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "chatStore",
  initialState: {
    contacts: `[{"number":"552","name":"Why","lastMessageContent":"No Message Yet !","lastMessageDate":1673450861835},{"number":"898","name":"Cht","lastMessageContent":"No Message Yet !","lastMessageDate":1673450999445},{"number":"5588","name":"Nour","lastMessageContent":"No Message Yet !","lastMessageDate":1673455313286},{"number":"85566","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1673455347661},{"number":"86","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1673455355761},{"number":"66","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1673455362060},{"number":"074","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1673455369069},{"number":"655","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1673455375154},{"number":"98456","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1673455381135},{"number":"845","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1673455388158},{"number":"8665","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1673455401389}]`,
    chats: `["Gxt", "Hu", "Ijf", "Chg", "Chu", "Igxf", "Ffyh", "Ffyh", "Ffyhgsjsk", "Gdudhd", "Gsusovdhdh", "Yuuuuu", "Q", "Yxfy", "Gfuj", " Wvvc", "Gwfhb", "Csksvwkkkdld", "BJwjshduebd", "Xgjk"]`,
    // chats: "[]"
  },
  reducers: {
    addMessages (state, action) {
      let chats = JSON.parse(state.chats)
      chats.push(action.payload)
      return {
        ...state,
        chats: JSON.stringify(chats)
      };
    },
    addContacts (state, action) {
      return {
        ...state,
        contacts: action.payload
      };
    },

    getContacts(state, action) {
      return state.contacts;
    },
  },
});

export const { addMessages, addContacts, getContacts } = slice.actions;

export default slice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const slice = createSlice({
  name: "chatStore",
  initialState: {
    contacts: `[{"id":6,"lastMessageContent":"No Message Yet !","lastMessageDate":1690590030094,"name":"Cvvj","number":"Fghhcc"},{"id":5,"lastMessageContent":"No Message Yet !","lastMessageDate":1690590023648,"name":"Fxccc","number":"Dchui"},{"id":4,"lastMessageContent":"No Message Yet !","lastMessageDate":1690590017269,"name":"Fcccc","number":"Ccvj"},{"id":3,"lastMessageContent":"No Message Yet !","lastMessageDate":1690590011338,"name":"Fcvh","number":"Fghh. Vv"},{"number":"91108834","name":"Seydou","lastMessageContent":"No Message Yet !","lastMessageDate":1690564557967,"id":1,"selected":false},{"number":"Fcvj","name":"Rfgg","lastMessageContent":"No Message Yet !","lastMessageDate":1690589998075,"id":2,"selected":false},{"number":"Zfjkbb","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1690594240516,"id":7},{"number":"Xhjjlnvcc","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1690594246816,"id":8},{"number":"Wghib. Xx","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1690594253293,"id":9},{"number":"Xuinbc","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1690594258915,"id":10},{"number":"Fcwwjik","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1690594266762,"id":11},{"number":"Fgkk cc","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1690594272219,"id":12},{"number":"Fcwgjk","name":null,"lastMessageContent":"No Message Yet !","lastMessageDate":1690594283517,"id":13}]`,
    chats: "[]",
    contactCount: 1,
  },
  reducers: {
    addMessages(state, action) {
      let chats = JSON.parse(state.chats)
      chats.push(action.payload)
      return {
        ...state,
        chats: JSON.stringify(chats)
      };
    },
    addContacts(state, action) {
      return {
        ...state,
        contacts: action.payload,
        contactCount: state.contactCount + 1
      };
    },

    getContacts(state, action) {
      return state.contacts;
    },
  },
});

export function setContacts(chatStore, contacts) {
  const storedContacts = JSON.parse(chatStore.contacts);
  const newContacts = storedContacts.filter((oldContact, index) => !contacts.find(newContact => newContact.id == oldContact || newContact.number == oldContact.number))
  contacts.map(c => {
    c.id = newContacts.length + 1;
    newContacts.push(c)
    return c;
  })
  return newContacts;
}

export const { addMessages, addContacts, getContacts } = slice.actions;

export default slice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { Platform } from "expo-modules-core";

const slice = createSlice({
  name: "chatStore",
  initialState: {
    contacts: "",
    chats: "",
  },
  reducers: {
    addMessages (state, action) {
      return {
        ...state,
        chats: action.payload
      };
    },
    addContacts (state, action) {
      return {
        ...state,
        contacts: action.payload
      };
    }
  },
});

export const { addMessages, addContacts } = slice.actions;

export default slice.reducer;
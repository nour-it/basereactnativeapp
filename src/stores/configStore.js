import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const LIGHT = 'light';
export const DARK = 'dark';

const slice = createSlice({
  name: "chatStore",
  initialState: {
    notification: ``,
    theme: `${LIGHT}`,
  },
  reducers: {
    setTheme(state, action) {
      console.log(action)
      return { ...state, theme: action.payload }
    }
  },
});

export const getCurrentTheme = () => {
  const store = useSelector((state) => state.configStore);
  return store.theme;
}

export const { setTheme } = slice.actions;

export default slice.reducer;
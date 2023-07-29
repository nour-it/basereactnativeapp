import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const LIGHT = 'light';
export const DARK = 'dark';

const slice = createSlice({
  name: "chatStore",
  initialState: {
    notification: true,
    theme: `${LIGHT}`,
    showTabBar: true,
  },
  reducers: {
    setTheme(state, action) {
      return { ...state, theme: action.payload }
    },
    toggleTabBar(state, action) {
      return {
        ...state, 
        showTabBar: !state.showTabBar
      }
    }
  },
});

export const getCurrentTheme = () => {
  const store = useSelector((state) => state.configStore);
  return store.theme;
}
 

export const { setTheme, toggleTabBar } = slice.actions;

export default slice.reducer;
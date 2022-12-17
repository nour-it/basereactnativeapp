import { configureStore } from "@reduxjs/toolkit";


import chatStore from "./chatStore";


export default configureStore({
  reducer: { chatStore },
});

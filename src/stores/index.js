import { configureStore } from "@reduxjs/toolkit";


import chatStore from "./chatStore";
import configStore from "./configStore";


export default configureStore({
  reducer: { chatStore, configStore },
});

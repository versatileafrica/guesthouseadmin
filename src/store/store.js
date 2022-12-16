import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../feature/ActiveSide";

export default configureStore({
    reducer: {
        sidebar: sidebarReducer,
    },
    // devTools: false,
})
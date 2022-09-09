import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter"
import userReducer from "./auth"

export default configureStore({
    reducer: {
        counter: counterReducer,
        auth: userReducer
    }
})
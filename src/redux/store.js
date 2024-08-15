
import {configureStore} from "@reduxjs/toolkit";
import {postsAPI} from "./postsAPI/postsAPI.js";

const store = configureStore({
    reducer:{
        [postsAPI.reducerPath]: postsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsAPI.middleware)
})

export default store;
import {configureStore} from "@reduxjs/toolkit";
import articles from "./slices/articleSlices";

export const store = configureStore({
    reducer: {
        articles
    }
})

import {configureStore} from "@reduxjs/toolkit";
import articles from "./slices/articlesSlices";
import article from "./slices/articleSlice";

export const store = configureStore({
    reducer: {
        articles,
        article
    }
})



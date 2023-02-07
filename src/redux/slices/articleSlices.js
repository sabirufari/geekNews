import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {links} from "./links";
import axios from "axios";

const initialState = {
    articles: [],
    load: false
}

export const getArticles = createAsyncThunk('articles',  async () => {
    const {data} = await axios.get(links.BASE_URL)
    console.log(data)
    return data;
})

const articlesSlices = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers(building) {
        building
            .addCase(getArticles.pending, (state) =>{
                state.load = false;
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.load = true;
            })
    }
})

export default articlesSlices.reducer;
export const articlesSelect = state => state?.articles?.articles;
export const loadArticlesSelect = state => state?.articles?.load;

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {links} from './links'
import axios from "axios";

const initialState = {
    article: {},
    load: true
}

export const getArticle = createAsyncThunk('article', async (id) => {
    const {data} = await axios.get(links.BASE_URL+id)
    return data
})

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers(building) {
        building
            .addCase(getArticle.pending, (state) => {
                state.load = true
            })
            .addCase(getArticle.fulfilled, (state, action) => {
                state.article = action.payload
                state.load = false
            })
    }
})

export default articleSlice.reducer;
export const articleSelect = state => state?.article?.article
export const loadArticleSelect = state => state?.article?.load
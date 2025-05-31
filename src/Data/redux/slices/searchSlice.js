import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: null,
    resultdata: []
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        fetchSearchStart: (state)=> {
           state.loading = true;
           state.error = null
        },

        fetchSearchSuccess: (state, action)=>{
            state.loading = false;
            state.resultdata = action.payload 
            console.log(action.payload)

        },

        fetchSearchFailed: (state, action)=> {
            state.loading = false;
            state.error = action.payload

        },

        clearSearchResult: (state)=> {
            state.loading = false;
            state.resultdata = []
        }

    }
})


export const {fetchSearchStart, fetchSearchSuccess, fetchSearchFailed, clearSearchResult } = searchSlice.actions
export default searchSlice.reducer
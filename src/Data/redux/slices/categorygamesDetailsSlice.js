import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    categoryGamesDetail: [],
    error: null
}

export const categoryGamesDetailsSlice = createSlice({
    name: "categoryGamesDetails",
    initialState,
    reducers: {
        fetchcategoryGamesDetailsStart: (state)=>{
            state.loading = true;
            state.error = null
        },

        fetchcategoryGamesDetailsSuccess: (state, action)=>{
            state.loading = false
            state.categoryGamesDetail = action.payload
            // console.log(action.payload) 

        },

        fetchcategoryGamesDetailsFailure: (state, action)=>{
            state.loading = false,
            state.error = action.payload

        }
    }

})

export const {fetchcategoryGamesDetailsStart, fetchcategoryGamesDetailsSuccess, fetchcategoryGamesDetailsFailure  } = categoryGamesDetailsSlice.actions
export default categoryGamesDetailsSlice.reducer
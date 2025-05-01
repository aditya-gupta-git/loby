import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    data: [],
    error: null
}



// Get all Category
export const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        fetchCategoriesStart: (state)=>{
            state.loading = true,
            state.error = null

        },

        fetchCategoriesSuccess: (state, action)=>{
            state.loading = false,
            state.data = action.payload
            
        },

        fetchCategoriesfailure: (state, action)=>{
            state.loading = false,
            state.error = action.payload


        }

    }
})


export const {fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesfailure} = categorySlice.actions
export default categorySlice.reducer
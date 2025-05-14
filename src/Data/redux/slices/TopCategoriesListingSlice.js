import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    topcategorieslist: [],
    error: null
}

export const TopCategoriesListingSlice = createSlice({
    name: "topcategoriesListing",
    initialState,
    reducers: {
        fetchtopCategoryListStart: (state)=>{
            state.loading = true;
            state.error = null
        },

        fetchtopCategoryListSuccess: (state, action)=>{
            // console.log(action.payload)
            state.loading = false;
            state.topcategorieslist = action.payload

        },

        fetchtopcategoryListfailed: (state, action)=> {
            state.loading = false;
            state.error = action.payload
        }
    }

})


export const {fetchtopCategoryListStart, fetchtopCategoryListSuccess, fetchtopcategoryListfailed } = TopCategoriesListingSlice.actions

export default TopCategoriesListingSlice.reducer
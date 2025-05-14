import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    topcategory: [],
    error: null
}

export const TopCategoriesSlice = createSlice({
    name: "topcategories",
    initialState,
    reducers: {
        fetchTopCategoriesStart: (state)=> {
            state.loading = true;
            state.error = null


        },

        fetchTopCategoriesSuccess: (state, action)=> {
            state.loading = false;
            state.topcategory = action.payload
            console.log(action.payload)

        },

        fetchTopCategoriesFailed: (state, action)=> {
            state.loading = false;
            state.error = action.payload

        }

    }
})

export const {fetchTopCategoriesStart, fetchTopCategoriesSuccess, fetchTopCategoriesFailed  } = TopCategoriesSlice.actions
export default TopCategoriesSlice.reducer
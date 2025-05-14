import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    topcategoriesDetailData: [],
    activeCategoryId: null,
    error: null
}

export const TopCategoriesDetailSlice = createSlice({
    name: "topcategoriesDetail",
    initialState,
    reducers: {
        fetchtopCategoryDetailStart: (state)=>{
               state.loading = true;
               state.error = null
        },

        fetchtopCategoryDetailSuccess: (state, action)=>{
               console.log(action.payload);
               state.loading = false;
               state.topcategoriesDetailData = action.payload
        },

        fetchtopCategoryDetailFailed: (state, action)=> {
               state.loading = false;
               state.error = action.payload
        },


        setActiveCategoryId: (state, action) => {
            state.activeCategoryId = action.payload;
        },
    }
    
})


export const {fetchtopCategoryDetailStart, fetchtopCategoryDetailSuccess, fetchtopCategoryDetailFailed,  setActiveCategoryId} = TopCategoriesDetailSlice.actions
export default TopCategoriesDetailSlice.reducer
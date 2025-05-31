import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loading: false,
    listingdetailData: [],
    error: null,
    success: false,
    message: ""
}

export const ListingDetailSlice = createSlice({
    name: "listingdetail",
    initialState,
    reducers: {
        fetchlistingdetailStart: (state)=> {
            state.loading = true;
            state.error = null;
            state.success = false


        },

        fetchlistingdetailSuccess: (state, action)=> {
            state.loading = false;
            state.listingdetailData = action.payload;
            state.success = false;


        },

        fetchlistingdetailFailed: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.success = false
        }
    }
})

export const {fetchlistingdetailStart, fetchlistingdetailSuccess, fetchlistingdetailFailed } = ListingDetailSlice.actions
export default ListingDetailSlice.reducer
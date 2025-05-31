import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    UploadData: [],
    error: null
}



export const listingSlice = createSlice({
    name: "Addlisting",
    initialState,
    reducers: {
        fetchAddlistingUploadStart:  (state)=> {
             state.loading = true;
             state.error = null

        },

        fetchAddlistingUploadSuccess:  (state, action)=> {
            state.loading = false;
            state.UploadData = action.payload

        },

        fetchAddlistingUploadFailed:  (state, action)=> {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const {fetchAddlistingUploadStart, fetchAddlistingUploadSuccess, fetchAddlistingUploadFailed } = listingSlice.actions
export default listingSlice.reducer
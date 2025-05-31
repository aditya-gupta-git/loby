import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    AddlistingData: []


}

export const AddlistingSlice = createSlice({
    name: "Addlisting",
    initialState,
    reducers:  {

        fetchAddlistingStart: (state)=>{
              state.loading = true;
              state.error = null
        },

        fetchAddlistingSuccess: (state, action)=> {
              state.loading = false;
              state.AddlistingData = action.payload
        },

        fetchAddlistingFailed: (state, action)=> {
              state.loading = false;
              state.error = action.payload
        }


    }
})

export const {fetchAddlistingStart, fetchAddlistingSuccess, fetchAddlistingFailed } = AddlistingSlice.actions
export default AddlistingSlice.reducer
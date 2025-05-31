import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    error: null,
    configurationdata: []
}


export const configurationSlice = createSlice({
    name: "configuration",
    initialState,
    reducers: {

        fetchConfigurationStart: (state) => {
            state.loading = true;
            state.error = null

        },

        fetchConfigurationSuccess: (state, action) => {
            state.loading = false;
            state.configurationdata = action.payload;
            console.log(action.payload)

        },

        fetchConfigurationFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }

    }
})


export const { fetchConfigurationStart, fetchConfigurationSuccess, fetchConfigurationFailure } = configurationSlice.actions
export default configurationSlice.reducer
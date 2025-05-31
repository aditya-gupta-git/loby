import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: null,
    transactiondata: []
}

export const TransactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {

        fetchtransactionStart: (state)=>{
              state.loading = true;
              state.error = null
        },

        fetchtransactionSuccess: (state, action)=> {
            state.loading = false;
            state.transactiondata = action.payload

        },

        fetchtransactionFailed: (state, action)=> {
            state.loading = false;
            state.error = action.payload
        }

    }
})


export const {fetchtransactionStart, fetchtransactionSuccess, fetchtransactionFailed } = TransactionSlice.actions
export default TransactionSlice.reducer
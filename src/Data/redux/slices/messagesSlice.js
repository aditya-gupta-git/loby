import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    messagedata: [],
    error : null,

}

export const MessageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        fetchMessageStart: (state)=> {
            state.loading = true;
            state.error = false;
        },

        fetchMessageSuccess: (state, action)=>{
            state.loading = false;
            state.messagedata = action.payload
        },

        fetchMessageFailed: (state, action)=>{
            state.loading = false;
            state.error = action.payload
        },

        clearMessages: (state)=>{
            state.messagedata = [];
            state.error= null;
            state.loading = false;

        }
    }
})



export const {fetchMessageStart, fetchMessageSuccess, fetchMessageFailed, clearMessages } = MessageSlice.actions
export default MessageSlice.reducer







































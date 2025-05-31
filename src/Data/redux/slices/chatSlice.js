import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: null,
    chatdata: []
    
}

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        fetchChatStart: (state)=> {
            state.loading = true,
            state.error = null
        },

        fetchChatSuccess: (state, action)=> {
            state.loading = false,
            state.chatdata = action.payload
            console.log(action.payload)
        },

        fetchChatFailed : (state, action)=> {
            state.loading = false,
            state.error = action.payload

        }
    }

})


export const {fetchChatStart, fetchChatSuccess, fetchChatFailed } = chatSlice.actions
export default chatSlice.reducer
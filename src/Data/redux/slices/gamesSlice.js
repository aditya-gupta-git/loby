import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    gameData: [],
    error: null
}

export const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {

        fetchGamesStart: (state)=>{
            state.loading = true;
            state.error = null

        },

        fetchGamesSuccess: (state, action)=>{
            state.loading = false;
            state.gameData = action.payload
            // console.log(action.payload)  

        },

        fetchGamesFailure: (state, action)=> {
            state.loading = false;
            state.error = action.payload
        }

    }
})


export const {fetchGamesStart, fetchGamesSuccess , fetchGamesFailure} = gamesSlice.actions
export default gamesSlice.reducer
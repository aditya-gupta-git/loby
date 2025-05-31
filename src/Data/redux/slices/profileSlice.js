import { createSlice } from "@reduxjs/toolkit" ;


const initialState = {
    ProfileData: {},
    WalletData: {},
    ListingData: [],
    faqData: [],
    loading: false,
    ProfileUserData: {},
    error: null
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        fetchProfileStart: (state)=> {
            state.loading = true;
            state.error = null

        },

        fetchProfileSuccess: (state, action)=> {
            state.loading = false;
            state.ProfileData = action.payload
            // console.log(action.payload)
        },

        fetchProfileFailed: (state, action)=> {
            state.loading = false;
            state.error = action.payload

        },

        fetchWalletSuccess: (state, action)=> {
            state.loading = false;
            state.WalletData = action.payload
            

        },

        fetchListingSuccess : (state, action)=> {
            state.loading = false;
            state.ListingData = action.payload
            // console.log(action.payload)

        },

        fetchFaqSuccess: (state, action)=>{
            state.loading = false;
            state.faqData = action.payload
            console.log(action.payload)
            
        },

        fetchProfileUser: (state, action) => {
            state.loading = false;
            state.ProfileUserData = action.payload;
            console.log(action.payload)
            

        }



        
        
    }
})


export const {fetchProfileStart, fetchProfileSuccess, fetchWalletSuccess, fetchFaqSuccess,  fetchProfileFailed, fetchListingSuccess, fetchProfileUser} = profileSlice.actions

export default profileSlice.reducer
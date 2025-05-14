import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    carouseldata: [],
    loading: false,
    error: null

}

export const CarouselSlice = createSlice({
    name: "carousel",
    initialState,
    reducers: {
        fetchCarouselDataStart: (state)=>{
            state.loading = true;
            state.error = null

        },

        fetchCarouselDataSuccess: (state, action)=>{
            state.loading = false;
            state.carouseldata = action.payload
            console.log(action.payload)
        },

        fetchCarouselDataFailed: (state, action)=>{
            state.loading = false;
            state.error = action.payload
        }




    }
})



export const {fetchCarouselDataStart, fetchCarouselDataSuccess, fetchCarouselDataFailed} = CarouselSlice.actions
export default CarouselSlice.reducer
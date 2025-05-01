import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    categoryGamesData: [],
    error: null
}

export const CategoryGamesSlice = createSlice({
    name: "categoryGames",
    initialState,
    reducers: {
      fetchcategoryGamesDataStart: (state) => {
        state.loading = true;
        state.error = null;
      },
  
      fetchcategoryGamesDataSuccess: (state, action) => {
        console.log("State Update:", action.payload);  
        state.loading = false;
        state.categoryGamesData = action.payload;
        
      },
              
      fetchcategoryGamesDataFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });


export const {fetchcategoryGamesDataStart, fetchcategoryGamesDataSuccess ,fetchcategoryGamesDataFailure} = CategoryGamesSlice.actions
export default CategoryGamesSlice.reducer
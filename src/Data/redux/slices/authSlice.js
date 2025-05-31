import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        loginStart: (state) => {
            state.loading = true;
            state.error = null;
          },

          loginSuccess: (state, action) => {
            state.loading = false;       
            state.isAuthenticated = true;
            state.user = action.payload;
            // console.log(action.payload)
          },

          loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          }, 

          logout: (state)=> {
            state.isAuthenticated = false; 
            state.user = null;
            state.loading = false;
            state.error = null;
          }
           
    }
})


export const {loginStart, loginSuccess, loginFailure, logout} = authSlice.actions
export default authSlice.reducer
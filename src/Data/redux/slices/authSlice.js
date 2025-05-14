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
          },
          loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },  
    }
})


export const {loginStart, loginSuccess, loginFailure} = authSlice.actions
export default authSlice.reducer
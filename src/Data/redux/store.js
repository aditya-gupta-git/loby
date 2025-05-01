import { configureStore } from '@reduxjs/toolkit'
import  authSliceReducer  from './slices/authSlice'
import  categoryReducer  from './slices/categorySlice'
import  gamesReducer from './slices/gamesSlice'
import  categorygamesReducer from './slices/categorygamesSlice'
import  categoryGamesDetailsReducer from './slices/categorygamesDetailsSlice'

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    categories: categoryReducer,
    games: gamesReducer,
    categoryGames: categorygamesReducer,
    categoryGamesDetails: categoryGamesDetailsReducer
    
  },
})
import { configureStore } from '@reduxjs/toolkit'
import  authSliceReducer  from './slices/authSlice'
import  categoryReducer  from './slices/categorySlice'
import  gamesReducer from './slices/gamesSlice'
import  categorygamesReducer from './slices/categorygamesSlice'
import  categoryGamesDetailsReducer from './slices/categorygamesDetailsSlice'
import  CarouselReducer from './slices/sliderBannerSlice'
import  TopCategoriesReducer from './slices/TopCategoriesSlice'
import  TopCategoriesDetailReducer from './slices/TopCategoriesDetailSlice'
import  TopCategoriesListingReducer  from './slices/TopCategoriesListingSlice'
import  profileReducer from './slices/profileSlice'

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    categories: categoryReducer,
    games: gamesReducer,
    categoryGames: categorygamesReducer,
    categoryGamesDetails: categoryGamesDetailsReducer,
    carousel: CarouselReducer,
    topcategories: TopCategoriesReducer,
    topcategoriesDetail: TopCategoriesDetailReducer,
    topcategoriesListing: TopCategoriesListingReducer,
    profile: profileReducer,
    

             
  },
})
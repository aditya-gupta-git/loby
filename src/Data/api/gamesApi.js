import { fetchGamesFailure, fetchGamesStart, fetchGamesSuccess } from "../redux/slices/gamesSlice";
import axiosInstance from "./axiosInstance";

export const GetAllGames = ()=> async (dispatch)=>{


      dispatch(fetchGamesStart())
      try {
         const response =  await axiosInstance.get('/get-all-games')
         console.log(response.data.data.rows)
         dispatch(fetchGamesSuccess(response.data.data.rows))
         
        
      } catch (error) {
        console.log(error)
        const errorMessage = error.response?.data?.message || error.message || 'An unexpected error occurred'
        dispatch(fetchGamesFailure(errorMessage))
        
      }
}
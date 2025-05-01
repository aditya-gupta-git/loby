import {
  fetchcategoryGamesDataFailure,
  fetchcategoryGamesDataStart,
  fetchcategoryGamesDataSuccess,
} from "../redux/slices/categorygamesSlice";
import axiosInstance from "./axiosInstance";
import { fetchcategoryGamesDetailsFailure, fetchcategoryGamesDetailsStart, fetchcategoryGamesDetailsSuccess } from "../redux/slices/categorygamesDetailsSlice";

// CategoryGames function
export const CategoryGames = (id) => async (dispatch) => {
  console.log("API call Id", id);
  dispatch(fetchcategoryGamesDataStart());

  try {
    const response = await axiosInstance.get(
      `get-all-game-service-listing-buyer?category_id=${id}`
    );
    console.log("API Response :", response.data.data.rows);
    dispatch(fetchcategoryGamesDataSuccess(response.data.data.rows));
  } catch (error) {
    console.log(error);
    dispatch(fetchcategoryGamesDataFailure(error.message));
  }
};


export const CategoriesGamesDetails = (id)=> async (dispatch)=> {

   dispatch(fetchcategoryGamesDetailsStart())
   try {
    const response = await axiosInstance.get(`get-all-game-service-listing-buyer?listing_id=${id}`)
    console.log(response.data)
    // console.log(`get-all-game-service-listing-buyer?category_id=${id}`)
    // console.log("Final URL:", axiosInstance.defaults.baseURL + `get-all-game-service-listing-buyer?category_id=${id}`);
    // console.log("ID :", id)
    dispatch(fetchcategoryGamesDetailsSuccess(response.data.data))
    
   } catch (error) {
     console.log(error)
     dispatch(fetchcategoryGamesDetailsFailure(error.message))
     
   }

}
import {
  fetchtopCategoryDetailFailed,
  fetchtopCategoryDetailStart,
  fetchtopCategoryDetailSuccess,
} from "../redux/slices/TopCategoriesDetailSlice";
import { fetchtopcategoryListfailed, fetchtopCategoryListStart, fetchtopCategoryListSuccess } from "../redux/slices/TopCategoriesListingSlice";
import axiosInstance from "./axiosInstance";

export const GetTopCategoryDetail = ({gameId, categoryId}) => async (dispatch) => {
    dispatch(fetchtopCategoryDetailStart());
    console.log("Fetching :", gameId, categoryId)

    try {
      const response = await axiosInstance.get(
        `/get-all-game-service-listing-buyer?game_id=${gameId}&category_id=${categoryId}`
      );
      console.log(response.data);
      dispatch(fetchtopCategoryDetailSuccess(response.data.data));
    } 
    
    catch (error) {
      console.log(error);
      dispatch(fetchtopCategoryDetailFailed());
    }

};   


// listing-category

export const GetTopCategoryList = (id)=> async (dispatch)=> {
    
   dispatch(fetchtopCategoryListStart())
   try {
   const response = await axiosInstance.get(`get-all-game-service-listing-buyer?listing_id=${id}`)
   console.log("ID Sent to API:", id);
   console.log("Full API Response:", response.data.data);
   dispatch(fetchtopCategoryListSuccess(response.data.data))
   
     
   } 
   
   catch (error) {
    console.log("Error :", error.response?.data || error.message)
    dispatch(fetchtopcategoryListfailed(error))
    
    
   }
}
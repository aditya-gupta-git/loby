import { fetchTopCategoriesFailed, fetchTopCategoriesStart, fetchTopCategoriesSuccess } from "../redux/slices/TopCategoriesSlice";
import axiosInstance from "./axiosInstance";

export const GetTopCategories = (id)=> async (dispatch) => {

    dispatch(fetchTopCategoriesStart())

  try {
    const response = await axiosInstance.get(`/get-category-games?catgeory_id=${id}`);
    console.log("API Response:", response.data.data);
    dispatch(fetchTopCategoriesSuccess(response.data.data))     
  } 
  
  catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    dispatch(fetchTopCategoriesFailed(error))
  }
};



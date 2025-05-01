import { fetchCategoriesfailure, fetchCategoriesStart, fetchCategoriesSuccess } from "../redux/slices/categorySlice";
import axiosInstance from "./axiosInstance";



// Get All Categories
export const GetAllCategories = ()=> async (dispatch)=> {
    
    dispatch(fetchCategoriesStart())
    try {
       const response = await axiosInstance.get('/get-all-categories?page=1')
       console.log(response)
       dispatch(fetchCategoriesSuccess(response.data.data.rows))                          
        
    } catch (error) {
        console.log(error)
        dispatch(fetchCategoriesfailure(error.message))

        
        
    }

}   

// Get All Games

// export const GetAllGames = async ()=>{
//   try {
//     const response =  await axiosInstance.get('get-all-games')
//     console.log(response)
    
//   } catch (error) {
//     console.log(error)
    
//   }

// }
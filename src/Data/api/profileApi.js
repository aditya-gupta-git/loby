import { fetchFaqSuccess, fetchListingSuccess, fetchProfileFailed, fetchProfileStart, fetchProfileSuccess, fetchProfileUser, fetchWalletSuccess } from "../redux/slices/profileSlice";
import axiosInstance from "./axiosInstance";

export const GetProfileData = ()=> async (dispatch)=>{

    dispatch(fetchProfileStart())
   
    try {
      const response = await axiosInstance.get('/user-profile')
      console.log(response.data.data)
      dispatch(fetchProfileSuccess(response.data.data))

      
        
    } catch (error) {
        console.log(error)
        dispatch(fetchProfileFailed(error))
    }
}

export const GetWallet =  ()=> async (dispatch)=> {

    dispatch(fetchProfileStart())

    try {
       const response =  await axiosInstance.get('/total-earning')
       console.log(response.data)
       dispatch(fetchWalletSuccess(response.data))
       
        
    } catch (error) {
        console.log("message:", error)
        dispatch(fetchProfileFailed(error))
        
        
    }

}

export const MyListing = ()=> async (dispatch)=> {

    dispatch(fetchProfileStart())

     try {
        const response =  await axiosInstance.get('get-all-game-service-listing?page=1')
        console.log(response.data)
        dispatch(fetchListingSuccess(response.data))
        

        
     } catch (error) {
        console.log(error)
        dispatch(fetchProfileFailed(error))
        
        
     }
}

export const GetFaq = ()=> async (dispatch)=> {

    dispatch(fetchProfileStart())

    try {
        const response = await axiosInstance.get('get-static-faqs')
        console.log(response)
        dispatch(fetchFaqSuccess(response.data))

        
    } catch (error) {
        console.log(error)
        dispatch(fetchProfileFailed("Error :", error))
        
        
    }
}


export const GetprofileUser = ()=> async (dispatch)=> {

    dispatch(fetchProfileStart())

    try {
        const response = await axiosInstance.get('get-all-game-service-listing?page=1&user_id=33')
        console.log(response)
        dispatch(fetchProfileUser(response.data.data))

        

    } catch (error) {
        console.log(error)
        dispatch(fetchProfileFailed("Error :", error))
        
        
    }

}
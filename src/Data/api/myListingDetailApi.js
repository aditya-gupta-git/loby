import { fetchlistingdetailFailed, fetchlistingdetailStart, fetchlistingdetailSuccess } from "../redux/slices/MyListingDetailsSlice";
import axiosInstance from "./axiosInstance";

export const GetListingDetail = (id)=> async (dispatch)=> {

    dispatch(fetchlistingdetailStart())
    try {

        const response = await axiosInstance.get(`get-all-game-service-listing-buyer${id}`)
        dispatch(fetchlistingdetailSuccess(response.data.data))
        console.log(response.data.data)
        
    } catch (error) {
        console.log(error)
        dispatch(fetchlistingdetailFailed(error?.message || "Something went wronge" ))

        
    }
}
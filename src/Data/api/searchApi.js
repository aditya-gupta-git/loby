// import { useDispatch } from "react-redux";  
import axiosInstance from "./axiosInstance";
import { fetchSearchFailed, fetchSearchStart, fetchSearchSuccess } from "../redux/slices/searchSlice";


export const GetSearchData  = (search)=> async (dispatch)=> {


    dispatch(fetchSearchStart())
    try {
       const response = await axiosInstance.get(`get-all-game-service-listing-buyer`, {
        params: {
           search_all: search
        }
       })
       console.log(response.data.data)
       dispatch(fetchSearchSuccess(response.data.data))
        
    } catch (error) {
        dispatch(fetchSearchFailed(error.response.data || "Sometime went wronge"))
        console.log(error)

        
    }
}
import { fetchChatFailed, fetchChatStart, fetchChatSuccess } from "../redux/slices/chatSlice";
import { fetchMessageFailed, fetchMessageStart, fetchMessageSuccess } from "../redux/slices/messagesSlice";
import axiosInstance from "./axiosInstance";

export const fetchContacts = ()=> async (dispatch)=> {

    dispatch(fetchChatStart())

    try {
       const response = await axiosInstance.get('/get-all-contacts')
       console.log(response)
       dispatch(fetchChatSuccess(response.data.data))
       
        
    } catch (error) {
        console.log(error)
        dispatch(fetchChatFailed("Error :", error ? error.meassage : "Something went wrong"))
        
        
    }
}

export const fetchMessages = (id)=> async (dispatch)=> {

    dispatch(fetchMessageStart())

    try {
        const response = await axiosInstance(`get-messages?chat_channel_id=${id}`)
        console.log(response);
        dispatch(fetchMessageSuccess(response.data))
        

        
    } catch (error) {
        console.log(error)
        dispatch(fetchMessageFailed(error?.meassage || "Something wronge"))
        
        
        
    }

}
import { fetchtransactionFailed, fetchtransactionStart, fetchtransactionSuccess } from "../redux/slices/PaymentTransactionSlice";
import axiosInstance from "./axiosInstance";


export const GetTransaction = ()=> async (dispatch)=>{


    dispatch(fetchtransactionStart())

    try {
        const response = await axiosInstance.get('get-transaction-history')
        console.log(response);
        dispatch(fetchtransactionSuccess(response.data.data))
        
    } catch (error) {
        console.log(error)
        dispatch(fetchtransactionFailed(error?.data || "Something went wronge"))
    }
}
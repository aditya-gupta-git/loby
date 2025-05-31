import { fetchConfigurationFailure, fetchConfigurationStart, fetchConfigurationSuccess } from "../redux/slices/configurationSlice";
import axiosInstance from "./axiosInstance";


export const GetAllConfiguration = (gameid, categoryid)=> async (dispatch)=> {

    dispatch(fetchConfigurationStart())

    try {
        const response = await axiosInstance.get('get-congfiguration', {
            params: {
                game_id: gameid,
                catgeory_id: categoryid,
            }
        })
        console.log(response)
        dispatch(fetchConfigurationSuccess(response.data.data)) 
        
    } catch (error) {
        console.log(error)
        dispatch(fetchConfigurationFailure(error.message))
        
    }

}


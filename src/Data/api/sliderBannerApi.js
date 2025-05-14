import axiosInstance from "./axiosInstance";
import {
  fetchCarouselDataFailed,
  fetchCarouselDataStart,
  fetchCarouselDataSuccess,
} from "../redux/slices/sliderBannerSlice";

export const GetBannerImage = () => async (dispatch) => {
  
    dispatch(fetchCarouselDataStart())

  try {
    const response = await axiosInstance.get("/get-dashboard-banners");
    console.log(response.data);
    dispatch(fetchCarouselDataSuccess(response.data.data));
    
  } catch (error) {
    console.log(error);
    
    dispatch(fetchCarouselDataFailed("message :", error))

  }

};

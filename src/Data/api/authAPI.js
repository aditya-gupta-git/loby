import axiosInstance from "./axiosInstance";

export const sendotp = async (mobile) => {
    try {
      const response = await axiosInstance.post('/loginV2', {mobile}); 
      return response.data
    } catch (error) {
      throw new Error(error.response ? error.response.data.message : "Something went wrong");
    }
}


// Verify Api
export const verifyotp = async (otp, mobile)=>{
    try {
        const response =  await axiosInstance.post('/verify-otp', {mobile, otp} )
        console.log(response.data)
        return response.data
        
        
    } catch (error) {
        console.error(error);

        
    }
}
  

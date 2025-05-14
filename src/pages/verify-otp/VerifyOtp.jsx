import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyotp } from "../../data/api/authApi.js";
import { loginFailure, loginStart, loginSuccess } from "../../data/redux/slices/authSlice.js";
import { images } from "../../constant/images";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const mobile = localStorage.getItem("mobile");

  const handlerverifyOtp = async (e) => {
    e.preventDefault();

    if (!otp) {
      return alert("Invalid OTP");
    }

    dispatch(loginStart()) 

   
    try {
     
      const response = await verifyotp(otp, mobile);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      dispatch(loginSuccess(response?.user));
      navigate("/home");
    }
     catch (error) {
      console.log(error);
      dispatch(loginFailure())
    }
  };

  return (
    <div
      className="flex items-center flex-col justify-center h-screen "
      style={{
        backgroundImage: `url(${images.loginbgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-end h-screen w-full justify-center  ">
        {loading && <p>loading...</p>}

        <div
          className="w-full h-1/2 border-black  rounded-t-3xl text-center "
          style={{ backgroundColor: "#292929" }}
        >
          <h2 className="text-3xl mt-8 text-white">Login</h2>
          <form
            onSubmit={handlerverifyOtp}
            className="flex flex-col justify-center  "
          >
            <div className="text-sm text-start px-12 py-8 font-bold">
              <label className="text-white text-2xl ">Enter OTP</label>
              <p className="text-md font-light text-white">
                Please Confirm Your Country Enter Your OTP{" "}
              </p>
            </div>
            <input
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter Your OTP"
              className="border-1 px-12 mx-12 py-3  focus:border-green-500 text-white rounded outline-none mt-2"
            />
            <button
              type="submit"
              className="mt-12  mx-12 py-3  rounded-xl hover:bg-blue-300"
              style={{ backgroundColor: "#10FF00" }}
            >
              {loading ? "Verifying OTP.." : "Verify OTP"}
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default VerifyOtp;

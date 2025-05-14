import React, { useState } from "react";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../Data/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { sendotp } from "../../Data/api/authApi";
import { useNavigate } from "react-router-dom";
import { images } from "../../constant/images";

const Login = () => {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loading = useSelector((state) => state.auth.loading);

  //handlerSendOtp
  const handlesendotp = async (e) => {
    e.preventDefault();

    if (!number) {
      return alert("fill form first");
    }

    if (number.length < 10) {
      return alert("please Enter valid number");
    }

    dispatch(loginStart())

    try {
      const response = await sendotp(number);
      console.log(response);
      localStorage.setItem("mobile", number);
      dispatch(loginSuccess());
      navigate("/verifyOtp");
      setNumber("");
    } catch (error) {
      dispatch(loginFailure(error.message));
      errorHandler(error)
    }
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen " style={{
      backgroundImage: `url(${images.loginbgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}>
      {/* {loading && <p>loading...</p> } */}

      <div className="flex items-end h-screen w-full justify-center  ">
       <div
        className="w-full h-1/2 border-black  rounded-t-3xl text-center"
        style={{ backgroundColor: "#292929" }}
      >
        <h2 className="text-3xl mt-6 text-white ">Login</h2>
        <form
          onSubmit={handlesendotp}
          className="flex flex-col justify-center py-14  "
        >
          <div className="text-sm text-start px-8 font-bold text-white ">
            <label className="text-2xl">Enter Mobile Number</label>
            <p className="text-[14px] font-light">
              Please Confirm Your Country Enter Your MObile Number{" "}
            </p>
          </div>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="0000 000 000"
            className="focus:border-1 focus:border-green-500 px-12 mx-8 py-3 rounded-lg text-white outline-none mt-2"
            style={{backgroundColor: "#3C3C3C"}}
          />
          <button
            type="submit"
            className="mt-12 border-1 mx-8 py-2.5 rounded-xl  hover:bg-blue-300"
            style={{ backgroundColor: "#10FF00" }}
          >
            {loading ? "Sending OTP.." : "Send OTP"}
          </button>
        </form>
      </div>
      </div>

    </div>
  );
};

export default Login;

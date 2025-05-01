import React, { useState } from "react";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../Data/redux/slices/authSlice";
import {useDispatch, useSelector} from 'react-redux'
import { sendotp } from "../../Data/api/authApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch()

  const navigate = useNavigate()



  const loading = useSelector(state => state.auth.loading)

   //handlerSendOtp
  const handlesendotp = async (e)=>{
    e.preventDefault()

    if(!number){
        return alert("fill form first")
    }

    if(number.length < 10){
      return alert("please Enter valid number")
    }


    try {
        const response = await sendotp(number)
        console.log(response)
        localStorage.setItem("mobile", number)
        dispatch(loginSuccess())
        navigate('/verifyOtp')
        setNumber("")

        
        
    } catch (error) {
        dispatch(loginFailure(error.message))
        
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-400">
      {/* {loading && <p>loading...</p> } */}

    <div className="w-96 h-auto border-black border-1 rounded-lg text-center " style={{backgroundColor: "#292929x"}}>
        <h2 className="text-2xl">Login</h2>
        <form onSubmit={handlesendotp} className="flex flex-col justify-center py-28  ">
        <div className="text-sm text-start px-12 font-bold">
        <label>
            Enter Mobile Number
        </label>
        <p className="text-xs font-light">Please Confirm Your Country Enter Your MObile Number </p>
        </div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter Your Number"
          className="border-1 px-12 mx-12 py-1.5 rounded outline-none mt-2"
        />
        <button type="submit" className="mt-12 border-1 mx-24 py-1 rounded hover:bg-blue-300" >
            {loading ? "Sending OTP.." : "Send OTP"}
        </button>
      </form>


    </div>
    </div>
  );
};

export default Login;

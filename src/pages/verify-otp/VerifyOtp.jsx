import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { verifyotp } from '../../Data/api/authApi'
import { loginSuccess } from '../../Data/redux/slices/authSlice'

const VerifyOtp = () => {

    const [otp, setOtp] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loading = useSelector(state => state.auth.loading)
    const mobile  = localStorage.getItem("mobile")

    const handlerverifyOtp = async (e)=> {
        e.preventDefault()
        try {
            const response = await verifyotp(mobile, otp)
            console.log(response)

            localStorage.setItem("token", response.data.token)

            dispatch(loginSuccess(response.user))
            navigate('/home')
            
        } catch (error) {
            console.log(error)
            
        }

    }


  return (
    <div>
     <div className="flex items-center justify-center h-screen bg-zinc-400">
      {loading && <p>loading...</p> }

      <div className="w-96 h-auto border-black border-1 rounded-lg text-center " style={{backgroundColor: "#292929x"}}>
        <h2 className="text-2xl">Login</h2>
        <form onSubmit={handlerverifyOtp} className="flex flex-col justify-center py-28  ">
        <div className="text-sm text-start px-12 font-bold">
        <label>
            Enter OTP
        </label>
        <p className="text-xs font-light">Please Confirm Your Country Enter Your OTP </p>
        </div>
        <input
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter Your OTP"
          className="border-1 px-12 mx-12 py-1.5 rounded outline-none mt-2"
        />
        <button type="submit" className="mt-12 border-1 mx-24 py-1 rounded hover:bg-blue-300" >
            {loading ? "Verifying OTP.." : "Verify OTP"}
        </button>
      </form>


     </div>
     </div>
    </div>
  )
}

export default VerifyOtp
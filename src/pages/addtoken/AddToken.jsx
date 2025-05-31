import React, { useEffect, useState } from "react";
import { images } from "../../constant/images";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Data/api/axiosInstance";

const AddToken = () => {
  const navigate = useNavigate();


  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://sdk.cashfree.com/js/ui/1.0.26/dropin.min.js";
  script.async = true;
  script.onload = () => {
    console.log("Cashfree SDK loaded");
  };
  // script.crossOrigin = "anonymous"; 
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

  const [curvalue, setCurvalue] = useState(Number(0));
  const [showError, setShowError] = useState(false);

  // const [orderId, setOrderId] = useState("");

  const phone = "9039574104";
  const email = "aditya@gmail.com";

  async function handlepay() {
    if (!curvalue || Number(curvalue) === 0) {
      // alert("Please Enter Token Quanity");
      setShowError(true);
      return
      
      
    }

    try {
      const response = await axiosInstance.post("http://34.207.89.54/api/create-cashfree-order-id", {
        total_amount: curvalue,
        customer_phone: phone,
        customer_email: email,

      })
      console.log(response)

      const sessionId = response.data?.data?.order_json_response?.payment_session_id
      console.log(sessionId)
      setOrderId(response.data?.data?.order_id)      

      if(window.Cashfree && sessionId) {
        window.Cashfree.initPopup({
          paymentSessionId: sessionId,
          redirectTarget: "_self",
        });

        console.log("Session ID:", sessionId);
        console.log("Cashfree object:", window.Cashfree);

    } 
    
    else {
      setShowError(false);
      // setCurvalue(0);
      console.log("Proccesing Payment :", curvalue);
    }}

    catch (error) {
      console.log(error);
      
      
    }
  }

  return (
    <div>
      <nav className="flex justify-between items-center p-4 ">
        <div
          className="left-icon  text-white p-2 text-2xl rounded-full "
          style={{ backgroundColor: "#33353B" }}
          onClick={() => navigate(-1)}
        >
          <images.LeftIcon />
        </div>
        <h2 className="text-green-500 text-xl ">Add Token</h2>
        <h2></h2>
      </nav>

      <div
        className="rounded-2xl mx-6  "
        style={{ backgroundColor: "#00FF62" }}
      >
        <div className="flex flex-col items-center mt-4 ">
          <h3 className="text-2xl ">Current Balance</h3>
          <span className="flex py-4 font-bold items-center gap-1 text-2xl ">
            <images.coinIcon className="text-yellow-400" /> 0.00
          </span>
        </div>

        <div
          className="p-4 rounded-2xl "
          style={{ backgroundColor: "#373A43" }}
        >
          <input
            type="number"
            // value={curvalue}
            placeholder="Enter Token Quanity"
            onChange={(e) => {
                setCurvalue(Number(e.target.value));
                setShowError(false);
                 
            }}
            
            className={`border-1 rounded-lg focus:border-green-500 outline-none w-full py-3 px-4 text-gray-200  ${
                showError ? "border-red-500 border-1" : null }`}
          /> 

          <div className="flex gap-10 px-12 py-4 pb-8 text-white  ">
            <button className="flex items-center gap-2 ">
              <images.coinIcon className="text-yellow-500" /> {curvalue}{" "}
            </button>
            <button className="flex items-center gap-2">
              <images.IndianRuppe /> {curvalue}{" "}
            </button>
          </div>

          <div className="flex w-full justify-center gap-1 items-center ">
            <button
              className="flex  px-18 text-white rounded-xl py-2 justify-center gap-1 items-center  "
              onClick={handlepay}
              style={{ backgroundColor: "#6C5DD3" }}
            >
              Pay <images.IndianRuppe /> {curvalue}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToken;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { images } from "@/constant/images";
import { useDispatch } from "react-redux";
import { fetchMessages } from "@/Data/api/chatApi";
import axiosInstance from "@/Data/api/axiosInstance";

const SingleChat = () => {
  const { id } = useParams();
//   console.log(id);  

  const dispatch = useDispatch()
  const location = useLocation();

  const { username, receive } = location.state || {};

  const navigate = useNavigate();

  const [message, setMessage] = useState("")

  useEffect(()=> {
    if(id){
        dispatch(fetchMessages(id)) 

    }
    
    
  },[dispatch])


  function SendMessage(){
    console.log("hello")

    const formData = new FormData()

    formData.append('receiver_id', receive )
    formData.append('message', message )

    axiosInstance.post('send-message', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    .then((res)=> {
        console.log("Success", res.data)
        setMessage("")

    })

    .catch(err=>{
        console.log("Failed", err.message)
    })
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

        <h3 className="text-green-500 text-xl ">{username}</h3>
        <h2></h2>  
      </nav>

      <div className="flex items-center rounded-t-2xl w-full px-4 py-2 bg-[#32343B] absolute bottom-0">
        <input
          type="text"
          placeholder="Message"
          className="flex-1 rounded-l-xl p-4 text-xl outline-none text-white bg-[#32343B]"
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
        />

        {message.trim() !== "" && (
        <button onClick={SendMessage} className="p-4 text-2xl text-white rounded-r-xl">
          <images.sendmessage />
        </button>
      )}
      </div>


    </div>
  );
};

export default SingleChat;

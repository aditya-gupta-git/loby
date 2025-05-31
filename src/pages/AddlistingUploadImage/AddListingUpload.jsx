import axiosInstance from "@/Data/api/axiosInstance";
import React, { useState } from "react";

import { images } from "@/constant/images";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddListingUpload = () => {

  const [uploadfile, setUploadfile] = useState([]);
  const [filePreview, setFilePreview] = useState([]);

  const navigate = useNavigate();

  function handleSubmit (e){
   e.preventDefault();
   

  const formdata = new FormData();

  formdata.append("type", "2" )
  formdata.append("user_game_service_id", "1")


  uploadfile.forEach((fileObj) => {
      formdata.append("file_path", fileObj); 
  });


  axiosInstance.post('upload-listing-files', formdata, {
      headers:{
          "Content-Type": "multipart/form-data"
      } 
  })

  .then((res)=>{
    console.log(res)
    toast.success("Successfully Added Listing ") 
    navigate('/listings')
    // toast.success(L) 

  })


  .catch((err)=>{
    console.log(err)
    console.log("Sometime Went wronge")
    toast.error(err.message)
  })


    
  }

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      setUploadfile((prev) => [...prev, ...selectedFiles]);
      const previews = selectedFiles.map((file) => URL.createObjectURL(file));
      setFilePreview((prev) => [...prev, ...previews]);
    }
  };

  const handleRemovePreview = (index) => {
    setFilePreview((prev) => prev.filter((_, i) => i !== index));

  }

  return (
    <div>
      <div className="heading text-center px-4 text-white  ">
        <h1 className="text-lg flex items-center justify-center gap-1 pt-8">Listing Created Successfully <images.checkbox  className="text-green-300" /> </h1>
        <p className="text-gray-500 text-xl  ">
          You can upload multiple images, videos or links relevent to your
          listing
        </p>
      </div>

      <div className="border-1 rounded-2xl border-dashed mx-6 text-center border-white py-4 pb-8 mt-8 ">
        <h2 className="text-white py-8">Upload Images or Videos </h2>

        <div className="flex flex-wrap gap-2 px-2 ">
          {filePreview?.map((preview, index) => (
            <div className="relative " key={index}>
              <img
                key={index}
                src={preview}
                alt=""
                className="w-32 h-32 object-cover "
              />

              <button
                onClick={() => handleRemovePreview(index)}
                className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-700"
              >
                <images.crossIcon />
              </button>

            </div>
          ))}
        </div>

        <label htmlFor="upload-image">
          <div className="border-1 bg-[#7A5AF8] mt-4 w-48 mx-auto rounded-xl border py-2 flex items-center justify-center">
            <span> Choose File</span>
          </div>
        </label>
        <h2 className="text-white text-xl ">or</h2>
        <input
          type="text"
          placeholder="Paste Youtube/Twitch/Drive Link "
          className=" border rounded-lg border-transparent focus:border-green-400 outline-none px-4 py-2 mt-4 w-80 "
          style={{ backgroundColor: "gray  " }}
        />
      </div>

      <input
        type="file"
        id="upload-image"
        multiple
        onChange={handleImageChange}
        className="hidden"
      />

      <div className="flex items-center justify-between px-6 pt-8 gap-4 ">
        <button className="rounded-xl text-xs text-white  bg-[#7A5AF8] py-3 w-2/3  px-12 ">
          View Listings
        </button>

        <button onClick={handleSubmit} className="rounded-xl text-xs text-white  bg-red-500 py-3 w-2/3 px-12 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddListingUpload;

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CategoriesGamesDetails } from "../../data/api/categorygamesApi";
import Loader from "../../components/Ui/Loader";

const GameDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [showModal,  setShowModal] = useState(false)

  useEffect(() => {
    console.log("hello Game Detail's Page");
    dispatch(CategoriesGamesDetails(id));
  }, [dispatch, id]);

  // Preloder


  const {categoryGamesDetail, loading } = useSelector(
    (state) => state.categoryGamesDetails
  );
  console.log(categoryGamesDetail);    

  

  return (
    <div className="min-h-screen p-1  " style={{backgroundColor: "#1F2128"}} >
      {/* <h1>GameDetail</h1> */}
      {loading ? (<Loader />) : (
        categoryGamesDetail ? (
          <div className="border-1 shadow-black shadow-lg mx-4 mt-8 text-center pb-8 rounded-xl" style={{backgroundColor: "#242731"}}>
            {categoryGamesDetail.userGameServiceImages?.[0]?.path ? (
              <img
                src={categoryGamesDetail.userGameServiceImages[0]?.path}
                alt="Game Image"
                className="w-full h-48 object-cover  rounded-t-xl"
                onClick={()=> setShowModal(true)}
              />
            ) : (
              <p className="text-2xl text-gray-500">No image available</p>
            )}
            <h2 className="text-xl my-4 text-green-400 font-medium">{categoryGamesDetail.title}</h2>
            <div className="flex items-center justify-between px-2 my-2 ">
            <p className="text-xs text-gray-200 rounded-sm border-white p-1" style={{backgroundColor: "#FF754C"}}>{categoryGamesDetail.game?.name}</p>
            <p className="rounded text-white px-4 text-xs p-1 " style={{backgroundColor: "#6C5DD3"}}>{categoryGamesDetail.category?.name}</p>
            </div>
            {/* You can add more details like description here */}
  
            <div className="text-start px-2">
            <label className="text-green-600 text-xl font-semibold ">Description</label>
            <p className="text-gray-500">{categoryGamesDetail.description}</p>
            </div>
            <div className="text-start">
            <label className="text-green-600 text-2xl font-semibold px-2 "> Disclaimer </label>
            <div className="space-y-2 mt-2 px-2  ">
              {categoryGamesDetail.category?.disclaimer
               .replace(/[0-9]+\./g, '')
               .split('\r\n') 
                .filter((point) => point.trim() !== "")
                .map((point, index) => (
                  <p key={index} className="text-gray-700">
                    {index + 1}. {point.trim()}.
                  </p>
                ))}
            </div>  
            </div>

            <div>
              <label>
                
              </label>
            </div>

            {/* <p>{categoryGamesDetail.}</p> */}
  
          </div>
        ) : (
          <p className="text-gray-300">No Data Available</p>
        )
      )}


{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-gray-600 text-4xl font-bold"
      >
        &times;
      </button>
    <div className="bg-white rounded-lg shadow-lg max-w-xl w-full relative">
      
      <img
        src={categoryGamesDetail.userGameServiceImages[0]?.path}
        alt="Game image"
        className="w-full max-h-[80vh] object-contain rounded-lg"
      />
    </div>
  </div>
)}
    </div>
  );
};

export default GameDetail;

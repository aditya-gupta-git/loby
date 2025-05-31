import React, { useEffect, useState } from "react";
import { images } from "../../constant/images";
import { useNavigate, useParams } from "react-router-dom";
import { MyListing } from "../../data/api/profileApi";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/Ui/Loader";

const Mylisting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const {gameId, categoryId} = useParams()
  

  useEffect(() => {

    
    dispatch(MyListing());
  }, [dispatch]);

  const {id} = useParams();
  


  const startloading = useSelector((state)=> state.profile.loading);

  const { ListingData: data } = useSelector((state) => state.profile); 

  // console.log("Data :", data);

  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleDelete() {
    // alert(" Hello Data ") 
    console.log("Hello iNdia ")
  }

  function confirmDelete() {
    console.log("Deleted:", selectedItem);
    setModal(false);
  }

  function Mylistingdata(id){
    console.log("Hello Id: ", id)
    navigate(`/top-category/1/listing/${id}`)


  }

  return (
    <div>

      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={confirmDelete}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}


      <nav className="flex items-center justify-between mt-4 px-4 ">
        <div
          className="left-icon  text-white text-2xl p-2 rounded-full "
          style={{ backgroundColor: "#33353B" }}
          onClick={() => navigate(-1)}
        >
          <images.LeftIcon />
        </div>

        <h2 className="text-xl text-green-500  ">My Listing </h2>
        <h1></h1>
      </nav>

      <div className="mt-4 px-6  "  
       
      >
        {startloading ? (<Loader />) : (
          data?.data?.rows && data.data.rows.length > 0 ? (
          data.data.rows.map((items) => (
            <div
              key={items.id}
              className="px-2 border-1 mt-4 rounded-lg flex gap-4 items-center   "
              onClick={()=> Mylistingdata(items.id)}
            >
              <div className="text-gray-200">
                <img
                  src={items?.userGameServiceImages?.[0]?.path}
                  alt="logo-image"
                  className="  rounded-lg h-30 w-40 "
                />
                <div className="flex justify-between px-2 text-xs pt-1  ">
                  <span>Inactive</span>
                  <span>Active</span>
                </div>
              </div>

              <div className="w-2/3 px-2">
                <h2 className="text-gray-200 mt-2">{items.title}</h2>
                <p className="text-gray-500 text-xs font-lighter ">
                  {items.game.name}
                </p>

                <div className="flex justify-between py-2  ">
                  <button className="bg-amber-700 text-xs px-4  text-gray-200 rounded-lg  ">
                    {items.category.name}
                  </button>     
                  <span className="text-green-500 ">{items.price}</span>
                </div>

                <div className="flex  justify-between py-4">

                  <button className="bg-blue-500 text-white text-xs p-3 px-6 rounded-xl  ">
                    Edit
                  </button>
                  <button
                    className="bg-red-800 text-white text-xs p-3 rounded-xl px-8 "
                    onClick={(e)=> {
                      e.stopPropagation();
                      handleDelete(items);
                    }}
                  >
                    Delete
                  </button>

                </div>

              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )
        )
          
        }

        
      </div>

    </div>
  );
};

export default Mylisting;

import React, { useEffect, useState } from "react";
import { images } from "../../constant/images";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSearchData } from "@/Data/api/searchApi";
import { clearSearchResult } from "@/Data/redux/slices/searchSlice";
import Slider from "react-slick";
import Loader from "./Loader";
// import debounce from "lodash/debounce";

const Search = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const {resultdata: searchdata, loading: startloading} = useSelector((state) => state.search);
  console.log(searchdata);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (search.trim() !== "") {
        dispatch(GetSearchData(search));
      } else {
        dispatch(clearSearchResult());
      }
    }, 400);

    return () => clearTimeout(debounce);
  }, [search, dispatch]);

  // carousel
  const settings = {
    // dots: true,
    // infinite: true,  
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true, 
    // loop: true, 
    swipeToSlide: true  
  };

  return (
    <div>
      {/* <h1>This is Search_Bar</h1> */}

      <div>
        <div className="px-4 mt-6 ">
          <images.LeftIcon
            className=" text-white p-3 h-12 w-12 rounded-full  "
            style={{ backgroundColor: "#33353B" }}
            onClick={() => navigate(-1)}
          />
        </div>

        <div className="mt-4 px-4">
          <input
            type="text"
            placeholder="Select..."
            className="px-4 py-3 w-full rounded-lg text-gray-50 border-1 border-transparent outline-none focus:border-green-400 "
            style={{ backgroundColor: "#33353B" }}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(e.target.value);
            }}
            value={search}
          />
        </div>

        <div>
          <div className="px-4 pt-4 py-1 " >

             {startloading ? (
             <Loader />  
             ) : (
             
              //  {/* ListingData */} 
             <>
              {searchdata?.userGameServiceDetails?.length > 0 && (
                <> 
                <p className="text-green-400 font-bold ">Listings</p>
                <hr className="text-green-400 pb-4 " />

                {searchdata?.userGameServiceDetails?.map((service)=> (
                  <div key={service.id} className="flex justify-between items-center " >
                    <p className="text-white py-4">{service.title}</p>
                    <button className="border-none px-8 rounded-xl w-20 text-md  text-center flex justify-center items-center h-8 text-white  "   
                    style={{backgroundColor: "#FF754C"}}
                    >{service.category.name}</button>
                  </div>
                ))}
                </>
              )}
             

               {/* GamesData       */}
              {searchdata?.gameDetails?.length > 0 && (

              <>
                <p className="text-green-500 font-bold text-md">Games</p>
                <hr className="text-green-500" />

                <Slider {...settings} >
                {searchdata?.gameDetails?.map((search) => (
                  <div key={search.id} className="w-full h-48 flex mt-4 items-center py-2 justify-between flex-col text-center border-1 border-transparent " >
                    <img className="w-22 h-22 rounded-full mx-auto " src={search.image} alt="" />
                    <h2 className="text-white text-sm mt-2 " >{search.name}</h2>
                  </div>
                ))}
                </Slider>

              </>
            )}


             {/* userData */} 
            {searchdata?.userDetails?.length > 0 && (
              <>
               <p className="text-green-500 font-bold">Users</p> 
               <hr className="text-green-400 pb-4 "  /> 

               {searchdata?.userDetails?.map((user)=> (
                 <div key={user.id} className="flex gap-2.5 items-center py-3 mt" >
                  <img className="w-10 h-10 rounded-full border-2 border-green-400 " src={user.image} alt="" />
                  <p className="text-white text-sm ">{user.name}</p>
                 </div>
               ))}
              </>
            )}
            </>
            
            )}

         
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import { images } from "../../constant/images";
import { useNavigate, useParams } from "react-router-dom";
import { GetTopCategoryDetail } from "../../data/api/topCategoriesDetailApi";
import { GetAllCategories } from "../../data/api/categoryApi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategoryId } from "../../data/redux/slices/TopCategoriesDetailSlice";
import Loader from "../../components/Ui/Loader";

const TopCategoriesDetail = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {gameId, categoryId} = useParams()

  useEffect(() => {
    if(gameId && categoryId ){
        dispatch(GetTopCategoryDetail({gameId, categoryId}));
        
    }
    dispatch(GetAllCategories())   
  }, [dispatch, gameId, categoryId]);

  const { topcategoriesDetailData: topCategoryDetailData, activeCategoryId: activeid } = useSelector(
    (state) => state.topcategoriesDetail
  );
  console.log(topCategoryDetailData)

  const buttons = useSelector(state=> state.categories.data)
  console.log(buttons)

  const startloading = useSelector(state=> state.categories.loading)

  // const buttons = [
  //   { id: "1", name: "buddy" },
  //   { id: "2", name: "Accounts" },
  //   { id: "3", name: "Rank" },
  //   { id: "4", name: "Duel" },
  //   { id: "5", name: "In-Game-Currency" },
  //   { id: "6", name: "In-Game-item" },
  // ];




  function Addbtn(id) {
    console.log("Id :", id);
    dispatch(setActiveCategoryId(id))
    navigate(`/top-category/${gameId}/detail/${id}`)
  }

  function AddDetail(id) {
    console.log("ID :", id)
    console.log("hello Detail")
    navigate(`/top-category/${gameId}/listing/${id}`)
  }

  return (
    <div>
      <div>
        <nav className="flex items-center justify-between px-4 py-4 ">
          <div
            className="left-icon text-white text-2xl p-2 rounded-full "
            style={{ backgroundColor: "#33353B" }}
            onClick={() => navigate(-1)}
          >
            <images.LeftIcon />
          </div>

          <h2 className="  text-md " style={{ color: "#00FF62" }} >{topCategoryDetailData?.rows?.[0]?.game?.name}</h2>

          <h2 className=" font-semibold " style={{ color: "#00FF62" }}>
            {topCategoryDetailData.name}
          </h2>
        </nav>
        
        {/* {categorydata.map((item)=> (
          <div key={item.id}>
             

          </div>
          
        ))} */}

        <div className="flex flex-wrap gap-2 px-4 mt-4 ">

          {startloading ? (
          <Loader /> )  : (

            buttons.map((items) => (
              <div key={items.id}>
                <button
                  className={`border p-1.5 px-4 rounded-lg text-white capitalize text-md
                    ${activeid === items.id ? "bg-red-400 border-red-400" : "border-red-400"}
                  `}
                  onClick={() => Addbtn(items.id)}
                >
                  {items.name}
                </button>
              </div>
            ))) }

          

          
        </div>

        {/* search-bar  */}
        <div className="search flex justify-between items-center gap-2 w-full px-4 mt-6 ">
          <div className="search-bar">
            <div
              className="flex items-center rounded-xl px-2 "
              style={{ backgroundColor: "#33353B" }}
            >
              <images.SearchIcon className="text-3xl text-white  " />
              <input
                type="text"
                placeholder="Search"
                className="py-4 px-1 text-xl rounded-lg outline-none text-white placeholder-white"
              />
            </div>
          </div>

          <div
            className="filter-bar w-18 h-14 rounded-lg flex items-center justify-center  "
            style={{ backgroundColor: "#33343B" }}
          >
            <images.filterIcon className="text-gray-400 text-4xl p-0.5 " />
          </div>
        </div>

        </div>

       <div className="px-4 flex flex-wrap justify-between py-4  gap-2 ">

        { topCategoryDetailData?.rows?.length === 0 ? (
            <p className="text-gray-200 text-2xl py-4 ">No Data Found !!</p>
        ) : 
         (
          topCategoryDetailData?.rows?.map((items) => (
            <div
              key={items.id}
              className="w-[48%] p-2 py-2 rounded-lg mt-4 "
              style={{ backgroundColor: "#33343B" }}
              onClick={()=>AddDetail(items.id)}
            >
              {items?.userGameServiceImages?.[0]?.path ? (
                <img
                  src={items.userGameServiceImages[0].path}
                  alt="Image"
                  className="h-20 rounded-lg  w-full object-cover "
                />
              ) : (
                <div>No Image</div>
              )}
              <h2 className="text-gray-200">{items.title}</h2>
              <h2 className="text-xs py-1 text-gray-500 font-semibold">
                {items.game.name}
              </h2>
  
              <div className="py-1 flex justify-between items-center ">
                <button
                  className=" text-white p-1 rounded-xl  text-xs px-4 "
                  style={{ backgroundColor: "#FF754C" }}
                >
                  {items.category.name}
                </button>
                <div className="coin flex items-center gap-1 ">
                  <images.coinIcon className="text-yellow-500" />
                  <h3 className="text-white "> {items.price}</h3>
                </div>
              </div>
              <hr className="text-gray-500" />
  
              <div>
                <div className="option mt-2 flex items-center gap-1 text-xs  ">
                  <img
                    src={items.user.image}
                    alt="user-image"
                    className=" border-2 object-cover border-green-700 w-8 h-8 rounded-full   "
                  />
                  <div className="text-white text-sm ">
                    <p>wwe</p>
                    <div className=" flex gap-1 ">
                      <p className="flex gap-0.5 items-center  ">
                        {" "}
                        <images.starIcon /> {items.user.avg_rating_count}{" "}
                      </p>{" "}
                      <br />
                      <p className="flex items-center gap-0.5  ">
                        {" "}
                        <images.commentIcon /> {items.user.comment_count}
                      </p>
                    </div>
                  </div>
                  
                </div>
  
              </div>
  
            </div>
          ))

        )}
         
        

      </div>
    </div>
  );
};

export default TopCategoriesDetail;

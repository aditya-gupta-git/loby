import React, { useEffect, useState } from "react";
import { images } from "../../constant/images";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Ui/Loader";
import { useDispatch, useSelector } from "react-redux";
import { GetTopCategories } from "../../Data/api/topCategoriesApi";

const TopCategories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams()

  const [searchTerm, setSearchTerm] = useState("")
  const data = useSelector((state) => state.topcategories.topcategory);
  // console.log(data)

  // const [loading, setLoading] = useState(true);
    const startloading = useSelector((state)=> state.topcategories.loading)

  useEffect(() => {
    if(id)
    dispatch(GetTopCategories(id));
  }, [dispatch, id]);

     


  function Addfeature(categoryId, gameId) {
    console.log("categoryId :", categoryId)
    console.log("gameId :",  gameId)
    navigate(`/top-category/${gameId}/detail/${categoryId}`)
  }

  const filteredData = data?.gameCategories?.filter((result) =>
    result.game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

          <h2 className=" font-semibold " style={{ color: "#00FF62" }}>
            {data.name}
          </h2>

          <div
            className="right-search text-white text-2xl p-2 rounded-lg "
            style={{ backgroundColor: "#33353B" }}
            onClick={() => navigate("/search")}
          >
            <images.SearchIcon />
          </div>
        </nav>

        <div className="mt-4 px-4">
          <input
            type="text"
            placeholder="Select Game"
            className="px-4 py-3 w-full rounded-lg text-gray-50 outline-green-700 "
            style={{ backgroundColor: "#33353B" }}
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value) }
          />
        </div>

        <div className="px-4 mt-6 flex flex-wrap itmes-center justify-between gap-y-6 ">
          
          
          {startloading ? (
            <Loader />
          ) : (

            filteredData?.map((data)=> (
              <div key={data.id}>
         
                <div key={data.id}
                 className="w-28 text-center "
                 onClick={()=> Addfeature(data.category_id, data.game_id)}
                 >
                  <img
                    src={data.game.image}
                    alt="game-image"
                    className="w-28 h-24 object-cover rounded-lg "
                  />
                  <div className="mt-1">
                    <p className="text-xs text-white ">{data.game.name}</p>
                    <p className="text-xs text-red-600">
                      {data.game.listing_count} Listings
                    </p>
                  </div>
                </div>
      
              </div>
  
            )))}

          
          
          
          

        </div>

        
      </div>


      
    </div>
  );
};

export default TopCategories;

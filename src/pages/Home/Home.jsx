import React, { useEffect } from "react";
import { GetAllCategories } from "../../Data/api/categoryApi";
import { useDispatch, useSelector } from "react-redux";
import { GetAllGames } from "../../Data/api/gamesApi";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  // const token = localStorage.getItem("token")
  // console.log(token)

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(GetAllCategories());
    dispatch(GetAllGames());
  }, [dispatch]);

  // Destruture-
  const { data: categories, loading: categoryLoading } = useSelector(
    (state) => state.categories
  );
  const { gameData: games, loading: gamesLoading } = useSelector(
    (state) => state.games
  );

  function showFnc(id){
    console.log("Hello Inida")
    console.log("Id :", id)
    navigate(`/game/${id}`)
  }

  // const categories = useSelector((state) => state.categories.data);   
  // // console.log(categories)

  // // Get-ALL-Games
  // const games = useSelector((state) => state.games.gameData);
  // console.log(games);

  function handleCategory(id){
    console.log("hello Category World")
    console.log("Our Id :", id)
    // navigate('/top-category')
  }

  return (
    <div className="min-h-screen pb-4" style={{ backgroundColor: "#1F2128" }}>
      <Navbar />
      <div className="text-center w-1/3 mx-auto">
        <h2 className="text-2xl font-semibold text-white ">Categories</h2>

        <div>
          {categoryLoading ? (
            <p className="text-white mt-4">Loading Categories</p>
          ) : (
            <ul className="flex flex-wrap justify-center gap-3 mt-8 ">
              {categories?.length > 0 ? (
                categories.map((category, index) => (
                  <li
                    key={index}
                    className="border-gray-200 border-1 px-4 py-1 w-42  rounded-md cursor-pointer bg-zinc-700 "
                    style={{ color: "#00FF62" }}
                    onClick={()=> handleCategory(category.id)}
                  >
                    {category.name}
                  </li>
                ))
              ) : (
                <p>No categories available</p>
              )}
            </ul>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-center mt-4 text-2xl text-white">Top Games</h2>
        
        {gamesLoading ? (
          <p className="text-white text-center text-4xl mt-2 ">Games loading.  .  .  . .</p>
        ) : (
          <div className="flex justify-center gap-12 flex-wrap mt-8">
          {games?.length > 0
            ? games.map((data) => (
                <div
                  key={data.id}
                  className="text-center flex flex-col items-center cursor-pointer "
                >
                  <img
                    src={data.image}
                    alt="logo"
                    className="w-24 rounded-full h-24 border-4 border-green-500 "
                    onClick={()=>showFnc(data.id)}
                  />
                  <h2 className="w-20 text-xs text-gray-300 mt-1">
                    {data.name}
                  </h2>
                </div>
              ))
            : (
              <p className="text-3xl text-gray-400">No Games Available</p>
            ) }   
        </div>
        )}

      </div>
    </div>
  );
};

export default Home;

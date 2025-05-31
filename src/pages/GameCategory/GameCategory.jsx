import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryGames } from "../../Data/api/categorygamesApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Ui/Loader";
import { images } from "../../constant/images";
import { GetAllCategories } from "@/Data/api/categoryApi";
import { GetTopCategoryDetail } from "@/Data/api/topCategoriesDetailApi";

const GameCategory = () => {
  const {gameid, id: categoryid } = useParams();
  console.log(gameid, categoryid ); 
  
  const dispatch = useDispatch();

  const navigate = useNavigate()

  useEffect(() => {
    console.log("Dispatching CategoryGames with ID:", gameid); 
    dispatch(CategoryGames(gameid));
    // dispatch(CategoryGames(gameId, categoryId));
    dispatch(GetAllCategories(gameid ));
    dispatch(GetTopCategoryDetail({gameid, categoryid}));   


  }, [dispatch, gameid]);

   const { topcategoriesDetailData: topCategoryDetailData } = useSelector(
      (state) => state.topcategoriesDetail
    );
    console.log(topCategoryDetailData)

  const category = useSelector((state)=> state.categories.data) 
  console.log(category) 

  const loading = useSelector(state => state.categoryGames.loading)
  // console.log(loading) 

  

  const GameName = useSelector((state)=> state.games.gameData)
  
  const selectedGame = GameName.find(game => game.id === parseInt(gameid))
  

  const categoryGamesData = useSelector(
    (state) => state.categoryGames.categoryGamesData
  );
  console.log(categoryGamesData);

      
  function AddButton(id){
    console.log("Hello World", id)
    // navigate(`/gameDetails/${id}`)
         
  }

  function CategoryData (id, gameid) {
    console.log("ID is :", id)
    // console.log("categoryId :", categoryId)
    // console.log("categoryId :", categoryId)
    navigate(`/game/${gameid}/category/${id}`) 
  }


  return (
    <div className="" style={{backgroundColor: "#1F2128"}}  >

      <nav className="flex items-center justify-between mt-4 px-4 " >
        <div 
          className="left-icon  text-white text-2xl p-2 rounded-full "
          style={{ backgroundColor: "#33353B" }}
          onClick={() => navigate(-1)} >
         <images.LeftIcon />
        </div>

        <h2 className="text-md text-green-400   ">
          {selectedGame?.name}
          </h2>
        <h2></h2>
      </nav>
-

     <div className="mt-1 px-4 flex flex-wrap gap-2   ">
      {category?.map((cat)=> (
       <div key={cat.id}>
        <button className="border-1 px-3 py-1.5 rounded-lg border-red-400 text-white  "  
         onClick={()=> CategoryData(cat.id, gameid)} 
         >{cat.name}</button>
       </div>
     ))}
     </div>

     
      <div className="flex flex-wrap items-center justify-between  ">
      {loading ?      
      <Loader /> :(
        categoryGamesData?.length > 0 ? (
          categoryGamesData.map((data) => (
            <Link to={`/game-details/${data.id}`} key={data.id}>
             <div
              key={data.id}
              className="border-1 w-42 shadow-black bg-white shadow-lg mx-4 mt-8 text-center pb-8 rounded-xl cursor-pointer h-60 max-h-72  "
              onClick={()=>AddButton(data.id)}    
            >
              <img
                src={data.userGameServiceImages[0]?.path}
                alt="images"
                className="w-full p-2 h-32 object-cover rounded-2xl "
              />
              <p className="text-md px-2 text-start">{data.title}</p>
              <p className="text-xs px-2 text-start  ">{data.game.name}</p>
            </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-300 px-4 pt-4 text-2xl  ">No Data Available</p>
        )
      )}
      </div>


    </div>
  );
};

export default GameCategory;






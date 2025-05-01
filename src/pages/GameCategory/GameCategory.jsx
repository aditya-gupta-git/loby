import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryGames } from "../../Data/api/categorygamesApi";
import { Link, useNavigate, useParams } from "react-router-dom";

const GameCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate()

  useEffect(() => {
    console.log("Dispatching CategoryGames with ID:", id); 
    dispatch(CategoryGames(id));
  }, [dispatch, id]);

  const categoryGamesData = useSelector(
    (state) => state.categoryGames.categoryGamesData
  );
  console.log(categoryGamesData);

  function AddButton(id){
    console.log("Hello World", id)
    // navigate(`/gameDetails/${id}`)
    
  }

  return (
    <div className="min-h-screen flex flex-wrap px-12 items-center justify-center gap-12 w-full "  >
      {/* <h1>Hello Game Category</h1> */}
      {categoryGamesData?.length > 0 ? (
        categoryGamesData.map((data) => (
          <Link to={`/game-details/${data.id}`} key={data.id}>
           <div
            key={data.id}
            className="border-1 w-96 shadow-black shadow-lg mx-4 mt-8 text-center pb-8 rounded-xl cursor-pointer   "
            onClick={()=>AddButton(data.id)}    
          >
            <img
              src={data.userGameServiceImages[0]?.path}
              alt="images"
              className="w-full h-48 object-cover rounded-t-xl "
            />
            <p className="text-2xl">{data.title}</p>
            <p className="text-xs">{data.game.name}</p>
          </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-300">No Data Available</p>
      )}
    </div>
  );
};

export default GameCategory;

import React, { useEffect } from "react";
import { GetAllCategories } from "../../Data/api/categoryApi";
import { useDispatch, useSelector } from "react-redux";
import { GetAllGames } from "../../Data/api/gamesApi";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Header/Header";
import Loader from "../../components/Ui/Loader";
import { images } from "../../constant/images";
import { CiSearch } from "react-icons/ci";
import { GetBannerImage } from "../../Data/api/sliderBannerApi";
import Carousel from "../../components/Ui/Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  // const token = localStorage.getItem("token")
  // console.log(token)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetBannerImage())
    dispatch(GetAllCategories());
    dispatch(GetAllGames());
  }, [dispatch]);

   useEffect(() => {
    const isLoggedIn = localStorage.getItem("token"); 

    if (isLoggedIn) {
      navigate("/home", { replace: true }); 
    }
  }, []);

  // Destruture-
  const { data: categories, loading: categoryLoading } = useSelector(
    (state) => state.categories
  );
  console.log(categories);
  
  const { gameData: games, loading: gamesLoading } = useSelector(
    (state) => state.games
  );

  function showFnc(id) {
    console.log("Hello Inida");
    console.log("Id :", id);
    navigate(`/game/${id}`); 
  }

  // const categories = useSelector((state) => state.categories.data);
  // // console.log(categories)

  // // Get-ALL-Games
  // const games = useSelector((state) => state.games.gameData);
  // console.log(games);

  function handleCategory(id) {
    console.log("hello Category World");
    console.log("Our Id :", id);
    
    navigate(`/top-category/${id}`); 
  }

  function profile(){
    console.log("hello hey")
    navigate('/profile')
  }

  // carousel --
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    loop: true,
    swipeToSlide: true
  };

  return (
    <>
      <Navbar />
      
      
      <div
        className="w-full h-24 flex items-center gap-2 justify-between px-3.5"
        style={{ backgroundColor: "#1F2128" }}
      >
        <div className="flex items-center rounded-xl px-5 "
         style={{ backgroundColor: "#33353B" }}>
          <CiSearch className="text-3xl text-white" />
          <input
            type="text"
            placeholder="Search"
            className="py-4 px-2 text-xl rounded-lg outline-none text-white placeholder-white"
            onClick={()=> navigate("/search")}
          />
        </div>

        <div className="">
          <img
            src={images.profileImage}
            alt="Profile"
            className="h-12 w-12 object-contain object-bottom rounded-full bg-green-100 cursor-pointer "
            onClick={profile}
          />
        </div>
      </div>

      {/* carousel_slider */}
      <Carousel />

      <div
        className=" pb-4 pt-12"
        style={{ backgroundColor: "#1F2128" }}
      >
        <div className="text-center w-full mx-auto">
          <h2 className="text-2xl font-semibold text-white ">Categories</h2>

          <div>
            {categoryLoading ? (
              <Loader />
            ) : categoryLoading ? (
              <p className="text-white mt-4">Loading Categories</p>
            ) : (
              <ul className="flex flex-wrap justify-center gap-3 mt-8 ">
                {categories?.length > 0 ? (
                  categories.map((category, index) => (
                    <li
                      key={index}
                      className="border-gray-200 border-1 px-4 py-2 w-42  rounded-md cursor-pointer bg-zinc-700 "
                      style={{ color: "#00FF62" }}
                      onClick={() => handleCategory(category.id)}
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
          <h2 className="text-center mt-12 text-2xl text-white">Top Games</h2>

         <div className="px-2 mt-8 overflow-hidden ">
         <Slider {...settings}>
          {gamesLoading ? (
            <p className=" "></p>
          ) : (
            // <div className=" mt-8">
              games?.length > 0 ? (
                games.map((data) => (
                  <div
                    key={data.id}
                    className="flex flex-col items-start justify-start text-center w-full"
                  >
                    <img
                      src={data.image}
                      alt="logo"
                      className="w-20 mx-auto rounded-full h-20 border-4 border-green-500 "
                      onClick={() => showFnc(data.id)} 
                    />
                    <h2 className="w-20 mx-auto text-xs text-gray-300 mt-1">
                      {data.name}
                    </h2>
                  </div>
                ))
              ) : (
                <p className="text-3xl text-gray-400">No Games Available</p>
              )
            // </div>
          )}

         </Slider>
         </div>
         
        </div>
      </div>
    </>
  );
};

export default Home;

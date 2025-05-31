import React, { useEffect, useState } from "react";
import { images } from "../../constant/images";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetprofileUser } from "../../data/api/profileApi";
import { Select } from "@radix-ui/react-select";
import { SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/Ui/select";
import { GetAllCategories } from "@/Data/api/categoryApi";
import { GetAllGames } from "@/Data/api/gamesApi";

const ProfileUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetprofileUser());
    dispatch(GetAllCategories())
    dispatch(GetAllGames())
  }, []);

  const profileuserdata = useSelector((state) => state.profile.ProfileUserData);


  const [activeTab, setActiveTab] = useState("Listing");

  const lists = [
    {"id": "1", "label": "Listing"},
    {"id": "2", "label": "About"},
    {"id": "3", "label": "Socials"},
    {"id": "4", "label": "Duels"},
    {"id": "5", "label": "Review & Ratings"}



  ]

  const categorylist = useSelector((state)=> state.categories.data)
  console.log(categorylist);

  const gameslist = useSelector((state)=> state.games.gameData)
  console.log(gameslist)
  
  

  return (
    <div>
      {/* <h1>ProfileUser</h1>  */}

      <div>
        <img
          src={profileuserdata?.rows?.[0]?.user?.cover_image}
          alt="cover-image"
        />
      </div>

      <nav className="flex p-4 absolute top-2 ">
        <div
          className="left-icon left-icon  text-white text-2xl p-2 rounded-full  "
          style={{ backgroundColor: "#33353B" }}
          onClick={() => navigate(-1)}
        >
          <images.LeftIcon />
        </div>
      </nav>

      <div className="border-1 shadow-md border-white mx-4 rounded-2xl relative -top-20 ">
        <div
          className="flex items-center gap-4 py-4 rounded-2xl p-4  "
          style={{ backgroundColor: "#292929" }}
        >
          <img
            src={profileuserdata?.rows?.[0]?.user?.image}
            alt="user-image"
            className="h-20 w-20 object-cover rounded-full border-2 border-green-500  "
          />

          <div>
            <h2 className="text-2xl text-white ">
              {profileuserdata?.rows?.[0]?.user?.name}
            </h2>
            <h2 className="text-yellow-500 font-light   ">
              2 Followers 2 Listing
            </h2>
          </div>
          
        </div>

        <div>
          {/* <h5></h5> */}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 px-4 py-2" >
        {lists.map((list)=> (
        
         <button key={list.id} onClick={()=> setActiveTab(list.label)}  className={`px-4 py-2 rounded-lg border border-red-400 text-white
            ${activeTab === list.label ? "bg-red-400" : "bg-transparent"}`}>{list.label}</button>
 
      ))}
      </div>


      <div className="mx-4 pt-4 " >
        <Select>
          <SelectTrigger
            className="w-full py-7 focus:border-green-500  max-w-md text-white border border-gray-700 rounded-md  "
            style={{ backgroundColor: "#373A43" }}
          >
            <SelectValue placeholder="Select Category" className="truncate" />
          </SelectTrigger>

          <SelectContent
            className="  border border-gray-700"
            style={{ backgroundColor: "#373A43" }}
          >
            <SelectGroup>
              {categorylist?.map((cat) => (
                <SelectItem
                  key={cat.id}
                  value={cat.name}
                  className="py-2 text-white"
                >
                  {cat.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>


        {/* gameId */} 



        <Select
          onValueChange={(value) => {
            setSelectedGame(value);
            const select = gameslist.find((game) => game.name === value);
            if (select) {
              setSelectedGameid(select.id);
            } else {
              console.error("Game not found!");
            }
          }}
        >
          <SelectTrigger
            className="w-full py-7 mt-4 focus:border-green-500 outline-none  max-w-md text-white border border-gray-700 rounded-md  "
            style={{ backgroundColor: "#373A43" }}
          >
            <SelectValue placeholder="Select Games" className="truncate" />
          </SelectTrigger>

          <SelectContent
            className="  border border-gray-700"
            style={{ backgroundColor: "#373A43" }}
          >
            <SelectGroup>
              {gameslist?.map((game) => (
                <SelectItem
                  key={game.id}
                  value={game.name}
                  className="py-2 text-white"
                >
                  {game.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

      </div>




      <div className="flex flex-wrap gap-4 pt-4 justify-between px-4">
        
        {profileuserdata?.rows?.map((card) => (
          <div key={card.id} className="max-w-xs">
            <div
              className="rounded-2xl p-2 w-40 h-48 text-center text-white shadow-xl border-1"
              style={{ backgroundColor: "#1F2128" }}
            >
              <img
                src={card?.game?.image}
                alt="card-image"
                className="w-40 h-24 object-cover rounded-2xl"
              />
              <h2 className="py-2 text-base font-semibold">{card?.title}</h2>
              <p className="text-sm text-gray-400">{card?.game?.name}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ProfileUser;

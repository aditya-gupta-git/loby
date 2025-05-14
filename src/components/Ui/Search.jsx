import React from "react";
import { images } from "../../constant/images";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate()
     


  return (
    <div>
      {/* <h1>This is Search_Bar</h1> */}

      <div>
        <div className="px-4 mt-6 ">
          <images.LeftIcon
            className=" text-white p-3 h-12 w-12 rounded-full  "
            style={{ backgroundColor: "#33353B" }}
            onClick={()=>navigate(-1)}
          />
        </div>

        <div className="mt-4 px-4">
          <input
            type="text"
            placeholder="Select..."
            className="px-4 py-3 w-full rounded-lg text-gray-50 outline-green-700 "
            style={{ backgroundColor: "#33353B" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

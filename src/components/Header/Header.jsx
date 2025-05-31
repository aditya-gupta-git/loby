import React, { use, useState } from "react";
import { images } from "../../constant/images";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // const hello = () => {
  //   console.log("Hello India");
  //   navigate("/profile");
  // };

  const [sidebarOpen, setSidebarOpen] = useState(false);


  function hamburger() {
    alert("Hello");
  }

  return (
    <>
      <div className="logo w-full flex items-center  justify-between px-8 " style={{backgroundColor: "#242731"}}>
        <img
          src={images.logoImage}
          alt="brand-logo"
          className="h-20 w-14 object-contain pt-2 "
        />

        <div className="menu">
             <images.menuIcon className="text-white text-2xl font-bold "
             onClick={()=> setSidebarOpen(true)}
              />
        </div>

   
      </div>

       {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "#242731" }}
      >
        {/* Sidebar Content */}
        <div className="p-4">
          <button
            className="mb-4 text-black"
            onClick={() => setSidebarOpen(false)}
          >
            <images.crossIcon className="text-3xl text-white" />
          </button>
          
          <div>
            <ul>
              <li className="text-xl text-white "  
              onClick={()=> navigate('/Addlisting')}
              >Add Listing</li>

            </ul>
          </div>
          
        </div>
      </div>

      
    </>
  );
};

export default Navbar;

import React from "react";
import { images } from "../../constant/images";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const hello = () => {
    console.log("Hello India");
    navigate("/profile");
  };

  return (
    <>
      <div className="logo w-full flex justify-center " style={{backgroundColor: "#242731"}}>
        <img
          src={images.logoImage}
          alt="brand-logo"
          className="h-20 w-14 object-contain pt-2 "
        />
      </div>

      
    </>
  );
};

export default Navbar;

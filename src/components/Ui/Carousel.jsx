import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const carouseldata = useSelector((state) => state.carousel.carouseldata);
  console.log(carouseldata);

  return (
    <div className="w-[90%] rounded-2xl h-72 mx-auto overflow-hidden overflow-x-hidden " > 

      <Slider {...settings}>

        {carouseldata.map((data) => (
          <div key={data.id}>
            <img
              src={data.image_url}
              alt="slide-image"
              className="max-w-full max-h-full object-cover object-center h-72 overflow-hidden "
            />
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Carousel;

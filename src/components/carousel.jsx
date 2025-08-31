import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SlArrowRight,SlArrowLeft  } from "react-icons/sl";

import slide1 from "../assets/Label1.png"
import slide2 from "../assets/Label6.png"
import slide3 from "../assets/Label7.png"

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlArrowRight color="black"/>,
    prevArrow: <SlArrowLeft color="black"/>,
  };

  return (
    <div className=" w-2/4 m-auto mb-6">
        <div className="mt-20">
            <Slider {...settings} >
            <div><img src={slide1} alt="slide 1" className="h-100 w-full object-fill"/></div>
            <div><img src={slide2} alt="slide 2" className="w-100 object-fill"/></div>
            <div><img src={slide3} alt="slide 3" className="w-100 object-fill"/></div>
            </Slider>
        </div>
    </div>
  );
};

export default MyCarousel;



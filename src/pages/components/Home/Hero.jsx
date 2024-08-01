import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Carousel from "../../../_components/Carousel";
import Slider from "react-slick";
import MyButton from "../../../_components/MyButton";
const Hero = () => {
  const slides = [
    {
      heading: "Your bright future is our mission",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,totam autem veritatis optio possimus consequuntur nobis doloremque rem nostrum quasi, atque doloribus iusto .",
    },
    {
      heading: "Empowering dreams for a better tomorrow",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,totam autem veritatis optio possimus consequuntur nobis doloremque rem nostrum quasi, atque doloribus iusto .",
    },
    {
      heading: "Unlocking potential, shaping your future",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,totam autem veritatis optio possimus consequuntur nobis doloremque rem nostrum quasi, atque doloribus iusto .",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // fade: true, // Enable fade effect
  };
  return (
    <div className="min-h-screen  !text-white relative overflow-hidden  homeHero  !max-w-full items-center">
      <Slider {...settings} className="">
        <div className="text-white slideHero   respPx20 z-50">
          <h1 className="text-white  font-extrabold !leading-tight sm:text-6xl text-4xl  respHeroHeadingWidth  my-4 ">
            Your bright future is our mission
          </h1>
          {/* <h1>{slide.heading}</h1> */}
          <p className="respHeroHeadingWidth sm:text-base text-sm text-gray-400 my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            totam autem veritatis optio possimus consequuntur nobis doloremque
            rem nostrum quasi, atque doloribus iusto .
          </p>
          {/* <p>{slide.para}</p> */}
          <MyButton text={"Apply Now"} />
        </div>
        <div className="text-white  slideHero  respPx20 z-50">
          <h1 className="text-white  font-extrabold !leading-tight respHeroHeadingWidth sm:text-6xl text-4xl my-4 ">
            Your bright future is our mission
          </h1>
          {/* <h1>{slide.heading}</h1> */}
          <p className="respHeroHeadingWidth sm:text-base text-sm text-gray-400 my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            totam autem veritatis optio possimus consequuntur nobis doloremque
            rem nostrum quasi, atque doloribus iusto .
          </p>
          {/* <p>{slide.para}</p> */}
          <MyButton text={"Apply Now"} />
        </div>{" "}
        <div className="text-white slideHero  respPx20 z-50">
          <h1 className="text-white  font-extrabold !leading-tight sm:text-6xl text-4xl  respHeroHeadingWidth my-4 ">
            Your bright future is our mission
          </h1>
          {/* <h1>{slide.heading}</h1> */}
          <p className="respHeroHeadingWidth sm:text-base text-sm text-gray-400 my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            totam autem veritatis optio possimus consequuntur nobis doloremque
            rem nostrum quasi, atque doloribus iusto .
          </p>
          {/* <p>{slide.para}</p> */}
          <MyButton text={"Apply Now"} />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;

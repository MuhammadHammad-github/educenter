import React from "react";
import Carousel from "../../../_components/Carousel";

const Hero = () => {
  const slides = [{}, {}];
  return (
    <div className="min-h-screen homeHero flex items-center">
      <Carousel slides={slides} />
    </div>
  );
};

export default Hero;

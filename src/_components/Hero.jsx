import { ArrowBack, ChevronLeft, ChevronRight } from "@mui/icons-material";
import React from "react";

const Hero = ({ path = "About Us" }) => {
  return (
    <div className="hero respPx20    xs:pt-60 py-80 pb-32">
      <div className="flex gap-2 items-end">
        <h1 className="text-sunrise font-extrabold xs:text-5xl text-4xl">
          Home
        </h1>
        <ChevronRight className="text-white xs:!text-4xl text-3xl !font-extralight " />
        <h2 className="text-white xs:text-3xl  text-2xl font-bold">{path}</h2>
      </div>
      <p className="text-white my-4 respHeroHeadingWidth font-light">
        Our courses offer a good compromise between the continuous assessment
        favoured by some universities and the emphasis placed on final exams by
        others.
      </p>
    </div>
  );
};

export default Hero;

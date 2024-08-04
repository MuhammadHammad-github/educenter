import React from "react";
import Hero from "../_components/Hero";

const Research = () => {
  return (
    <div>
      <Hero path="Research" />
      <div className="my-20 respPx20 resp3ColGrid gap-6">
        <ResearchCard
          heading={"Geography"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/research/research-1.jpg"
          }
        />
        <ResearchCard
          heading={"Mathematical"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/research/research-2.jpg"
          }
        />
        <ResearchCard
          heading={"Humanities"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/research/research-3.jpg"
          }
        />{" "}
        <ResearchCard
          heading={"Physical & Sciences"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/research/research-4.jpg"
          }
        />{" "}
        <ResearchCard
          heading={"Biological Sciences"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/research/research-5.jpg"
          }
        />{" "}
        <ResearchCard
          heading={"Archaeology"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/research/research-6.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Research;
const ResearchCard = ({ heading, image }) => {
  return (
    <div className="hover:shadow-lg transitional border-b">
      <img src={image} alt="researchCard Image" className="max-w-full h-auto" />
      <div className="my-5 px-5">
        <h1 className="text-xl font-extrabold">{heading}</h1>
        <p className="my-2 text-[15px] leading-[1.9]">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

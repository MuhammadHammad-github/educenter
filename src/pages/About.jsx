import React from "react";
import Hero from "../_components/Hero";
import AboutJourney from "./components/About/AboutJourney";
import SuccessStories from "./components/Home/SuccessStories";
import Teachers from "./components/Home/Teachers";
import CountingNumbers from "./components/About/CountingNumbers";

const About = () => {
  return (
    <div>
      <Hero />
      <AboutJourney />
      <CountingNumbers />
      <SuccessStories />
      <Teachers />
    </div>
  );
};

export default About;

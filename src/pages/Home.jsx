import React from "react";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Features from "./components/Home/Features";
import Courses from "./components/Home/Courses";
import CTA from "./components/Home/CTA";
import SuccessStories from "./components/Home/SuccessStories";
import UpcomingEvents from "./components/Home/UpcomingEvents";
import Teachers from "./components/Home/Teachers";
import LatestNews from "./components/Home/LatestNews";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Features />
      <About />
      <Courses />
      <CTA />
      <SuccessStories />
      <UpcomingEvents />
      <Teachers />
      <LatestNews />
    </div>
  );
};

export default Home;

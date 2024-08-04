import React from "react";
import MyButton from "../../../_components/MyButton";
import MyButton2 from "../../../_components/MyButton2";

const About = () => {
  return (
    <div className="respPx10 py-20 grid lg:grid-cols-2 grid-cols-1 gap-10">
      <div>
        <h1 className="text-5xl font-bold">About Educenter</h1>
        <div className="my-10 flex flex-col gap-4">
          <p className=" leading-loose text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat
          </p>
          <p className="leading-loose text-sm">
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem
          </p>
        </div>
        <MyButton2 text={"Learn More"} />
      </div>
      <div>
        <img
          src="https://demo.themefisher.com/educenter-bootstrap/images/about/about-us.jpg"
          alt="about us image"
        />
      </div>
    </div>
  );
};

export default About;

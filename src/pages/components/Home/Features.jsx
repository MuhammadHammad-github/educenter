import {
  FileCopy,
  ListAlt,
  MenuBookOutlined,
  Monitor,
} from "@mui/icons-material";

import { List } from "@mui/material";
import React from "react";

const Features = () => {
  return (
    <div className="lg:grid-cols-3 grid-cols-1 grid pt-44  bg-[#F8F8F8] relative">
      <div>
        <img
          src="https://demo.themefisher.com/educenter-bootstrap/images/banner/banner-feature.png"
          alt="featureBannerImage"
          className="object-contain w-full h-auto"
        />
      </div>
      <div
        className="grid sm:grid-cols-2 xl:gap-20 gap-10 flex-wrap lg:absolute -top-24 left-1/3
        xl:p-20 p-10 h-full lg:w-2/3 w-full bg-[#F8F8F8]"
      >
        <FeatureCard
          icon={<MenuBookOutlined className="text-sunrise !text-6xl" />}
          heading={"Scholorship News"}
        />
        <FeatureCard
          icon={<Monitor className="text-sunrise !text-6xl" />}
          heading={"Our Notice Board"}
        />
        <FeatureCard
          icon={<ListAlt className="text-sunrise !text-6xl" />}
          heading={"Our Achievements"}
        />
        <FeatureCard
          icon={<FileCopy className="text-sunrise !text-6xl" />}
          heading={"Admission Now"}
        />
      </div>
    </div>
  );
};

export default Features;
const FeatureCard = ({ heading, icon }) => {
  return (
    <div className="flex gap-6 flex-col">
      {icon}
      <h1 className="font-bold text-2xl">{heading}</h1>
      <p className="leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      </p>
    </div>
  );
};

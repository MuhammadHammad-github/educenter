import {
  PlayArrow,
  PlayArrowOutlined,
  PlayCircle,
  PlayCircleOutline,
} from "@mui/icons-material";
import React from "react";

const SuccessStories = () => {
  return (
    <div className="successStories respPx20 py-24 grid md:grid-cols-3 grid-cols-1 gap-10">
      <div className="flex  items-center md:justify-start justify-center md:py-0 py-10">
        <div className="bg-sunrise rounded-full p-10 cursor-pointer playBtn relative ">
          <div className="playHoverItem"></div>
          <PlayArrowOutlined className="!text-3xl text-white !font-extralight playIcon" />
        </div>
      </div>
      <div className="bg-white p-10 flex flex-col gap-6 col-span-2">
        <h2 className="font-bold text-40px">Success Stories</h2>
        <p className="leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
    </div>
  );
};

export default SuccessStories;

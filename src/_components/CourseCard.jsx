import { CalendarMonth } from "@mui/icons-material";
import React from "react";
import MyButton from "./MyButton";

const CourseCard = ({ heading, image }) => {
  return (
    <div className="border shadow-sm hover:shadow-lg transitional min-h-max">
      <div className="w-full  !min-h-max">
        <img src={image} className="max-w-full  w-full" alt="courseImg" />
      </div>
      <div className="p-4">
        <div className="flex  items-center gap-3">
          <div className="flex items-center gap-1">
            <CalendarMonth className="text-slate" />
            <span className="text-slate">2-14-2018</span>
          </div>
          <span className="text-slate cursor-pointer hover:text-sunrise transitional">
            Humanities
          </span>
        </div>
        <h4 className="text-xl my-2 font-bold text-navy hover:text-sunrise transitional cursor-pointer">
          {heading}
        </h4>
        <p className="mt-3 mb-6 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <MyButton text={"Apply Now"} />
      </div>
    </div>
  );
};

export default CourseCard;

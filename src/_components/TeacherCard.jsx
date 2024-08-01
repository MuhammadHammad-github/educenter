import {
  FacebookOutlined,
  FacebookRounded,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const TeacherCard = ({ image, name }) => {
  return (
    <div className="hover:shadow-2xl transitional">
      <img src={image} alt="teacherImg" className="max-w-full w-full h-auto " />
      <div className="p-4 flex flex-col gap-4">
        <h2 className="font-extrabold text-xl hover:text-sunrise transitional cursor-pointer">
          {name}
        </h2>
        <p>Teacher</p>
        <div className="flex items-center gap-2">
          <FacebookRounded className="!text-xl text-slate hover:text-sunrise transitional cursor-pointer" />
          <Twitter className="!text-xl text-slate hover:text-sunrise transitional cursor-pointer" />
          <Instagram className="!text-xl text-slate hover:text-sunrise transitional cursor-pointer" />
          <LinkedIn className="!text-xl text-slate hover:text-sunrise transitional cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;

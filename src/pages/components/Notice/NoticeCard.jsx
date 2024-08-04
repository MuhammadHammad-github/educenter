import React from "react";
import MyButton from "../../../_components/MyButton";

const NoticeCard = ({ heading, date }) => {
  return (
    <div className="flex 960px:flex-row flex-col items-stretch bg-white transitional hover:shadow-xl ">
      <div className="flex flex-col items-center justify-center p-5  bg-sunrise">
        <h1 className="text-white text-40px font-semibold">{date}</h1>
        <p className="text-white">APR,2019</p>
      </div>
      <div className="flex flex-col gap-4 items-start px-5 py-4">
        <h1 className="text-slate text-xl font-semibold transitional hover:text-sunrise cursor-pointer">
          {heading}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          perferendis saepe omnis officia! Doloribus quae maiores laboriosam
          praesentium enim fugiat ipsam laudantium assumenda!
        </p>
      </div>
      <div className="px-2 flex 960px:justify-center items-center justify-end py-2">
        <MyButton text={"Read More"} />
      </div>
    </div>
  );
};

export default NoticeCard;

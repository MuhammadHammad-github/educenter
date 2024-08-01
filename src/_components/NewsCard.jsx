import React from "react";
import MyButton from "./MyButton";

const NewsCard = ({ image, date, by }) => {
  return (
    <div className="hover:shadow-xl transitional">
      <img src={image} alt="newsImage" className="max-w-full w-full h-auto" />
      <div className="p-4 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <span>{date}</span>
          <span>By {by}</span>
        </div>
        <h1 className="font-extrabold text-xl cursor-pointer hover:text-sunrise transitional">
          Lorem ipsum dolor amet, adipisicing eiusmod tempor.
        </h1>
        <p>Lorem ipsum dolor amet, adipisicing eiusmod tempor.</p>
        <MyButton text={"Read More"} />
      </div>
    </div>
  );
};

export default NewsCard;

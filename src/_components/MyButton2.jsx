import React from "react";

const MyButton2 = ({ text }) => {
  return (
    <button className="btn2 w-40 h-12 !border-sunrise !border  bg-white px-8 py-3 text-sunrise text-base">
      <span className="transitional font-medium absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10  min-w-max">
        {text}
      </span>
    </button>
  );
};

export default MyButton2;

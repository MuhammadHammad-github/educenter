import React from "react";

const MyButton = ({ text, className }) => {
  return (
    <button
      className={`${className} btn w-40 h-12  bg-sunrise px-8 py-3 text-white text-base`}
    >
      <span className="transitional font-medium absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10  min-w-max">
        {text}
      </span>
    </button>
  );
};

export default MyButton;

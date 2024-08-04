import React from "react";

const MyListItem = ({ text }) => {
  return (
    <li className="relative my-2 mx-5">
      <span className="absolute top-1/2 -left-5 -translate-y-1/2 bg-sunrise p-1 rounded-full"></span>
      {text}
    </li>
  );
};

export default MyListItem;

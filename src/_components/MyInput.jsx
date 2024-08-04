import React from "react";

const MyInput = ({ placeholder, type = "text", name = "" }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="py-4   px-6   my-2 border border-gray-300 transition-all duration-200 ease-in-out outline-none focus:border-sunrise w-full placeholder:text-gray-500"
      required
      name={name}
    />
  );
};

export default MyInput;

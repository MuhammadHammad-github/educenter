import React from "react";
import MyButton from "../../../_components/MyButton";
import MyButton2 from "../../../_components/MyButton2";

const CTA = () => {
  return (
    <div className="bg-sunrise text-white flex flex-col gap-1 items-center py-24">
      <p className="text-center text-white font-semibold text-lg">
        Click to Join the Advance Workshop
      </p>
      <h3 className="text-center text-white text-4xl font-extrabold mb-5">
        Training In Advanced Networking
      </h3>
      <MyButton2 text={"Join Now"} />
    </div>
  );
};

export default CTA;

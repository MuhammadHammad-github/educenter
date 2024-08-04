import React from "react";
import Hero from "../_components/Hero";
import NoticeCard from "./components/Notice/NoticeCard";

const Notice = () => {
  return (
    <div>
      <Hero path="Notice" />
      <div className="respPx20 my-20 flex flex-col gap-6">
        <NoticeCard
          date={30}
          heading={"Teaching Materials and Testing Methods"}
        />
        <NoticeCard
          date={27}
          heading={"Teaching Materials and Testing Methods"}
        />
        <NoticeCard
          date={25}
          heading={"Teaching Materials and Testing Methods"}
        />
        <NoticeCard
          date={23}
          heading={"Teaching Materials and Testing Methods"}
        />
      </div>
    </div>
  );
};

export default Notice;

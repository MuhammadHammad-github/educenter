import React from "react";
import Hero from "../_components/Hero";
import MyListItem from "../_components/MyListItem";

const Scholarship = () => {
  return (
    <div>
      <Hero path="Scholarship" />
      <div className="respPx20 my-20 grid  md:grid-cols-2 grid-cols-1 gap-5">
        <div className="">
          <img
            src="https://demo.themefisher.com/educenter-bootstrap/images/scholarship/scholarship.jpg"
            alt="scholarship image"
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="font-extrabold text-40px">SCHOLARSHIPS NEWS</h1>
          <h6 className="italic font-bold text-slate mb-5">
            Our campuses are living laboratories for sustainability.
          </h6>
          <p className="text-[15px] leading-[1.9]">
            Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do
            eiusmod tempor incididunt ut labore et.dolore magna aliquauis aute
            irure dolor. in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quas cum ut ab nesciunt distinctio maxime expedita fugit laborum?
            Aliquid, quia.
          </p>
        </div>
      </div>
      <div className="respPx20 resp3ColGrid my-10 gap-10">
        <ScholarshipCard
          heading={"CHEMICAL ENGINEERING"}
          subHeading={"Engineering"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/scholarship/scholarship-item-1.jpg"
          }
        />
        <ScholarshipCard
          heading={"MUSIC & ARTS"}
          subHeading={"Design & Arts"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/scholarship/scholarship-item-2.jpg"
          }
        />{" "}
        <ScholarshipCard
          heading={"GRAPHICS DESIGN"}
          subHeading={"Design & Arts"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/scholarship/scholarship-item-3.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Scholarship;
const ScholarshipCard = ({ image, heading, subHeading }) => {
  return (
    <div className="hover:shadow-lg transitional">
      <img
        src={image}
        alt="scholarship card image"
        className="max-w-full h-auto"
      />
      <div className="p-5 flex flex-col gap-2">
        <p>{subHeading}</p>
        <h1 className="text-xl font-extrabold">{heading}</h1>
        <ul className=" ">
          <MyListItem text={"institutes"} />
          <MyListItem text={"Smart-affiliated research"} />
          <MyListItem text={"Digital Access to Scholarship"} />
          <MyListItem text={"Smart Catalyst"} />
          <MyListItem text={"Smart Library Portal"} />
          <MyListItem text={"Smart research programs"} />
        </ul>
      </div>
    </div>
  );
};

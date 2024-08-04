import React from "react";
import Hero from "../_components/Hero";
import CourseCard from "../_components/CourseCard";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocationOn,
  LocationOnOutlined,
  Mail,
  MailOutline,
  PhoneOutlined,
  Public,
  Twitter,
} from "@mui/icons-material";

const TeacherSingle = () => {
  return (
    <div>
      <Hero path="John Doe" />
      <div className="respPx20 gap-y-10 my-20 grid 960px:grid-cols-2 grid-cols-1 960px:w-full sm:w-[70%] mx-auto">
        <img
          src="https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-1.jpg"
          alt="teacher's image"
          className="max-w-full h-auto w-full 960px:px-10 object-contain"
        />
        <div className="">
          <h1 className="font-extrabold text-2xl">John Doe</h1>
          <h3 className="font-bold my-1">Computer Science</h3>
          <p className="text-[15px] leading-[1.9] my-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            accusamus tenetur ea harum delectus ab consequatur excepturi, odit
            qui in quo quia voluptate nam optio, culpa aspernatur. Error placeat
            iusto officia voluptas quae.
          </p>
          <div className="grid 960px:grid-cols-2 grid-cols-1 my-10">
            <div>
              <h1 className="uppercase font-extrabold text-xl">
                Contact Info:
              </h1>
              <div className="my-5">
                <div className="flex gap-2 items-center my-3 cursor-pointer group">
                  <MailOutline className="!text-xl text-slate group-hover:text-sunrise transitional" />
                  <span className="group-hover:text-sunrise transitional">
                    johndoe@email.com
                  </span>
                </div>
                <div className="flex gap-2 items-center my-3  group cursor-pointer">
                  <PhoneOutlined className="!text-xl text-slate group-hover:text-sunrise transitional" />
                  <span className="group-hover:text-sunrise transitional">
                    +120 345 876
                  </span>
                </div>
                <div className="flex gap-2 items-center my-3 cursor-pointer group">
                  <FacebookOutlined className="!text-xl text-slate group-hover:text-sunrise transitional" />
                  <span className="group-hover:text-sunrise transitional">
                    john doe
                  </span>
                </div>
                <div className="flex gap-2 items-center my-3 cursor-pointer group">
                  <Twitter className="!text-xl text-slate group-hover:text-sunrise transitional" />
                  <span className="group-hover:text-sunrise transitional">
                    john doe
                  </span>
                </div>
                <div className="flex gap-2 items-center my-3 cursor-pointer group">
                  <Instagram className="!text-xl text-slate group-hover:text-sunrise transitional" />
                  <span className="group-hover:text-sunrise transitional">
                    john doe
                  </span>
                </div>
                <div className="flex gap-2 items-center my-3 cursor-pointer group">
                  <Public className="!text-xl text-slate group-hover:text-sunrise transitional" />
                  <span className="group-hover:text-sunrise transitional">
                    johndoe.com
                  </span>
                </div>
                <div className="flex gap-2 items-center my-3 cursor-pointer group">
                  <LocationOnOutlined className="!text-xl text-slate group-hover:text-sunrise transitional" />
                  <span className="group-hover:text-sunrise transitional">
                    1313 Boulevard Cremazie,Quebec
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="uppercase font-extrabold text-xl">
                SUMMARY OF ACTIVITIES/INTERESTS
              </h1>
              <div className="my-5 flex flex-col gap-3">
                <p>Computer Networking</p>
                <p>Computer Security</p>
                <p>Human Computer Interfacing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="respPx20 960px:w-full sm:w-[70%] mx-auto">
        <h1 className="uppercase font-extrabold text-xl my-5">Biography</h1>
        <p className="leading-[1.9] text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto.
        </p>
      </div>
      <Courses />
    </div>
  );
};
export default TeacherSingle;

const Courses = () => {
  return (
    <div className=" respPx20 my-20">
      <h2 className="text-xl  font-extrabold uppercase my-4">Courses</h2>
      <div className="resp3ColGrid gap-6">
        <CourseCard
          heading={"Complete Freelancing"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-3.jpg"
          }
        />
        <CourseCard
          heading={"Complete Freelancing"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-4.jpg"
          }
        />{" "}
        <CourseCard
          heading={"Complete Freelancing"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-5.jpg"
          }
        />
      </div>
    </div>
  );
};

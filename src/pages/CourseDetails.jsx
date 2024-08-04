import React from "react";
import Hero from "../_components/Hero";
import {
  Alarm,
  Book,
  BookOutlined,
  Facebook,
  FacebookOutlined,
  FileCopy,
  Instagram,
  LinkedIn,
  Twitter,
  Wallet,
} from "@mui/icons-material";
import MyButton from "../_components/MyButton";
import MyListItem from "../_components/MyListItem";
import CourseCard from "../_components/CourseCard";

const CourseDetails = () => {
  return (
    <div>
      <Hero path="Photography" />
      <div className="my-10 respPx20">
        <div className="w-full h-full flex flex-col">
          <img
            src="https://demo.themefisher.com/educenter-bootstrap/images/courses/course-single.jpg"
            alt="course"
            className="max-w-full     w-full h-auto"
          />
          <BasicInfo />
        </div>
        <AboutCourse />
        <Requirements />
        <HowToApply />
        <FeesAndFunding />
        <TeacherInfo />
      </div>
      <RelatedCourses />
    </div>
  );
};

export default CourseDetails;
const BasicInfo = () => {
  return (
    <div className="flex flex-wrap gap-10 items-center py-5 border-b">
      <h1 className="text-40px font-extrabold">Photography</h1>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2 ">
          <BookOutlined className="text-sunrise !text-4xl !font-extralight" />
          <div>
            <h2 className="text-lg font-bold uppercase">Courses</h2>
            <p>06 Month</p>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <Alarm className="text-sunrise !text-4xl !font-extralight" />
          <div>
            <h2 className="text-lg font-bold uppercase">Duration</h2>
            <p>03 Hours</p>
          </div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <Wallet className="text-sunrise !text-4xl !font-extralight" />
          <div>
            <h2 className="text-lg font-bold uppercase">fee</h2>
            <p>From: $699</p>
          </div>
        </div>
      </div>
      <div className="flex items-end flex-grow justify-end ">
        <MyButton text={"Apply Now"} />
      </div>
    </div>
  );
};

const AboutCourse = () => {
  return (
    <div className=" my-10">
      <h1 className="text-2xl font-extrabold">About Course</h1>
      <p className="text-[15px] leading-[1.9] my-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  );
};
const Requirements = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-extrabold">Requirements</h1>
      <ul className="my-3 flex justify-between flex-wrap  ">
        <div>
          <MyListItem
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <MyListItem
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <MyListItem
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <MyListItem
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
        </div>{" "}
        <div>
          <MyListItem
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <MyListItem
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <MyListItem
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <MyListItem
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
        </div>
      </ul>
    </div>
  );
};
const HowToApply = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-extrabold">How To Apply</h1>
      <ul className="my-3">
        <MyListItem
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum dolor. Lorem, ipsum."
          }
        />{" "}
        <MyListItem
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum dolor. Lorem, ipsum."
          }
        />{" "}
        <MyListItem
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum dolor. Lorem, ipsum."
          }
        />{" "}
        <MyListItem
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum dolor. Lorem, ipsum."
          }
        />{" "}
        <MyListItem
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum dolor. Lorem, ipsum."
          }
        />
      </ul>
    </div>
  );
};
const FeesAndFunding = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-extrabold">Fees And Funding</h1>
      <p className="text-[15px] leading-[1.9] my-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  );
};
const TeacherInfo = () => {
  return (
    <div className="my-10  border-b py-2">
      <h2 className="font-bold text-lg">Teacher</h2>
      <div className="flex flex-wrap gap-5 justify-between items-center">
        <div className="flex gap-6 my-4">
          <div>
            <img
              src="https://demo.themefisher.com/educenter-bootstrap/images/teacher.jpg"
              alt=""
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-extrabold">Sam Somrot</h2>
            <p className="text-sm">Photographer</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Social Link</h2>
          <div className="flex gap-4 my-2">
            <FacebookOutlined className="!text-lg text-slate" />
            <Twitter className="!text-lg text-slate" />
            <LinkedIn className="!text-lg text-slate" />
            <Instagram className="!text-lg text-slate" />
          </div>
        </div>
      </div>
    </div>
  );
};
const RelatedCourses = () => {
  return (
    <div className="respPx20 my-10">
      <h1 className="text-40px font-extrabold">Related Courses</h1>
      <div className="resp3ColGrid  my-5 gap-8 ">
        <CourseCard
          heading={"Photography"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-1.jpg"
          }
        />{" "}
        <CourseCard
          heading={"Programming"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-2.jpg"
          }
        />{" "}
        <CourseCard
          heading={"Lifestyle Archives"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-3.jpg"
          }
        />
      </div>
    </div>
  );
};

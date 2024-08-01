import React from "react";
import CourseCard from "../../../_components/CourseCard";
import MyButton2 from "../../../_components/MyButton2";

const Courses = ({
  courses = [
    {
      heading: "Photography",
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-1.jpg",
    },
    {
      heading: "Programming",
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-2.jpg",
    },
    {
      heading: "Lifestyle Archives",
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-3.jpg",
    },
    {
      heading: "Complete Freelancing",
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-4.jpg",
    },
    {
      heading: "Branding Design",
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-5.jpg",
    },
    {
      heading: "Art Design",
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/courses/course-6.jpg",
    },
  ],
  showHeading = true,
}) => {
  return (
    <div className="py-10 respPx10">
      {showHeading && (
        <div className="pb-4 flex items-center justify-between">
          <h1 className="font-bold text-5xl">Our Course</h1>
          <MyButton2 text={"See All"} />
        </div>
      )}
      <div className="resp3ColGrid gap-6 gap-y-10 my-5">
        {courses.map((course, index) => {
          return (
            <CourseCard
              key={index}
              heading={course.heading}
              image={course.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;

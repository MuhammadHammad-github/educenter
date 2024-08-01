import React from "react";
import Hero from "../_components/Hero";
import Courses from "./components/Home/Courses";

const CoursesPage = () => {
  return (
    <div>
      <Hero path="Our Courses" />
      <Courses
        showHeading={false}
        courses={[
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
        ]}
      />
    </div>
  );
};

export default CoursesPage;

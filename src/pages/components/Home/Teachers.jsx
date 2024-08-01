import React from "react";
import TeacherCard from "../../../_components/TeacherCard";

const Teachers = () => {
  return (
    <div className="respPx10 py-28">
      <h1 className="text-40px font-bold ">Our Teachers</h1>
      <div className="resp3ColGrid gap-6 my-10 ">
        <TeacherCard
          name={"Jackie Masito"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-1.jpg"
          }
        />
        <TeacherCard
          name={"Clark Malik"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-2.jpg"
          }
        />{" "}
        <TeacherCard
          name={"John Doe"}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-3.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Teachers;

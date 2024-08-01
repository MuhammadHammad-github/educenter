import React from "react";
import EventCard from "../../../_components/EventCard";
import MyButton2 from "../../../_components/MyButton2";

const UpcomingEvents = () => {
  return (
    <div className="py-24 respPx10 bg-[#F8F8F8]">
      <div className="pb-5 flex items-center justify-between">
        <h2 className="text-40px font-bold  ">Upcoming Events</h2>
        <MyButton2 text={"See All"} />
      </div>
      <div className="resp3ColGrid gap-4">
        <EventCard
          date={18}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/events/event-1.jpg"
          }
          location={"Dhanmondi Lake, Dhaka"}
        />
        <EventCard
          date={23}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/events/event-2.jpg"
          }
          location={"Dhanmondi Lake, Dhaka"}
        />
        <EventCard
          date={26}
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/events/event-3.jpg"
          }
          location={"Dhanmondi Lake, Dhaka"}
        />
      </div>
    </div>
  );
};

export default UpcomingEvents;

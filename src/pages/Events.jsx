import React from "react";
import Hero from "../_components/Hero";
import EventCard from "../_components/EventCard";

const Events = () => {
  return (
    <div>
      <Hero path="Upcoming Events" />
      <div className="py-24 respPx20 ">
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
          />{" "}
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
    </div>
  );
};

export default Events;

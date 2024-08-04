import React from "react";
import Hero from "../_components/Hero";
import {
  Alarm,
  CalendarMonthOutlined,
  LocationOn,
  LocationOnOutlined,
  Wallet,
} from "@mui/icons-material";
import MyButton from "../_components/MyButton";
import EventCard from "../_components/EventCard";

const EventDetails = () => {
  return (
    <div>
      <Hero path="Event Details" />
      <div className="my-10 respPx20">
        <h1 className="text-40px font-extrabold my-5">English Spoken</h1>
        <div className="w-full h-full flex flex-col">
          <img
            src="https://demo.themefisher.com/educenter-bootstrap/images/courses/course-single.jpg"
            alt="course"
            className="max-w-full     w-full h-auto"
          />
          <BasicInfo />
          <AboutEvent />
          <EventSpeakers />
        </div>
      </div>
      <div className="respPx20 my-10">
        <h1 className="text-40px font-extrabold">More Events</h1>
        <div className="resp3ColGrid my-5 gap-8">
          <EventCard
            date={18}
            image={
              "https://demo.themefisher.com/educenter-bootstrap/images/events/event-1.jpg"
            }
            location={"Dhanmondi Lake, Dhaka"}
          />
          <EventCard
            date={21}
            image={
              "https://demo.themefisher.com/educenter-bootstrap/images/events/event-2.jpg"
            }
            location={"Dhanmondi Lake, Dhaka"}
          />
          <EventCard
            date={23}
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

export default EventDetails;
const BasicInfo = () => {
  return (
    <div className="flex flex-wrap gap-10 items-center py-5 border-b">
      <div className="flex flex-wrap gap-10">
        <div className="flex items-center gap-2 ">
          <LocationOnOutlined className="text-sunrise !text-4xl !font-extralight" />
          <div>
            <h2 className="text-lg font-bold uppercase">Courses</h2>
            <p>06 Month</p>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <CalendarMonthOutlined className="text-sunrise !text-4xl !font-extralight" />
          <div>
            <h2 className="text-lg font-bold uppercase">Duration</h2>
            <p>03 Hours</p>
          </div>
        </div>{" "}
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
const AboutEvent = () => {
  return (
    <div className=" my-10">
      <h1 className="text-2xl font-extrabold">About Event</h1>
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
const EventSpeakers = () => {
  return (
    <div className="my-10 border-b py-2">
      <h1 className="text-2xl font-extrabold">Event Speakers</h1>
      <div className="flex justify-between flex-wrap gap-5">
        <SpeakerCard
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/event-speakers/speaker-1.jpg"
          }
          name={"Sam Somrat"}
        />
        <SpeakerCard
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/event-speakers/speaker-2.jpg"
          }
          name={"John Doe"}
        />{" "}
        <SpeakerCard
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/event-speakers/speaker-3.jpg"
          }
          name={"Randy Luis"}
        />{" "}
        <SpeakerCard
          image={
            "https://demo.themefisher.com/educenter-bootstrap/images/event-speakers/speaker-4.jpg"
          }
          name={"Alfred Jin"}
        />
      </div>
    </div>
  );
};
const SpeakerCard = ({ image, name }) => {
  return (
    <div className="flex gap-6 my-6">
      <div>
        <img src={image} alt="speaker image" className="max-w-full h-auto" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-extrabold">{name}</h2>
        <p className="text-sm">Teacher</p>
      </div>
    </div>
  );
};

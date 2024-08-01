import {
  faMapLocation,
  faMapLocationDot,
  faMapMarkedAlt,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons/faMapMarked";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LocationCity,
  LocationOnOutlined,
  Pin,
  PinOutlined,
} from "@mui/icons-material";
import React from "react";

const EventCard = ({ date, location, image }) => {
  return (
    <div className="border bg-white shadow-sm hover:shadow-lg transitional">
      <div className="relative h-64 w-full">
        <div className="bg-sunrise uppercase text-white absolute top-0 left-0 w-32 h-20">
          <div className="flex flex-col items-center justify-center py-2">
            <h3 className=" text-4xl font-bold text-white text-center">
              {date}
            </h3>
            <h5 className="font-bold tracking-tighter text-white text-center">
              December
            </h5>
          </div>
        </div>
        <img
          className="w-full h-auto object-cover max-h-full"
          src={image}
          alt="eventImage"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1">
          <LocationOnOutlined className="text-sunrise text-sm" />
          <span>{location}</span>
        </div>
        <h1 className="text-xl font-bold my-6 cursor-pointer hover:text-sunrise transitional">
          Lorem ipsum dolor amet, consectetur adipisicing.
        </h1>
      </div>
    </div>
  );
};

export default EventCard;

import React from "react";
import MyButton from "./MyButton";
import {
  FacebookRounded,
  GitHub,
  Instagram,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  const companyLinks = [
    { text: "About Us", link: "/about" },
    { text: "Our Teacher", link: "/" },
    { text: "Contact", link: "/contact" },
    { text: "Blog", link: "/blog " },
  ];
  const Links = [
    { text: "Courses", link: "/" },
    { text: "Events", link: "/" },
    { text: "Notice", link: "/" },
    { text: "Scholarship", link: "/ " },
  ];
  const supportLinks = [
    { text: "Forums", link: "/" },
    { text: "Documentation", link: "/" },
    { text: "Language", link: "/" },
    { text: "Release Status", link: "/ " },
  ];
  const recommendLinks = [
    { text: "Wordpress", link: "/" },
    { text: "LearnPress", link: "/" },
    { text: "WooCommerce", link: "/" },
    { text: "bbPress", link: "/ " },
  ];
  return (
    <footer className="relative pt-60 bg-midnight w-full mt-40 respPx20">
      <NewsLetter />
      <div className="grid xl:grid-cols-6 960px:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1     gap-1 ">
        <div className="xs:col-span-2">
          <div className="mb-6">
            <img
              src="https://demo.themefisher.com/educenter-bootstrap/images/logo.png"
              alt="logo"
              className="max-w-full h-auto object-contain  "
            />
          </div>
          <p className="leading-relaxed">
            23621 15 Mile Rd #C104, Clinton MI, 48035, New York, USA <br />
            +1 (2) 345 6789 <br /> +1 (2) 345 6789
            <br /> contact@yourdomain.com
          </p>
        </div>
        <LinksAndHeading links={companyLinks} heading={"Company"} />
        <LinksAndHeading links={Links} heading={"Links"} />
        <LinksAndHeading links={supportLinks} heading={"Support"} />
        <LinksAndHeading links={recommendLinks} heading={"Recommend"} />
      </div>
      <div className="border-t border-sunrise flex md:flex-row flex-col md:items-start items-center gap-y-4 justify-between  py-7">
        <p>Copyright &copy; 2024, Designed & Develop By Muhammad Hammad</p>
        <div className="flex items-center gap-5">
          <FacebookRounded className="!text-sunrise cursor-pointer !text-xl" />
          <Twitter className="!text-sunrise cursor-pointer !text-xl" />
          <GitHub className="!text-sunrise cursor-pointer !text-xl" />
          <Instagram className="!text-sunrise cursor-pointer !text-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const LinksAndHeading = ({ links, heading }) => {
  return (
    <div className="flex flex-col flex-grow  pl-6 ">
      <h2 className="uppercase font-bold   text-xl text-white my-6">
        {heading}
      </h2>
      <div className="my-5 flex !items-start  flex-col gap-4">
        {links.map((link, index) => {
          return (
            <a href={link.link} key={index} className="">
              {link.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};
const NewsLetter = () => {
  return (
    <div className="bg-sunrise sm:w-3/4 w-full py-10 sm:px-10 xs:px-5 px-3 absolute -top-20 left-0 sm:left-1/4 ">
      <h2 className="text-white text-2xl font-extrabold my-2">Subscribe Now</h2>
      <div className="relative w-full">
        <input
          type="email"
          className="xs:px-5 px-3 py-8 bg-white w-full  outline-none "
          placeholder="Enter Your Email..."
        />
        <MyButton
          className={"!absolute top-1/2 -translate-y-1/2 xs:right-5 right-2  "}
          text={"Join"}
        />
      </div>
    </div>
  );
};

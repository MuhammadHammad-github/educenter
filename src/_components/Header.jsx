import {
  FacebookRounded,
  GitHub,
  Instagram,
  Menu,
  Twitter,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGetScrollPos from "../hooks/useGetScrollPos";

const Header = () => {
  const [toggled, setToggled] = useState(false);
  const navLinks = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Courses", link: "/courses" },
    { text: "Events", link: "/events" },
    { text: "Blog", link: "/blog" },
    { text: "Pages", link: "/pages" },
    { text: "Contact", link: "/contact" },
  ];
  return (
    <header className="fixed z-50 top-0 left-0 w-full">
      <TopBar />
      <MyNavbar setToggled={setToggled} navLinks={navLinks} />
      <SmallScreenNavLinks navLinks={navLinks} toggled={toggled} />
    </header>
  );
};

export default Header;
const TopBar = () => {
  const scrollPos = useGetScrollPos();
  return (
    <div
      className={`transition bg-white   ${scrollPos >= 5 && "transition absolute   -top-24  w-full opacity-0"} py-4 px-10 flex 960px:flex-row flex-col justify-center items-center 960px:justify-between gap-y-4 uppercase`}
    >
      <div className="uppercase flex   gap-6 items-center 460px:px-14 ">
        <span className="text-xs min-w-max !font-semibold transitional hover:text-sunrise cursor-pointer">
          call +44 300 303 0266
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <FacebookRounded className="text-slate xs:!text-base !text-xs !cursor-pointer transitional  hover:text-sunrise" />
          <Twitter className="text-slate  xs:!text-base !text-xs  !cursor-pointer transitional  hover:text-sunrise" />{" "}
          <GitHub className="text-slate  xs:!text-base !text-xs  !cursor-pointer transitional  hover:text-sunrise" />{" "}
          <Instagram className="text-slate  xs:!text-base !text-xs  !cursor-pointer transitional  hover:text-sunrise" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 xs:px-14 px-4">
        <a href="#" className="topBarLink">
          Notice
        </a>
        <a href="#" className="topBarLink">
          Research
        </a>
        <a href="#" className="topBarLink">
          Scholarship
        </a>{" "}
        <a href="#" className="topBarLink">
          Login
        </a>{" "}
        <a href="#" className="topBarLink">
          register
        </a>
      </div>
    </div>
  );
};
const MyNavbar = ({ setToggled, navLinks }) => {
  const scrollPos = useGetScrollPos();

  return (
    <div
      className={`${
        scrollPos > 5 ? "bg-navy" : "lg:bg-transparent bg-navy"
      } lg:pl-20 lg:px-0 md:px-36 sm:px-28 xs:px-18 px-8 flex items-center justify-between  h-24 transition-all duration-500 ease-in-out z-50`}
    >
      <div className="py-6">
        <img
          className="max-w-full h-auto"
          src="https://demo.themefisher.com/educenter-bootstrap/images/logo.png"
          alt="logo"
        />
      </div>
      <div
        className=" border z-50  px-2 py-1 border-gray-700 lg:hidden cursor-pointer"
        onClick={() => {
          setToggled((prev) => !prev);
        }}
      >
        <Menu className="text-gray-400 !text-4xl " />
      </div>
      <LargeScreenNavLinks navLinks={navLinks} />
    </div>
  );
};
const LargeScreenNavLinks = ({ navLinks }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  return (
    <div className=" px-20 h-full     text-white bg-sunrise  lg:flex hidden  items-center gap-6 uppercase">
      {navLinks?.map((item, index) => {
        return (
          <a
            key={index}
            onClick={(e) => {
              e.preventDefault();
              navigate(item.link);
            }}
            className={` ${pathname === item.link && "navLinkActive"} cursor-pointer text-white font-semibold navLink relative`}
          >
            {item.text}
          </a>
        );
      })}
    </div>
  );
};
const SmallScreenNavLinks = ({ navLinks, toggled }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (!toggled)
      setTimeout(() => {
        setHide(true);
      }, 500);
    else setHide(false);
  }, [toggled]);
  return (
    <div
      className={` bg-navy  ${toggled ? " transition-all  h-80 overflow-y-auto" : "!-z-20  h-0 overflow-y-auto"} lg:hidden  transition-all duration-500 ease-in-out `}
    >
      <div
        className={`flex flex-col transition-all duration-500 ease-in-out items-center justify-center  ${!toggled && " transition-all"} ${hide === true && "hidden"}`}
      >
        {navLinks?.map((item, index) => {
          return (
            <a
              key={index}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.link);
              }}
              className={` ${pathname === item.link && "bg-black bg-opacity-20"} text-white font-semibold hover:bg-black w-full text-center  transitional hover:bg-opacity-20 py-4 relative cursor-pointer`}
            >
              {item.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

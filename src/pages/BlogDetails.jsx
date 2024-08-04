import React from "react";
import Hero from "../_components/Hero";
import {
  BookOnline,
  BookOutlined,
  Comment,
  CommentOutlined,
  Share,
} from "@mui/icons-material";
import MyInput from "../_components/MyInput";
import MyButton from "../_components/MyButton";
import NewsCard from "../_components/NewsCard";
const BlogDetails = () => {
  return (
    <div>
      <Hero path="Blog Details" />
      <div className="my-10 respPx20 bg-[#F8F8F8]">
        <div className="w-full h-full flex flex-col">
          <img
            src="https://demo.themefisher.com/educenter-bootstrap/images/blog/blog-single.jpg"
            alt="course"
            className="max-w-full     w-full h-auto"
          />
          <BasicInfo />
          <Details />
          <CommentForm />
        </div>
      </div>
      <div className="respPx20 my-20">
        <h1 className="sm:text-40px text-3xl font-extrabold my-4">
          Recommended
        </h1>
        <div className="resp3ColGrid gap-8">
          <NewsCard
            by={"Somrat Sarkar"}
            image={
              "https://demo.themefisher.com/educenter-bootstrap/images/blog/post-1.jpg"
            }
            date={"August 28, 2018"}
          />
          <NewsCard
            by={"Jonathon Drew"}
            image={
              "https://demo.themefisher.com/educenter-bootstrap/images/blog/post-2.jpg"
            }
            date={"August 13, 2018"}
          />
          <NewsCard
            by={"Alex Pitt"}
            image={
              "https://demo.themefisher.com/educenter-bootstrap/images/blog/post-3.jpg"
            }
            date={"August 24, 2018"}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
const BasicInfo = () => {
  return (
    <div className="border-b py-4 flex flex-wrap items-center gap-y-5 gap-x-10">
      <p>
        <span className="font-bold text-slate">Post: </span>
        Somrat
      </p>
      <p>August 28, 2017</p>
      <p>
        <BookOutlined className="!text-xl text-slate" /> Read 289
      </p>
      <p>
        <Share className="!text-xl  text-slate" /> 280
      </p>
      <p>
        <CommentOutlined className="!text-xl  text-slate" /> 265
      </p>
    </div>
  );
};
const Details = () => {
  return (
    <div>
      <h1 className="text-40px font-extrabold">
        Lorem ipsum dolor amet, consectetur adipisicing eiusmod tempor
      </h1>
      <p className="text-[15px] leading-[1.9]">
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
        <br />
        <br />
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
        dolores eos qui ratione voluptatem s
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam,
      </p>
    </div>
  );
};
const CommentForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="my-10"
    >
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 ">
        <MyInput placeholder={"Full Name"} name="fullName" />
        <MyInput placeholder={"Email Address"} type="email" name="email" />
      </div>
      <div>
        <textarea
          placeholder="Comment Here..."
          className="w-full my-5 p-5 placeholder:text-gray-500 outline-none transitional focus:border-sunrise border"
          rows={6}
        ></textarea>
      </div>
      <MyButton text={"Post Comment"} />
    </form>
  );
};

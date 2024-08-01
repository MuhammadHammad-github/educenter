import React from "react";
import Hero from "../_components/Hero";
import NewsCard from "../_components/NewsCard";

const Blog = () => {
  return (
    <div>
      <Hero path="Our Blog" />
      <div className="respPx20 py-20">
        <div className="resp3ColGrid gap-6 gap-y-10 my-10 ">
          <NewsCard
            date={"August 28, 2018"}
            by={"Somrat Sorkar"}
            image={
              "https://demo.themefisher.com/educenter-bootstrap/images/blog/post-1.jpg"
            }
          />
          <NewsCard
            date={"August 13, 2018"}
            by={"Jonathon Drew"}
            image={
              "https://demo.themefisher.com/educenter-bootstrap/images/blog/post-2.jpg"
            }
          />
          <NewsCard
            date={"August 24, 2018"}
            by={"Alex Pitt"}
            image={
              "https://demo.themefisher.com/educenter-bootstrap/images/blog/post-3.jpg"
            }
          />
          <NewsCard
            date={"August 28, 2018"}
            by={"Somrat Sorkar"}
            image={
              "https://demo.themefisher.com/educenter-bootstrap/images/blog/post-1.jpg"
            }
          />
          <NewsCard
            date={"August 13, 2018"}
            by={"Jonathon Drew"}
            image={
              "https://demo.themefisher.com/educenter-bootstrap/images/blog/post-2.jpg"
            }
          />
          <NewsCard
            date={"August 24, 2018"}
            by={"Alex Pitt"}
            image={
              "https://demo.themefisher.com/educenter-bootstrap/images/blog/post-3.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import CSS for styling
import MyButton from "./MyButton";

const Carousel = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [currentSlide, interval]);

  return (
    <div className="relative">
      <div className="carousel">
        <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide px-20 ${index === currentSlide ? "active" : ""}`}
            >
              <h1 className="text-white  font-bold text-6xl w-[60%] my-4 ">
                Your bright future is our mission
              </h1>
              {/* <h1>{slide.heading}</h1> */}
              <p className="w-[60%] text-gray-400 my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                totam autem veritatis optio possimus consequuntur nobis
                doloremque rem nostrum quasi, atque doloribus iusto .
              </p>
              {/* <p>{slide.para}</p> */}
              <MyButton />
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="carousel-button prev-button">
        &#10094;
      </button>
      <button onClick={nextSlide} className="carousel-button next-button">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;

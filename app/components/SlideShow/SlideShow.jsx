"use client";
import { useEffect, useState } from "react";
import styles from "./Slideshow.css";

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${currentSlide === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="content">
            <div className="content-container">
              <h1>{slide.header}</h1>
              <p>{slide.paragraph}</p>
              <button>{slide.button}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;

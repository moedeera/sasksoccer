"use client";
import { useEffect, useState } from "react";
import "./Slideshow.css";
import Link from "next/link";

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

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
              <div className="font-bold text-4xl md:text-5xl lg:text-6xl">
                {slide.header}
              </div>
              <div className="text-md my-2">{slide.paragraph}</div>
              <Link href={"/"} className="btn">
                {slide.button}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;

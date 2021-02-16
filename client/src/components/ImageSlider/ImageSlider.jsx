import "../ImageSlider/ImageSlider.css";
import { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { sliderData } from "./SliderData";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    timeout.current = setTimeout(nextSlide, 5000);
  }, [current, length]);

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  if (!Array.isArray(sliderData) || sliderData.length <= 0) return null;

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            <div className="title">{slide.title}</div>
            {index === current && (
              <img src={slide.image} alt="island-image" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;

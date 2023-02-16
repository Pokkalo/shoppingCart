import { useMemo, useState } from 'react'
import Slider from 'react-slick'
import style from './slider.css'


const Sliders = ({ sliderData }) => {
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <Slider {...settings}>
      {sliderData.map((slide, index) => {
        return (
          <div key={index}>
            <img
              src={slide.image}
              alt="slider"
              key={index}
              className={slideStyle.image}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default Sliders;

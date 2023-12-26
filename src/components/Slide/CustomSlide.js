import React from 'react';
import { Carousel } from 'antd';
import { SlideStyles } from './styles';
import SlickArrowLeft from './SlickArrowLeft';
import SlickArrowRight from './SlickArrowRight';

const SLIDE_SETTINGS = {
  slidesToShow: 4.5,
  slidesToScroll: 4.5,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CustomSlide = ({ children }) => {
  return (
    <SlideStyles>
      <Carousel
        autoplay={false}
        infinite={false}
        arrows
        waitForAnimate
        {...SLIDE_SETTINGS}
        prevArrow={<SlickArrowLeft />}
        nextArrow={<SlickArrowRight />}
      >
        {React.Children.map(children, (child, idx) => (
          <div key={String(idx)}>{child}</div>
        ))}
      </Carousel>
    </SlideStyles>
  );
};

export default CustomSlide;

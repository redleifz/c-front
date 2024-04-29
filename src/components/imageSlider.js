import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const ImageSlider = ({ images }) => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='w-full overflow-hidden'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`}
                className='w-full '
              // style={{ width: '100%', height: 'auto' }} 
              />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

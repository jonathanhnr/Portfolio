import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { GaleryPhoto } from '../../Style/Carrosel.jsx';
import AspectImage from '../AspectImage/AspectImage.jsx';

const Carrosel = ({ images }) => {
  const [activeThumb, setActiveThumb = undefined] = useState();
  return (
    <GaleryPhoto>
      <div style={{ width: '350px' }}>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          thumbs={{ swiper: activeThumb }}
          className="product-images-slider"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
             <AspectImage image={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onClick={setActiveThumb}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className='product-images-slider-thumbs'
        >
          {
            images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="product-images-slider-thumbs-wrapper">
                  <img src={item} alt="product images" />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </GaleryPhoto>
  );
};

export default Carrosel;
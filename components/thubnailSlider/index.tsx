'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
type Swiper = /*unresolved*/ any;
import image from '@/assets/images/image2.png';
import Image from 'next/image';
export default function ThubnailSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image className=" rounded-2xl" src={image} alt="SDS" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className=" rounded-2xl" src={image} alt="SDS" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className=" rounded-2xl" src={image} alt="SDS" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className=" rounded-2xl" src={image} alt="SDS" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={(swiper: Swiper) => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className=" rounded-2xl" src={image} alt="SDS" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className=" rounded-2xl" src={image} alt="SDS" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className=" rounded-2xl" src={image} alt="SDS" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className=" rounded-2xl" src={image} alt="SDS" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import React from "react";
// Import Swiper React components
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from 'react-reveal';
import Fade from 'react-reveal/Fade';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Reviews.css";

// import required module
import { Link } from "react-router-dom";
import { EffectCoverflow, Pagination } from "swiper";

const Reviews = () => {
  return (
    <div className="">
      <div className="px-12 lg:pb-16 py-10 pt-2  bg-[#252525] border-b border-neutral hero-overlay bg-opacity-50">

        <div className="md:w-5/6 mx-auto text-center pb-20">
          <Slide top>
            <h3 className="text-[70px] md:text-[150px] text-center flex mx-auto w-full justify-center uppercase font-bold text-black"><Slide top duration={1000}>R</Slide> <Slide top duration={1500}>E</Slide> <Slide top duration={2000}>V</Slide> <Slide top duration={2500}>I</Slide> <Slide top duration={3000}>E</Slide> <Slide top duration={4000}>W</Slide> <Slide top duration={4500}>S</Slide></h3>
          </Slide>
          <Fade bottom>
            <h4 className="text-2xl md:text-5xl text-center w-full font-bold text-white capitalize md:uppercase -mt-10 md:-mt-24 tracking-[7px] leading-10" style={{ fontFamily: "Rajdhani" }}>WE HAVE CUSTOMERS WORLDWIDE -
              READ WHAT THEY SAY</h4>
          </Fade>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.25": {
              slidesPerView: 2,
              spaceBetween: -100,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // "@1.25": {
            //   slidesPerView: 4,
            //   spaceBetween: 30,
            // },
            // "@1.75": {
            //   slidesPerView: 4,
            //   spaceBetween: 30,
            // },
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="card mb-8 shadow-xl">
            <Link to={'/course/english-for-career-development'}><img src="https://i.postimg.cc/J0XQf9dR/18899221.png" alt="image" /></Link>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <Link to={'/course/medical-admission-course'}><img src="https://i.postimg.cc/MTd507f8/18899230.png" alt="image" /></Link>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <Link to={'/course/varsity-admission-course'}><img src="https://i.postimg.cc/T1vbDhCX/18899243.png" alt="image" /></Link>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <Link to={'/course/bank-job'}><img src="https://i.postimg.cc/252Pjhct/18899245.png" alt="image" /></Link>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <Link to={'/course/corporate-job'}><img src="https://i.postimg.cc/jSWtfc9y/Black-Friday-Instagram-Story-01.png" alt="image" /></Link>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <Link to={'/course/improve-english-communcation-skills'}><img src="https://i.postimg.cc/QNg9z8fH/Black-Friday-Instagram-Story-05.png" alt="image" /></Link>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <Link to={'/course/chinese-for-beginners'}><img src="https://i.postimg.cc/fy2QtSfH/Black-Friday-Instagram-Story-10.png" alt="image" /></Link>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <Link to={'/course/developer-job'}><img src="https://i.postimg.cc/fRshrsgT/Black-Friday-Instagram-Story-14.png" alt="image" /></Link>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <Link to={'course/grammar-and-punctuation'}><img src="https://i.postimg.cc/dVPfV98W/Black-Friday-Instagram-Story-18.png" alt="image" /></Link>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
            <Link to={'/course/freelancer-job'}><img src="https://i.postimg.cc/RZCnxkW4/Black-Friday-Instagram-Story-20.png" alt="image" /></Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}; SwiperCore.use([Autoplay]);

export default Reviews;

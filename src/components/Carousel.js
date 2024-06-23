import React, { lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import boatPNG from "../assets/images/boat.jpg";
import boatWebP from "../assets/images/boat.jpg?as=webp";
import constructionPNG from "../assets/images/construction.jpg";
import constructionWebP from "../assets/images/construction.jpg?as=webp";
import happyHourPNG from "../assets/images/happy-hour.jpg";
import happyHourWebP from "../assets/images/happy-hour.jpg?as=webp";
import iceCreamPNG from "../assets/images/ice-cream.jpg";
import iceCreamWebP from "../assets/images/ice-cream.jpg?as=webp";

const Image = lazy(() => import("./Image"));

const CarouselItem = ({ srcSet, src, alt }) => (
  <div className="h-96 w-full">
    <Image
      srcSet={srcSet}
      src={src}
      alt={alt}
      width="711"
      height="502"
      className="h-full w-full [&_img]:h-full [&_img]:w-full"
    />
  </div>
);

const Carousel = () => {
  return (
    <div className="bg-red relative block w-full">
      <div className="wrapper-y-sm">
        <Swiper
          className="[&_.swiper-slide]:h-auto [&_.swiper-wrapper]:h-auto"
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <CarouselItem srcSet={boatWebP} src={boatPNG} alt="boat" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              srcSet={constructionWebP}
              src={constructionPNG}
              alt="construction"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              srcSet={happyHourWebP}
              src={happyHourPNG}
              alt="happy hour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              srcSet={iceCreamWebP}
              src={iceCreamPNG}
              alt="ice cream"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;

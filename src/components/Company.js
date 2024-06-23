import React, { lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import boatPNG from "../assets/images/boat.jpg";
import boatWebP from "../assets/images/boat.jpg?as=webp";
import constructionPNG from "../assets/images/construction.jpg";
import constructionWebP from "../assets/images/construction.jpg?as=webp";
import happyHourPNG from "../assets/images/happy-hour.jpg";
import happyHourWebP from "../assets/images/happy-hour.jpg?as=webp";
import iceCreamPNG from "../assets/images/ice-cream.jpg";
import iceCreamWebP from "../assets/images/ice-cream.jpg?as=webp";
import nightRestauPNG from "../assets/images/night-restau.jpg";
import nightRestauWebP from "../assets/images/night-restau.jpg?as=webp";
import noirPNG from "../assets/images/noir.jpg";
import noirWebP from "../assets/images/noir.jpg?as=webp";
import rainPNG from "../assets/images/rain.jpg";
import rainWebP from "../assets/images/rain.jpg?as=webp";
import telephonePNG from "../assets/images/telephone.jpg";
import telephoneWebP from "../assets/images/telephone.jpg?as=webp";

const Image = lazy(() => import("./Image"));

const CompanyItem = ({ srcSet, src, alt }) => (
  <Image
    srcSet={srcSet}
    src={src}
    alt={alt}
    width="202"
    height="116"
    className="h-20 w-full [&_img]:h-full [&_img]:w-full"
  />
);

const Company = () => {
  return (
    <div className="bg-dark-red relative block w-full">
      <div className="wrapper-y-md pb-6 text-4xl">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="[&_.swiper-pagination-bullet.swiper-pagination-bullet-active]:bg-dark-blue [&_.swiper-pagination-bullet]:!mx-1.5 [&_.swiper-pagination-bullet]:h-1.5 [&_.swiper-pagination-bullet]:w-1.5 [&_.swiper-pagination-bullet]:bg-blue [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination]:!-bottom-0 [&_.swiper-slide]:h-auto [&_.swiper-wrapper]:h-auto [&_.swiper-wrapper]:pb-12"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={10}
        >
          <SwiperSlide>
            <CompanyItem
              srcSet={telephoneWebP}
              src={telephonePNG}
              alt="telephone"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyItem
              srcSet={happyHourWebP}
              src={happyHourPNG}
              alt="happy hour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyItem
              srcSet={iceCreamWebP}
              src={iceCreamPNG}
              alt="ice cream"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyItem srcSet={noirWebP} src={noirPNG} alt="noir" />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyItem srcSet={boatWebP} src={boatPNG} alt="boat" />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyItem srcSet={rainWebP} src={rainPNG} alt="rain" />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyItem
              srcSet={constructionWebP}
              src={constructionPNG}
              alt="construction"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompanyItem
              srcSet={nightRestauWebP}
              src={nightRestauPNG}
              alt="night restau"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Company;

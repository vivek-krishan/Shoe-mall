import React from "react";
import { Link } from "react-router-dom";
import { BannerImages } from "../../constants/Images";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const BannerSlider = ({ images }) => {
  return (
    <div key={"Banner Slider"} className=" h-full flex flex-row ">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {Array(images)
          .fill("")
          .map((e, index) => {
            return (
              <Link
                key={`banner-${index}`}
                to={`/product/${index}`}
                className="h-full min-w-fit"
              >
                <SwiperSlide>
                  <img src={BannerImages[index]} alt="Banner" />
                </SwiperSlide>
              </Link>
            );
          })}
      </Swiper>
    </div>
  );
};

export default BannerSlider;

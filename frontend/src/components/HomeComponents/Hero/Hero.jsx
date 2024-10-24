import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { useRef } from "react";

export default function Hero() {
  const swiperRef = useRef(null);
  return (
    <section>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <img
            className="h-[80vh] w-full object-cover"
            src="/images/banner/banner1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[80vh] w-full object-cover"
            src="/images/banner/banner2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[80vh] w-full object-cover"
            src="/images/banner/banner3.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

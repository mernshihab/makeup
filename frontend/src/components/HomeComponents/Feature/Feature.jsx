import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { useRef } from "react";

export default function Feature() {
    const swiperRef = useRef(null);

  return (
    <section className="py-10">
      <div className="container">
        <div>
          <h2>
            The Future of Beauty
          </h2>
          <Swiper
            modules={[ A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <div className="text-center p-4 ">
                <img src="/images/icon1.webp" alt="" className="mx-auto" />
                <h3 className="font-semibold text-lg mt-3">
                  Ultimate Convenience
                </h3>
                <p className="font-normal mt-1.5 text-neutral-content">
                  Book effortlessly within 5 minutes, skip the salon visits and
                  avoid traffic.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center p-4 ">
                <img src="/images/icon2.webp" alt="" className="mx-auto" />
                <h3 className="font-semibold text-lg mt-3">
                  Accessible Luxury
                </h3>
                <p className="font-normal mt-1.5 text-neutral-content">
                  Enjoy top-tier services at affordable prices, provided by
                  beauticians with 10+ years of expertise.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center p-4 ">
                <img src="/images/icon3.webp" alt="" className="mx-auto" />
                <h3 className="font-semibold text-lg mt-3">
                  Premium Quality & Hygiene
                </h3>
                <p className="font-normal mt-1.5 text-neutral-content">
                  Experience high-quality services with exclusive, single-use
                  branded products.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

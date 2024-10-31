import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Gallery() {
  const images = [
    "/images/gallery/image1.jpg",
    "/images/gallery/image2.jpg",
    "/images/gallery/image3.jpg",
    "/images/gallery/image4.jpg",
    "/images/gallery/image5.jpg",
    "/images/gallery/image6.jpg",
  ];

  const swiperRef = useRef(null);

  return (
    <div className="flex flex-col items-center py-8 px-4">
      <h2>MY LOOKBOOK</h2>
      <div className="relative w-full mt-5 max-w-5xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          autoplay={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-80 h-[400px] object-cover rounded-lg transition-all duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 text-white bg-black rounded-full p-3 shadow-md"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 text-white bg-black rounded-full p-3 shadow-md"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

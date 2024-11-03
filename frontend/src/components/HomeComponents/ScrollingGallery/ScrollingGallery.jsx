import { useRef, useEffect } from "react";
import { useGetGalleryQuery } from "../../../Redux/gallery/galleryApi";

const ScrollingGallery = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  const { data, isLoading } = useGetGalleryQuery();

  const firstSlide = data?.data?.firstSlide;
  const secondSlide = data?.data?.secondSlide;

  console.log(firstSlide, secondSlide);

  const images = [
    "/images/gallery/image1.jpg",
    "/images/gallery/image2.jpg",
    "/images/gallery/image3.jpg",
    "/images/gallery/image4.jpg",
    "/images/gallery/image5.jpg",
    "/images/gallery/image6.jpg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;

      const speedMultiplier = screenWidth < 1240 ? 0.2 : 0.5;
      const adjustedScreenWidth = screenWidth - (screenWidth < 1240 ? 50 : 600);

      if (containerRef1.current) {
        containerRef1.current.style.transform = `translateX(${
          scrollPosition * speedMultiplier - adjustedScreenWidth
        }px)`;
      }

      if (containerRef2.current) {
        containerRef2.current.style.transform = `translateX(${
          adjustedScreenWidth - scrollPosition * speedMultiplier
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 overflow-hidden bg-gray-100 py-8">
      <h2>MY LOOKBOOK</h2>

      <div className="w-full overflow-hidden">
        <div
          ref={containerRef1}
          className="flex space-x-4 transition-transform duration-300 ease-linear"
        >
          {firstSlide?.map((image, i) => (
            <img
              key={i}
              src={`${import.meta.env.VITE_BACKEND_URL}/gallery/${
                image?.image
              }`}
              alt={`Image ${i}`}
              className="w-40 h-32 md:w-48 md:h-52 rounded-lg shadow-md object-cover"
            />
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={containerRef2}
          className="flex space-x-4 transition-transform duration-300 ease-linear"
        >
          {secondSlide?.map((image, i) => (
            <img
              key={i}
              src={`${import.meta.env.VITE_BACKEND_URL}/gallery/${
                image?.image
              }`}
              alt={`Image`}
              className="w-44 h-32 md:w-48 md:h-52 rounded-lg shadow-md object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingGallery;

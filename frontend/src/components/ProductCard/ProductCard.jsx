import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProductCardCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= products.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="relative overflow-hidden w-full lg:w-[90%] mx-auto">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {products?.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
            >
              <Link
                className="pb-3 rounded-sm overflow-hidden"
                to={`/product/${product?.slug}`}
              >
                <img
                  className="w-full h-64 rounded-md object-cover"
                  src={`${import.meta.env.VITE_BACKEND_URL}/products/${
                    product?.images[0]
                  }`}
                  alt={product?.title}
                />
                <div>
                  <p className="py-1 px-3 text-primary font-normal text-xs mt-3 bg-gray-200 inline-block rounded-2xl">
                    {product?.discount}% OFF
                  </p>
                  <h4 className="mt-3 text-sm ">{product?.category?.name}</h4>
                  <h3 className="font-semibold min-h-[50px] mt-1">
                    {product?.title}
                  </h3>
                  <p className="font-normal mt-1.5 text-xs flex items-center gap-1 text-neutral-content">
                    <MdOutlineWatchLater className="text-base" />{" "}
                    {product?.duration} Min
                  </p>
                  <p className="font-normal mt-2 text-neutral-content text-sm">
                    ৳{" "}
                    {parseInt(
                      (
                        product.sellingPrice -
                        (product.sellingPrice * product.discount) / 100
                      ).toFixed(0)
                    )}
                    {product.discount > 0 && (
                      <>
                        <del className="ml-3 text-gray-400">
                          ৳ {product.sellingPrice}
                        </del>
                      </>
                    )}
                  </p>
                  <button className="w-full mt-2 py-2.5 text-white font-semibold bg-primary rounded-md hover:bg-[#922e63] duration-300">
                    Add To Cart
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center mt-6 space-x-4">
        <button className="px-5 py-2 bg-white border border-primary hover:bg-primary hover:text-white duration-300 text-primary font-semibold rounded">
          View All Services
        </button>
        <button onClick={handlePrev} className="text-primary text-2xl">
          <FaChevronLeft />
        </button>
        <button onClick={handleNext} className="text-primary text-2xl">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

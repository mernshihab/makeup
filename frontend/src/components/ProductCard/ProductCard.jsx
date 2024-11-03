import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useGetContactQuery } from "../../Redux/contact/contactApi";

export default function ProductCardCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: contactData } = useGetContactQuery();

  const contact = contactData?.data[0];

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
                  <div className="w-full mt-5 grid gap-2 md:gap-4 md:grid-cols-2">
                    <a
                      href={`tel:${contact?.phone}`}
                      className="py-1 md:py-1.5 text-center px-2 md:px-3 text-white  bg-black border border-black hover:text-black rounded-md hover:bg-transparent duration-300"
                    >
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/${contact?.whatsapp}`}
                      className="py-1 md:py-1.5 px-2 md:px-3 border border-green-600 text-green-600 font-semibold bg-transparent rounded-md hover:bg-green-600 hover:text-white duration-300"
                    >
                      <FaWhatsapp className="text-xl mx-auto" />
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center mt-6 space-x-4">
        <Link
          to="/services/all"
          className="px-5 py-2 bg-white border border-primary hover:bg-primary hover:text-white duration-300 text-primary font-semibold rounded"
        >
          View All Services
        </Link>
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

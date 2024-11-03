import { useEffect, useState } from "react";
import ReactShare from "./ReactShare/ReactShare";
import { FaWhatsapp } from "react-icons/fa6";
import { useGetContactQuery } from "../../Redux/contact/contactApi";

export default function ProductInfo({ product }) {
  const { data: contactData } = useGetContactQuery();

  const contact = contactData?.data[0];

  const { slug, title, images, category, duration, discount, reviewer } =
    product;

  const [showImage, setShowImage] = useState(images[0]);
  const selectedPrice = product?.sellingPrice;

  useEffect(() => {
    setShowImage(images[0]);
  }, [images]);

  return (
    <div className="lg:flex gap-6">
      {/* Image */}
      <div className="lg:w-[50%] flex gap-2">
        <div className="grid gap-2">
          {images.map((img, index) => (
            <div key={index} onClick={() => setShowImage(img)}>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/products/${img}`}
                alt=""
                className="w-[90px] h-20 rounded cursor-pointer object-cover"
              />
            </div>
          ))}
        </div>
        <div className="relative w-full">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/products/${showImage}`}
            alt=""
            className="w-full md:h-[438px] object-cover rounded"
          />

          {/* Discount */}
          {discount > 0 && (
            <div className="absolute top-1 text-base-100 right-0 bg-red-600 w-max rounded-l-full px-2 py-px">
              <p>{discount}%</p>
            </div>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="lg:w-[65%] mt-4 lg:mt-0">
        {/* title  */}
        <div>
          <h1 className="text-2xl font-medium text-neutral">{title}</h1>
          <div className="text-sm">
            {duration && (
              <p className="mt-3">
                <span className="text-neutral/80">Duration:</span>{" "}
                <span>{duration && duration} Min</span>
              </p>
            )}
            <p className="mt-2">
              <span className="text-neutral/80">Category:</span>{" "}
              <span>{category?.name}</span>
            </p>
          </div>
        </div>
        {/* Price */}
        <div className="py-3 border-y mt-3">
          <div className="flex gap-6 items-center">
            <p className="text-neutral opacity-70">Price: </p>

            <div className="flex items-end gap-2">
              <p className="text-primary text-2xl font-medium">
                ৳ {parseInt(selectedPrice - (selectedPrice * discount) / 100)}
              </p>
              {discount > 0 && (
                <del className="text-neutral/70">৳ {selectedPrice}</del>
              )}
            </div>
            <p className="text-neutral">{reviewer} Review</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center mt-6">
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
            <FaWhatsapp className="text-2xl mx-auto" />
          </a>
        </div>

        {/* Share */}
        <div className="mt-4 flex items-center gap-3">
          <p className="text-gray-500">Share: </p>
          <ReactShare slug={slug} />
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { useGetContactQuery } from "../../Redux/contact/contactApi";

export default function AllProductCard({ products, offerDiscount }) {
  const { data: contactData } = useGetContactQuery();

  const contact = contactData?.data[0];

  return (
    <div className="pb-3 rounded-sm overflow-hidden">
      <Link to={`/product/${products?.slug}`}>
        <img
          className="w-full h-52 sm:h-60 md:h-64 rounded-md object-cover"
          src={`${import.meta.env.VITE_BACKEND_URL}/products/${
            products?.images[0]
          }`}
          alt={products?.title}
        />
      </Link>
      <div>
        <p className="py-1 px-3 text-primary font-normal text-xs mt-3 bg-gray-200 inline-block rounded-2xl">
          {offerDiscount ? offerDiscount : products?.discount}% OFF
        </p>
        <h4 className="mt-3 text-sm ">{products?.category?.name}</h4>
        <Link to={`/product/${products?.slug}`}>
          <h3 className="font-semibold min-h-[60px] md:min-h-[50px] mt-1">{products?.title}</h3>
        </Link>
        <p className="font-normal mt-1.5 text-xs flex items-center gap-1 text-neutral-content">
          <MdOutlineWatchLater className="text-base" /> {products?.duration} Min
        </p>
        <p className="font-normal mt-2 text-neutral-content text-sm">
          ৳{" "}
          {parseInt(
            (
              products?.sellingPrice -
              (products?.sellingPrice *
                (offerDiscount ? offerDiscount : products?.discount)) /
                100
            ).toFixed(0)
          )}
          {(products?.discount > 0 || offerDiscount) && (
            <>
              <del className="ml-3 text-gray-400">
                ৳ {products?.sellingPrice}
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
    </div>
  );
}

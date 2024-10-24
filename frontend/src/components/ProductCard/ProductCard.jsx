import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const ProductCard = ({ product, discount: flashDiscount = 0 }) => {
  // const {
  //   slug,
  //   images,
  //   title,
  //   sellingPrice,
  //   discount,
  //   variants,
  //   rating,
  //   reviewer,
  // } = product;

  // const newDiscount = parseInt(flashDiscount) + discount;

  return (
    <div className="grid sm:grid-cols-3 gap-4 md:grid-cols-4">
      <Link to="/">
        <img
          className="w-full h-60 rounded-md object-cover"
          src="/images/product1.jpg"
          alt=""
        />
        <div>
          <p className="py-1 px-3 text-primary font-normal text-xs mt-3 bg-gray-200 inline-block rounded-2xl">13% OFF</p>
          <h4 className="mt-3 text-sm">Manicure and Pedicure</h4>
          <h3 className="font-semibold">Spa Manicure and Pedicure With Pack</h3>
          <p className="font-normal text-xs text-neutral-content">Duration: 90min </p>
          <p className="font-normal text-neutral-content text-sm">
            {" "}
            ৳ 675 <del className="ml-3">৳ 750</del>{" "}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

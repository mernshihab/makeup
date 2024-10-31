import { useEffect, useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { FiHeart, FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { addToCart } from "../../Redux/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../Redux/wishlist/wishlistSlice";
import ReactShare from "./ReactShare/ReactShare";

export default function ProductInfo({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const wishlists = useSelector((state) => state.wishlist.wishlists);

  const { slug, title, images, category, duration, discount } = product;

  const [showImage, setShowImage] = useState(images[0]);
  const selectedPrice = product?.sellingPrice;

  useEffect(() => {
    setShowImage(images[0]);
  }, [images]);

  const handleBuyNow = () => {
    const cartProduct = {
      _id: product._id,
      title: title,
      slug: product.slug,
      image: images[0],
      discount: discount,
    };

    dispatch(addToCart([cartProduct]));
    navigate("/checkout");
  };

  const handelAddToCart = () => {
    const cartProduct = {
      _id: product._id,
      title: title,
      slug: product.slug,
      image: images[0],
      discount: discount,
    };

    const findProduct = carts?.find(
      (product) =>
        product._id === cartProduct._id &&
        product.size === cartProduct.size &&
        product.color === cartProduct.color
    );

    if (findProduct) {
      return Swal.fire("", "Product already added to cart", "warning");
    } else {
      dispatch(addToCart([...carts, cartProduct]));
      Swal.fire("", "Item added to cart successfully", "success");
    }
  };

  const handelAddToWishlist = (product) => {
    const findProduct = wishlists?.find((item) => item._id === product._id);

    if (findProduct) {
      dispatch(removeFromWishlist(product));
      return Swal.fire("", "Product removed from wishlist", "warning");
    } else {
      dispatch(addToWishlist([...wishlists, product]));
      Swal.fire("", "Product added to wishlist successfully", "success");
    }
  };
  const isWishlist = wishlists?.find((item) => item._id === product._id);

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
                className="w-full h-20 rounded cursor-pointer object-cover"
              />
            </div>
          ))}
        </div>
        <div className="relative w-full">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/products/${showImage}`}
            alt=""
            className="w-full md:h-[400px] object-cover rounded"
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
            <p>
              <span className="text-neutral/80">Duration:</span>{" "}
              <span>{duration && duration} Min</span>
            </p>
            <p>
              <span className="text-neutral/80">Category:</span>{" "}
              <span>{category?.name}</span>
            </p>
          </div>
        </div>

        {/*  wishlist */}
        <div className="flex justify-end items-center gap-4">
          <button
            onClick={() => handelAddToWishlist(product)}
            className={`shadow-lg p-3 rounded-full ${
              isWishlist && "bg-primary text-base-100"
            }`}
          >
            <FiHeart />
          </button>
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
                <del className="text-neutral/70">
                  ৳ {selectedPrice}
                </del>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center mt-6">
          <button
            onClick={handleBuyNow}
            className="bg-primary text-base-100 px-2 py-1.5 rounded scale-[.97] hover:scale-[1] duration-300 flex items-center justify-center gap-1"
          >
            <IoBagCheckOutline />
            Buy Now
          </button>

          <button
            onClick={handelAddToCart}
            className="bg-accent text-base-100 px-2 py-1.5 rounded flex items-center gap-1 justify-center scale-[.97] hover:scale-[1] duration-300"
          >
            <FaOpencart />
            Add To Cart
          </button>

          <Link
            to=""
            className="bg-secondary text-base-100 px-2 py-1.5 rounded flex items-center gap-1 justify-center scale-[.97] hover:scale-[1] duration-300"
          >
            <MdAddCall />
            Call Now
          </Link>
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

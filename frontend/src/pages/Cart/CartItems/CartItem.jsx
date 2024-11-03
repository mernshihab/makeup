import { MdOutlineDelete } from "react-icons/md";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { changeQuantity, removeFromCart } from "../../../Redux/cart/cartSlice";

export default function CartItem({ product }) {
  const dispatch = useDispatch();
  const { slug, image, title, discount, price } =
    product;


  const discountPrice = parseInt(price - (price * discount) / 100);
  const total =
    parseInt(discount >= 1 ? discountPrice : price);

  const handelDeleteCartItem = (data) => {
    const isConfirm = window.confirm("Are you sure delete this item?");
    if (isConfirm) dispatch(removeFromCart(data));
  };

  return (
    <tr>
      <td className="p-3">
        <div className="flex gap-2 items-center">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/products/${image}`}
            alt={title}
            className="w-10 h-10 rounded-lg"
          />
          <Link to={`/product/${slug}`} className="leading-4">
            <h3 className="text-neutral">
              {/* {title.length > 30 ? `${title.slice(0, 30)}...` : title} */}
              {title}
            </h3>
            
          </Link>
        </div>
      </td>

      <td className="px-6 py-2 font-medium">
        <p>
          {discount >= 1 ? (
            <>
              <span>৳{discountPrice}</span>
              <del className="text-xs text-neutral-content pl-1">৳{price}</del>
            </>
          ) : (
            <span>৳{price}</span>
          )}
        </p>
      </td>

      

      

      <td className="px-6 py-3">
        <button
          onClick={() => handelDeleteCartItem(product)}
          className="text-red-600 hover:underline text-xl"
        >
          <MdOutlineDelete />
        </button>
      </td>
    </tr>
  );
}

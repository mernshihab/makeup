import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { clearCart } from "../../Redux/cart/cartSlice";
import {
  useAddOrderMutation,
  useInitSslPaymentMutation,
} from "../../Redux/order/orderApi";
import ButtonSpinner from "../../components/ButtonSpinner/ButtonSpinner";
import { useApplyCouponMutation } from "../../Redux/coupon/couponApi";

export default function Checkout() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  const [addOrder, { isLoading }] = useAddOrderMutation();
  const [initSslPayment, { isLoading: sslPaymentLoading }] =
    useInitSslPaymentMutation();

  const [applyCoupon, { isLoading: couponLoading }] = useApplyCouponMutation();

  const { loggedUser } = useSelector((state) => state.user);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [couponError, setCouponError] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Subtotal - discount amount
  const subTotal = carts?.reduce(
    (price, item) =>
      price +
      item.quantity * parseInt(item.price - (item.price * item.discount) / 100),
    0
  );

  const tax = 0;
  const discountTk = ((subTotal + tax + parseInt(shipping)) * discount) / 100;
  const grandTotal = subTotal + tax + parseInt(shipping) - discountTk;

  const handelPlaceOrder = async (e) => {
    e.preventDefault();

    if (shipping == 0) {
      return Swal.fire("", "Please select shipping area", "warning");
    }

    const form = e.target;

    const address = form.fullAdress.value;
    const note = form.note.value;

    const products = [];
    carts.map((product) =>
      products.push({
        productId: product._id,
        discount: product?.discount,
        quantity: product.quantity,
        size: product.size,
        color: product.color,
        variant: product?.variant,
      })
    );

    const order = {
      userId: loggedUser?.data?._id,
      shippingInfo: {
        address,
        note,
      },
      paymentMethod,
      products,
      totalPrice: grandTotal,
      shippingCharge: shipping,
    };

    if (paymentMethod === "cod") {
      const res = await addOrder(order);
      if (res?.data?.success) {
        Swal.fire("", "order success", "success");
        dispatch(clearCart());
        form.reset();
        navigate("/shops");
      } else {
        toast.error("Something Wrong");
        console.log(res);
      }
    } else if (paymentMethod === "ssl") {
      const res = await initSslPayment(order);
      if (res?.data?.success) {
        dispatch(clearCart());
        form.reset();
        window.location.href = res?.data?.data;
        // window.location.replace(res?.data?.data);
      }
    }
  };

  const handelDiscount = async () => {
    const couponInfo = {
      coupon: couponCode,
      totalShopping: subTotal,
    };
    const res = await applyCoupon(couponInfo);
    if (res?.error) {
      setCouponError(res?.error?.data?.error);
    } else {
      setCouponError("");
    }

    if (res?.data?.success) {
      setDiscount(res?.data?.data?.discount);
      toast.success("Coupon add success");
      setCouponCode("");
    }
  };

  return (
    <div className="py-8">
      <div className="container">
        <form
          onSubmit={handelPlaceOrder}
          className="grid lg:grid-cols-3 gap-10 mt-6"
        >
          {/* Shipping Details */}
          <div className="lg:col-span-2">
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase">
                Shipping Details
              </h3>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3>Full name</h3>
                  <input
                    type="text"
                    name="name"
                    className="border-2 w-full p-2 mt-2 outline-none rounded"
                    required
                    defaultValue={loggedUser?.data?.name}
                  />
                </div>
                <div>
                  <h3>Phone</h3>
                  <input
                    type="number"
                    name="number"
                    className="border-2 w-full p-2 mt-2 outline-none rounded"
                    required
                    defaultValue={loggedUser?.data?.phone}
                  />
                </div>
              </div>

              <div className="text-sm mt-2">
                <div>
                  <h3>Email address</h3>
                  <input
                    type="email"
                    name="email"
                    className="border-2 w-full p-2 mt-2 outline-none rounded"
                    defaultValue={loggedUser?.data?.email}
                    disabled
                    required
                  />
                </div>
              </div>

              <div className="text-sm mt-2">
                <h3>Full Adress</h3>
                <textarea
                  name="fullAdress"
                  rows="3"
                  placeholder="House number and fullAdress name"
                  className="border-2 w-full p-2 mt-2 outline-none rounded"
                  required
                ></textarea>
              </div>

              <div className="text-sm mt-2">
                <h3>Order Note</h3>
                <textarea
                  name="note"
                  rows="4"
                  placeholder="House number and fullAdress name"
                  className="border-2 w-full p-2 mt-2 outline-none rounded"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Order details */}
          <div>
            <div className="checkout-output bg-gray-50 relative p-6">
              <div className="border-b mb-4 pb-4">
                <h3 className="text-[17px] font-medium text-neutral">
                  Discounts
                </h3>
                <div>
                  <small className="text-neutral-content text-xs">
                    REFERRAL OR PROMO CODE
                  </small>
                  <div className="flex items-center gap-px">
                    <input
                      onChange={(e) => setCouponCode(e.target.value)}
                      type="text"
                      className="text-sm border rounded outline-none w-full px-3 py-[7px]"
                      placeholder="Enter Code"
                      value={couponCode}
                    />
                    <div
                      onClick={handelDiscount}
                      className="primary_btn cursor-pointer"
                      style={{ fontSize: "13px" }}
                      disabled={couponLoading && "disabled"}
                    >
                      {couponLoading ? "Loading..." : "Apply"}
                    </div>
                  </div>
                  <p className="text-red-500 text-xs">{couponError}</p>
                </div>
              </div>

              <div className="border-b mb-4 pb-4">
                <h3 className="font-medium text-neutral">Payment Method</h3>

                <ul className="text-sm text-neutral-content flex flex-col gap-1 pl-2 mt-2">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="cod"
                        type="radio"
                        name="payment_method"
                        className="w-3 h-3 cursor-pointer"
                        checked={paymentMethod === "cod" && true}
                        onClick={() => setPaymentMethod("cod")}
                      />
                      <label htmlFor="cod" className="ms-2 cursor-pointer">
                        Cash On Delivery
                      </label>
                    </div>

                    <div>
                      <img src="" alt="" className="w-4 h-4" />
                    </div>
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="ssl"
                        type="radio"
                        name="payment_method"
                        className="w-3 h-3 cursor-pointer"
                        checked={paymentMethod === "ssl" && true}
                        onClick={() => setPaymentMethod("ssl")}
                      />
                      <label htmlFor="ssl" className="ms-2 cursor-pointer">
                        SSL
                      </label>
                    </div>

                    <div>
                      <img src="" alt="" className="w-4 h-4" />
                    </div>
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="amar_pay"
                        type="radio"
                        name="payment_method"
                        className="w-3 h-3 cursor-pointer"
                        checked={paymentMethod === "amar_pay" && true}
                        onClick={() => setPaymentMethod("amar_pay")}
                      />
                      <label htmlFor="amar_pay" className="ms-2 cursor-pointer">
                        Amar pay
                      </label>
                    </div>

                    <div>
                      <img src="" alt="" className="w-4 h-4" />
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="tetx-xl font-medium text-neutral">
                  Order Summary
                </h3>

                <div className="flex justify-between border-b py-1.5 text-sm">
                  <h3>Subtotal</h3>
                  <p>
                    ৳<span>{subTotal}.00</span>
                  </p>
                </div>

                <div className="flex justify-between items-center border-b py-1.5 text-sm">
                  <h3>Shipping Area</h3>
                  <div className="text-end">
                    <select
                      className="outline-none"
                      required
                      onChange={(e) => setShipping(parseInt(e.target.value))}
                    >
                      <option value="0">Select Shipping Area</option>
                      <option value="70">Inside Dhaka</option>
                      <option value="130">Outside Dhaka</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b py-1.5 text-sm">
                  <h3>Shipping Charge</h3>
                  <div className="text-end">
                    ৳<span>{shipping}.00</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b py-1.5 text-sm text-red-500">
                  <h3>Discount</h3>
                  <div className="text-end">
                    - ৳<span>{discountTk}.00</span>
                  </div>
                </div>

                {/* <!-- Total --> */}
                <div className="flex justify-between border-b py-2 font-medium text-lg">
                  <h3 className="text-title">Total</h3>
                  <p className="text-primary">
                    ৳ <span>{grandTotal}.00 </span>
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-base-100 py-2 rounded shadow flex justify-center"
              >
                {isLoading || sslPaymentLoading ? (
                  <ButtonSpinner />
                ) : paymentMethod === "cod" ? (
                  "PLACE ORDER"
                ) : (
                  "Payment"
                )}
              </button>
            </div>
          </div>
        </form>

        <div className="flex justify-end"></div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FiLogIn, FiMonitor, FiSearch } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetMainLogoQuery } from "../../Redux/logo/logoApi";
import { userLogout } from "../../Redux/user/userSlice";
import { BsSearch } from "react-icons/bs";
import SearchSidebar from "./SearchSidebar/SearchSidebar";

export default function MainHeader() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const { loggedUser } = useSelector((state) => state.user);
  const { data: logo } = useGetMainLogoQuery();

  const [searchSidebar, setSearchSidebar] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [profileDropdown, setProfileDropdown] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        !e.target.closest(".profileDropdownBtn") &&
        !e.target.closest(".user_info")
      ) {
        setProfileDropdown(false);
      }
    });
  }, []);

  return (
    <header className="py-1 md:py-2 text-neutral border-b sticky top-0 z-40 bg-[#ffffffcc] backdrop-blur-[10px]">
      <div className="container">
        <div className="flex items-center justify-between gap-2">
          <div>
            <Link to="/">
              <img
                // src={
                //   logo?.data[0]?.logo === ""
                //     ? "/images/logo/logo.png"
                //     : `${import.meta.env.VITE_BACKEND_URL}/logo/${
                //         logo?.data[0]?.logo
                //       }`
                // }
                src="/images/logo/logo.png"
                alt=""
                className="w-28 sm:w-32 h-12 sm:h-14"
              />
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setSearchSidebar(!searchSidebar)}
              className="pr-2"
            >
              <BsSearch className="text-lg" />
            </button>

            <SearchSidebar
              searchSidebar={searchSidebar}
              setSearchSidebar={setSearchSidebar}
            />
          </div>

          <nav className="hidden sm:flex gap-3 lg:gap-6 items-center">
            <ul className="flex items-center gap-4 font-medium relative">
              <li>
                <Link
                  className="py-1.5 px-2 hover:bg-gray-200 rounded-md duration-300"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="py-1.5 px-2 hover:bg-gray-200 rounded-md duration-300"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li
                className="relative py-1.5 px-2 hover:bg-gray-200 rounded-md duration-300"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="cursor-pointer"
                >
                  Services
                </span>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-max bg-white shadow-lg p-4 grid grid-cols-3 gap-6 z-10">
                    <div>
                      <h3 className="font-bold">Body Care</h3>
                      <ul>
                        <li>Manicure And Pedicure</li>
                        <li>Facials</li>
                        <li>Brightening Polish</li>
                        <li>Massage</li>
                        <li>
                          <Link to="/body-care">All Body Care</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">Hair Care</h3>
                      <ul>
                        <li>Hair Cut</li>
                        <li>Hair Color</li>
                        <li>Hair Treatment</li>
                        <li>Hair Straightening</li>
                        <li>
                          <Link to="/hair-care">All Hair Care</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">Packages</h3>
                      <ul>
                        <li>Regular Packages</li>
                        <li>Mom Packages</li>
                        <li>
                          <Link to="/packages">All Packages</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">Hair Removal</h3>
                      <ul>
                        <li>Threading</li>
                        <li>Waxing</li>
                        <li>
                          <Link to="/hair-removal">All Hair Removal</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">Makeover</h3>
                      <ul>
                        <li>Henna Art</li>
                        <li>Bridal</li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link
                  className="py-1.5 px-2 hover:bg-gray-200 rounded-md duration-300"
                  to="/offers"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  className="py-1.5 px-2 hover:bg-gray-200 rounded-md duration-300"
                  to="/career"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  className="py-1.5 px-2 hover:bg-gray-200 rounded-md duration-300"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden sm:flex gap-3 lg:gap-6 items-center">
            <FiSearch className="text-xl lg:text-2xl" />

            <Link
              to="/cart"
              className="flex gap-2 lg:gap-3 items-center hover:text-primary duration-300"
            >
              <div className="relative">
                <RiShoppingCartLine className="text-xl lg:text-2xl" />
                <div className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold bg-primary text-base-100 rounded-full -top-2 -right-2">
                  <span className="mt-px">{carts?.length || 0}</span>
                </div>
              </div>
            </Link>

            {loggedUser?.success ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdown(!profileDropdown)}
                  className="profileDropdownBtn"
                >
                  <img
                    src={
                      loggedUser?.data?.image === "" ||
                      loggedUser?.data?.image === null
                        ? "/images/demo_user.jpg"
                        : `${import.meta.env.VITE_BACKEND_URL}/user/${
                            loggedUser?.data?.image
                          }`
                    }
                    alt=""
                    className="w-7 h-7 rounded-full border border-base-100"
                  />
                </button>

                {profileDropdown && (
                  <ul className="absolute w-max min-w-[220px] text-[15px] bg-base-100 right-0 top-[130%] shadow-lg rounded z-50 overflow-hidden text-neutral">
                    <li className="user_info px-2 py-1 border-b">
                      <div className="flex items-center gap-2">
                        <img
                          src={
                            loggedUser?.data?.image === "" ||
                            loggedUser?.data?.image === null
                              ? "/images/demo_user.jpg"
                              : `${import.meta.env.VITE_BACKEND_URL}/user/${
                                  loggedUser?.data?.image
                                }`
                          }
                          alt=""
                          className="w-9 h-9 rounded-full border border-base-100"
                        />
                        <div>
                          <h1 className="text-[17px]">
                            {loggedUser?.data?.name}
                          </h1>
                          <p className="text-sm text-neutral-content">
                            {loggedUser?.data?.email}
                          </p>
                        </div>
                      </div>
                    </li>

                    {(loggedUser?.data?.role === "admin" ||
                      loggedUser?.data?.role === "superAdmin") && (
                      <li>
                        <Link
                          to="/admin/dashboard"
                          className="duration-200 px-3 py-1.5 flex items-center gap-1 hover:bg-gray-200 w-full"
                        >
                          <RxDashboard className="text-lg" />
                          Dashboard
                        </Link>
                      </li>
                    )}

                    <li>
                      <Link
                        to="/account/profile"
                        className="duration-200 px-3 py-1.5 flex items-center gap-1 hover:bg-gray-200 w-full"
                      >
                        <FiMonitor className="text-lg" />
                        View Profile
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/account/wishlist"
                        className="duration-200 px-3 py-1.5 flex items-center gap-1 hover:bg-gray-200 w-full"
                      >
                        <AiOutlineHeart className="text-xl" />
                        My Wishlist
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/account/orders"
                        className="duration-200 px-3 py-1.5 flex items-center gap-1 hover:bg-gray-200 w-full"
                      >
                        <IoBagCheckOutline className="text-xl" />
                        My Order List
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={() => dispatch(userLogout())}
                        className="duration-200 px-3 py-1.5 flex items-center gap-1 hover:bg-gray-200 w-full text-primary border-t"
                      >
                        <BiLogOutCircle className="text-base" />
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="flex gap-1.5 items-center text-neutral hover:text-primary duration-300"
              >
                <FiLogIn className="text-xl sm:text-[17px]" />
                <h1 className="font-medium hidden sm:block">Login</h1>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

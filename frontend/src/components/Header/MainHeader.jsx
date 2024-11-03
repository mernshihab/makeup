import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FiLogIn, FiMonitor, FiSearch } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetMainLogoQuery } from "../../Redux/logo/logoApi";
import { userLogout } from "../../Redux/user/userSlice";
import { BsSearch } from "react-icons/bs";
import SearchSidebar from "./SearchSidebar/SearchSidebar";
import { useGetCategoriesQuery } from "../../Redux/category/categoryApi";
import SearchBox from "./SearchBox";

export default function MainHeader() {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.user);
  const { data: logo } = useGetMainLogoQuery();

  const { data } = useGetCategoriesQuery();

  const services = data?.data;

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
                src={
                  logo?.data[0]?.logo === ""
                    ? "/images/logo/logo.png"
                    : `${import.meta.env.VITE_BACKEND_URL}/logo/${
                        logo?.data[0]?.logo
                      }`
                }
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
                  to="/about-us"
                >
                  About
                </Link>
              </li>
              <li
                className="relative py-1.5 px-2 hover:bg-gray-200 rounded-md duration-300"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to="/services/all"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className=""
                >
                  Services
                </Link>
                {isDropdownOpen && (
                  <div className="absolute top-full w-40 bg-white shadow-lg p-3 left-0 z-10 rounded-sm">
                    <ul className="w-full space-y-2">
                      {services?.map((service) => (
                        <li
                          key={service?._id}
                          className="border-b pb-1 hover:border-black duration-300"
                        >
                          <Link
                            to={`/services/${service?.slug}`}
                            className="font-semibold"
                          >
                            {service?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
                  to="/our-brides"
                >
                  Our Brides
                </Link>
              </li>
              <li>
                <Link
                  className="py-1.5 px-2 hover:bg-gray-200 rounded-md duration-300"
                  to="/academy"
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  className="py-1.5 px-2 hover:bg-gray-200 rounded-md duration-300"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden sm:flex gap-3 lg:gap-6 items-center">
          <div className="hidden sm:block sm:w-1/2 xl:w-3/5">
            <SearchBox />
          </div>
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

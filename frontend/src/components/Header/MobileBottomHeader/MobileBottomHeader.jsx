import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiShop } from "react-icons/ci";
import MobileMenuSidebar from "../MobileMenuSidebar";
import { GrGallery } from "react-icons/gr";

export default function MobileBottomHeader() {
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.closest(".menu_wrap ul li a")) {
        setMobileMenu(false);
      }
    });
  }, []);

  return (
    <section className="fixed sm:hidden bottom-0 left-0 w-full z-50 bg-base-100 pt-2 pb-1">
      <div className="container">
        <div className="grid grid-cols-5 text-neutral-content">
          <NavLink
            to="/"
            className="flex flex-col justify-center items-center gap-1"
          >
            <FiHome className="text-[17px]" />
            <p className="text-xs">Home</p>
          </NavLink>

          <button
            onClick={() => setMobileMenu(true)}
            className="flex flex-col justify-center items-center gap-1"
          >
            <AiOutlineMenu className="text-xl" />
            <p className="text-xs">Categories</p>
          </button>

          <NavLink
            to="/services/all"
            className="flex flex-col justify-center items-center gap-1"
          >
            <CiShop className="text-xl" />
            <p className="text-xs">Services</p>
          </NavLink>


          <NavLink
            to="/our-brides"
            className="flex flex-col justify-center items-center gap-1"
          >
            <GrGallery className="text-xl" />
            <p className="text-xs">Gallery</p>
          </NavLink>

          <NavLink
            to="/account"
            className="flex flex-col justify-center items-center gap-1"
          >
            <FaRegCircleUser className="text-lg" />
            <p className="text-xs">Account</p>
          </NavLink>
        </div>
      </div>

      <MobileMenuSidebar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
    </section>
  );
}

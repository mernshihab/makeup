import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTelephoneInbound, BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetContactQuery } from "../../Redux/contact/contactApi";

const TopHeader = () => {
  // const { data } = useGetContactQuery();
  // const contact = data?.data[0];
  return (
    <div className="hidden sm:block bg-primary py-1.5 border-b text-base-100">
      <div className="container mx-auto font-medium">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center overflow-hidden w-96">
            <p className="marquee">
              Up-to 20% discounts on Facial! Limited slots left in your area
              today
            </p>
          </div>
          <div className="flex items-center gap-6">
            <p>
              Call for Booking <span className="ml-4">+8801873367534</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

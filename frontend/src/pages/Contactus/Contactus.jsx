import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
// import { useGetContactsQuery } from "../../../Redux/contact/contactApi";
// import { useAddContactMsgMutation } from "../../../Redux/contactMsg/contactMsgApi";
import Swal from "sweetalert2";

export default function Contactus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const { data } = useGetContactsQuery();

  // const contactUs = data?.data;

  // const [addContactMsg, { isLoading }] = useAddContactMsgMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = { name, phone, email, message };

    // try {
    //   const res = await addContactMsg(newMessage).unwrap();
    //   if (res?.success) {
    //     Swal.fire("", "Contact message added successfully", "success");
    //     setName("");
    //     setPhone("");
    //     setEmail("");
    //     setMessage("");
    //   }
    // } catch (error) {
    //   Swal.fire("", "Failed to add message", "error");
    //   console.log(error);
    // }
  };

  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-center text-2xl font-semibold text-neutral md:text-start md:text-3xl">
              Contact Us
            </h2>
            <p className="mt-1 text-[15px] text-neutral-content">
              Feel free to reach out to us for any inquiries or assistance.
              We’re here to help!
            </p>

            <div className="mt-3 flex flex-col gap-1 text-neutral-content md:mt-6 md:gap-2.5">
              <div className="flex items-center gap-1">
                <p>
                  <FaPhone />
                </p>
                {/* <p>{contactUs?.phone}</p> */}
                <p>+8801873367534</p>
              </div>
              <div className="flex items-center gap-1">
                <p>
                  <IoLogoWhatsapp />
                </p>
                {/* <p>{contactUs?.wpLink}</p> */}
                <p>+8801873367534</p>
              </div>
              <div className="flex items-center gap-1">
                <p>
                  <FaPhone />
                </p>
                {/* <p>{contactUs?.hotNumber}</p> */}
                <p>4534</p>
              </div>
              <div className="flex items-center gap-1">
                <p>
                  <MdEmail className="text-lg" />
                </p>
                {/* <p>{contactUs?.email}</p> */}
                <p>monirsbeautylounge@gmail.com</p>
              </div>
              <div className="flex items-center gap-1">
                <p>
                  <FaLocationDot className="text-lg" />
                </p>
                {/* <p>{contactUs?.address}</p> */}
                <p>House-53, Block-A, Road-01, Niketon, Gulshan 1</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-center text-xl font-semibold text-primary md:text-start">
              Get In Touch
            </h2>
            <form className="flex flex-col gap-3">
              <div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full rounded border px-4 py-2 outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full rounded border px-4 py-2 outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full rounded border px-4 py-2 outline-none"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  placeholder="Type you message..."
                  className="w-full rounded border px-4 py-2 outline-none"
                ></textarea>
              </div>

              <div>
                <button
                  onClick={handleSubmit}
                  className="font-semibold py-2 px-3 rounded bg-primary text-white border border-primary hover:bg-transparent hover:text-primary duration-300"
                >
                  Send Message
                  {/* {isLoading ? "Sending..." : "Send Message"} */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4342.092417881574!2d90.41126617065737!3d23.774112141728978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd04e4b2bc2d23ef%3A0xe8936221a3d1aec4!2sMonir&#39;s%20Beauty%20Lounge!5e0!3m2!1sen!2sbd!4v1730106783574!5m2!1sen!2sbd"
            width="100%"
            height="420"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

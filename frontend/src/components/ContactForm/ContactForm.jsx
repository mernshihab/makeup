import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import Swal from "sweetalert2";
import { useAddContactMsgMutation } from "../../Redux/contactMsg/contactMsgApi";
import { useGetContactQuery } from "../../Redux/contact/contactApi";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { data } = useGetContactQuery();

  const contactUs = data?.data[0];

  const [addContactMsg, { isLoading }] = useAddContactMsgMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = { name, phone, email, message };

    try {
      const res = await addContactMsg(newMessage).unwrap();
      if (res?.success) {
        Swal.fire("", "Contact message added successfully", "success");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      Swal.fire("", "Failed to add message", "error");
      console.log(error);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-2xl text-center text-primary md:text-start font-semibold md:text-3xl">
              Contact For Booking
            </h2>
            <p className="mt-1 text-[15px] text-neutral-content">
              Have suggestions, questions, ideas, or just want to chat? We’d
              love to hear from you!
            </p>

            <div className="mt-3 md:mt-6 flex flex-col gap-1 md:gap-2.5 text-neutral-content">
              <div className="flex items-center gap-1">
                <p>
                  <FaPhone />
                </p>
                <p>{contactUs?.phone}</p>
              </div>
              <div className="flex items-center gap-1">
                <p>
                  <IoLogoWhatsapp />
                </p>
                <p>{contactUs?.whatsapp}</p>
              </div>

              <div className="flex items-center gap-1">
                <p>
                  <MdEmail className="text-lg" />
                </p>
                <p>{contactUs?.email}</p>
              </div>
              <div className="flex items-center gap-1">
                <p>
                  <FaLocationDot className="text-lg" />
                </p>
                <p>{contactUs?.address}</p>
              </div>
            </div>
          </div>

          <div>
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
                  className="py-2 px-3 rounded-md border border-primary bg-primary hover:bg-transparent hover:text-primary text-white font-semibold duration-300"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

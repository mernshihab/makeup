import { useParams } from "react-router-dom";
import parcer from "html-react-parser";
import { Link } from "react-router-dom";
import { useGetAcademyBySlugQuery } from "../../Redux/academy/academyApi";
import { useGetContactQuery } from "../../Redux/contact/contactApi";

export default function AcademyDetails() {
  window.scrollTo(0, 0);

  const { slug } = useParams();
  const { data } = useGetAcademyBySlugQuery(slug);

  const { data: contactInfo } = useGetContactQuery();

  const contact = contactInfo?.data[0];

  const academy = data?.data;

  const description = academy?.description && parcer(academy?.description);

  return (
    <section className="py-10">
      <div className="container">
        <div className="md:flex gap-5">
          <div>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/academies/${
                academy?.images
              }`}
              alt=""
            />
          </div>
          <div className="lg:w-[50%] bg-gray-100 p-6 rounded-lg shadow-lg lg:ml-6 mt-6 lg:mt-0">
            <ul className="text-gray-600 text-sm mb-6 space-y-2">
              <li className="text-2xl font-semibold">{academy?.title}</li>
              <li>
                <strong>Instructor:</strong> {academy?.instructor}
              </li>
              <li>
                <strong>Duration:</strong> {academy?.duration} days
              </li>
              <li>
                <strong>Location:</strong> {academy?.location}
              </li>
            </ul>

            <div>{description}</div>

            <div className="text-xl mt-5 font-semibold text-gray-800 mb-4">
              ৳
              {parseInt(
                (
                  academy?.price -
                  (academy?.price *
                    (academy?.discount
                      ? academy?.discount
                      : academy?.discount)) /
                    100
                ).toFixed(0)
              )}
              <span className="text-gray-500 line-through ml-2">
                ৳{academy?.price}
              </span>
            </div>
            <Link
              to={`https://wa.me/${contact?.whatsapp}?text=I'm%20interested%20in%20enrolling!`}
              className="px-10 bg-primary text-white py-2 rounded-lg font-semibold"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

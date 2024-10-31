import { useGetCategoriesQuery } from "../../../Redux/category/categoryApi";

export default function Services() {
  const { data } =
    useGetCategoriesQuery();

  const services = data?.data;

  return (
    <section className="py-10">
      <div className="container">
        <div>
          <h2>Our Services</h2>
          <div className="lg:w-[70%] mx-auto grid gap-5 mt-4 md:grid-cols-2">
            {services?.map((service) => (
              <div
                key={service?._id}
                data-aos="flip-left"
                className="relative w-full overflow-hidden rounded-md group"
              >
                <div className="absolute top-0 left-0 bg-black opacity-30 group-hover:bg-[#6A2E8A] group-hover:opacity-40 -z-10 w-full h-full transition-all duration-300"></div>
                <img
                  className="absolute top-0 left-0 h-full w-full object-cover -z-20"
                  src={`${import.meta.env.VITE_BACKEND_URL}/categories/${service?.icon}`}
                  alt=""
                />
                <h3 className="py-14 font-medium text-center z-20 text-xl text-white">
                  {service?.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

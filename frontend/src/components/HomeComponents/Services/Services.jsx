export default function Services() {
  return (
    <section className="py-10">
      <div className="container">
        <div>
          <h2 className="font-semibold mb-3 text-4xl text-primary text-center">
            The Future of Beauty
          </h2>
          <div className="md:w-[70%] mx-auto grid gap-5 mt-4 md:grid-cols-2">
            <div className="relative w-full overflow-hidden rounded-md group">
              <div className="absolute top-0 left-0 bg-black opacity-30 group-hover:bg-[#6A2E8A] group-hover:opacity-40 -z-10 w-full h-full transition-all duration-300"></div>
              <img
                className="absolute top-0 left-0 h-full w-full object-cover -z-20"
                src="/images/service1.jpg"
                alt=""
              />
              <h3 className="py-14 font-medium text-center z-20 text-xl text-white">
                Body Care
              </h3>
            </div>
            <div className="relative w-full overflow-hidden rounded-md group">
              <div className="absolute top-0 left-0 bg-black opacity-30 group-hover:bg-[#6A2E8A] group-hover:opacity-40 -z-10 w-full h-full transition-all duration-300"></div>
              <img
                className="absolute top-0 left-0 h-full w-full object-cover -z-20"
                src="/images/service2.jpg"
                alt=""
              />
              <h3 className="py-14 font-medium text-center z-20 text-xl text-white">
                Makeover
              </h3>
            </div>
            <div className="relative w-full overflow-hidden rounded-md group">
              <div className="absolute top-0 left-0 bg-black opacity-30 group-hover:bg-[#6A2E8A] group-hover:opacity-40 -z-10 w-full h-full transition-all duration-300"></div>
              <img
                className="absolute top-0 left-0 h-full w-full object-cover -z-20"
                src="/images/service3.jpg"
                alt=""
              />
              <h3 className="py-14 font-medium text-center z-20 text-xl text-white">
                Bridal
              </h3>
            </div>
            <div className="relative w-full overflow-hidden rounded-md group">
              <div className="absolute top-0 left-0 bg-black opacity-30 group-hover:bg-[#6A2E8A] group-hover:opacity-40 -z-10 w-full h-full transition-all duration-300"></div>
              <img
                className="absolute top-0 left-0 h-full w-full object-cover -z-20"
                src="/images/service4.jpg"
                alt=""
              />
              <h3 className="py-14 font-medium text-center z-20 text-xl text-white">
                Henna Art
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

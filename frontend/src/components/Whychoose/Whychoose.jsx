export default function Whychoose() {
  const features = [
    {
      title: "Experienced & Verified Experts",
      description:
        "At Monir's Beauty, we prioritize professionalism and excellence. Our clients are served by highly experienced and verified beauticians to ensure the best possible experience.",
      imgSrc: "/images/whychoose/whychoose1.jpg",
    },
    {
      title: "Branded & Sealed Products",
      description:
        "We use only premium, branded products for all our services. Our commitment to quality ensures that you receive the best treatments right at your home.",
      imgSrc: "/images/whychoose/whychoose2.webp",
    },
    {
      title: "Transparent & Affordable Pricing",
      description:
        "We believe in transparency and affordability. Our pricing is clear and competitive, making our top-tier beauty and wellness services accessible to everyone.",
      imgSrc: "/images/whychoose/whychoose3.jpg",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="md:text-4xl text-3xl text-center font-semibold text-purple-600 mb-8">
          Why MONIR's Beauty Lounge?
        </h2>
        <div className="grid gap-6 md:grid-cols-3 md:w-[85%] mx-auto">
          {features.map((feature, index) => (
            <div key={index} className=" pb-2 rounded-lg flex flex-col ">
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-full min-h-40 max-h-52 object-cover rounded-t-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

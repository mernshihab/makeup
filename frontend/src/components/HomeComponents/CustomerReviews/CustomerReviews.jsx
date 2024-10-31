import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Aisha Rahman",
      date: "05 OCT, 2024",
      rating: 5,
      review:
        "The bridal service at Romoni was amazing! From the makeup to the hair styling, everything was perfect. I felt like a queen on my special day. A huge thanks to the talented team who made it happen!",
      service: "Bridal Makeup & Styling",
    },
    {
      name: "Lamia Akter",
      date: "12 OCT, 2024",
      rating: 5,
      review:
        "I opted for a makeover session, and it was totally worth it. The makeup artist understood exactly what I wanted and brought out my best features. Thank you for this fantastic transformation!",
      service: "Complete Makeover",
    },
    {
      name: "Nadia Islam",
      date: "18 OCT, 2024",
      rating: 5,
      review:
        "The henna art service was exceptional. The artist was incredibly skilled and created beautiful, intricate designs on my hands. I couldn’t be happier with how it turned out!",
      service: "Henna Art",
    },
    {
      name: "Farzana Hossain",
      date: "22 OCT, 2024",
      rating: 5,
      review:
        "I had a body care session at Romoni, and it was so relaxing! The products they used were top-quality, and the service was excellent. My skin feels rejuvenated and smooth. Highly recommended!",
      service: "Body Care & Spa",
    },
    {
      name: "Sadia Sultana",
      date: "25 OCT, 2024",
      rating: 5,
      review:
        "Got a haircut and styling done, and I absolutely loved the result. The stylist gave me a fresh, modern look that suits me perfectly. I’ll definitely come back for more styling services!",
      service: "Hair Styling",
    },
  ];

  const itemsToShow =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= reviews.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center py-8 px-4">
      <h2>
        What Our Customers Are Saying
      </h2>
      <div className="relative overflow-hidden w-full lg:w-[90%] mx-auto">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0  w-full md:w-1/2 lg:w-1/3 p-4"
            >
              <div className="bg-white p-6 shadow-lg h-96 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-gray-800">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500">{review.date}</p>
                <div className="flex items-center mt-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-primary mr-1" />
                  ))}
                </div>
                <p className="text-gray-600 mt-4">{review.review}</p>
                <p className="flex items-center text-primary font-semibold mt-4">
                  <img
                    src="/images/reviewImg.webp"
                    alt="service"
                    className="w-8 h-8 rounded-md mr-2"
                  />
                  {review.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center mt-6 space-x-4">
        <button className="px-5 py-2 bg-white border border-primary hover:bg-primary hover:text-white duration-300 text-primary font-semibold rounded">
          View All Reviews
        </button>
        <button onClick={handlePrev} className="text-primary text-2xl">
          <FaChevronLeft />
        </button>
        <button onClick={handleNext} className="text-primary text-2xl">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

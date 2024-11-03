import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function AcademyCard({ course }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/academies/${course.images}`}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          {course.location}
        </span>
        {course.discount ? (
          <div className="absolute bottom-2 left-2 bg-yellow-500 text-white font-semibold px-3 py-1 rounded">
            <span className="line-through text-sm mr-1">
              ৳{course?.discount}
            </span>
            ৳{course?.price}
          </div>
        ) : (
          <div className="absolute bottom-2 left-2 bg-yellow-500 text-white font-semibold px-3 py-1 rounded">
            ৳{course?.price}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
        <p className="text-sm text-gray-500 mt-1">By {course.instructor}</p>

        <p className="text-sm text-gray-700 mt-3">
          Course duration: {course.duration} days ({course.time})
          <br />
          Course description: {course.description}
        </p>
      </div>

      <div className="p-4 border-t border-gray-200 flex items-center justify-between text-gray-500 text-sm">
        <Link
          to=""
          className="py-1.5 px-3 bg-primary text-white rounded border border-primary hover:bg-transparent hover:text-primary duration-300"
        >
          Contact
        </Link>

        <div className="flex items-center gap-1">
          <AiOutlineCalendar />
          <span>{course.duration} days</span>
        </div>
      </div>
    </div>
  );
}

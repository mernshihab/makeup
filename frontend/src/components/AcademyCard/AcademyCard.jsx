import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

const truncateDescription = (description, maxLength = 100) => {
  const stripHtmlTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const plainText = stripHtmlTags(description);
  const truncatedText =
    plainText.length > maxLength
      ? plainText.substring(0, maxLength) + "..."
      : plainText;

  return truncatedText;
};

export default function AcademyCard({ course }) {
  return (
    <Link to={`/academy/${course?.slug}`} className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/academies/${course.images}`}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          {course.location}
        </span>
        {course.discount > 0 ? (
          <div className="absolute bottom-2 left-2 bg-yellow-500 text-white font-semibold px-3 py-1 rounded">
            <span className="line-through text-sm mr-1">৳{course?.price}</span>৳
            {parseInt(
              (
                course?.price -
                (course?.price *
                  (course?.discount ? course?.discount : course?.discount)) /
                  100
              ).toFixed(0)
            )}
          </div>
        ) : (
          <div className="absolute bottom-2 left-2 bg-yellow-500 text-white font-semibold px-3 py-1 rounded">
            ৳{course?.price}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          By <span className="text-primary">{course.instructor}</span>
        </p>

        <p className="text-sm text-gray-700 mt-3">
          Course duration:{" "}
          <span className="font-semibold">{course.duration}</span>
          <br />
          {truncateDescription(course.description, 100)}
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
          <span>{course.duration}</span>
        </div>
      </div>
    </Link>
  );
}

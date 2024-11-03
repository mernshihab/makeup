import { useEffect } from "react";
import AcademyCard from "../../components/AcademyCard/AcademyCard";
import { useGetAllAcademiesQuery } from "../../Redux/academy/academyApi";

export default function Academy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const courses = [
  //   {
  //     imageUrl: "https://via.placeholder.com/300x400", // Replace with actual image URL
  //     title: "MAKEUP FOUNDATION COURSE WITH SELINA MANIR",
  //     instructor: "Selina Manir",
  //     location: "London",
  //     duration: 3,
  //     time: "10:00 to 16:30",
  //     description:
  //       "Specifically designed for those interested in learning the foundations of...",
  //     enrolled: 0,
  //     originalPrice: "995.00",
  //     discountedPrice: "1249.00",
  //     discount: true,
  //   },
  //   {
  //     imageUrl: "https://via.placeholder.com/300x400", // Replace with actual image URL
  //     title: "MAKEUP FOUNDATION COURSE WITH SELINA MANIR",
  //     instructor: "Selina Manir",
  //     location: "London",
  //     duration: 3,
  //     time: "10:00 to 16:30",
  //     description:
  //       "Specifically designed for those interested in learning the foundations of...",
  //     enrolled: 0,
  //     originalPrice: "995.00",
  //     discountedPrice: "1249.00",
  //     discount: true,
  //   },
  //   {
  //     imageUrl: "https://via.placeholder.com/300x400", // Replace with actual image URL
  //     title: "MAKEUP FOUNDATION COURSE WITH SELINA MANIR",
  //     instructor: "Selina Manir",
  //     location: "London",
  //     duration: 3,
  //     time: "10:00 to 16:30",
  //     description:
  //       "Specifically designed for those interested in learning the foundations of...",
  //     enrolled: 0,
  //     originalPrice: "995.00",
  //     discountedPrice: "1249.00",
  //     discount: true,
  //   },
  // ];

  const { data, isLoading, error } = useGetAllAcademiesQuery();

  const courses = data?.data;

  console.log(courses);

  return (
    <section className="py-10">
      <div className="container">
        <div>
          <h2>Our Courses</h2>
          <div className="mt-5">
            <div className="grid md:grid-cols-3 gap-4">
              {courses?.map((course, index) => (
                <AcademyCard key={index} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

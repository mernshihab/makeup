import { useEffect } from "react";
import AcademyCard from "../../components/AcademyCard/AcademyCard";
import { useGetAllAcademiesQuery } from "../../Redux/academy/academyApi";

export default function Academy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, isLoading, error } = useGetAllAcademiesQuery();

  const courses = data?.data;

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

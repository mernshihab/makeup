import { useGetAboutQuery } from "../../Redux/about/aboutApi";
import Spinner from "../../components/Spinner/Spinner";
import parcer from "html-react-parser";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Whychoose from "../../components/Whychoose/Whychoose";

// Utility function to format numbers
const formatNumber = (number) => {
  if (number >= 1000000) return `${(number / 1000000).toFixed(0)}M`;
  if (number >= 1000) return `${(number / 1000).toFixed(0)}K`;
  return number;
};

export default function AboutUs() {
  window.scroll(0, 0);
  const { data, isLoading } = useGetAboutQuery();
  const about = data?.data[0];
  const parcerDescription = about?.description && parcer(about?.description);

  // Intersection observer for counting animation
  const { ref, inView } = useInView({
    triggerOnce: true, // Run only once when scrolled into view
    threshold: 0.3, // Start counting when 30% of the element is visible
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="w-max border-b-2 border-primary">
              <h2 className="text-5xl font-bold">{about?.title}</h2>
            </div>
            <p className="text-neutral-content mt-2 text-lg">
              {about?.subTitle}
            </p>

            <div className="mt-4 text-neutral-content text-[15px]">
              <p>{parcerDescription}</p>
            </div>
            <div className="mt-10" ref={ref}>
              <div className="flex gap-6 md:gap-12 mt-8 justify-center">
                <div className="flex flex-col">
                  <div className="w-10 border-t-2 border-gray-400 mb-2"></div>
                  {inView && (
                    <h3 className="text-2xl md:text-4xl font-semibold">
                      <CountUp
                        start={0}
                        end={150000}
                        duration={2.5}
                        separator=","
                        formattingFn={formatNumber}
                      />
                      +
                    </h3>
                  )}
                  <p className="text-gray-500">Happy Customers</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 border-t-2 border-gray-400 mb-2"></div>
                  {inView && (
                    <h3 className="text-2xl md:text-4xl font-semibold">
                      <CountUp
                        start={0}
                        end={200}
                        duration={2.5}
                        separator=","
                        formattingFn={formatNumber}
                      />
                      +
                    </h3>
                  )}
                  <p className="text-gray-500">Expert Beauticians</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-10 border-t-2 border-gray-400 mb-2"></div>
                  {inView && (
                    <h3 className="text-2xl md:text-4xl font-semibold">
                      <CountUp
                        start={0}
                        end={35000}
                        duration={2.5}
                        separator=","
                        formattingFn={formatNumber}
                      />
                      +
                    </h3>
                  )}
                  <p className="text-gray-500">Community Members</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/aboutus/${
                about?.image
              }`}
              alt=""
              className="w-[90%] rounded max-h-[75vh] object-cover mx-auto"
            />
          </div>
        </div>
        <Whychoose/>
      </div>
    </section>
  );
}

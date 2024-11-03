import { useGetAboutQuery } from "../../Redux/about/aboutApi";
import Spinner from "../../components/Spinner/Spinner";
import parcer from "html-react-parser";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const gallery = [
    "/images/news/news1.jpg",
    "/images/news/news2.jpg",
    "/images/news/news3.jpg",
    "/images/news/news4.jpg",
    "/images/news/news5.jpg",
    "/images/news/news6.jpg",
    "/images/news/news7.jpg",
    "/images/news/news8.jpg",
    "/images/news/news9.jpg",
    "/images/news/news10.jpg",
    "/images/news/news11.jpg",
    "/images/news/news12.jpg",
    "/images/news/news13.jpg",
    "/images/news/news14.jpg",
    "/images/news/news15.jpg",
    "/images/news/news16.jpg",
  ];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="w-max border-b-2 border-primary">
              <h2 className="text-2xl md:text-5xl font-bold">{about?.title}</h2>
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
                        end={10000}
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
                        end={50}
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
        {/* <Whychoose/> */}

        <div className="mt-8">
          <h2>Monir Hossain's Activities</h2>
          <div className="mt-5">
            <PhotoProvider>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 3, 750: 3, 900: 3 }}
              >
                <Masonry gutter="7px">
                  {gallery?.map((gallery, i) => (
                    <PhotoView
                      key={i}
                      // src={`${import.meta.env.VITE_BACKEND_URL}/gallery/${
                      //   gallery?.image
                      // }`}
                      src={gallery}
                    >
                      <img
                        // src={`${import.meta.env.VITE_BACKEND_URL}/gallery/${
                        //   gallery?.image
                        // }`}
                        src={gallery}
                        alt=""
                        className="block"
                      />
                    </PhotoView>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </PhotoProvider>
          </div>
        </div>
      </div>
    </section>
  );
}

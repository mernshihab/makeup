import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../../Redux/category/categoryApi";
import { Link, useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Redux/product/productApi";
import ProductCards from "../../components/Skeleton/ProductCards/ProductCards";
import AllProductCard from "../../components/ProductCard/AllProductCard";
import Pagination from "../../components/Pagination/Pagination";

export default function Services() {
  const [activeButton, setActiveButton] = useState("");

  const { data: servicesData } = useGetCategoriesQuery();
  const services = servicesData?.data;

  //   ==============================

  const params = useParams();
  let category = params?.slug ? params?.slug : "";

  useEffect(() => {
    window.scroll(0, 0);
    if (category === "") {
      setActiveButton("All");
    } else {
      setActiveButton(category);
    }
  }, [category]);

  const query = {};
  const [currentPage, setCurrentPage] = useState(1);
  query["page"] = currentPage;
  query["limit"] = 8;
  query["category"] = category;
  const { data, isLoading, isError, error, isFetching } =
    useGetAllProductsQuery({
      ...query,
    });

  let content = null;

  console.log("isLoading", Boolean(isLoading));
  console.log("isFetching", Boolean(isFetching));

  if (!isLoading && isError) {
    content = <p>{error.error}</p>;
  }



  content = data?.data?.map((product) => (
    <AllProductCard key={product._id} products={product} />
  ));

  return (
    <section>
      <div className="container">
        <div className="mt-8">
          <p className="font-normal text-sm text-neutral-content">
            HOME / <span className="text-black/70 font-semibold">SERVICES</span>
          </p>
          <h2 className="mt-7">Our Services</h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-3 md:mt-6">
            <Link
              to={`/services/all`}
              onClick={() => setActiveButton("All")}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                activeButton === "All"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-gray-300`}
            >
              All
            </Link>
            {services?.map((service) => (
              <Link
                to={`/services/${service?.slug}`}
                key={service?._id}
                onClick={() => setActiveButton(service?.name)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                  activeButton === service?.name
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-gray-300`}
              >
                {service?.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="py-10 min-h-[70vh]">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {isLoading || isFetching ? <ProductCards /> : content}
          </div>

          <Pagination
            pages={data?.meta?.pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}

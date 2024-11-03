import { useGetAllProductsQuery } from "../../../Redux/product/productApi";
import AllProductCard from "../../../components/ProductCard/AllProductCard";
import ProductCards from "../../../components/Skeleton/ProductCards/ProductCards";

export default function RelatedProducts({ category }) {
  const query = {};
  query["page"] = 1;
  query["limit"] = 5;
  query["category"] = category?.slug;
  const { data, isLoading, isError, error } = useGetAllProductsQuery({
    ...query,
  });

  let content = null;
  if (isLoading) {
    content = <ProductCards />;
  }
  if (!isLoading && isError) {
    content = <p>{error.error}</p>;
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((product) => (
      <AllProductCard key={product?._id} products={product} />
    ));
  }

  return (
    <section className="mt-6">
      <div className="bg-base-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between sm:items-center border-b pb-2 border-primary">
          <h1 className="md:text-xl font-medium md:font-semibold text-neutral">
            You may also like
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-3">
          {content}
        </div>
      </div>
    </section>
  );
}

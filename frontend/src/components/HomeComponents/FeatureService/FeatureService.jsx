import { useGetFeaturedProductsQuery } from "../../../Redux/product/productApi";
import ProductCard from "../../ProductCard/ProductCard";

export default function FeatureService() {

  // const query = {};
  // const [currentPage, setCurrentPage] = useState(1);
  // const limit = 10;

  // query["page"] = currentPage;
  // query["limit"] = limit;

  let query = {
    limit: 5,
  };

  const { data } =
    useGetFeaturedProductsQuery(query);

  const products = data?.data;

  return (
    <section className="mt-5">
      <div className="container">
        <h2>
          Feature Service
        </h2>
        <div>
          <ProductCard products={products} />
        </div>
      </div>
    </section>
  );
}

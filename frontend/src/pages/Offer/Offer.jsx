import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../Redux/product/productApi";
import Contact from "../../components/HomeComponents/Contact/Contact";

export default function Offer() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  const products = data?.data;

  console.log(products);

  return (
    <section>
      <div className="mb-8">
        <img
          src="/images/offer/offer_banner.jpg"
          className="max-h-[50vh] w-full object-cover"
          alt="Banner"
        />
      </div>
      <div className="container">
        <div className="mb-8">
          <h2>Grab your offer</h2>
          <div>
            <ProductCard products={products} />
          </div>
        </div>
      </div>
      <div className="container flex gap-4">
        <div>
          <img
            src="/images/offer/offer_banner2.png"
            className="max-h-[35vh] w-full rounded"
            alt="Banner"
          />
        </div>
        <div>
          <img
            src="/images/offer/offer_banner2.png"
            className="max-h-[35vh] w-full rounded"
            alt="Banner"
          />
        </div>
      </div>
      <div className="container">
        <Contact />
      </div>
    </section>
  );
}

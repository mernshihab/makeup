import { useState } from "react";
import { useGetAllProductsQuery } from "../../../Redux/product/productApi";
import ProductCard from "../../ProductCard/ProductCard";

export default function FeatureService() {
  const sampleProducts = [
    {
      slug: "manicure-pedicure",
      image: "/images/product1.jpg",
      title: "Manicure and Pedicure",
      description: "Spa Manicure and Pedicure With Pack",
      duration: "90min",
      sellingPrice: 675,
      originalPrice: 750,
      discount: 13,
    },
    {
      slug: "facial-treatment",
      image: "/images/product1.jpg",
      title: "Facial Treatment",
      description: "Relaxing Facial Treatment with Organic Products",
      duration: "60min",
      sellingPrice: 1200,
      originalPrice: 1500,
      discount: 20,
    },
    {
      slug: "hair-spa",
      image: "/images/product1.jpg",
      title: "Hair Spa",
      description: "Complete Hair Spa for Silky Smooth Hair",
      duration: "45min",
      sellingPrice: 850,
      originalPrice: 1000,
      discount: 15,
    },
    {
      slug: "body-massage",
      image: "/images/product1.jpg",
      title: "Body Massage",
      description: "Full Body Massage with Essential Oils",
      duration: "90min",
      sellingPrice: 1800,
      originalPrice: 2000,
      discount: 10,
    },
  ];

  // const query = {};
  // const [currentPage, setCurrentPage] = useState(1);
  // const limit = 10;

  // query["page"] = currentPage;
  // query["limit"] = limit;

  const { data, isLoading, isError, error } = useGetAllProductsQuery();


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

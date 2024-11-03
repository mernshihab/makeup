import { useEffect } from "react";
import Contact from "../../components/HomeComponents/Contact/Contact";
import CampaignBanner from "../../components/Campaign/CampaignBanner/CampaignBanner";
import TopCampaignBanner from "../../components/Campaign/TopCampaignBanner/TopCampaignBanner";
import { useGetActiveFlashDealQuery } from "../../Redux/flashDeal/flashDeal";
import AllProductCard from "../../components/ProductCard/AllProductCard";
import Spinner from "../../components/Spinner/Spinner";

export default function Offer() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data: offer, isLoading } = useGetActiveFlashDealQuery();

  const offerProducts = offer?.data;

  return (
    <section>
      <div className="mb-8">
        <TopCampaignBanner />
      </div>
      <div className="container">
        {isLoading ? (
          <Spinner />
        ) : (
          offerProducts?.length > 0 &&
          offerProducts.map((offers) => (
            <div key={offers?._id} className="mb-8">
              <h2>{offers?.title}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {offers?.flashProducts?.map((product, i) => (
                  <AllProductCard
                    key={product?.product?._id || i}
                    offerDiscount={product?.discount}
                    products={product?.product}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
      <CampaignBanner />
      <div className="container">
        <Contact />
      </div>
    </section>
  );
}

import { useEffect } from "react";
import AdsBanner from "../../components/HomeComponents/AdsBanner/AdsBanner";
import Contact from "../../components/HomeComponents/Contact/Contact";
import CustomerReviews from "../../components/HomeComponents/CustomerReviews/CustomerReviews";
import Feature from "../../components/HomeComponents/Feature/Feature";
import FeatureService from "../../components/HomeComponents/FeatureService/FeatureService";
// import Gallery from "../../components/HomeComponents/Gallery/Gallery";
import Hero from "../../components/HomeComponents/Hero/Hero";
import Services from "../../components/HomeComponents/Services/Services";
import ScrollingGallery from "../../components/HomeComponents/ScrollingGallery/ScrollingGallery";

export default function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Feature />
      <Services />
      <ScrollingGallery/>
      <FeatureService />
      <AdsBanner />
      <CustomerReviews />
      {/* <Gallery /> */}
      <Contact />
    </>
  );
}

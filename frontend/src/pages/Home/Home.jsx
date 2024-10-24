import Feature from "../../components/HomeComponents/Feature/Feature";
import FeatureService from "../../components/HomeComponents/FeatureService/FeatureService";
import Hero from "../../components/HomeComponents/Hero/Hero";
import Services from "../../components/HomeComponents/Services/Services";

export default function Home() {
  window.scroll(0, 0);
  return (
    <>
      <Hero />
      <Feature />
      <Services />
      <FeatureService />
    </>
  );
}

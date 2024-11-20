import BrandFeatures from "@/components/home/BrandFeatures";
import CuratedPicks from "@/components/home/CuratedPicks";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import Highlight from "@/components/home/Highlight";
import ImageCarousel from "@/components/home/ImageCarousel";

const Home = () => {
  return (
    <div>
      <div className="">
        <ImageCarousel />
        <Highlight />
        <BrandFeatures />
        <CuratedPicks />
        <FeaturedProducts />
        <Features />
      </div>
    </div>
  );
};

export default Home;

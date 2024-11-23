import BannerCarousel from "@/components/home/BannerCarousel";
import BrandFeatures from "@/components/home/BrandFeatures";
import FeaturedProducts from "@/components/home/FeaturedProducts";
// import Features from "@/components/home/Features";
import Highlight from "@/components/home/Highlight";
import ShopByCategory from "@/components/home/ShopByCategory";

import { getBanners, getFeaturedProducts } from "@/lib/dataFetchers";

const Home = async () => {
  const banners = await getBanners();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      <BannerCarousel banners={banners} />
      <Highlight />
      <ShopByCategory />
      <BrandFeatures />
      <FeaturedProducts products={featuredProducts} />
      {/* <Features /> */}
    </div>
  );
};

export default Home;

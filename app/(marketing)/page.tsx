import BannerCarousel from "@/components/home/BannerCarousel";
// import BrandFeatures from "@/components/home/BrandFeatures";
// import CuratedPicks from "@/components/home/CuratedPicks";
import FeaturedProducts from "@/components/home/FeaturedProducts";
// import Features from "@/components/home/Features";
import Highlight from "@/components/home/Highlight";
import ShopByCategory from "@/components/home/ShopByCategory";

import prisma from "@/lib/db";

async function getBanners() {
  const banners = await prisma.banner.findMany();
  return banners;
}

const Home = async () => {
  const banners = await getBanners();

  return (
    <div>
      <BannerCarousel banners={banners} />

      {/* <ImageCarousel /> */}
      <Highlight />

      <ShopByCategory />

      {/* <BrandFeatures /> */}

      <div className=""></div>

      {/* <CuratedPicks /> */}
      <FeaturedProducts />
      {/* <Features /> */}
    </div>
  );
};

export default Home;

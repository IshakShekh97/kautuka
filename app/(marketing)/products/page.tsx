import GoBackBtn from "@/components/resuables/GoBackBtn";
import ProductCard from "@/components/resuables/ProductCard";
import { staticImages } from "@/constants";
import Link from "next/link";

const AllProductsPage = () => {
  return (
    <div className="h-full w-full max-md:px-1 flex flex-col mb-10">
      <GoBackBtn herf="/" btnText="Go Back To HomePage" className="pl-10" />

      <div className="flex max-xl:items-center max-xl:justify-center flex-wrap gap-x-1 gap-y-2 sm:gap-5 md:pl-10 ">
        {staticImages.map((image) => (
          <Link key={image.idx} href={`/products/${image.idx + 1}`}>
            <ProductCard imageAlt={image.alt} imageUrl={image.imageUrl} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;

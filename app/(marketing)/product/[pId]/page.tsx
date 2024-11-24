import GoBackBtn from "@/components/resuables/GoBackBtn";
import ProductContent from "../_components/productContent";
import { GetProductById } from "@/actions/product.action";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { getFeaturedProducts } from "@/lib/dataFetchers";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ pId: string }>;
}) => {
  const id = (await params).pId;
  const product = await GetProductById(id);
  const featuredProducts = await getFeaturedProducts();

  if (!product) {
    return (
      <p className="text-center text-3xl font-black capitalize h-[80vh] flex flex-col items-center justify-center gap-y-5">
        Product not found !!
        <Link href="/products/all">
          <Button>Go Back To All Products</Button>
        </Link>
      </p>
    );
  }

  return (
    <>
      <div className="min-h-screen flex flex-col mt-5">
        <GoBackBtn
          herf="/products/all"
          btnText="Go Back To All Products"
          className="md:!text-3xl"
        />

        <Suspense fallback={<Skeleton className="h-[80vh] w-full" />}>
          <ProductContent id={id} product={product} />
        </Suspense>

        <div className="mt-12">
          <FeaturedProducts products={featuredProducts} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;

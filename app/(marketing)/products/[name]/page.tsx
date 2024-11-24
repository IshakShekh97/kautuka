import GoBackBtn from "@/components/resuables/GoBackBtn";
import ProductCard from "@/components/resuables/ProductCard";
import { getProductsByCategory } from "@/lib/dataFetchers";
import React from "react";
const AllProductsPage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const name = (await params).name;
  const productsData = await getProductsByCategory(name);

  if (productsData.data.length === 0) {
    return (
      <>
        <GoBackBtn herf="/" btnText="Go Back To Home" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-black capitalize underline underline-offset-4">
            {productsData.title}
          </h1>
          <p className="text-2xl sm:text-4xl h-[70vh] flex items-center justify-center font-black capitalize">
            No Products Found !!
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <GoBackBtn herf="/" btnText="Go Back To Home" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {productsData.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;

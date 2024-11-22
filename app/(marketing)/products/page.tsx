import { GetAllProducts } from "@/actions/product.action";
import GoBackBtn from "@/components/resuables/GoBackBtn";
import ProductCard from "@/components/resuables/ProductCard";
import Link from "next/link";

const AllProductsPage = async () => {
  const products = await GetAllProducts();

  return (
    <div className="h-full w-full flex flex-col min-h-screen">
      <GoBackBtn herf="/" btnText="Go Back To HomePage" className="" />
      <div className="flex w-full h-full flex-wrap gap-x-1 gap-y-2 sm:gap-5 items-center mb-5">
        {products.length === 0 && (
          <p className="text-center text-3xl font-black capitalize">
            No products found !!
          </p>
        )}

        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard
              title={product.name}
              description={product.description}
              imageAlt={product.name}
              imageUrl={product.images[0]}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;

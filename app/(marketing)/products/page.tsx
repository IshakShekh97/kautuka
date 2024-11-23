import GoBackBtn from "@/components/resuables/GoBackBtn";
import ProductCard from "@/components/resuables/ProductCard";
import { getAllProducts } from "@/lib/dataFetchers";

const AllProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="h-full w-full flex flex-col min-h-screen">
      <GoBackBtn herf="/" btnText="Go Back To HomePage" className="" />
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default AllProductsPage;

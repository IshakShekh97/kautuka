import GoBackBtn from "@/components/resuables/GoBackBtn";
import ProductContent from "../_components/productContent";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ pId: string }>;
}) => {
  const id = (await params).pId;

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <GoBackBtn
          herf="/products/"
          btnText="Go Back To All Products"
          className="md:!text-3xl  px-10"
        />

        <ProductContent id={id} />
      </div>
    </>
  );
};

export default ProductPage;

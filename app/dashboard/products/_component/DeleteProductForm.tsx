"use client";

import { DeleteProduct } from "@/actions/product.action";
import SubmitBtn from "@/components/resuables/SubmitBtn";

const DeleteProductForm = ({ id }: { id: string }) => {
  return (
    <>
      <form action={DeleteProduct}>
        <input type="hidden" name="id" value={id} />
        <SubmitBtn
          variant={"destructive"}
          text="Delete"
          loadingText="deleting"
        />
      </form>
    </>
  );
};

export default DeleteProductForm;

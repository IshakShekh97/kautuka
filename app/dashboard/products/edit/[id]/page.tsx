import React from "react";
import EditProductForm from "../../_component/EditProductForm";
import GoBackBtn from "@/components/resuables/GoBackBtn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetProductById } from "@/actions/product.action";
import { Skeleton } from "@/components/ui/skeleton";

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const productData = await GetProductById(id);

  return (
    <div>
      <GoBackBtn btnText="All Products" herf="/dashboard/products" />
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Edit Product</CardTitle>
          <CardDescription>Edit the product details here.</CardDescription>
        </CardHeader>

        <CardContent>
          {productData ? (
            <EditProductForm productData={productData} />
          ) : (
            <div>
              <Skeleton className="w-full h-[500px] flex items-center justify-center">
                Make sure to Edit the product Details ...
              </Skeleton>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EditPage;

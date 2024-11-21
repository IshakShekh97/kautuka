import GoBackBtn from "@/components/resuables/GoBackBtn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import NewProductForm from "../_component/NewProductForm";

const CreateNewProductPage = () => {
  return (
    <>
      <GoBackBtn btnText="All Products" herf="/dashboard/products" />

      <Card className="bg-gray-100 dark:bg-gray-900">
        <CardHeader>
          <CardTitle>Add Product Details</CardTitle>
          <CardDescription>
            Fill in the details to create a new product, including title,
            description, and price.
          </CardDescription>
        </CardHeader>

        <CardContent className="">
          <NewProductForm />
        </CardContent>
      </Card>
    </>
  );
};

export default CreateNewProductPage;

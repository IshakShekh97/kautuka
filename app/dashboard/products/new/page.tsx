import GoBackBtn from "@/components/resuables/GoBackBtn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const CreateNewProductPage = () => {
  return (
    <>
      <GoBackBtn btnText="All Products" herf="/dashboard/products" />

      <form>
        <Card className="">
          <CardHeader>
            <CardTitle>Add Product Details</CardTitle>
            <CardDescription>
              Fill in the details to create a new product, including title,
              description, and price.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" type="text" />
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  );
};

export default CreateNewProductPage;

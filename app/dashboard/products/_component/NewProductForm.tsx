"use client";

import { CreateNewProduct } from "@/actions/product.action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { UploadDropzone } from "@/lib/uploadthing";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import React, { useActionState, useState } from "react";
import { productSchema } from "@/lib/zodSchemas";
import Image from "next/image";
import { X } from "lucide-react";
import SubmitBtn from "@/components/resuables/SubmitBtn";

const NewProductForm = () => {
  const [imageUrl, setimageUrl] = useState<string[] | undefined>(undefined);

  const [lastResult, action] = useActionState(CreateNewProduct, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleRemoveImage = (idx: number) => {
    setimageUrl(imageUrl?.filter((_, i) => i !== idx));
  };

  return (
    <>
      <form
        id={form.id}
        onSubmit={form.onSubmit}
        action={action}
        className="md:bg-card md:p-10 rounded-lg"
      >
        <div className="flex flex-col gap-6">
          <div className="flex max-sm:flex-col flex-row w-full gap-5">
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="name">Name</Label>
              <Input
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={fields.name.initialValue}
                type="text"
                id="name"
                placeholder="Enter the Name of the product"
              />
              <p className="text-rose-500">{fields.name.errors}</p>
            </div>

            <div className="flex relative flex-col gap-2 w-full">
              <Label htmlFor="price">Price</Label>
              <Input
                key={fields.price.key}
                defaultValue={fields.price.initialValue}
                name={fields.price.name}
                className="pl-8 relative"
                type="number"
                id="price"
                placeholder="Enter the price of the product"
              />
              <p className="top-[1.80rem] left-3.5 absolute">₹</p>
              <p className="text-rose-500">{fields.price.errors}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              key={fields.description.key}
              name={fields.description.name}
              defaultValue={fields.description.initialValue}
              id="description"
              placeholder="Enter the description of the product"
              className="min-h-32"
            />
            <p className="text-rose-500">{fields.description.errors}</p>
          </div>

          <div className="lg:grid lg:grid-cols-2 gap-10 place-items-center w-full">
            <div className="flex flex-col max-lg:items-center max-lg:justify-center gap-3 w-full">
              <Label>Images</Label>

              <input
                type="hidden"
                value={imageUrl}
                key={fields.images.key}
                name={fields.images.name}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                defaultValue={fields.images.initialValue as any}
              />

              {imageUrl && imageUrl.length > 0 ? (
                <div className="flex flex-row flex-wrap gap-3">
                  {imageUrl.map((img, idx) => (
                    <div className="relative w-[100px] h-[100px]" key={idx}>
                      <Image
                        src={img}
                        alt={`product image ${idx + 1}`}
                        width={100}
                        height={100}
                        className="w-full h-full rounded-lg object-cover border"
                      />
                      <button
                        onClick={() => handleRemoveImage(idx)}
                        type="button"
                        className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-lg text-white"
                      >
                        <X className="size-3" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <UploadDropzone
                  endpoint={"imageUploader"}
                  className="w-full !border-foreground/30 "
                  onClientUploadComplete={(res) => {
                    setimageUrl(res.map((img) => img.url));
                    toast.success(res.length + " images uploaded seccesfully");
                  }}
                  onUploadError={(error) => {
                    toast.error(error.message);
                  }}
                  onUploadAborted={() => {
                    toast.warning("Upload aborted");
                  }}
                />
              )}
              <p className="text-rose-500">{fields.images.errors}</p>
            </div>
            <div className="flex flex-col gap-5 max-lg:mt-8 w-full">
              <div className="flex max-sm:flex-col flex-row sm:items-center gap-2 w-full">
                <div className="flex flex-col gap-5 w-full">
                  <Label>Stutus</Label>
                  <Select
                    key={fields.status.key}
                    name={fields.status.name}
                    defaultValue={fields.status.initialValue}
                  >
                    <SelectTrigger className="max-w-[30rem] w-full">
                      <SelectValue placeholder="Select the status of the product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                    <p className="text-rose-500">{fields.status.errors}</p>
                  </Select>
                  <Label>Categories</Label>
                  <Select
                    key={fields.categories.key}
                    name={fields.categories.name}
                    defaultValue={fields.categories.initialValue}
                  >
                    <SelectTrigger className="max-w-[30rem] w-full">
                      <SelectValue placeholder="Select the Category of the product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oversize">Oversize</SelectItem>
                      <SelectItem value="regularFit">Regular Fit </SelectItem>
                      <SelectItem value="polo">Polo</SelectItem>
                    </SelectContent>
                    <p className="text-rose-500">{fields.categories.errors}</p>
                  </Select>
                </div>
              </div>
              <div className="flex flex-row items-center sm:pt-5 gap-3  w-full">
                <Switch
                  id="featured"
                  key={fields.isFeatured.key}
                  name={fields.isFeatured.name}
                  defaultValue={fields.isFeatured.initialValue}
                />
                <Label htmlFor="featured" className="text-pretty">
                  Flag This Product as Featured Product
                </Label>
                <p className="text-rose-500">{fields.isFeatured.errors}</p>
              </div>
            </div>

            <div className="flex flex-col space-y-5 mt-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="stock">Stock</Label>
                <Select
                  key={fields.stock.key}
                  name={fields.stock.name}
                  defaultValue={fields.stock.initialValue}
                >
                  <SelectTrigger className="max-w-[30rem] w-full">
                    <SelectValue placeholder="Select the Stock of the product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inStock">In Stock</SelectItem>
                    <SelectItem value="outOfStock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-rose-500">{fields.stock.errors}</p>
              </div>
              <div className="flex flex-col  gap-2">
                <Label htmlFor="size">Size</Label>
                <Select
                  key={fields.size.key}
                  name={fields.size.name}
                  defaultValue={fields.size.initialValue}
                >
                  <SelectTrigger className="max-w-[30rem] w-full">
                    <SelectValue placeholder="Select the Stock of the product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="S">S</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                    <SelectItem value="XL">XL</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-rose-500">{fields.size.errors}</p>
              </div>
            </div>
          </div>
          <SubmitBtn
            text="Add Product"
            loadingText="Adding Product..."
            variant="default"
            className="w-[80%] mx-auto "
          />
        </div>
      </form>
    </>
  );
};

export default NewProductForm;

"use client";

import { Button } from "@/components/ui/button";
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
import { UploadDropzone } from "@/lib/uploadthing";
import React from "react";
import { toast } from "sonner";

const NewProductForm = () => {
  return (
    <>
      <form action="">
        <div className="flex flex-col gap-6">
          <div className="flex max-sm:flex-col flex-row w-full gap-5">
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter the Name of the product"
                required
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="Enter the price of the product"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              placeholder="Enter the description of the product"
              required
              className="min-h-32"
            />
          </div>

          <div className="flex max-sm:flex-col flex-row w-full gap-5  justify-center">
            <div className="flex flex-row items-center sm:pt-5 gap-3  w-full">
              <Switch name="featured" id="featured" />
              <Label htmlFor="featured" className="text-pretty">
                Flag This Product as Featured Product
              </Label>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <Label>Stutus</Label>
              <Select name="status">
                <SelectTrigger>
                  <SelectValue placeholder="Select the status of the product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Label>Upload Images</Label>
            <UploadDropzone
              endpoint={"imageUploader"}
              className="w-full max-w-[50rem]  !border-foreground/30 !border-b-8 !border-solid !border-r-8  "
              onClientUploadComplete={(res) => {
                toast.success(res.length + " images uploaded seccesfully");
              }}
              onUploadError={(error) => {
                toast.error(error.message);
              }}
              onUploadAborted={() => {
                toast.warning("Upload aborted");
              }}
            />
          </div>

          <Button className="btn">Add Product</Button>
        </div>
      </form>
    </>
  );
};

export default NewProductForm;

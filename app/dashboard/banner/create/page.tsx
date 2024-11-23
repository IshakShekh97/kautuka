"use client";

import { createBanner } from "@/actions/banner.action";
import GoBackBtn from "@/components/resuables/GoBackBtn";
import SubmitBtn from "@/components/resuables/SubmitBtn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadDropzone } from "@/lib/uploadthing";
import { bannerSchema } from "@/lib/zodSchemas";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import Image from "next/image";
import { useActionState, useState } from "react";
import { toast } from "sonner";

export default function BannerRoute() {
  const [image, setImages] = useState<string | undefined>(undefined);
  const [lastResult, action] = useActionState(createBanner, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <GoBackBtn btnText="New Banner" herf="/dashboard/banner" />

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Banner Details</CardTitle>
          <CardDescription>Create your banner right here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                name={fields.title.name}
                key={fields.title.key}
                defaultValue={fields.title.initialValue}
                type="text"
                placeholder="Create title for Banner"
              />
              <p className="text-red-500">{fields.title.errors}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Image</Label>
              <input
                type="hidden"
                value={image}
                key={fields.imageString.key}
                name={fields.imageString.name}
                defaultValue={fields.imageString.initialValue}
              />
              {image !== undefined ? (
                <div className="flex items-center justify-center relative w-full h-[400px]">
                  <Image
                    src={image}
                    alt="Product Image"
                    fill
                    className="w-[200px] h-[200px] object-cover border rounded-lg"
                  />
                </div>
              ) : (
                <UploadDropzone
                  className="!border-foreground"
                  onClientUploadComplete={(res) => {
                    setImages(res[0].url);
                    toast.success("Image uploaded successfully");
                  }}
                  onUploadError={() => {
                    toast.error("Something went wrong");
                  }}
                  onUploadAborted={() => {
                    toast.warning("Upload aborted");
                  }}
                  endpoint="bannerImageRoute"
                />
              )}

              <p className="text-red-500">{fields.imageString.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitBtn
            text="Create Banner"
            loadingText="Creating Banner"
            variant={"default"}
          />
        </CardFooter>
      </Card>
    </form>
  );
}

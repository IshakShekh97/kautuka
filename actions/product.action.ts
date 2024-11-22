"use server";

import prisma from "@/lib/db";
import { validateAdmin } from "@/lib/validateAdmin";
import { productSchema } from "@/lib/zodSchemas";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export const CreateNewProduct = async (
  prevState: unknown,
  formData: FormData
) => {
  // const user = await validateAdmin();
  await validateAdmin();

  const submission = parseWithZod(formData, { schema: productSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const flattenUrls = submission.value.images.flatMap((urlStr) =>
    urlStr.split(",").map((url) => url.trim())
  );

  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status,
      price: submission.value.price,
      images: flattenUrls,
      category: submission.value.categories,
    },
  });

  redirect("/dashboard/products");
};

export const GetAllProducts = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};

export const GetProductById = async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
};

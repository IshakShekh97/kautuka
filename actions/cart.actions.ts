"use server";

import { GetProductById } from "./product.action";

export const addToCart = async (formData: FormData) => {
  const productId = formData.get("productId");
  const userId = formData.get("userId");
  const quantity = formData.get("quantity");

  if (!productId || !userId || !quantity) {
    return { error: "Invalid form data" };
  }

  const product = await GetProductById(productId as string);

  if (!product) {
    return { error: "Product not found" };
  }

  //   const cart = await prisma.cart.create({
  //     data: {
  //       productId: productId as string,
  //       userId: userId as string,
  //       quantity: quantity as number,
  //     },
  //   });
};

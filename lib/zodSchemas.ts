import { z } from "zod";

export const cartSchema = z.object({
  productId: z.string({
    message: "Product ID must be a string",
    required_error: "Product ID is required",
    invalid_type_error: "Product ID must be a string",
  }),
  userId: z.string({
    message: "You must provide be Logged in to add to cart",
    required_error: "You must provide be Logged in to add to cart",
    invalid_type_error: "You must provide be Logged in to add to cart",
  }),
});

export const productSchema = z.object({
  name: z
    .string({
      message: "Name must be a string",
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, {
      message: "Name must be at least 3 characters",
    })
    .max(255, {
      message: "Name must be at most 255 characters",
    }),
  description: z
    .string({
      message: "Description must be a string",
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(3, {
      message: "Description must be at least 3 characters",
    })
    .max(700, {
      message: "Description must be at most 255 characters",
    }),
  price: z.number({
    message: "Price must be a Number",
    required_error: "Price is required",
    invalid_type_error: "Price must be a string",
  }),
  stock: z.boolean({
    message: "Stock must be a boolean",
    required_error: "Stock is required",
    invalid_type_error: "Stock must be a boolean",
  }),
  tags: z.array(
    z.string({
      message: "Tags must be a string",
      required_error: "Tags is required",
      invalid_type_error: "Tags must be a string",
    })
  ),
  categories: z.array(
    z.string({
      message: "Categories must be a string",
      required_error: "Categories is required",
      invalid_type_error: "Categories must be a string",
    })
  ),
  images: z.array(
    z.string({
      message: "Images must be a string",
      required_error: "Images is required",
      invalid_type_error: "Images must be a string",
    })
  ),
});

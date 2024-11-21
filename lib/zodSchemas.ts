import { z } from "zod";

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
      message: "Description must be at most 700 characters",
    }),

  status: z.enum(["draft", "published", "archived", "inStock", "outOfStock"]),
  price: z
    .number({
      message: "Price must be a Number",
      required_error: "Price is required",
      invalid_type_error: "Price must be a string",
    })
    .min(1),
  images: z
    .array(
      z.string({
        message: "Images must be a string",
        required_error: "Images is required",
        invalid_type_error: "Images must be a string",
      })
    )
    .min(1, {
      message: "At least one image is required",
    })
    .max(5, {
      message: "At most 5 images are allowed",
    }),
  categories: z.enum(["oversize", "regularFit", "polo"]),
  isFeatured: z
    .boolean({
      message: "Is Featured must be True or False",
      required_error: "Is Featured is required",
      invalid_type_error: "Is Featured must be True or False",
    })
    .optional(),
});

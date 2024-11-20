import { cartSchema } from "@/lib/zodSchemas";
import { parseWithZod } from "@conform-to/zod";

export async function AddToCart(formData: FormData) {
  // const user = await currentUser();

  const subbmission = parseWithZod(formData, {
    schema: cartSchema,
  });

  console.log(subbmission.status);
}

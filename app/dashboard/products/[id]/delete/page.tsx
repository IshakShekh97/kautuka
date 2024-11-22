import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DeleteProductForm from "../../_component/DeleteProductForm";
import { GetProductById } from "@/actions/product.action";

const Deletepage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const product = await GetProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Delete Product</CardTitle>
          <CardDescription className="font-bold">
            Name:
            <span className="font-thin max-w-2 text-wrap">{product?.name}</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="flex max-sm:flex-col flex-row justify-between   gap-2">
          <div className="flex flex-col gap-2">
            <p>
              Price: <span className="font-thin">{product?.price}</span>
            </p>
            <p>
              Status: <span className="font-thin">{product?.status}</span>
            </p>
            <p>
              Category: <span className="font-thin">{product?.category}</span>
            </p>
          </div>
          <div className="max-sm:w-full max-sm:flex items-center justify-center">
            <Image
              className="size-32 rounded-xl"
              src={product?.images[0] || ""}
              alt=""
              width={100}
              height={100}
            />
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex justify-between w-full">
            <Button variant={"outline"}>
              <Link href={"/dashboard/products"}>Cancel</Link>
            </Button>
            <DeleteProductForm id={id} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Deletepage;

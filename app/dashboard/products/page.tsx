import { GetAllProducts } from "@/actions/product.action";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsPage = async () => {
  const products = await GetAllProducts();

  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild>
          <Link href="/dashboard/products/new">
            <Plus /> Add New Product
          </Link>
        </Button>
      </div>
      <Card className="mt-5">
        <CardHeader className="px-7">
          <CardTitle className="sm:text-4xl text-2xl font-extrabold">
            Products
          </CardTitle>
          <CardDescription>
            Manage your products here. Add, edit or delete products
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="w-[120px]">Price</TableHead>
                <TableHead className="w-[120px]">Date Created</TableHead>
                <TableHead className="w-[120px]">Status</TableHead>
                <TableHead className="text-end w-[100px] ">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {products.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-xl py-10">
                    No products found , Create one Too see it here
                  </TableCell>
                </TableRow>
              )}

              {products
                .slice()
                .reverse()
                .map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="relative w-[90px] h-[90px] aspect-square">
                        <Image
                          src={product.images[0]}
                          alt={`product image ${product.name}`}
                          width={100}
                          height={100}
                          className="w-full h-full rounded-lg object-cover border"
                        />
                      </div>
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>₹ {product.price}</TableCell>
                    <TableCell>
                      {new Date(product.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant={"positive"}>{product.status}</Badge>
                    </TableCell>
                    <TableCell className="text-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size={"icon"} variant={"outline"}>
                            <MoreHorizontal />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Link
                              href={`/dashboard/products/${product.id}/edit`}
                            >
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductsPage;

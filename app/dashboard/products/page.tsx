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

const ProductsPage = () => {
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
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="w-[120px]">Price</TableHead>
                <TableHead className="w-[120px]">Date Created</TableHead>
                <TableHead className="w-[120px]">Stock</TableHead>
                <TableHead className="text-end w-[100px] ">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>
                  <Image
                    src="/images/shirt-1.webp"
                    alt="product"
                    width={100}
                    height={100}
                    className="size-16 aspect-square object-cover"
                  />
                </TableCell>
                <TableCell>Oversized T-Shirt - Black</TableCell>
                <TableCell>₹ 499</TableCell>
                <TableCell>{new Date().toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant={"positive"}>in Stock</Badge>
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
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductsPage;

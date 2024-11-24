import { Category } from "@prisma/client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CategorySelector = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"}>
            Categories <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="/products/all" className="uppercase">
              All Products
            </Link>
          </DropdownMenuItem>
          {Object.values(Category).map((category, idx) => (
            <DropdownMenuItem key={idx} asChild>
              <Link href={`/products/${category}`} className="uppercase">
                {category}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CategorySelector;

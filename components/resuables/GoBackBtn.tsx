import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "@/lib/utils";

interface GoBackBtnProps {
  btnText?: string;
  herf?: string;
  className?: string;
}

const GoBackBtn = ({ herf, btnText, className }: GoBackBtnProps) => {
  return (
    <div
      className={cn(
        "flex items-center pb-5 gap-5 max-md:px-5 xl:text-xl font-bold text-lg",
        className
      )}
    >
      <Link href={herf as Url}>
        <Button variant={"secondary"} size={"icon"}>
          <ChevronLeft className="size-5" />
        </Button>
      </Link>
      {btnText}
    </div>
  );
};

export default GoBackBtn;

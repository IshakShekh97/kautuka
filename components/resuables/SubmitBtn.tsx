"use client";

import { Button, ButtonProps } from "../ui/button";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SubmitBtnProps {
  text: string;
  loadingText: string;
  variant: ButtonProps["variant"];
  className?: string;
}

const SubmitBtn = ({
  text,
  loadingText,
  variant,
  className,
}: SubmitBtnProps) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant={variant} disabled className={cn(className, "flex")}>
          <Loader2 className="animate-spin" />
          {loadingText}
        </Button>
      ) : (
        <Button
          variant={variant}
          type="submit"
          className={cn(className, "flex")}
        >
          {text}
        </Button>
      )}
    </>
  );
};

export default SubmitBtn;

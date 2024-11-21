import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SubmitBtnProps {
  text: string;
  loadingText: string;
  variant: ButtonProps["variant"];
  className: string;
}

const SubmitBtn = ({
  text,
  loadingText,
  variant,
  className,
}: SubmitBtnProps) => {
  const { pending } = useFormStatus();

  return (
    <div>
      <Button
        variant={variant}
        disabled={pending}
        className={cn(className, "flex")}
      >
        {pending ? (
          <p className="flex items-center gap-2">
            <Loader2 className="animate-spin" />
            <span className="animate-pulse ">{loadingText}</span>
          </p>
        ) : (
          <p>{text}</p>
        )}
      </Button>
    </div>
  );
};

export default SubmitBtn;

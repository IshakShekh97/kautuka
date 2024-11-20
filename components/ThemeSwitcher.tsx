"use client";

import * as React from "react";
import { Lightbulb, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({
  className,
  btnClassName,
  variant,
  size,
}: {
  className?: string;
  btnClassName?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}) {
  const { setTheme } = useTheme();

  return (
    <>
      <div className={className}>
        <Button
          variant={variant}
          size={size}
          onClick={() => setTheme("dark")}
          className={cn("dark:hidden ", btnClassName)}
        >
          <Lightbulb className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <Button
          onClick={() => setTheme("light")}
          className={cn("hidden dark:flex", btnClassName)}
          size={size}
          variant={variant}
        >
          <Sparkles className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>
    </>
  );
}

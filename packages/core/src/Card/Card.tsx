import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cx } from "../lib/utils";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const Card: React.FC<CardProps> =
  ({ className, asChild, ...props }) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        className={cx(
          // base
          "relative w-full rounded-lg border p-6 text-left shadow-sm",
          // background color
          "bg-white dark:bg-[#090E1A]",
          // border color
          "border-gray-200 dark:border-gray-900",
          className,
        )}
        {...props}
      />
    );
  };

Card.displayName = "Card";


export default Card;

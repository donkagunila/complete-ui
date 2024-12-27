import React from "react";
import { twMerge } from "tailwind-merge";
import { Sizes } from "../lib/types";


type badgeVariants = "primary" | "success" | "error" | "warning" | "secondary"

interface BadgeProps
  extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
  variant: badgeVariants;
  size?: string;
}

const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const { className, variant, size = Sizes.SM, children, ...others } = props;

  const generalStyles = ["w-max shrink-0 inline-flex items-center gap-x-1 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"];
  const defaultStyles = ["bg-blue-50 text-blue-900 ring-blue-500/30", "dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"];
  const successStyles = [
    "bg-emerald-50 text-emerald-900 ring-emerald-600/30",
    "dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20",
  ];
  const errorStyle = [
    "bg-red-50 text-red-900 ring-red-600/20",
    "dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20",
  ];
  const warningStyles = [
    "bg-yellow-50 text-yellow-900 ring-yellow-600/30",
    "dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20",
  ];
  const neutralStyles = [
    "bg-gray-50 text-gray-900 ring-gray-500/30",
    "dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20",
  ];


  return (
    <span
      className={twMerge([
        generalStyles,
        variant === "primary" && defaultStyles,
        variant === "success" && successStyles,
        variant === "warning" && warningStyles,
        variant === "error" && errorStyle,
        variant === "secondary" && neutralStyles,
        size === Sizes.XS && "py-0.5 text-xs",
        size === Sizes.SM && "py-1 text-sm",
        size === Sizes.MD && "py-1.5 text-sm",
        size === Sizes.LG && "py-2 text-base",
        size === Sizes.XL && "py-2.5 text-base",
        className])}
      {...props}
    >
        {children}
      </span>
  );
};

export default Badge;

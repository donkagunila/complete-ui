import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { twMerge } from "tailwind-merge";
import { Check } from "lucide-react";


const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  RadixCheckbox.CheckboxProps
>(({ ...props }: any, forwardRef) => {


  return (
    <RadixCheckbox.Root
      ref={forwardRef}
      className={twMerge([
        "h-4 w-4 shrink-0 border border-primary rounded-md ring-offset-background",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"])}
      {...props}
    >
      <RadixCheckbox.Indicator
        className={twMerge(["flex items-center justify-center text-current"])}
      >
        <Check className="h-4 w-4" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
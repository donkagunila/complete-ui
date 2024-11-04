import React from "react"
import {twMerge} from "tailwind-merge";

const badgeVariants = ({
    base: "inline-flex items-center gap-x-1 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
    variants: {
        variant: {
            default: "bg-blue-50 text-blue-900 ring-blue-500/30"
        }
    }
})

interface BadgeProps
    extends React.ComponentPropsWithoutRef<"span"> {
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({className, ...props}: BadgeProps, forwardedRef) => {
        return (
            <span
                ref={forwardedRef}
                className={twMerge(['inline-flex items-center gap-x-1 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset', className])}
                {...props}
            />
        )
    },
)

Badge.displayName = "Badge"

// export {Badge, badgeVariants, type BadgeProps}
export default Badge;
export type {BadgeProps}
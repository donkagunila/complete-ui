import React from 'react';
import {twMerge} from "tailwind-merge";
import {cx} from "../lib/utils";

type Variant = "success" | "error" | "warning" | "neutral"

interface CalloutProps extends React.ComponentPropsWithoutRef<"div"> {
    title: string,
    className?: string,
    variant: Variant;
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>((
    {title, className, children, variant, ...props}: CalloutProps, ref) => {

    const defaultStyles = [
        "text-blue-900 dark:text-blue-400",
        "bg-blue-50 dark:bg-blue-950/70",
        "flex flex-col overflow-hidden rounded-md p-4 text-sm",
    ];
    const successStyles = [
        // text color
        "text-emerald-900 dark:text-emerald-500",
        // background color
        "bg-emerald-50 dark:bg-emerald-950/70",
    ];
    const errorStyles = [
        // text color
        "text-red-900 dark:text-red-500",
        // background color
        "bg-red-50 dark:bg-red-950/70",
    ];
    const warningStyles = [
        // text color
        "text-yellow-900 dark:text-yellow-500",
        // background color
        "bg-yellow-50 dark:bg-yellow-950/70",
    ];
    const neutralStyles = [
        // text color
        "text-gray-900 dark:text-gray-400",
        // background color
        "bg-gray-100 dark:bg-gray-800/70",
    ];

    return (
        <div
            ref={ref}
            className={twMerge([
                "flex flex-col p-4 overflow-hidden rounded-md text-sm bg-blue-50 text-blue-900",
                variant === "neutral" && neutralStyles,
                variant === "success" && successStyles,
                variant === "warning" && warningStyles,
                variant === "error" && errorStyles,
            ])}
            {...props}
        >
            <div className={cx("flex items-start")}>
                <span className={cx("font-semibold")}>{title}</span>
            </div>
            <div className={cx("overflow-y-auto", children ? "mt-2" : "")}>
                {children}
            </div>

        </div>
    );
});

Callout.displayName = "Callout"
export default Callout;
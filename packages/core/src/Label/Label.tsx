import React from "react"
import {cx} from "../lib/utils"

interface LabelProps
    extends React.ComponentPropsWithoutRef<"label"> {
    disabled?: boolean
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>
(({className, disabled = false, ...props},
  forwardedRef) => {
        const Component = "label"
        return (
            <Component
                ref={forwardedRef}
                className={cx(
                    // base
                    "text-sm leading-none",
                    // text color
                    "text-gray-900 dark:text-gray-50",
                    // disabled
                    {
                        "text-gray-400 dark:text-gray-600": disabled,
                    },
                    className,
                )}
                aria-disabled={disabled}
                {...props}
            />
        )
    }
)

Label.displayName = "Label"

export default Label;
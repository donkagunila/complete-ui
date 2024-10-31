import React from "react";
import {icons} from 'lucide-react';
import {twMerge} from "tailwind-merge";


interface ILucideProps extends React.ComponentPropsWithoutRef<"svg"> {
    icon: keyof typeof icons;
    title?: string;
}

const Lucide = (props: ILucideProps) => {
    const {...computedProps} = props;
    const Component = icons[props.icon];
    return (
        <Component
            {...computedProps}
            className={twMerge(["stroke-1.5 w-5 h-5", props.className])}
        />
    );
};

export default Lucide;
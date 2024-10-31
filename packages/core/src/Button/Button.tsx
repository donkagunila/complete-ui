"use client";

import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    appName: string;
}

const Button = ({ children, className, appName }: ButtonProps) => {
    return (
        <button
            className="bg-green-500 text-white capitalize py-3 px-4 rounded-lg text-xs min-h-[35px]"
            onClick={() => alert(`Hello from your ${appName} app!`)}
        >
            {children}
        </button>
    );
};

export default Button;
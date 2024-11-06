"use client";

import {ReactNode} from "react";
import "./index.css"
import {twMerge} from "tailwind-merge";

type Variant =
    | "primary"
    | "accent"
    | "secondary"
    | "success"
    | "warning"
    | "pending"
    | "danger"
    | "dark"
    | "info"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-warning"
    | "outline-pending"
    | "outline-danger"
    | "outline-dark"
    | "outline-info"
    | "soft-primary"
    | "soft-secondary"
    | "soft-success"
    | "soft-warning"
    | "soft-pending"
    | "soft-danger"
    | "soft-dark"
    | "facebook"
    | "twitter"
    | "instagram"
    | "linkedin";


type Elevated = boolean;
type Size = "sm" | "lg";
type Rounded = boolean;

interface ButtonProps {
    children: ReactNode;
    className?: string;
    elevated?: Elevated;
    size?: Size;
}

const Button = ({children, className}: ButtonProps) => {

    const generalStyles = [
        "transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer", // Default
        "focus:ring-4 focus:ring-primary focus:ring-opacity-20", // On focus
        "focus-visible:outline-none", // On focus visible
        "dark:focus:ring-slate-700 dark:focus:ring-opacity-50", // Dark mode
        "[&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90", // On hover and not disabled
        "[&:not(button)]:text-center", // Not a button element
        "disabled:opacity-70 disabled:cursor-not-allowed" // Disabled
    ];


    return (
        <button
            className={twMerge([generalStyles])}>
            {children}
        </button>
    );
};

export default Button;


// "use client";
//
// import { ReactNode } from "react";
// import "./index.css"
//
// interface ButtonProps {
//   children: ReactNode;
//   className?: string;
//   appName: string;
// }
//
// export const Button = ({ children, className, appName }: ButtonProps) => {
//   return (
//       <button
//           className="bg-green-500 text-white capitalize py-3 px-4 rounded-lg text-xs min-h-[35px]"
//           onClick={() => alert(`Hello from your ${appName} appname!`)}
//       >
//         {children}
//       </button>
//   );
// };

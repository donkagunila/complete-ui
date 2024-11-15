import React from "react";
import { twMerge } from "tailwind-merge";

interface IPageHeaderProps {
  title: string,
  description?: string,
  className?: string
}

const PageHeader = ({ title, description, className }: IPageHeaderProps) => {
  return (
    <div className={twMerge(["bg-white mt-8 sm:mt-16", className ?? ""])}>
      <h2 className="font-semibold leading-7 text-primary">Complete UI</h2>
      <h1
        className="mt-4 mb-2 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">{title}</h1>
      {description && (
        <p className="mt-4 max-w-5xl leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
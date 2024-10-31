import React from 'react';


interface IPageSectionHeader {
    pageTitle: string;
    title: string;
    subTitle?: string;
    hasBorder?: boolean;
}

const PageSectionHeader = ({pageTitle, title, subTitle, hasBorder = true}: IPageSectionHeader) => {
    return (
        <div>
            <p className="text-sm font-semibold text-primary">{pageTitle}</p>
            <h1 className="mt-4 text-2xl text-gray-800 font-extrabold normal-case tracking-tight sm:text-3xl">
                {title}
            </h1>
            {subTitle && (
                <p className="mt-4 text-lg text-slate-700">
                    {subTitle}
                </p>
            )}
            {hasBorder && (
                <div className="mb-12 mt-8 block w-full border-t border-slate-200"></div>
            )}
        </div>
    );
};

export default PageSectionHeader;
// import {EmptyIcon} from "@/src/core/icons/EmptyIcon";
// import {SpinnerIcon} from "@/src/core/icons/SpinnerIcon";
import Lucide from "@/components/ui/Lucide";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
// import {useSelector} from "react-redux";
// import {RootState} from "@/src/stores/store";
// import {selectFontMode} from "@/src/stores/fontModeSlice";


interface TableRowsProps {
    rows: any[];
    columns: any[];
    loading: boolean;
    currentPage: number;
    itemsPerPage: number;
    searchQuery?: string;
    sortColumn?: any;
    sortDirection?: string;
}

const TableRows = (props: TableRowsProps) => {
    const {
        rows,
        columns,
        loading,
        currentPage,
        itemsPerPage,
        searchQuery,
        sortColumn,
        sortDirection
    } = props;

    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + itemsPerPage;

    const [dataItems, setDataItems] = useState<any[]>([])


    useEffect(() => {
        if (rows) {
            setDataItems(rows);
        }
    }, [setDataItems, rows]);


    const filteredRows =
        dataItems && dataItems.length > 0
            ? dataItems.filter((row: any) => {
                const searchableContent = Object.values(row).join(" ").toLowerCase();
                if (searchQuery) {
                    return searchableContent.includes(searchQuery.toLowerCase());
                } else {
                    return searchableContent;
                }
            })
            : [];

    const sortedRows = [...filteredRows].sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        return 0;
    });


    /*
    * Set Font Sizes
    * */
    // const fontMode = useSelector((state: RootState) => selectFontMode(state));
    let fontMode = "comfortable"


    return (
        <>
            {!loading && dataItems && dataItems.length > 0 && dataItems.map((row: any, index: number) => (
                <tr key={row.id}
                    hidden={loading}
                    className={`${index % 2 === 0 ? "bg-gray-50 dark:bg-darkmode-500"
                        : "bg-white dark:bg-darkmode-400/70"
                        }  hover:bg-gray-100`}
                >
                    {columns.map((column) => {
                        const cellContent = column.render
                            ? column.render(row)
                            : row[column.field];

                        return (
                            <td key={row.id + column.name}
                                className={twMerge([
                                    "px-2 py-3 text-[0.71rem] text-slate-500 dark:text-slate-100",
                                    fontMode == "comfortable" && "px-2 py-4 text-[0.74rem]",
                                    fontMode == "compact" && "px-2 py-2 text-[0.64rem]",
                                    fontMode == "large" && "px-3 py-5 text-[0.86rem]"
                                ])}>
                                {column.type === "date" ? new Date(cellContent).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric"
                                }) : cellContent}
                            </td>
                        )
                    })}
                </tr>
            ))}


            {!loading && dataItems && dataItems.length === 0 && (
                <tr>
                    <td className="text-center py-10" colSpan={columns.length}>
                        <div className="m-auto bg-accent-100 items-center text-center p-5 h-fit w-fit rounded-full">
                            <Lucide height={70} width={70} icon="Circle" />
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-200 mt-3 font-medium">No Records Found</p>
                    </td>
                </tr>
            )}

            {!loading && !dataItems && (
                <tr>
                    <td className="text-center py-10" colSpan={columns.length}>
                        <div className="m-auto bg-accent-100 items-center text-center p-5 h-fit w-fit rounded-full">
                            <Lucide height={70} width={70} icon="Circle" />
                        </div>
                        <p className="text-sm text-slate-500 mt-3">No Records Found</p>
                    </td>
                </tr>
            )}

            {loading && (
                <tr>
                    <td className="text-center py-20" colSpan={columns.length}>
                        <div>
                            <Lucide height={70} width={70} icon="Loader" />
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};

export default TableRows;

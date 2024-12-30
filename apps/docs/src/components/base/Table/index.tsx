import Lucide from "@/components/ui/Lucide";
import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import TablePagination from "./table-pagination";
import TableRows from "./table-rows";
import { ActionButton, Props } from "./table.properties";

const Table = (props: Props) => {
    const {
        title,
        rows,
        columns,
        loading: isLoading,
        isFlat,
        recordsPerPage,
        showPagination: showPage,
        hasSelect,
        headerActions,
        secondaryHeaderActions,
        onRowSelect,
        pages,
        isRemote,
        page,
        fetchData,
        fetchUrl,
        children,
        fontMode = "comfortable"
    } = props;
    const showPagination = showPage ?? true;
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(recordsPerPage ?? 10);
    const totalPages = pages ?? Math.ceil(rows?.length / itemsPerPage);
    const [loading, setLoading] = useState(isLoading ?? false);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [sortColumn, setSortColumn] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");
    const [tableData, setTableData] = useState(rows);

    const toggleSorting = (columnName: any) => {
        if (sortColumn === columnName) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(columnName);
            setSortDirection("asc");
        }
    };

    const handleSelectAll = () => {
        if (selectedRows.length === rows.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(
                rows.map((row: any) => {
                    return row.id;
                })
            );
        }
    };

    useEffect(() => {
        onRowSelect && onRowSelect(selectedRows);
    }, [onRowSelect, selectedRows]);

    useEffect(() => {
        if (rows) {
            setTableData(rows);
        }
    }, [rows]);

    const handlePageChange = async (pageNumber: number) => {
        setCurrentPage(pageNumber);

        if (fetchData && isRemote && fetchUrl) {

            try {
                await fetchData(pageNumber).then(() => {
                    setTableData(rows);
                }).catch((err) => {
                    console.log("error will come here")
                });

            } catch (e) {
                toast.error("Error fetching Items", {
                    id: "ERROR_FETCH"
                })
            }
        }
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        setLoading(isLoading ?? false);
    }, [isLoading]);

    useEffect(() => {
        if (isRemote && typeof page == "number") {
            setCurrentPage(page);
        }
    }, [page, isRemote]);

    useEffect(() => {
        if (rows) {
            setTableData(rows);
        }
    }, [rows]);

    const renderHeaders = () => {

        return (
            <tr className="text-left text-xs font-semibold bg-slate-100 dark:bg-darkmode-600 border-y border-slate-200 dark:border-slate-100/10 text-slate-500 dark:text-slate-200 capitalize tracking-wider ">
                {hasSelect && (
                    <th key="checkbox" scope="col" className={"px-2 py-3 capitalize"}>
                        <input
                            type="checkbox"
                            className={twMerge(
                                "transition-all duration-100 ease-in-out shadow-sm border-slate-400 cursor-pointer rounded focus:ring-3 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20",
                                "[&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10"
                            )}
                            checked={selectedRows.length === rows.length}
                            onChange={handleSelectAll}
                        />
                    </th>
                )}
                {columns.map((column, index) => (
                    <th
                        key={index}
                        scope="col"
                        className={twMerge([`px-2 py-3 capitalize cursor-pointer`,
                            fontMode == "comfortable" && "px-2 py-4 text-[0.74rem]",
                            fontMode == "compact" && "px-2 py-2 text-[0.64rem]",
                            fontMode == "large" && "px-3 py-5 text-[0.86rem]"])}
                        onClick={() => toggleSorting(column.field)}
                    >
                        <div className="flex">
                            <span> {column.name}</span>
                            {sortColumn === column.field && (
                                <Lucide
                                    icon={sortDirection === "asc" ? "ChevronUp" : "ChevronDown"}
                                    className="w-4 h-4 ml-1"
                                />
                            )}
                        </div>
                    </th>
                ))}
            </tr>
        );
    };

    return (
        <div className={twMerge([!isFlat && "card", "p-1 rounded-xl"])}>
            <div className="border border-slate-200 dark:text-slate-100/80 rounded-lg">
                {!isFlat && (
                    <div className="card-header flex dark:bg-darkmode-600">
                        <div className="flex justify-between items-center px-3 w-full">
                            <div>
                                {title && (
                                    <h2 className={twMerge(["text-xs lg:text-sm font-medium mx-3 text-slate-600 dark:text-slate-100 capitalize",
                                        fontMode == "comfortable" && " text-[0.74rem]",
                                        fontMode == "compact" && "lg:text-[0.76rem] text-[0.64rem]",
                                        fontMode == "large" && "text-[0.86rem]"])}>
                                        {title}
                                    </h2>
                                )}
                            </div>
                            <div className="flex justify-center items-center">
                                {secondaryHeaderActions?.map(
                                    (action: ActionButton, index: number) => (
                                        <Button
                                            // variant={action.variant}
                                            key={index}
                                            className="capitalize antialiased text-xs px-4 py-2"
                                            onClick={action.onClick}
                                        >
                                            {action.icon && (
                                                <Lucide icon={action.icon} className="w-4 h-4 mr-2" />
                                            )}
                                            {action.label}
                                        </Button>
                                    )
                                )}

                                {headerActions && headerActions.length > 0 &&
                                    <div className="mx-2 text-slate-300 hidden md:block"> | </div>}
                                {headerActions?.map((action: ActionButton, index: number) => (
                                    <Button
                                        // variant={action.variant}
                                        key={index}
                                        className="capitalize antialiased text-xs"
                                        onClick={action.onClick}
                                    >
                                        {action.icon && (
                                            <Lucide icon={action.icon} className="w-4 h-4 mr-2" />
                                        )}
                                        {action.label}
                                    </Button>
                                ))}
                                {children}
                            </div>
                        </div>
                    </div>
                )}
                {/* <div className={twMerge([!isFlat && "border-t border-slate-200/60"])}>
                    <div className="row align-items-center">
                        <div className="col">
                            <div
                                className="flex flex-col md:flex-row justify-start md:justify-between items-center pb-2 px-3">
                                {/* <div className="flex gap-1">
                                    <div
                                        className="flex flex-row-reverse justify-center items-center input-group input-group-flush input-group-merge input-group-reverse border rounded-md mr-3 pr-3 min-w-[240px]">
                                        <input
                                            className={twMerge(
                                                [
                                                    "py-2 md:w-full bg-transparent text-slate-400 placeholder:text-slate-400 dark:text-slate-100 focus:ring-0 focus:border-0 focus:outline-none shadow-none",
                                                    fontMode == "comfortable" && "px-2 py-4 text-[0.78rem]",
                                                    fontMode == "compact" && "py-2 text-[0.74rem]",
                                                    fontMode == "large" && "px-3 py-3.5 text-[1rem]"
                                                ])}
                                            type={"Search "}
                                            value={searchQuery}
                                            onChange={(event) => setSearchQuery(event.target.value)}
                                            placeholder="Search"
                                        />
                                        <span className="input-group-text">
                                            <Lucide
                                                icon="Search"
                                                className="w-4 h-4 text-slate-400 mx-4"
                                            />
                                        </span>
                                    </div>
                                </div> 
                                <div>
                                    {tableData && (
                                        <div className="flex items-center">
                                            <Button
                                                id="tabulator-print"
                                                // variant="outline-secondary"
                                                className="w-1/2 mr-2 sm:w-auto text-xs text-slate-500"
                                                onClick={() => onPrint(tableData, columns)}
                                            >
                                                <Lucide icon="Printer" className="w-4 h-3.5 mr-2" /> Print
                                            </Button>

                                            <Menu className="w-1/2 sm:w-auto">
                                                <MenuButton
                                                    as={Button}
                                                    variant="outline-secondary"
                                                    className="w-full sm:w-auto text-xs text-slate-500 dark:text-slate-200"
                                                >
                                                    <Lucide icon="FileText" className="w-4 h-3.5 mr-2" />{" "}
                                                    Export
                                                    <Lucide
                                                        icon="ChevronDown"
                                                        className="w-4 h-4 ml-auto sm:ml-2"
                                                    />
                                                </MenuButton>
                                                <MenuItems
                                                    className="w-40 text-xs text-slate-600 dark:text-slate-200 dark:bg-darkmode-600">
                                                    <MenuItem
                                                        onClick={() => handleCopyClick(rows, columns)}
                                                    >
                                                        <Lucide icon="Copy" className="w-4 h-4 mr-2" />
                                                        Copy Data
                                                    </MenuItem>

                                                    <MenuItem
                                                        onClick={() =>
                                                            onExportCsv(
                                                                rows,
                                                                columns,
                                                                `${title ?? "Data"}_${Date.now()}`
                                                            )
                                                        }
                                                    >
                                                        <Lucide icon="FileText" className="w-4 h-4 mr-2" />{" "}
                                                        Export CSV
                                                    </MenuItem>

                                                    <MenuItem
                                                        onClick={() =>
                                                            exportToXlsx(
                                                                rows,
                                                                `${title ?? "Data"}_${Date.now()}`
                                                            )
                                                        }
                                                    >
                                                        <Lucide icon="Sheet" className="w-4 h-4 mr-2" />{" "}
                                                        Export XLSX
                                                    </MenuItem>
                                                </MenuItems>
                                            </Menu>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className={`overflow-x-auto`}>
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkmode-600 truncate ">
                            {renderHeaders()}
                        </thead>
                        <tbody className="truncate">
                            <TableRows
                                rows={tableData}
                                columns={columns}
                                loading={loading}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                sortColumn={sortColumn}
                                sortDirection={sortDirection}
                            />
                        </tbody>
                    </table>
                </div>

                {rows && rows.length > 0 && (
                    <div className="card-footer flex justify-between">
                        {showPagination && (
                            <TablePagination
                                currentPage={currentPage}
                                pages={pages ?? totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Table;

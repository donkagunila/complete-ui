import Lucide from "@/components/ui/Lucide";
import React from "react";

interface TablePaginationProps {
  pages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const TablePagination = (props: TablePaginationProps) => {
  const pageNumbers: any[] = [];
  const rangeStart = Math.max(1, props.currentPage - 2);
  const rangeEnd = Math.min(props.pages, props.currentPage + 2);
  for (let i = rangeStart; i <= rangeEnd; i++) {
    pageNumbers.push(i);
  }

  if (rangeStart > 1) {
    if (pageNumbers.length > 0 && pageNumbers[0] === "...") {
      pageNumbers.splice(0, 1);
    }
    pageNumbers.unshift("...");
  }

  if (rangeEnd < props.pages) {
    pageNumbers.push("...");
  }
  return (
    <div className="flex w-full justify-between">
      {/* Previous Page */}
      <ul className="list-pagination-prev pagination pagination-tabs card-pagination">
        <li className="page-item" hidden={props.currentPage === 1}>
          <button
            disabled={props.currentPage === 1}
            className="page-link pr-4 py-4 border-r rounded-r-none"
            onClick={() => {
              props.onPageChange(props.currentPage - 1);
            }}
          >
            <Lucide icon="ChevronLeft" className="w-5 h-5 mr-1" />
            Prev
          </button>
        </li>
      </ul>

      {/* Page Numbers */}
      <ul className="inline-flex items-center pb-2 m-0 overflow-auto">
        {pageNumbers.length > 1 &&
          pageNumbers.map((pageNumber: any, i: number) => (
            <li key={i} className="page-item">
              <button
                className={`px-3 py-1 rounded leading-tight  ${pageNumber === props.currentPage
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-darkmode-700 text-gray-500 hover:bg-gray-100"
                  } mr-2 border border-transparent`}
                onClick={() => {
                  props.onPageChange(pageNumber);
                }}
              >
                {pageNumber}
              </button>
            </li>
          ))}
      </ul>

      {/* Next Page */}
      <ul className="list-pagination-next pagination pagination-tabs card-pagination">
        <li
          className="page-item rounded-l-none"
          hidden={props.currentPage === props.pages}
        >
          <button
            disabled={props.currentPage === props.pages}
            className="page-link pl-4 py-4 border-l rounded-l-none"
            onClick={() => props.onPageChange(props.currentPage + 1)}
          >
            Next <Lucide icon="ChevronRight" className="w-5 h-5 ml-1" />{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TablePagination;

// import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface PaginationType {
  totalPage: number;
  currentPage: number;
}

export default function Pagination({ totalPage, currentPage }: PaginationType) {
  return (
    <div className="flex gap-4">
      {currentPage > 1 && (
        <Link to={`?page=${currentPage - 1}`} className="pagination-item">
          Prev
        </Link>
      )}
      {currentPage >= 3 && (
        <div className="flex gap-4">
          <Link to={`?page=1`} className="pagination-item">
            1
          </Link>
          <div>...</div>
        </div>
      )}
      <div className="flex gap-4">
        <Link
          to={`?page=${currentPage}`}
          className={twMerge("pagination-item", currentPage && "bg-black/30")}
        >
          {currentPage}
        </Link>
        {currentPage + 1 <= totalPage && (
          <Link to={`?page=${currentPage + 1}`} className="pagination-item">
            {currentPage + 1}
          </Link>
        )}
        {currentPage + 2 <= totalPage && (
          <Link to={`?page=${currentPage + 2}`} className="pagination-item">
            {currentPage + 2}
          </Link>
        )}
      </div>
      {currentPage <= totalPage - 3 && (
        <div className="flex gap-4">
          <div className="">...</div>
          <Link to={`?page=${totalPage}`} className="pagination-item">
            {totalPage}
          </Link>
        </div>
      )}
      {currentPage <= totalPage && (
        <Link to={`?page=${currentPage + 1}`} className="pagination-item">
          Next
        </Link>
      )}
    </div>
  );
}

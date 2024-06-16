import { useState, useEffect } from "react";
import clsx from "clsx";
import ReactPaginate from "react-paginate";

import "./pagination.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Pagination({ pageCount, className }) {
  const handlePageClick = () => {};

  return (
    <div className={clsx("pagination-container", className)}>
      <ReactPaginate
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< Prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item page-btn"
        previousLinkClassName="page-link"
        nextClassName="page-item page-btn"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName={clsx(generalStyles.list, "pagination")}
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;

import clsx from "clsx";
import Pagination from "~/components/pagination/pagination";
import Table from "../tableComponent/tableComponent";

import styles from "./tableSection.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function TableSection({
  headerTable,
  bodyTable,
  listTable,
  emptyTitle,
  pageCount = 10,
  showPagination = true,
  className,
  tableStyles,
  paginationStyles,
}) {
  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        styles.container,
        className
      )}
    >
      <Table
        className={clsx(styles.table, tableStyles)}
        header={headerTable}
        body={bodyTable}
        list={listTable}
        emptyTitle={emptyTitle}
      />
      {showPagination && (
        <Pagination
          className={clsx(styles.pagination, paginationStyles)}
          pageCount={pageCount}
        />
      )}
    </div>
  );
}

export default TableSection;

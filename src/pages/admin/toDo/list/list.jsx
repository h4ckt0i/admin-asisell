import { useEffect } from "react";
import clsx from "clsx";
import ToDoTable from "../components/toDoTable/toDoTable";
import BriefInfo from "../components/briefInfo/briefInfo";
import Filter from "../components/filter/filter";
import ToDoChart from "../components/toDoChart/toDoChart";
import { setDocumentTitle } from "~/utils/common";

import styles from "./list.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function List({ setTitle, setParent }) {
  useEffect(() => {
    setDocumentTitle("Việc cần làm - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Danh sách - Việc cần làm
      </span>
      <div className={styles.content}>
        <BriefInfo />
        <div className={styles.partTwo}>
          <Filter className={generalStyles.filter} />
          <ToDoChart className={generalStyles.lineChart} />
        </div>
        <ToDoTable
          className={styles.table}
          setTitle={setTitle}
          setParent={setParent}
        />
      </div>
    </div>
  );
}

export default List;

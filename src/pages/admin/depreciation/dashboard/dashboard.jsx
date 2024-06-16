import { useEffect } from "react";
import clsx from "clsx";
import Filter from "../components/filter/filter";
import BriefInfo from "../components/briefInfo/briefInfo";
import DepreciationChart from "../components/depreciationChart/depreciationChart";
import DepreciationTable from "../components/depreciationTable/depreciationTable";
import { setDocumentTitle } from "~/utils/common";

import styles from "./dashboard.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Dashboard({ setTitle, setParent }) {
  useEffect(() => {
    setDocumentTitle("Khấu hao - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Danh mục - Khấu hao
      </span>
      <div className={styles.content}>
        <BriefInfo className={styles.briefInfo} />
        <div className={styles.partTwo}>
          <Filter className={generalStyles.filter} />
          <DepreciationChart className={generalStyles.lineChart} />
        </div>
        <DepreciationTable
          className={styles.table}
          setTitle={setTitle}
          setParent={setParent}
        />
      </div>
    </div>
  );
}

export default Dashboard;

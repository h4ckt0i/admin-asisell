import { useEffect } from "react";
import clsx from "clsx";
import Filter from "../components/filter/filter";
import BlockSection from "../components/blockSection/blockSection";
import BriefInfo from "../components/briefInfo/briefInfo";
import SalaryChart from "../components/salaryChart/salaryChart";
import PositionsChart from "../components/positionsChart/positionsChart";
import EmployeeSection from "../components/employeeSection/employeeSection";
import EmployeeTable from "../components/employeeTable/employeeTable";
import { setDocumentTitle } from "~/utils/common";

import styles from "./dashboard.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Dashboard() {
  useEffect(() => {
    setDocumentTitle("Nhân sự - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Dashboard - Nhân sự
      </span>
      <div className={styles.content}>
        <div className={styles.partOne}>
          <Filter className={styles.filter} />
          <BlockSection className={styles.blockSection} />
          <BriefInfo className={styles.briefInfo} />
        </div>

        <div className={styles.partTwo}>
          <SalaryChart />
          <PositionsChart />
        </div>
        <EmployeeSection limit={6} />
        <EmployeeTable className={styles.table} />
      </div>
    </div>
  );
}

export default Dashboard;

import Filter from "./components/filter/filter";
import BlockSection from "./components/blockSection/blockSection";
import BriefInfo from "./components/briefInfo/briefInfo";
import SalaryChart from "./components/salaryChart/salaryChart";
import PositionsChart from "./components/positionsChart/positionsChart";
import EmployeeSection from "./components/employeeSection/employeeSection";
import EmployeeTable from "./components/employeeTable/employeeTable";

import styles from "./employee.module.scss";

function Employee({ subWarehouse }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.partOne}>
          <Filter className={styles.filter} />
          <BlockSection
            className={styles.blockSection}
            subWarehouseInfo={subWarehouse}
          />
          <BriefInfo
            className={styles.briefInfo}
            subWarehouseInfo={subWarehouse}
          />
        </div>

        <div className={styles.partTwo}>
          <SalaryChart subWarehouseInfo={subWarehouse} />
          <PositionsChart subWarehouseInfo={subWarehouse} />
        </div>
        <EmployeeSection limit={6} subWarehouseInfo={subWarehouse} />
        <EmployeeTable
          className={styles.table}
          subWarehouseInfo={subWarehouse}
        />
      </div>
    </div>
  );
}

export default Employee;

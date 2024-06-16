import { useEffect, useState } from "react";
import clsx from "clsx";
import InputSection from "~/components/section/inputSection/inputSection";
import EmployeeSelection from "~/components/selection/employeeSelection/employeeSelection";
import SalaryTable from "./components/salaryTable/salaryTable";
import { setDocumentTitle } from "~/utils/common";

import styles from "./salaryDetail.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function SalaryDetail() {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    setDocumentTitle("Nhân sự - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Chi tiết lương/thưởng - Nhân sự
      </span>
      <div className={styles.content}>
        <EmployeeSelection
          className={generalStyles.rightSideInputSectionTwo}
          title="Nhân viên"
          placeholder="Chọn nhân viên"
          setEmployee={setEmployee}
        />
        <InputSection
          className={generalStyles.rightSideInputSectionTwo}
          title="Mã nhân viên"
          value={employee.code || ""}
          defaultDisabled={true}
        />
        <SalaryTable className={styles.table} employeeId={employee._id} />
      </div>
    </div>
  );
}

export default SalaryDetail;

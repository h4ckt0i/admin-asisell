import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import EmployeeSection from "./employeeSection/employeeSection";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as salarySlice from "~/store/common/slice/salarySlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function SalaryAndBonus() {
  const [salary, setSalary] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addSalary = () => {
    const data = {
      id: salary.employee,
      body: salary.salaryInfo,
    };

    const addSalary = () => fetchApi(salarySlice.addSalary(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addSalary().then((result) => {
      result
        ? successfulToast("Thêm lương/thưởng thành công")
        : errorToast("Thêm lương/thưởng không thành công");

      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  useEffect(() => {
    setDocumentTitle("Nhân sự - Admin");
  }, []);

  return (
    <div className={generalStyles.rightSideContainer}>
      <Toast />
      <span className={clsx(generalStyles.rightSideTitle)}>
        Thêm lương/thưởng - Nhân sự
      </span>
      <div>
        <EmployeeSection
          setEmployeeSalary={setSalary}
          isDisabled={isDisabled}
        />

        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm lương/thưởng"
            isLoading={isLoading}
            onClick={addSalary}
          />
        </div>
      </div>
    </div>
  );
}

export default SalaryAndBonus;

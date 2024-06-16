import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import EmployeeSection from "./employeeSection/employeeSection";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as employeeSlice from "~/store/common/slice/employeeSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function EndingDate() {
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addEndingDate = () => {
    const data = new FormData();

    data.append("working_date[start]", employee.working_date.start);
    data.append("working_date[end]", employee.working_date.end);

    const sendingData = {
      id: employee._id,
      body: data,
    };

    const editEmployee = () =>
      fetchApi(employeeSlice.editEmployee(sendingData), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    editEmployee().then((result) => {
      result
        ? successfulToast("Thêm thời gian kết thúc thành công")
        : errorToast("Thêm thời gian kết thúc không thành công");

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
        Thêm thời gian kết thúc - Nhân sự
      </span>
      <div>
        <EmployeeSection
          setChosenEmployee={setEmployee}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm thời gian kết thúc hợp tác"
            isLoading={isLoading}
            onClick={addEndingDate}
          />
        </div>
      </div>
    </div>
  );
}

export default EndingDate;

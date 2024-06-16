import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import EmployeeSection from "./employeeSection/employeeSection";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as employeeSlice from "~/store/common/slice/employeeSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function Recruitment() {
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addEmployee = () => {
    const data = new FormData();

    [...employee.imgFiles].forEach((img) => data.append("img", img));
    data.append("name", employee.name);
    data.append("identity_id", employee.identity_id);
    data.append("phone", employee.phone);
    data.append("email", employee.email);
    data.append("birthday", employee.birthday);
    data.append("gender", employee.gender);
    data.append("position[label]", employee.position.label);
    data.append("position[value]", employee.position.value);
    data.append("department", employee.department);
    data.append("working_date[start]", employee.working_date);
    data.append("work_form[label]", employee.work_form.label);
    data.append("work_form[value]", employee.work_form.value);
    data.append("address", employee.address);
    employee.sub_warehouse._id &&
      data.append("sub_warehouse", employee.sub_warehouse._id);

    const addEmployee = () =>
      fetchApi(employeeSlice.addEmployee(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addEmployee().then((result) => {
      result
        ? successfulToast("Thêm nhân viên thành công")
        : errorToast("Thêm nhân viên không thành công");

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
        Thêm nhân viên - Nhân sự
      </span>
      <div>
        <EmployeeSection setEmployee={setEmployee} isDisabled={isDisabled} />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm nhân viên"
            isLoading={isLoading}
            onClick={addEmployee}
          />
        </div>
      </div>
    </div>
  );
}

export default Recruitment;

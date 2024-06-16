import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import DateChoice from "~/components/dateChoice/dateChoice";
import EmployeeSelection from "~/components/selection/employeeSelection/employeeSelection";

import generalStyles from "~/styles/generalStyle.module.scss";

function EmployeeSection({ isDisabled, setChosenEmployee, className }) {
  const [employee, setEmployee] = useState({});
  const [endingDate, setEndingDate] = useState("");

  useEffect(() => {
    const workingDate = employee.working_date || {};

    setChosenEmployee({
      employee: employee._id,
      working_date: {
        start: workingDate.start,
        end: endingDate,
      },
    });
  }, [employee, endingDate]);

  return (
    <div className={className}>
      <EmployeeSelection
        className={generalStyles.rightSideInputSectionTwo}
        title="Nhân viên"
        placeholder="Chọn nhân viên"
        setEmployee={setEmployee}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Mã nhân viên"
        value={employee.code || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Ngày sinh"
        value={employee.birthday || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số CCCD"
        value={employee.identity_id || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Chức vụ"
        value={(employee.position && employee.position.label) || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Hình thức làm việc"
        value={(employee.work_form && employee.work_form.label) || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số điện thoại"
        value={employee.phone || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Email"
        value={employee.email || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Địa chỉ"
        value={employee.address || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Ngày bắt đầu LV"
        value={(employee.working_date && employee.working_date.start) || ""}
        defaultDisabled={true}
      />
      <DateChoice
        className={generalStyles.rightSideInputSectionTwo}
        calendarStyles={generalStyles.rightSideCalendar}
        title="Ngày kết thúc LV"
        setDateTime={setEndingDate}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default EmployeeSection;
